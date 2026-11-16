import { defineConfig, loadEnv, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

/**
 * Link previews (WhatsApp, Facebook, X…) need ABSOLUTE urls for og:image etc.
 * The public site URL comes from, in order:
 *   SITE_URL / VITE_SITE_URL (.env or shell) → Netlify URL → Vercel production URL → Cloudflare Pages URL.
 * Every "%SITE_URL%" in index.html is replaced with it, and robots.txt + sitemap.xml are emitted.
 */
function resolveSiteUrl(env: Record<string, string>): string {
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL
  const raw =
    env.SITE_URL ||
    env.VITE_SITE_URL ||
    process.env.URL || // Netlify
    (vercel ? `https://${vercel}` : '') ||
    process.env.CF_PAGES_URL ||
    ''
  return raw.replace(/\/+$/, '')
}

function socialMeta(siteUrl: string, isBuild: boolean): Plugin {
  return {
    name: 'decent-social-meta',
    transformIndexHtml: {
      order: 'pre',
      handler(html) {
        if (siteUrl) return html.replaceAll('%SITE_URL%', siteUrl)
        // No public URL yet: keep paths relative and drop tags that must be absolute.
        return html
          .replace(/\s*<link rel="canonical"[^>]*>/, '')
          .replace(/\s*<meta property="og:url"[^>]*>/, '')
          .replaceAll('%SITE_URL%', '')
      },
    },
    buildStart() {
      if (isBuild && !siteUrl) {
        this.warn(
          'SITE_URL is not set: og:image / twitter:image will be relative, so WhatsApp & Facebook previews will not show the image. ' +
            'Set SITE_URL=https://your-domain in .env (see README).',
        )
      }
    },
    generateBundle() {
      const robots = ['User-agent: *', 'Allow: /', siteUrl ? `Sitemap: ${siteUrl}/sitemap.xml` : ''].join('\n').trim() + '\n'
      this.emitFile({ type: 'asset', fileName: 'robots.txt', source: robots })
      if (siteUrl) {
        const today = new Date().toISOString().slice(0, 10)
        this.emitFile({
          type: 'asset',
          fileName: 'sitemap.xml',
          source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>${siteUrl}/</loc><lastmod>${today}</lastmod></url>\n</urlset>\n`,
        })
      }
    },
  }
}

export default defineConfig(({ mode, command }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const siteUrl = resolveSiteUrl(env)
  return {
    plugins: [react(), tailwindcss(), socialMeta(siteUrl, command === 'build')],
    build: {
      target: 'es2020',
    },
  }
})

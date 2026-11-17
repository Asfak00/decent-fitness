# Decent Fitness — Brand Research & Asset Inventory

Research date: **16 Nov 2026**
Source: public Facebook page https://www.facebook.com/profile.php?id=100092847256862
(resolves to `facebook.com/people/Decent-Fitness/100092847256862`)

> **Access limits:** Research was done **logged out**, without bypassing Facebook's login wall. Logged-out
> visitors see the page intro, the About tab, the 10 most recent photos and 10 reels. Older posts, full
> reel captions (truncated at "See more"), review text and video files are **not** visible logged out.
> Everything below comes from what was publicly visible. Anything else is listed under *Missing*.

---

## 1. Brand identity (verified)

| Item | Value | Where it was found |
|---|---|---|
| Name | **Decent Fitness** | Page title |
| Category | Gym / physical fitness centre | Intro |
| Intro line | "Exercise is the major source of develop the immunity system." | Intro (used verbatim in `src/data/gym.ts`) |
| Followers | 596 followers · 76 following | Page header (not shown on the site; changes over time) |
| Page created | Profile photo posted 26 May 2023 | Photo date — **not** a founding date |
| Logo | Flexed-arm emblem: black ring, bronze disc, thin red rim, cream field, "DECENT FITNESS" lettering | Profile photo (500×500) |

### Logo colours (sampled from the original file)
| Token | Hex | Use |
|---|---|---|
| Ink | `#141311` (logo black ≈ `#1e1d1b`) | Primary background |
| Bone | `#f6ede1` (logo cream ≈ `#fdf3ea`) | Light sections, text on dark |
| Bronze | `#c99a5f` (logo disc ≈ `#ce9c61`) | Accent, labels, numbers |
| Signal red | `#d3352c` (logo rim) | Primary CTA only |
| Turf green | `#3d9a48` | Only for the "live now" indicator — echoes the real green turf floor |

The logo is used **unaltered** (cropped to its own circle for the favicon; never recoloured or redrawn).

## 2. Contact information (verified — About tab)

| Field | Value |
|---|---|
| Address | House# 18, Block #B, Avenue 1, Chandrima Model Town, Mohammadpur, Dhaka, Bangladesh, **1207** |
| Mobile | 01781-539998 |
| **WhatsApp** | **+880 1781-539998** (explicitly labelled "WhatsApp") → `https://wa.me/8801781539998` |
| Email | rafiarishasweety@gmail.com |
| Hours (Facebook) | "Always open" ⚠ conflicts with the shift schedule — see §6 |
| Reviews | "Not yet rated (3 reviews)" — review text not visible logged out |
| Instagram / website | None found |

## 3. Pricing & offers (verified — gym's own reels)

| Item | Value | Source |
|---|---|---|
| Admission fee (regular) | ৳2,000 | Caption on reels 1685207999987285, 1752137402524746, 4184452465025082 |
| Admission (current offer) | ৳1,500 (caption calls it a "30% discount"; arithmetic is actually 25%, so the % is **not** shown on the site) | Same captions |
| Monthly fee | ৳1,000 | Same captions |
| First month total | ৳2,500 | Same captions |
| 3-month package | "Admission fully free on 3 month's package" | On-video text, reel 4184452465025082 |
| Caption continues "এছাড়া…" | **Truncated** — rest of the price list is behind the login wall | — |

## 4. Real member results (verified)

| # | Result | Duration | Asset | Source post |
|---|---|---|---|---|
| 1 | 143 kg → 111 kg | 6 months | `transformations/143-to-111kg-6-months-*.webp` + split halves for the slider | photo fbid 1069020956202803 (6 Nov 2026) |
| 2 | 98 kg → 78 kg | 3 months | `transformations/98-to-78kg-3-months-*.webp` ("after" photo taken inside the gym) | photo fbid 1069021066202792 (6 Nov 2026) |

No member names were published with these posts, so none are shown.
Member story video: reel 2233386347210423 — caption: "Decent fitness-এর মেম্বার সোহা আপুর ফিটনেস জার্নি" (member **Soha Apu**'s fitness journey). Her name is used only because the gym published it.

## 5. Other verified facts

- **Health partnership:** post of 10 Nov 2026 — the gym signed a "health agreement" with **Trust Care Diagnostic Center** (check-ups of kidney, liver, heart, etc. are mentioned). Details/discounts truncated. The ad graphic itself is a third-party ad and is **not** used.
- **Gym philosophy** (same post, Bangla): "জিম মানে সুস্থ থাকা, সুস্থ থাকার চেষ্টা করা। বডিতে ফ্যাট কমানো, ওয়েট বাড়ানো। ব্লাড সার্কুলেশন বাড়ানো, ব্লাড প্রেসার নিয়ন্ত্রণে রাখা। প্রতিরোধ ক্ষমতা তৈরি করা…" → used for the About quote and the Training goals.
- **Equipment seen in photos/reels:** power/squat rack, barbells + plates, dumbbell rack, flat bench, pec-deck, plate-loaded 45° leg press, lat pulldown / cable stations, hanging bar, treadmill, wall mirrors, green turf + red rubber flooring, ceiling fans.
- **Not seen / not claimed:** changing rooms, showers, lockers, AC, parking, group classes, supplements, cardio beyond one treadmill.

## 6. Schedule

| Shift | Time | Status |
|---|---|---|
| Men (morning) | 8:00 AM – 1:00 PM | Confirmed by client (18 Nov 2026) |
| Women | 1:00 PM – 4:30 PM | Confirmed by client (18 Nov 2026) |
| Men (evening) | 4:30 PM – 11:00 PM | Confirmed by client (18 Nov 2026) |

Edit `sessions` in `src/data/gym.ts` to change times; every section, the live indicator and the FAQ follow it. The meta descriptions in `index.html`, `public/site.webmanifest` and the preview image need updating by hand.

Facebook says "Always open" — this was **not** used. Days of operation (e.g. Friday) were not published; the site does not claim "every day".

## 7. Asset inventory

All originals are in `_raw/` (git-ignored, source material). Processed WebP files are in `public/assets/`.

| Published path | Original | Facebook source | Used in |
|---|---|---|---|
| `brand/logo-*.webp`, `brand/logo-original.jpg`, `icons/logo-{32,180,512}.png` | logo.jpg | profile photo fbid 112417101863198 | Nav, footer, favicon |
| `brand/og-image.jpg` | composite of logo + squat frame | — | Open Graph |
| `workouts/women-deadlift-*` | reel frame | reel 1398871512053020 | Hero (women), facilities, gallery |
| `equipment/pec-deck-*` | reel frame | reel 2406973093442496 (posted 14 Nov 2026) | Hero (men), facilities, gallery |
| `workouts/barbell-squat-*` | reel frame | reel 977763391613973 | Facilities, training, gallery, final CTA |
| `workouts/lat-pulldown-dumbbells-*` | reel frame | reel 4733725933578110 | Facilities, training, coaching, gallery |
| `workouts/hanging-leg-raise-*` | reel frame (offer text cropped) | reel 4184452465025082 | Training, gallery, final CTA |
| `equipment/leg-press-*` | reel frame | reel 1774055903671591 | Training, gallery |
| `hero/motion-blur-*` | reel frame | reel 1685207999987285 | Final CTA texture |
| `gym-interior/women-members-floor-*` | photo 1600×1200 | fbid 1050297328075166 | About, facilities (cardio), gallery |
| `gallery/community-*`, `gallery/outing-pool-*` | photos | fbid 1050297451408487 / …521408480 / …571408475 / …658075133 (19 Oct 2026) | Why Decent, gallery |
| `transformations/*` | photos | fbid 1069020956202803, 1069021066202792 | Transformations |
| `testimonials/soha-journey-poster-*` | reel frame cropped above caption | reel 2233386347210423 | Featured video |
| `videos/reel-*` | reel cover frames (540×960) | 10 reels listed in `src/data/videos.ts` | Video showcase |

**Not used (on purpose):**
- Cover photo (fbid 968980196206880) and "top fan" image — photos of Arnold Schwarzenegger, not the gym's own; copyright unclear.
- Trust Care Diagnostic ad (fbid 1073415339096698) — third-party advertisement.
- Reel 2347355992509298 frame — mostly black.

### Videos
Video files cannot be downloaded logged out (Facebook streams them as blobs). The site plays reels through
**Facebook's official embedded video player** (`facebook.com/plugins/video.php`), which was verified to
load and play. To self-host instead, put an MP4 in `public/assets/videos/` and set `file` in `src/data/videos.ts`.

## 8. Unverified / inferred (handled conservatively)

- The 19 Oct 2026 outdoor photos appear to be a **community outing** of the women in the gym photo (same people) — captioned neutrally ("Community day out", "Shared by Decent Fitness").
- Video categories (Women's shift / Men's shift) are inferred from who appears in the frame. The squat reel is labelled "Training" because it is unclear.
- "Trainer on the floor": the brief says members talk to "the gym trainer"; no trainer name, photo or qualification was published.

## 9. Missing — please provide

1. **Trainer details** — name(s), photo(s), shift, experience/certifications → `src/data/trainers.ts` (section appears automatically).
2. ~~Men's shift exact times~~ Confirmed 18 Nov 2026 (see §6).
3. **Days open** (is Friday different?).
4. **Full price list** — 6-month, yearly, personal training, couple/student rates; whether the ৳1,500 admission offer has an end date.
5. **Original video files** (MP4) for a walkthrough/hero video — would replace the Facebook embed.
6. **Higher-resolution photos** of the interior (reel frames are 540×960; a few landscape photos ≥2000 px would make the desktop hero and facilities sharper).
7. **Member consent:** the site shows identifiable members (incl. women members and the transformation members) exactly as the gym posted them publicly. Please confirm those members are happy to appear on the website.
8. Instagram / Google Maps listing link, if any (currently a Maps search link built from the address).
9. Testimonials (written quotes) and the 3 Facebook reviews' text, if you'd like them shown.

## 10. Content placement

| Section | Content used |
|---|---|
| Hero | Women's & men's shift frames, live "now training" indicator (Dhaka time), WhatsApp CTA |
| About | Bangla philosophy quote, interior photo, Trust Care partnership |
| Facilities | 5 verified zones from photos/reels |
| Training | 4 goals named in the gym's own post |
| Transformations | 2 published results (slider + original composite) |
| Coaching | Trainer CTA (profiles hidden until provided) + inspiration wall (clearly not affiliated) |
| Videos | 7 reels via official FB player |
| Membership | ৳1,500 admission (reg. ৳2,000), ৳1,000/month, 3-month free-admission offer |
| Schedule | Men 8–1, women 1–4:30, men 4:30–11; timeline + panels |
| Gallery | 11 images, 4 filters, lightbox |
| FAQ | Verified answers; WhatsApp where info is missing |

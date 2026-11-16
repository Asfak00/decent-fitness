import { MotionConfig } from 'framer-motion'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Facilities } from './components/Facilities'
import { TrainingExperience } from './components/TrainingExperience'
import { Transformations } from './components/Transformations'
import { Trainers } from './components/Trainers'
import { FitnessInspiration } from './components/FitnessInspiration'
import { VideoShowcase } from './components/VideoShowcase'
import { Membership } from './components/Membership'
import { TrainingSchedule } from './components/TrainingSchedule'
import { WhyChooseUs } from './components/WhyChooseUs'
import { Gallery } from './components/Gallery'
import { FAQ } from './components/FAQ'
import { FinalCTA } from './components/FinalCTA'
import { Footer } from './components/Footer'
import { WhatsAppButton } from './components/WhatsAppButton'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#about"
        className="sr-only z-[70] bg-bone px-4 py-3 text-ink focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Facilities />
        <TrainingExperience />
        <Transformations />
        <section id="coaching" className="relative bg-ink py-24 lg:py-36">
          <Trainers />
          <FitnessInspiration />
        </section>
        <VideoShowcase />
        <Membership />
        <TrainingSchedule />
        <WhyChooseUs />
        <Gallery />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </MotionConfig>
  )
}

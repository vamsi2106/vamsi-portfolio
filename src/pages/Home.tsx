import { Seo } from '@/components/Seo'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Skills } from '@/components/sections/Skills'
import { Experience } from '@/components/sections/Experience'
import { Projects } from '@/components/sections/Projects'
import { Contact } from '@/components/sections/Contact'
import { profile } from '@/content/profile'

export default function Home() {
  return (
    <>
      <Seo title={`${profile.name} — ${profile.title}`} path="/" />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </>
  )
}

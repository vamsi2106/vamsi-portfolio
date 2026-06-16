import { Mail, Phone } from 'lucide-react'
import { Container } from '../Container'
import { AnimatedSection } from '../AnimatedSection'
import { SectionHeading } from '../SectionHeading'
import { ContactForm } from '../ContactForm'
import { SocialLinks } from '../SocialLinks'
import { profile } from '@/content/profile'

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Contact"
              title="Let's build something"
              description="Open to full-stack AI engineering roles and interesting product work. The fastest way to reach me is email — or use the form."
            />
            <div className="mt-8 space-y-3">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 text-slate-700 hover:text-navy-600 dark:text-slate-300 dark:hover:text-navy-300"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-50 text-navy-600 dark:bg-navy-900/40 dark:text-navy-300">
                  <Mail size={18} aria-hidden="true" />
                </span>
                {profile.email}
              </a>
              <a
                href={`tel:${profile.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-3 text-slate-700 hover:text-navy-600 dark:text-slate-300 dark:hover:text-navy-300"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-50 text-navy-600 dark:bg-navy-900/40 dark:text-navy-300">
                  <Phone size={18} aria-hidden="true" />
                </span>
                {profile.phone}
              </a>
            </div>
            <SocialLinks className="mt-8" includeEmail />
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <ContactForm />
          </AnimatedSection>
        </div>
      </Container>
    </section>
  )
}

import { Download } from 'lucide-react'
import { Seo } from '@/components/Seo'
import { Container } from '@/components/Container'
import { ButtonLink } from '@/components/ui/Button'
import { profile } from '@/content/profile'

export default function Resume() {
  return (
    <>
      <Seo title="Résumé" path="/resume" />
      <section className="py-28">
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Résumé</h1>
              <p className="mt-2 text-ink-600 dark:text-ink-400">
                {profile.name} · {profile.title}
              </p>
            </div>
            <ButtonLink href={profile.resumeUrl} download>
              <Download size={18} aria-hidden="true" />
              Download PDF
            </ButtonLink>
          </div>

          <div className="mt-8 overflow-hidden rounded-xl border border-ink/10 bg-ink/10 dark:border-paper/10 dark:bg-ink-900">
            <object
              data={profile.resumeUrl}
              type="application/pdf"
              className="h-[80vh] w-full"
              aria-label="Résumé PDF preview"
            >
              <div className="p-10 text-center text-ink-600 dark:text-ink-400">
                <p>Your browser can't display the embedded PDF.</p>
                <ButtonLink href={profile.resumeUrl} download className="mt-4">
                  <Download size={18} aria-hidden="true" />
                  Download the résumé instead
                </ButtonLink>
              </div>
            </object>
          </div>
        </Container>
      </section>
    </>
  )
}

import { Seo } from '@/components/Seo'
import { Container } from '@/components/Container'
import { RouterButton } from '@/components/ui/Button'

export default function NotFound() {
  return (
    <>
      <Seo title="Page not found" path="/404" />
      <Container className="flex min-h-[70vh] flex-col items-center justify-center py-28 text-center">
        <p className="text-7xl font-extrabold text-brand-600 dark:text-brand-300">404</p>
        <h1 className="mt-4 text-2xl font-bold">Page not found</h1>
        <p className="mt-3 max-w-md text-ink-600 dark:text-ink-400">
          The page you're looking for doesn't exist or may have moved.
        </p>
        <RouterButton to="/" className="mt-8">
          Back home
        </RouterButton>
      </Container>
    </>
  )
}

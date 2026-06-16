import { Helmet } from 'react-helmet-async'
import { profile } from '@/content/profile'

interface SeoProps {
  title: string
  description?: string
  /** Path-relative canonical, e.g. "/projects/ai-calling-agent". */
  path?: string
  image?: string
}

const SITE_NAME = `${profile.name} — ${profile.title}`
const DEFAULT_DESC = profile.tagline
const SITE_URL = 'https://vamsi.dev' // update to the production domain
const DEFAULT_IMAGE = '/og-image.svg'

export function Seo({ title, description = DEFAULT_DESC, path = '/', image = DEFAULT_IMAGE }: SeoProps) {
  const fullTitle = title === SITE_NAME ? title : `${title} · ${profile.shortName}`
  const url = `${SITE_URL}${path}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${SITE_URL}${image}`} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${SITE_URL}${image}`} />
    </Helmet>
  )
}

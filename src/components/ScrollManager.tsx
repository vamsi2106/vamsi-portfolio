import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * On navigation: scroll to the hash target if present (anchored sections),
 * otherwise scroll to top (e.g. when opening a project detail page).
 */
export function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [pathname, hash])

  return null
}

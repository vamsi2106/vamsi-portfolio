import { useEffect, useState } from 'react'

/**
 * Tracks which section id is currently in view using IntersectionObserver,
 * for highlighting the active nav link.
 */
export function useActiveSection(sectionIds: string[]): string {
  const [active, setActive] = useState<string>(sectionIds[0] ?? '')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) {
          setActive(visible[0].target.id)
        }
      },
      {
        // Trigger when a section is roughly in the upper-middle of the viewport
        rootMargin: '-45% 0px -50% 0px',
        threshold: [0, 0.1, 0.5, 1],
      },
    )

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [sectionIds])

  return active
}

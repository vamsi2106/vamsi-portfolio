export interface NavItem {
  id: string
  label: string
}

/** Anchored sections on the home page, in order. */
export const navItems: NavItem[] = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export const sectionIds = ['hero', ...navItems.map((n) => n.id)]

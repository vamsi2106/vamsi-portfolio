export interface ExperienceItem {
  role: string
  company: string
  location: string
  period: string
  current?: boolean
  summary: string
}

export const experience: ExperienceItem[] = [
  {
    role: 'Full-Stack AI Engineer',
    company: 'Ridhira Living Pvt Ltd',
    location: 'Hyderabad',
    period: 'Mar 2025 – Present',
    current: true,
    summary:
      'Sole developer for a real-estate & wellness group; own products end to end, working directly with the founders.',
  },
  {
    role: 'Software Engineer',
    company: 'G7CR Technologies India Pvt Ltd',
    location: 'Bangalore',
    period: 'Jul 2024 – Feb 2025',
    summary: 'Built an AI Video Cataloguing platform for a media client.',
  },
]

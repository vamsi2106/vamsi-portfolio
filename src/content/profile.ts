export interface SocialLink {
  label: string
  href: string
}

export interface Profile {
  name: string
  shortName: string
  title: string
  tagline: string
  location: string
  about: string
  email: string
  phone: string
  resumeUrl: string
  social: {
    github: string
    linkedin: string
  }
}

export const profile: Profile = {
  name: 'Nagasai Vamsi Chilakalapudi',
  shortName: 'Vamsi',
  title: 'Full-Stack AI Engineer',
  tagline:
    'I build and ship AI products end to end — from LLM agents and RAG systems to React/Next.js front-ends and Python/Node back-ends.',
  location: 'Hyderabad, India',
  about:
    "Full-Stack AI Engineer with 2 years of experience building production AI products as the sole engineer working directly with founders. I work across the stack — React/Next.js, Node.js, Python (FastAPI), and Azure/AWS — with deep hands-on work in LLMs, AI agents, and RAG. I'm now expanding into applied machine learning and containerized deployment. I like owning problems from requirements to deployment.",
  email: 'saivamsi1121@gmail.com',
  phone: '+91 81068 37185',
  resumeUrl: '/resume.pdf',
  social: {
    github: 'https://github.com/vamsi2106',
    linkedin: 'https://linkedin.com/in/chilakalapudi-nagasai-vamsi',
  },
}

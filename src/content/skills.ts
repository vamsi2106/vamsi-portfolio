export interface SkillGroup {
  title: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    skills: ['Python', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    title: 'Machine Learning & Data',
    skills: [
      'pandas',
      'NumPy',
      'scikit-learn',
      'Matplotlib',
      'Seaborn',
      'Predictive & statistical modeling',
      'EDA',
      'Data visualization',
    ],
  },
  {
    title: 'Generative & AI Agents',
    skills: [
      'Claude',
      'OpenAI / Azure OpenAI',
      'ElevenLabs',
      'LangChain',
      'RAG',
      'Embeddings',
      'Vector DBs (Chroma / FAISS)',
      'Tool / function calling',
      'Prompt engineering',
      'N8N',
    ],
  },
  {
    title: 'Frontend',
    skills: ['React.js', 'Next.js', 'HTML5', 'CSS3', 'ShadCN UI', 'Bootstrap'],
  },
  {
    title: 'Backend & APIs',
    skills: [
      'Node.js',
      'Express.js',
      'NestJS',
      'FastAPI',
      'WebSockets',
      'REST APIs',
      'OAuth 2.0',
      'Webhooks',
    ],
  },
  {
    title: 'Databases',
    skills: ['MongoDB', 'PostgreSQL', 'SQLite'],
  },
  {
    title: 'Cloud & DevOps',
    skills: ['Azure', 'AWS', 'Docker', 'GitHub Actions', 'Azure DevOps', 'CI/CD'],
  },
  {
    title: 'AI Dev Tools',
    skills: ['Cursor', 'Claude Code'],
  },
]

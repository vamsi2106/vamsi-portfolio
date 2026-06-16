export interface ProjectLinks {
  github?: string
  live?: string
}

export interface Project {
  slug: string
  title: string
  summary: string
  problem: string
  build: string[]
  tech: string[]
  links: ProjectLinks
  highlights?: string[]
  /** Short company/context label shown as a chip, e.g. "G7CR". */
  context?: string
}

export const projects: Project[] = [
  {
    slug: 'multi-channel-booking',
    title: 'Multi-Channel Booking Platform',
    summary:
      'A unified booking backend wrapping the Zenoti POS API, serving multiple channels from one set of services.',
    problem:
      'Bookings were fragmented across separate tools and channels, with no shared source of truth against the Zenoti POS. Each new channel meant rebuilding the same availability and booking logic from scratch.',
    build: [
      'Designed a shared set of Node.js services wrapping the Zenoti POS API as the single booking core.',
      'Built a web app, a WhatsApp booking bot, and an AI voice calling agent — all on top of those shared services.',
      'Kept every channel in live sync so a booking made anywhere reflects instantly across the rest.',
    ],
    tech: ['Node.js', 'Express', 'MongoDB', 'Zenoti API', 'WhatsApp API', 'REST'],
    links: {},
  },
  {
    slug: 'ai-calling-agent',
    title: 'AI Outbound Calling Agent',
    summary: 'Voice agent that books and re-engages appointments autonomously.',
    problem:
      'Following up with guests to book and re-engage appointments was manual and did not scale. The team needed an autonomous voice agent that could hold a natural conversation and complete real bookings.',
    build: [
      'Built on ElevenLabs Conversational AI + Twilio for natural, low-latency phone conversations.',
      'Implemented custom booking tools: slot availability, guest creation, and confirmation via function calling.',
      'Wrote intent-aware prompts so the agent adapts to booking, rescheduling, and re-engagement flows.',
      'Synced every action live with Zenoti so bookings land directly in the POS.',
    ],
    tech: ['ElevenLabs', 'Twilio', 'Node.js', 'LLM tool/function calling'],
    links: {},
  },
  {
    slug: 'channel-partner-portal',
    title: 'Channel Partner Portal',
    summary: 'Self-serve portal replacing manual WhatsApp/spreadsheet lead workflows.',
    problem:
      'Channel partners submitted and tracked leads over WhatsApp and spreadsheets, leaving the sales team with no reliable view of the pipeline and no accountability for stage changes.',
    build: [
      'Built a multi-tier partner network with role-based access control.',
      'Implemented bidirectional Zoho CRM sync that preserves full deal-stage history.',
      'Automated stage-change notifications so partners and sales stay aligned in real time.',
      'Added weekly AI lead-audit reporting delivered to the sales head.',
    ],
    tech: ['React', 'Express', 'Zoho CRM API', 'Firebase Auth', 'Azure'],
    links: {},
  },
  {
    slug: 'real-estate-booking',
    title: 'Real-Estate Listing & Booking Site',
    summary: 'CMS-enabled property site with online token payments and on-site visit tracking.',
    problem:
      'The group needed a property site that marketing could update without engineering, that could collect token payments online, and that could track on-site visits end to end.',
    build: [
      'Built dynamic, CMS-managed listings for plots and villas with inquiry forms.',
      'Integrated the HDFC Payment Gateway for online token collection.',
      'Generated QR-based site-visit passes delivered over WhatsApp.',
      'Kept leads and visits in live sync with Zoho CRM.',
    ],
    tech: ['React', 'Node.js', 'MongoDB', 'HDFC Payment Gateway', 'WhatsApp API', 'Azure'],
    links: {},
  },
  {
    slug: 'ai-lead-gen',
    title: 'AI Lead-Generation Pipeline',
    summary: 'Python pipeline that sources and qualifies buyer leads with an LLM.',
    problem:
      'Sourcing and qualifying buyer leads by hand was slow and inconsistent. The sales pipeline needed a steady, scored flow of prospects matched to multiple ideal-customer profiles.',
    build: [
      'Pulled LinkedIn profiles via SignalHire across multiple ICPs.',
      'Used Claude to score and shortlist prospects against each profile.',
      'Generated a buyer rationale for each shortlisted lead to feed the sales pipeline.',
    ],
    tech: ['Python', 'Claude API', 'SignalHire API'],
    links: {},
  },
  {
    slug: 'video-cataloguing',
    title: 'AI Video Cataloguing Platform',
    context: 'G7CR',
    summary: 'Auto-extracts short highlight clips from long-form videos for a media client.',
    problem:
      'A media client needed to turn long-form videos into short highlight clips at scale, without an editor manually scrubbing through hours of footage.',
    build: [
      'Used Azure Video Indexer to extract metadata, transcripts, and timestamps.',
      'Fed that signal to Azure OpenAI to pick the best clips automatically.',
      'Streamed real-time progress to the UI over WebSockets.',
      'Secured access with Azure AD SSO + Google OAuth and shipped via Azure DevOps CI/CD.',
    ],
    tech: ['React', 'NestJS', 'Azure Video Indexer', 'Azure OpenAI', 'MongoDB', 'WebSockets'],
    links: {},
  },
  {
    slug: 'loan-default-predictor',
    title: 'Loan Default Prediction — ML Model & API',
    summary: 'End-to-end ML service predicting loan-default risk.',
    problem:
      'The goal was an end-to-end machine-learning service that predicts loan-default risk and is deployable behind a clean API — from raw data through to a containerized model.',
    build: [
      'Ran EDA and feature engineering with pandas.',
      'Compared Logistic Regression, Random Forest, and XGBoost models.',
      'Evaluated with ROC-AUC and precision/recall to choose the best model.',
      'Served predictions via FastAPI and packaged the whole service with Docker.',
    ],
    tech: ['Python', 'scikit-learn', 'pandas', 'FastAPI', 'Docker'],
    links: {
      github: 'https://github.com/vamsi2106/loan-default-predictor',
    },
  },
  {
    slug: 'ai-document-qa-rag',
    title: 'AI Document Q&A Assistant (RAG)',
    summary: 'RAG assistant answering questions over a document set, grounded with sources.',
    problem:
      'Users needed trustworthy answers over a set of documents — grounded in the source material and able to fall back gracefully when a question is outside the document scope.',
    build: [
      'Built a retrieval pipeline with LangChain and embeddings stored in Chroma.',
      'Composed a retrieval + LLM answer chain that grounds responses in sources.',
      'Added a callable tool for handling non-document queries.',
      'Shipped a FastAPI backend with a React chat UI, packaged with Docker.',
    ],
    tech: ['Python', 'LangChain', 'FastAPI', 'React', 'Chroma', 'Docker'],
    links: {
      github: 'https://github.com/vamsi2106/ai-document-qa-rag',
    },
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

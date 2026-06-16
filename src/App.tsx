import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { ScrollManager } from './components/ScrollManager'
import Home from './pages/Home'

// Code-split secondary routes
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'))
const Resume = lazy(() => import('./pages/Resume'))
const NotFound = lazy(() => import('./pages/NotFound'))

function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-brand-600 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-paper"
      >
        Skip to content
      </a>

      <ScrollManager />
      <Navbar />

      <main id="main">
        <Suspense fallback={<div className="min-h-[60vh]" aria-hidden="true" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
    </>
  )
}

export default App

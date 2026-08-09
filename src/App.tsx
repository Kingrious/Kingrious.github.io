import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from '@/components/Header'
import HomeSection from '@/components/HomeSection'
import EducationSection from '@/components/EducationSection'
import ProjectsSection from '@/components/ProjectsSection'
import ProjectDetail from '@/components/ProjectDetail'
import ResearchSection from '@/components/ResearchSection'

export default function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const handleNavigate = (section: string) => {
    setActiveSection(section)
    setSelectedProject(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleOpenProject = (id: number) => {
    setSelectedProject(id)
    window.scrollTo({ top: 0 })
  }

  const handleBackToProjects = () => {
    setSelectedProject(null)
    window.scrollTo({ top: 0 })
  }

  const viewKey = selectedProject !== null ? `project-${selectedProject}` : activeSection

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] transition-colors duration-300">
      {/* Subtle grid background */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(var(--border) 1px, transparent 1px),
            linear-gradient(90deg, var(--border) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <Header activeSection={activeSection} onNavigate={handleNavigate} />

      <main className="relative z-10 pt-16 pb-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={viewKey}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            {selectedProject !== null ? (
              <ProjectDetail projectId={selectedProject} onBack={handleBackToProjects} />
            ) : (
              <>
                {activeSection === 'home' && <HomeSection />}
                {activeSection === 'education' && <EducationSection />}
                {activeSection === 'projects' && <ProjectsSection onOpenProject={handleOpenProject} />}
                {activeSection === 'research' && <ResearchSection />}
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="relative z-10 py-8 text-center text-xs text-[var(--text-muted)] border-t border-[var(--border-light)]">
        <p> 杨天成 · Kingrious</p>
      </footer>
    </div>
  )
}

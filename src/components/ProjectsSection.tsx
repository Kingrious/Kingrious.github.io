'use client'

import { motion } from 'framer-motion'
import projectsData from '@/data/projects.json'

interface ProjectsSectionProps {
  onOpenProject: (id: number) => void
}

export default function ProjectsSection({ onOpenProject }: ProjectsSectionProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-2">
          项目经历
        </h1>
        <p className="text-[var(--text-muted)] text-base">我参与开发与维护的项目</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projectsData.projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl overflow-hidden hover:border-[var(--accent)]/30 transition-all duration-300 flex flex-col"
          >
            <div className="p-5 flex-1">
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
                {project.name}
              </h3>

              <p className="text-base text-[var(--text-secondary)] leading-relaxed mb-4 line-clamp-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 text-sm bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--text-muted)] rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="px-5 py-3 border-t border-[var(--border-light)] bg-[var(--bg-secondary)]/30">
              <button
                onClick={() => onOpenProject(project.id)}
                className="inline-flex items-center gap-1.5 text-base text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors"
              >
                查看项目
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

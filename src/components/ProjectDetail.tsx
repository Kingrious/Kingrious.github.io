'use client'

import { motion } from 'framer-motion'
import projectsData from '@/data/projects.json'

interface ProjectDetailProps {
  projectId: number
  onBack: () => void
}

export default function ProjectDetail({ projectId, onBack }: ProjectDetailProps) {
  const project = projectsData.projects.find((p) => p.id === projectId)

  if (!project) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-8">
        <button
          onClick={onBack}
          className="text-base text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors"
        >
          ← 返回项目列表
        </button>
        <p className="mt-6 text-[var(--text-secondary)]">未找到该项目。</p>
      </div>
    )
  }

  const statusColor: Record<string, string> = {
    '活跃': 'text-[var(--success)] bg-[var(--success)]/10 border-[var(--success)]/20',
    '进行中': 'text-[var(--accent)] bg-[var(--accent)]/10 border-[var(--accent)]/20',
    '已完成': 'text-[var(--text-muted)] bg-[var(--bg-secondary)] border-[var(--border)]',
    '概念验证': 'text-[var(--warning)] bg-[var(--warning)]/10 border-[var(--warning)]/20',
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1.5 text-base text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors mb-6"
        >
          ← 返回项目列表
        </button>

        <div className="flex flex-wrap items-center gap-3 mb-3">
          <h1 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)]">
            {project.name}
          </h1>
          <span className={`px-2 py-0.5 text-sm rounded border ${statusColor[project.status] || statusColor['已完成']}`}>
            {project.status}
          </span>
        </div>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-base text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors mb-8"
        >
          访问项目
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </a>

        <section className="mb-8">
          <h2 className="text-base font-medium text-[var(--text-muted)] uppercase tracking-wider mb-3">
            项目简介
          </h2>
          <p className="text-base text-[var(--text-secondary)] leading-relaxed">
            {project.description}
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-base font-medium text-[var(--text-muted)] uppercase tracking-wider mb-3">
            技术栈
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--text-secondary)] rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-base font-medium text-[var(--text-muted)] uppercase tracking-wider mb-3">
            关键工作
          </h2>
          <ul className="space-y-2">
            {project.highlights.map((hl, i) => (
              <li key={i} className="text-base text-[var(--text-secondary)] flex items-start gap-2">
                <span className="text-[var(--accent)] mt-1 flex-shrink-0">•</span>
                <span>{hl}</span>
              </li>
            ))}
          </ul>
        </section>

        {project.work && project.work.length > 0 && (
          <section>
            <h2 className="text-base font-medium text-[var(--text-muted)] uppercase tracking-wider mb-3">
              本人工作内容
            </h2>
            <ul className="space-y-2">
              {project.work.map((item, i) => (
                <li key={i} className="text-base text-[var(--text-secondary)] flex items-start gap-2">
                  <span className="text-[var(--accent)] mt-1 flex-shrink-0">•</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </section>
        )}
      </motion.div>
    </div>
  )
}

'use client'

import { motion } from 'framer-motion'
import researchData from '@/data/research.json'

export default function ResearchSection() {
  const statusColor: Record<string, string> = {
    '进行中': 'text-[var(--success)] bg-[var(--success)]/10 border-[var(--success)]/20',
    '规划中': 'text-[var(--accent)] bg-[var(--accent)]/10 border-[var(--accent)]/20',
  }

  const statusDot: Record<string, string> = {
    '进行中': 'bg-[var(--success)]',
    '规划中': 'bg-[var(--accent)]',
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-2">
          研究动向
        </h1>
        <p className="text-[var(--text-muted)] text-base">我当前关注的研究方向与进展</p>
      </motion.div>

      <div className="space-y-6">
        {researchData.research.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-5 sm:p-6 hover:border-[var(--accent)]/30 transition-colors"
          >
            <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className={`w-2 h-2 rounded-full ${statusDot[item.status] || 'bg-[var(--text-muted)]'}`} />
                  <span className="text-sm text-[var(--text-muted)]">{item.startDate}</span>
                </div>
                <h3 className="text-xl font-semibold text-[var(--text-primary)]">
                  {item.title}
                </h3>
              </div>
              <span className={`px-2 py-0.5 text-sm rounded border ${statusColor[item.status] || statusColor['规划中']}`}>
                {item.status}
              </span>
            </div>

            <p className="text-base text-[var(--text-secondary)] leading-relaxed mb-4">
              {item.description}
            </p>

            <div className="mb-4">
              <div className="flex justify-between text-sm text-[var(--text-muted)] mb-1.5">
                <span>进展</span>
                <span>{item.progress}%</span>
              </div>
              <div className="h-1.5 bg-[var(--bg-secondary)] rounded-full overflow-hidden border border-[var(--border-light)]">
                <motion.div
                  className="h-full bg-[var(--accent)] rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${item.progress}%` }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 mb-4">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-sm bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--text-muted)] rounded"
                >
                  {tag}
                </span>
              ))}
            </div>

            {item.publications.length > 0 && (
              <div className="pt-3 border-t border-[var(--border-light)]">
                <h4 className="text-sm font-medium text-[var(--text-muted)] uppercase tracking-wider mb-2">
                  论文发表
                </h4>
                <ul className="space-y-1">
                  {item.publications.map((pub, i) => (
                    <li key={i} className="text-base text-[var(--text-secondary)] flex items-start gap-2">
                      <span className="text-[var(--accent)] mt-1 flex-shrink-0">•</span>
                      <span>{pub}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

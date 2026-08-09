'use client'

import { motion } from 'framer-motion'
import educationData from '@/data/education.json'

export default function EducationSection() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-2">
          教育经历
        </h1>
        <p className="text-[var(--text-muted)] text-base">我的学术背景与成长轨迹</p>
      </motion.div>

      <div className="space-y-6">
        {educationData.education.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-5 sm:p-6 hover:border-[var(--accent)]/30 transition-colors"
          >
            <div className="flex items-stretch gap-5">
              <div className="w-32 sm:w-44 flex items-center justify-center flex-shrink-0 self-stretch min-h-32">
                {edu.logo ? (
                  <img
                    src={edu.logo}
                    alt={edu.school}
                    className="w-full h-full object-contain rounded-lg"
                  />
                ) : (
                  <span className="text-4xl font-semibold text-[var(--accent)]">
                    {edu.school.charAt(0)}
                  </span>
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <h3 className="text-xl font-semibold text-[var(--text-primary)]">
                    {edu.school}
                  </h3>
                  <span className="px-2 py-0.5 text-sm bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--text-secondary)] rounded">
                    {edu.degree}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-base text-[var(--text-muted)] mb-3">
                  <span>{edu.major}</span>
                  <span>·</span>
                  <span>{edu.period}</span>
                  {edu.gpa !== '暂无更新' && (
                    <>
                      <span>·</span>
                      <span className="text-[var(--success)]">GPA {edu.gpa}</span>
                    </>
                  )}
                </div>

                <p className="text-[var(--text-secondary)] text-base leading-relaxed mb-4">
                  {edu.description}
                </p>

                {edu.achievements.length > 0 && (
                  <div>
                    <h4 className="text-sm font-medium text-[var(--text-muted)] uppercase tracking-wider mb-2">
                      成就与荣誉
                    </h4>
                    <ul className="space-y-1.5">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className="text-base text-[var(--text-secondary)] flex items-start gap-2">
                          <span className="text-[var(--accent)] mt-1 flex-shrink-0">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import bioData from '@/data/bio.json'

export default function HomeSection() {
  const titles = bioData.title.split('\n')
  const infoItems = [bioData.status, bioData.hometown, bioData.Birth_Date]
  const [avatarError, setAvatarError] = useState(false)

  return (
    <div className="max-w-3xl mx-auto px-4 pt-2 pb-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-2"
      >
        {bioData.avatar && !avatarError ? (
          <img
            src={bioData.avatar}
            alt={bioData.name}
            onError={() => setAvatarError(true)}
            className="w-36 h-36 rounded-full object-cover border border-[var(--border)] mb-4"
          />
        ) : (
          <div className="w-36 h-36 rounded-full bg-[var(--bg-secondary)] border border-[var(--border)] flex items-center justify-center mb-4">
            <span className="text-4xl font-semibold text-[var(--accent)]">
              {bioData.name.charAt(0)}
            </span>
          </div>
        )}

        <h1 className="text-4xl sm:text-5xl font-bold text-[var(--text-primary)] mb-2">
          {bioData.name}
        </h1>

        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap gap-x-3 gap-y-1">
            {infoItems.map((item, i) => (
              <span key={i} className="text-[var(--text-secondary)] text-base sm:text-lg">
                {item}
                {i < infoItems.length - 1 && (
                  <span className="text-[var(--text-muted)] ml-3">·</span>
                )}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-x-3 gap-y-1">
            {titles.map((title, i) => (
              <span key={i} className="text-[var(--text-secondary)] text-base sm:text-lg">
                {title}
                {i < titles.length - 1 && (
                  <span className="text-[var(--text-muted)] ml-3">·</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="mb-6"
      >
        <p className="text-[var(--text-secondary)] leading-relaxed text-lg whitespace-pre-line">
          {bioData.bio}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mb-6"
      >
        <h2 className="text-base font-medium text-[var(--text-muted)] uppercase tracking-wider mb-3">
          技术栈
        </h2>
        <div className="flex flex-wrap gap-2">
          {bioData.skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 text-base bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--text-secondary)] rounded-md hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.45 }}
      >
        <h2 className="text-base font-medium text-[var(--text-muted)] uppercase tracking-wider mb-3">
          联系方式
        </h2>
        <div className="flex flex-col gap-2 text-base">
          <div className="flex flex-wrap items-center gap-2">
            <a
              href={bioData.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
              </svg>
              GitHub：{bioData.social.github}
            </a>
          </div>
          <a
            href={`mailto:${bioData.social.email}`}
            className="inline-flex items-center gap-2 text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            个人邮箱：{bioData.social.email}
          </a>
          <a
            href={`tel:${bioData.social.tel}`}
            className="inline-flex items-center gap-2 text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            联系电话：{bioData.social.tel}
          </a>
        </div>
      </motion.div>
    </div>
  )
}

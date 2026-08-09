'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import projectsData from '@/data/projects.json'

export default function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    // 可滚动容器 - 解决内容溢出无法滚动的问题
    <div className="w-full h-[75vh] md:h-[85vh] overflow-y-auto overflow-x-hidden pr-2 custom-scrollbar">
      <div className="w-full max-w-full md:max-w-5xl px-4 md:px-8 pb-8">
      {/* Section header */}
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="font-tech text-2xl md:text-3xl text-white mb-2 tracking-wider">
          PROJECT<span className="text-cyber-pink">_ARCHIVE</span>
        </h2>
        <div className="w-32 md:w-48 h-px bg-gradient-to-r from-transparent via-cyber-pink to-transparent mx-auto" />
      </motion.div>

      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {projectsData.projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onHoverStart={() => setHoveredProject(project.id)}
            onHoverEnd={() => setHoveredProject(null)}
            className="relative group"
          >
            {/* Glow effect */}
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-cyber-pink/20 to-cyber-blue/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              animate={hoveredProject === project.id ? { scale: 1.02 } : { scale: 1 }}
            />

            {/* Card */}
            <div className="relative h-full bg-hud-bg backdrop-blur-md border border-cyber-blue/30 rounded-xl overflow-hidden">
              {/* Scan line */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                  className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyber-pink/30 to-transparent"
                  animate={{ y: ['0%', '200%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                />
              </div>

              {/* Image placeholder */}
              <div className="relative h-32 md:h-40 bg-gradient-to-br from-cyber-blue/10 to-cyber-pink/10 flex items-center justify-center overflow-hidden">
                {/* Animated grid */}
                <div 
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '20px 20px',
                  }}
                />
                
                {/* Project icon */}
                <motion.div
                  className="relative z-10 w-12 h-12 md:w-16 md:h-16 rounded-lg border-2 border-cyber-blue/50 flex items-center justify-center"
                  animate={hoveredProject === project.id ? { rotate: [0, 5, -5, 0] } : {}}
                  transition={{ duration: 0.3 }}
                >
                  <span className="font-tech text-xl md:text-2xl text-cyber-blue">
                    {project.name.charAt(0)}
                  </span>
                </motion.div>

                {/* Status badge */}
                <div className="absolute top-3 right-3">
                  <span className={`
                    px-2 py-1 text-xs font-mono rounded border
                    ${project.status === '活跃' ? 'bg-cyber-green/20 text-cyber-green border-cyber-green/30' : ''}
                    ${project.status === '进行中' ? 'bg-cyber-blue/20 text-cyber-blue border-cyber-blue/30' : ''}
                    ${project.status === '已完成' ? 'bg-cyber-pink/20 text-cyber-pink border-cyber-pink/30' : ''}
                    ${project.status === '概念验证' ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' : ''}
                  `}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 md:p-5">
                <h3 className="font-tech text-lg md:text-xl text-white mb-2">{project.name}</h3>
                <p className="text-gray-400 text-xs md:text-sm font-mono leading-relaxed mb-3 md:mb-4">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4">
                  {project.techStack.map((tech, i) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 + i * 0.05 }}
                      className="px-1.5 md:px-2 py-0.5 md:py-1 text-[10px] md:text-xs font-mono bg-cyber-pink/10 border border-cyber-pink/30 text-cyber-pink rounded"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Hover details - Unlock effect */}
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={hoveredProject === project.id ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 border-t border-cyber-blue/20">
                    <span className="text-cyber-blue text-xs font-mono">关键工作</span>
                    <ul className="mt-2 space-y-1">
                      {project.highlights.map((highlight, i) => (
                        <motion.li
                          key={i}
                          initial={{ x: -10, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: i * 0.05 }}
                          className="text-xs font-mono text-gray-300 flex items-center gap-2"
                        >
                          <span className="text-cyber-green">▹</span>
                          {highlight}
                        </motion.li>
                      ))}
                    </ul>
                    {project.work && project.work.length > 0 && (
                      <>
                        <span className="mt-3 block text-cyber-pink text-xs font-mono">本人工作内容</span>
                        <ul className="mt-2 space-y-1 max-h-28 md:max-h-36 overflow-y-auto custom-scrollbar pr-1">
                          {project.work.map((item, i) => (
                            <li
                              key={i}
                              className="text-xs font-mono text-gray-400 flex items-start gap-2"
                            >
                              <span className="text-cyber-pink mt-0.5">▹</span>
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 px-4 py-2 text-xs font-mono bg-cyber-blue/20 border border-cyber-blue/40 text-cyber-blue rounded hover:bg-cyber-blue/30 hover:shadow-neon-blue transition-all"
                    >
                      VIEW_REPO
                      <span>→</span>
                    </a>
                  </div>
                </motion.div>
              </div>

              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-3 md:w-4 h-3 md:h-4 border-t border-l border-cyber-blue/40" />
              <div className="absolute top-0 right-0 w-3 md:w-4 h-3 md:h-4 border-t border-r border-cyber-blue/40" />
              <div className="absolute bottom-0 left-0 w-3 md:w-4 h-3 md:h-4 border-b border-l border-cyber-pink/40" />
              <div className="absolute bottom-0 right-0 w-3 md:w-4 h-3 md:h-4 border-b border-r border-cyber-pink/40" />
            </div>
          </motion.div>
        ))}
      </div>
      </div>
    </div>
  )
}

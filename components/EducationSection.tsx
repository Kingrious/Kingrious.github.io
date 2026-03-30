// 模拟存储路径: EducationSection_model/20260330_083341/EducationSection.tsx
'use client'

import { motion } from 'framer-motion'
import educationData from '@/data/education.json'

export default function EducationSection() {
  return (
    <div className="w-full max-w-4xl px-8">
      {/* Section header */}
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="font-tech text-3xl text-white mb-2 tracking-wider">
          EDUCATION<span className="text-cyber-blue">_DATA</span>
        </h2>
        <div className="w-48 h-px bg-gradient-to-r from-transparent via-cyber-blue to-transparent mx-auto" />
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Center line - 调整为 50% 居中，并使用 -translate-x-1/2 确保线本身绝对居中 */}
        <div className="absolute left-[50%] top-0 bottom-0 w-px bg-gradient-to-b from-cyber-blue via-cyber-pink to-cyber-blue -translate-x-1/2" />

        {/* Data stream effect - 调整为 50% */}
        <motion.div
          className="absolute left-[50%] top-0 w-1 h-full -translate-x-1/2"
          style={{
            background: 'linear-gradient(180deg, transparent 0%, #00d4ff 50%, transparent 100%)',
            backgroundSize: '100% 200%',
          }}
          animate={{ backgroundPosition: ['0% -100%', '0% 100%'] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        />

        {/* Education cards */}
        <div className="space-y-8">
          {educationData.education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className={`relative flex items-center ${
                index % 2 === 0 ? 'justify-start' : 'justify-end'
              }`}
            >
              {/* Node on timeline - 调整为 50% */}
              <motion.div
                className="absolute left-[50%] -translate-x-1/2 w-4 h-4 rounded-full bg-cyber-blue border-2 border-white z-10"
                animate={{ 
                  boxShadow: [
                    '0 0 10px #00d4ff',
                    '0 0 20px #00d4ff, 0 0 30px #00d4ff',
                    '0 0 10px #00d4ff'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />

              {/* Card - 两侧卡片统一使用 45% 的宽度，配合外层的 justify-start/end 实现对称排布 */}
              <div className="w-[45%]">
                <div className="relative group">
                  {/* Glow */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyber-blue/20 to-cyber-pink/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Card content */}
                  <div className="relative bg-hud-bg backdrop-blur-md border border-cyber-blue/40 rounded-lg overflow-hidden">
                    {/* Scan line effect */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyber-blue/30 to-transparent animate-scan" />
                    </div>

                    {/* Corner cuts */}
                    <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-cyber-blue" />
                    <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-cyber-blue" />
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-cyber-pink" />
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-cyber-pink" />

                    <div className="p-5">
                      {/* School logo */}
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-lg bg-white/10 border border-cyber-blue/30 overflow-hidden flex items-center justify-center">
                          {edu.logo ? (
                            <img 
                              src={edu.logo} 
                              alt={edu.school}
                              className="w-full h-full object-contain"
                            />
                          ) : (
                            <span className="font-tech text-cyber-blue text-lg">{edu.school.charAt(0)}</span>
                          )}
                        </div>
                        <div>
                          <h3 className="font-tech text-lg text-white">{edu.school}</h3>
                          <p className="text-cyber-blue font-mono text-sm">{edu.degree}</p>
                        </div>
                      </div>

                      {/* Details */}
                      <div className="space-y-2 font-mono text-sm">
                        <div className="flex justify-between">
                          <span className="text-cyber-blue">MAJOR:</span>
                          <span className="text-white">{edu.major}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-cyber-blue">PERIOD:</span>
                          <span className="text-white">{edu.period}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-cyber-blue">GPA:</span>
                          <span className="text-cyber-green">{edu.gpa}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="mt-4 text-gray-400 text-xs font-mono leading-relaxed">
                        {edu.description}
                      </p>

                      {/* Achievements */}
                      <div className="mt-4 pt-3 border-t border-cyber-blue/20">
                        <span className="text-cyber-pink text-xs font-mono">ACHIEVEMENTS</span>
                        <ul className="mt-2 space-y-1">
                          {edu.achievements.map((achievement, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.5 + i * 0.1 }}
                              className="text-xs font-mono text-gray-300 flex items-center gap-2"
                            >
                              <span className="text-cyber-green">▹</span>
                              {achievement}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
// 模拟存储路径: EducationSection_model/20260330_083341/EducationSection.tsx
'use client'

import { motion } from 'framer-motion'
import educationData from '@/data/education.json'

export default function EducationSection() {
  return (
    <div className="w-full max-w-full md:max-w-4xl px-4 md:px-8">
      {/* Section header */}
      <motion.div
        className="text-center mb-6 md:mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="font-tech text-2xl md:text-3xl text-white mb-2 tracking-wider">
          EDUCATION<span className="text-cyber-blue">_DATA</span>
        </h2>
        <div className="w-32 md:w-48 h-px bg-gradient-to-r from-transparent via-cyber-blue to-transparent mx-auto" />
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Center line - 大屏幕居中，小屏幕移到左侧 */}
        <div className="absolute left-4 md:left-[50%] top-0 bottom-0 w-px bg-gradient-to-b from-cyber-blue via-cyber-pink to-cyber-blue md:-translate-x-1/2" />

        {/* Data stream effect - 大屏幕居中，小屏幕移到左侧 */}
        <motion.div
          className="absolute left-4 md:left-[50%] top-0 w-1 h-full md:-translate-x-1/2"
          style={{
            background: 'linear-gradient(180deg, transparent 0%, #00d4ff 50%, transparent 100%)',
            backgroundSize: '100% 200%',
          }}
          animate={{ backgroundPosition: ['0% -100%', '0% 100%'] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        />

        {/* Education cards */}
        <div className="space-y-6 md:space-y-8">
          {educationData.education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative flex items-center justify-start md:justify-start pl-10 md:pl-0"
            >
              {/* Node on timeline - 小屏幕在左侧，大屏幕居中 */}
              <motion.div
                className="absolute left-4 md:left-[50%] -translate-x-1/2 w-3 h-3 md:w-4 md:h-4 rounded-full bg-cyber-blue border-2 border-white z-10"
                animate={{ 
                  boxShadow: [
                    '0 0 10px #00d4ff',
                    '0 0 20px #00d4ff, 0 0 30px #00d4ff',
                    '0 0 10px #00d4ff'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />

              {/* Card - 小屏幕全宽，大屏幕交替布局 */}
              <div className={`w-full md:w-[45%] ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
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
                    <div className="absolute top-0 left-0 w-3 h-3 md:w-4 md:h-4 border-t border-l border-cyber-blue" />
                    <div className="absolute top-0 right-0 w-3 h-3 md:w-4 md:h-4 border-t border-r border-cyber-blue" />
                    <div className="absolute bottom-0 left-0 w-3 h-3 md:w-4 md:h-4 border-b border-l border-cyber-pink" />
                    <div className="absolute bottom-0 right-0 w-3 h-3 md:w-4 md:h-4 border-b border-r border-cyber-pink" />

                    <div className="p-4 md:p-5">
                      {/* School logo */}
                      <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-white/10 border border-cyber-blue/30 overflow-hidden flex items-center justify-center flex-shrink-0">
                          {edu.logo ? (
                            <img 
                              src={edu.logo} 
                              alt={edu.school}
                              className="w-full h-full object-contain"
                            />
                          ) : (
                            <span className="font-tech text-cyber-blue text-base md:text-lg">{edu.school.charAt(0)}</span>
                          )}
                        </div>
                        <div className="min-w-0">
                          <h3 className="font-tech text-base md:text-lg text-white truncate">{edu.school}</h3>
                          <p className="text-cyber-blue font-mono text-xs md:text-sm">{edu.degree}</p>
                        </div>
                      </div>

                      {/* Details */}
                      <div className="space-y-1.5 md:space-y-2 font-mono text-xs md:text-sm">
                        <div className="flex justify-between">
                          <span className="text-cyber-blue">MAJOR:</span>
                          <span className="text-white text-right">{edu.major}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-cyber-blue">PERIOD:</span>
                          <span className="text-white text-right">{edu.period}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-cyber-blue">GPA:</span>
                          <span className="text-cyber-green text-right">{edu.gpa}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="mt-3 md:mt-4 text-gray-400 text-xs font-mono leading-relaxed">
                        {edu.description}
                      </p>

                      {/* Achievements */}
                      <div className="mt-3 md:mt-4 pt-2 md:pt-3 border-t border-cyber-blue/20">
                        <span className="text-cyber-pink text-xs font-mono">ACHIEVEMENTS</span>
                        <ul className="mt-2 space-y-1">
                          {edu.achievements.map((achievement, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.5 + i * 0.1 }}
                              className="text-xs font-mono text-gray-300 flex items-start gap-2"
                            >
                              <span className="text-cyber-green flex-shrink-0">▹</span>
                              <span className="break-words">{achievement}</span>
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
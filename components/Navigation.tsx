'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface NavigationProps {
  onNavigate: (section: string) => void
  activeSection: string
}

const navItems = [
  { id: 'home', label: '个人主页', icon: '⌂' },
  { id: 'education', label: '教育经历', icon: '◈' },
  { id: 'projects', label: '项目经历', icon: '◇' },
  { id: 'research', label: '研究动向', icon: '◉' },
]

export default function Navigation({ onNavigate, activeSection }: NavigationProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      className="fixed bottom-0 left-0 right-0 z-30 h-[70px] md:fixed md:right-4 md:left-auto md:bottom-4 md:w-[280px] md:h-auto lg:w-[384px] lg:right-6"
    >
      {/* Mobile: 底部水平导航栏 */}
      <div className="flex md:hidden flex-row items-center justify-around w-full h-full bg-cyber-dark/90 backdrop-blur-md border-t border-cyan-500/30 px-2">
        {navItems.map((item) => {
          const isActive = activeSection === item.id || (item.id === 'home' && activeSection === '')
          return (
            <motion.button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              whileTap={{ scale: 0.95 }}
              className={`
                relative flex flex-col items-center justify-center flex-1 py-2 px-1
                transition-all duration-300
                ${isActive
                  ? 'text-cyber-pink'
                  : 'text-cyber-blue/70 hover:text-cyber-blue'
                }
              `}
            >
              <span className={`text-xl ${isActive ? 'text-cyber-pink' : 'text-cyber-blue'}`}>
                {item.icon}
              </span>
              <span className="text-[10px] mt-1 font-tech tracking-wide">{item.label}</span>
              {isActive && (
                <motion.div
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-cyber-blue to-cyber-pink"
                  layoutId="mobileActiveIndicator"
                />
              )}
            </motion.button>
          )
        })}
      </div>

      {/* Desktop: 右下角2×2网格导航 */}
      <div className="hidden md:grid grid-cols-2 gap-2 w-full">
        {navItems.map((item, index) => {
          const isActive = activeSection === item.id || (item.id === 'home' && activeSection === '')
          return (
            <motion.button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className={`
                relative py-3 px-2 font-tech text-xs tracking-wider
                border border-cyber-blue/40 rounded-lg
                backdrop-blur-md overflow-hidden
                transition-all duration-300 text-center
                flex flex-col items-center justify-center gap-1
                min-h-[70px]
                ${isActive
                  ? 'bg-cyber-blue/20 text-white border-cyber-blue shadow-neon-blue'
                  : 'bg-cyber-dark/60 text-cyber-blue hover:bg-cyber-blue/10'
                }
              `}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Hover glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyber-blue/0 via-cyber-blue/20 to-cyber-pink/20"
                initial={{ x: '-100%' }}
                animate={{ x: hoveredIndex === index ? '100%' : '-100%' }}
                transition={{ duration: 0.5 }}
              />

              {/* Glitch effect on hover */}
              {hoveredIndex === index && (
                <>
                  <motion.div
                    className="absolute inset-0 bg-cyber-blue/10"
                    animate={{
                      x: [0, 2, -2, 0],
                      opacity: [0.5, 0, 0.5]
                    }}
                    transition={{ duration: 0.1, repeat: 3 }}
                  />
                </>
              )}

              {/* Button content */}
              <span className={`relative z-10 text-lg ${isActive ? 'text-cyber-pink' : 'text-cyber-blue'}`}>
                {item.icon}
              </span>
              <span className="relative z-10">{item.label}</span>

              {/* Active indicator */}
              {isActive && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyber-blue to-cyber-pink"
                  layoutId="activeIndicator"
                />
              )}

              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-cyber-blue/60" />
              <div className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-cyber-blue/60" />
              <div className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l border-cyber-blue/60" />
              <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-cyber-blue/60" />
            </motion.button>
          )
        })}
      </div>
    </motion.div>
  )
}
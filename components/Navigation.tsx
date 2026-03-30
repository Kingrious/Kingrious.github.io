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
  { id: 'research', label: '目前研究', icon: '◉' },
]

export default function Navigation({ onNavigate, activeSection }: NavigationProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      // 注意这里的 className：w-full max-w-[360px] 或者直接写死具体宽度
      // 必须与 PersonalHUD 的宽度类名保持绝对一致！
      className="fixed right-6 z-20 w-[340px] sm:w-[380px]"
      style={{ bottom: '100px' }}
    >
      <div className="relative flex flex-col gap-3 w-full">
        {navItems.map((item, index) => (
          <motion.button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            className={`
              relative w-full py-3 px-4 font-tech text-sm tracking-wider
              border border-cyber-blue/40 rounded-lg
              backdrop-blur-md overflow-hidden
              transition-all duration-300 text-center whitespace-nowrap
              flex items-center justify-center
              ${activeSection === item.id || (item.id === 'home' && activeSection === '')
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

            {/* Button content - 确保文字和图标在 w-full 下绝对水平居中 */}
            <span className="relative z-10 flex items-center justify-center w-full gap-2">
              <span className={`${activeSection === item.id || (item.id === 'home' && activeSection === '') ? 'text-cyber-pink' : 'text-cyber-blue'}`}>
                {item.icon}
              </span>
              <span>{item.label}</span>
            </span>

            {/* Active indicator */}
            {(activeSection === item.id || (item.id === 'home' && activeSection === '')) && (
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyber-blue to-cyber-pink"
                layoutId="activeIndicator"
              />
            )}

            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyber-blue/60" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-cyber-blue/60" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-cyber-blue/60" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyber-blue/60" />
          </motion.button>
        ))}
      </div>
    </motion.div>
  )
}
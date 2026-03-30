'use client'

import { motion, AnimatePresence } from 'framer-motion'
import EducationSection from './EducationSection'
import ProjectsSection from './ProjectsSection'
import ResearchSection from './ResearchSection'

interface ContentDisplayProps {
  activeSection: string | null
}

export default function ContentDisplay({ activeSection }: ContentDisplayProps) {
  const renderContent = () => {
    switch (activeSection) {
      case 'education':
        return <EducationSection />
      case 'projects':
        return <ProjectsSection />
      case 'research':
        return <ResearchSection />
      default:
        return <WelcomeScreen />
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-10 pointer-events-none">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection || 'welcome'}
          initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          exit={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="pointer-events-auto max-w-[80vw] md:max-w-[70vw] lg:max-w-[65vw] mr-8 lg:mr-16"
        >
          {renderContent()}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

function WelcomeScreen() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="text-center max-w-2xl"
    >
      {/* Glitch title effect */}
      <motion.h1
        className="font-tech text-6xl md:text-8xl font-bold text-white mb-6 relative"
        animate={{ 
          textShadow: [
            '0 0 10px rgba(0, 212, 255, 0.5)',
            '0 0 20px rgba(0, 212, 255, 0.8)',
            '0 0 10px rgba(0, 212, 255, 0.5)'
          ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Welcome
        <motion.span
          className="absolute inset-0 text-cyber-pink"
          animate={{ 
            x: [0, 2, -2, 0],
            opacity: [0, 0.5, 0]
          }}
          transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 3 }}
        >
          Welcome
        </motion.span>
      </motion.h1>

      <motion.p
        className="font-mono text-cyber-blue text-lg mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        Awaiting Input...
      </motion.p>

      {/* Animated command prompt */}
      <motion.div
        className="flex items-center justify-center gap-2 font-mono text-sm text-gray-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <span className="text-cyber-green">&gt;</span>
        <span className="text-cyber-blue">SELECT_AN_OPTION</span>
        <motion.span
          className="text-cyber-pink"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          _
        </motion.span>
      </motion.div>

      {/* Decorative elements */}
      <div className="mt-12 flex justify-center gap-4">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-2 h-2 rounded-full bg-cyber-blue"
            animate={{ 
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1]
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              delay: i * 0.2
            }}
          />
        ))}
      </div>
    </motion.div>
  )
}

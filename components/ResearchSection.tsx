'use client'

import { motion } from 'framer-motion'
import researchData from '@/data/research.json'

export default function ResearchSection() {
  return (
    <div className="w-full max-w-full md:max-w-4xl px-4 md:px-8">
      {/* Section header */}
      <motion.div
        className="text-center mb-6 md:mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="font-tech text-2xl md:text-3xl text-white mb-2 tracking-wider">
          RESEARCH<span className="text-cyber-green">_TIMELINE</span>
        </h2>
        <div className="w-32 md:w-48 h-px bg-gradient-to-r from-transparent via-cyber-green to-transparent mx-auto" />
      </motion.div>

      {/* Timeline container */}
      <div className="relative">
        {/* Main timeline line - hidden on mobile, visible on md+ */}
        <div className="hidden md:block absolute left-12 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyber-blue via-cyber-green to-cyber-pink" />
        
        {/* Mobile timeline line - thinner, left edge */}
        <div className="md:hidden absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyber-blue via-cyber-green to-cyber-pink" />
        
        {/* Energy flow effect - hidden on mobile */}
        <motion.div
          className="hidden md:block absolute left-12 top-0 w-0.5 h-full -translate-x-1/2"
          style={{
            background: 'linear-gradient(180deg, transparent 0%, #00ff88 50%, transparent 100%)',
            backgroundSize: '100% 200%',
          }}
          animate={{ backgroundPosition: ['0% -100%', '0% 100%'] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        />

        {/* Mobile energy flow effect */}
        <motion.div
          className="md:hidden absolute left-3 top-0 w-0.5 h-full -translate-x-1/2"
          style={{
            background: 'linear-gradient(180deg, transparent 0%, #00ff88 50%, transparent 100%)',
            backgroundSize: '100% 200%',
          }}
          animate={{ backgroundPosition: ['0% -100%', '0% 100%'] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        />

        {/* Research items */}
        <div className="space-y-6 md:space-y-8">
          {researchData.research.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-10 md:pl-24"
            >
              {/* Timeline node - smaller on mobile */}
              <motion.div
                className="absolute left-1 md:left-10 w-4 h-4 md:w-5 md:h-5 rounded-full border-2 border-cyber-green z-10"
                style={{ 
                  backgroundColor: 
                    item.status === '进行中' ? '#00ff88' : 
                    item.status === '规划中' ? '#00d4ff' : '#ff00ff'
                }}
                animate={{ 
                  boxShadow: [
                    '0 0 10px #00ff88',
                    '0 0 20px #00ff88, 0 0 30px #00ff88',
                    '0 0 10px #00ff88'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {/* Inner pulse */}
                <motion.div
                  className="absolute inset-1 rounded-full bg-white"
                  animate={{ scale: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>

              {/* Connector line - hidden on mobile */}
              <div className="hidden md:block absolute left-[4.5rem] top-8 w-4 h-0.5 bg-cyber-green/50" />

              {/* Card */}
              <div className="relative group">
                {/* Glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyber-green/10 to-cyber-blue/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative bg-hud-bg backdrop-blur-md border border-cyber-green/30 rounded-lg overflow-hidden">
                  {/* Scan line */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <motion.div
                      className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyber-green/30 to-transparent"
                      animate={{ y: ['0%', '300%'] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                    />
                  </div>

                  <div className="p-3 md:p-5">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-3 md:mb-4 gap-2">
                      <div className="flex-1 min-w-0">
                        <span className="text-cyber-blue text-[10px] md:text-xs font-mono">{item.startDate}</span>
                        <h3 className="font-tech text-base md:text-lg text-white mt-1 truncate">{item.title}</h3>
                      </div>
                      <span className={`
                        px-1.5 md:px-2 py-0.5 md:py-1 text-[10px] md:text-xs font-mono rounded border flex-shrink-0
                        ${item.status === '进行中' ? 'bg-cyber-green/20 text-cyber-green border-cyber-green/30' : ''}
                        ${item.status === '规划中' ? 'bg-cyber-blue/20 text-cyber-blue border-cyber-blue/30' : ''}
                      `}>
                        {item.status}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 text-xs md:text-sm font-mono leading-relaxed mb-3 md:mb-4">
                      {item.description}
                    </p>

                    {/* Progress bar */}
                    <div className="mb-3 md:mb-4">
                      <div className="flex justify-between text-[10px] md:text-xs font-mono mb-1">
                        <span className="text-cyber-green">PROGRESS</span>
                        <span className="text-white">{item.progress}%</span>
                      </div>
                      <div className="h-1.5 md:h-2 bg-cyber-dark rounded-full overflow-hidden border border-cyber-green/20">
                        <motion.div
                          className="h-full bg-gradient-to-r from-cyber-blue to-cyber-green rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${item.progress}%` }}
                          transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                        />
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4">
                      {item.tags.map((tag, i) => (
                        <motion.span
                          key={tag}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                          className="px-1.5 md:px-2 py-0.5 md:py-1 text-[10px] md:text-xs font-mono bg-cyber-blue/10 border border-cyber-blue/30 text-cyber-blue rounded"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    {/* Publications */}
                    {item.publications.length > 0 && (
                      <div className="pt-3 md:pt-4 border-t border-cyber-green/20">
                        <span className="text-cyber-pink text-[10px] md:text-xs font-mono">PUBLICATIONS</span>
                        <ul className="mt-1.5 md:mt-2 space-y-1">
                          {item.publications.map((pub, i) => (
                            <li
                              key={i}
                              className="text-[10px] md:text-xs font-mono text-gray-300 flex items-start gap-2"
                            >
                              <span className="text-cyber-pink flex-shrink-0 mt-0.5">◆</span>
                              <span className="break-words">{pub}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Corner decorations */}
                  <div className="absolute top-0 left-0 w-2 md:w-3 h-2 md:h-3 border-t border-l border-cyber-green/40" />
                  <div className="absolute top-0 right-0 w-2 md:w-3 h-2 md:h-3 border-t border-r border-cyber-green/40" />
                  <div className="absolute bottom-0 left-0 w-2 md:w-3 h-2 md:h-3 border-b border-l border-cyber-blue/40" />
                  <div className="absolute bottom-0 right-0 w-2 md:w-3 h-2 md:h-3 border-b border-r border-cyber-blue/40" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

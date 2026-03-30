'use client'

import { motion } from 'framer-motion'
import bioData from '@/data/bio.json'

export default function PersonalHUD() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="fixed top-6 right-6 z-20 max-w-sm"
    >
      <div className="relative">
        {/* Glow effect behind */}
        <div className="absolute -inset-1 bg-gradient-to-r from-cyber-blue/20 via-cyber-pink/20 to-cyber-blue/20 rounded-lg blur-md" />
        
        {/* Main HUD container */}
        <div className="relative bg-hud-bg backdrop-blur-md border border-cyber-blue/40 rounded-lg overflow-hidden">
          {/* Corner cuts */}
          <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-cyber-blue" />
          <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-cyber-blue" />
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-cyber-pink" />
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-cyber-pink" />
          
          {/* Scan line effect */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-cyber-blue/50 to-transparent"
              animate={{ y: ['0%', '100%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            />
          </div>

          {/* Content */}
          <div className="p-5">
            {/* Header with animated line */}
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                className="w-2 h-2 rounded-full bg-cyber-blue"
                animate={{ boxShadow: ['0 0 5px #00d4ff', '0 0 15px #00d4ff', '0 0 5px #00d4ff'] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-cyber-blue font-mono text-xs tracking-widest">PERSONAL_HUD</span>
              <div className="flex-1 h-px bg-gradient-to-r from-cyber-blue/50 to-transparent" />
            </div>

            {/* Name */}
            <h2 className="font-tech text-2xl font-bold text-white mb-1 tracking-wide">
              {bioData.name}
            </h2>
            {/* Title - 每2个换行 */}
            <div className="font-mono text-sm mb-4 text-cyber-blue">
              {bioData.title.split('\n').reduce((acc: string[][], _, i, arr) => {
                if (i % 2 === 0) acc.push(arr.slice(i, i + 2))
                return acc
              }, []).map((line, i) => (
                <span key={i}>
                  {line.join(' · ')}
                  {i < Math.ceil(bioData.title.split('\n').length / 2) - 1 && <br />}
                </span>
              ))}
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-cyber-blue/50 via-cyber-pink/50 to-cyber-blue/50 mb-4" />

            {/* Info grid */}
            <div className="grid grid-cols-2 gap-3 font-mono text-xs">
              <InfoItem label="Birth_Date" value={bioData.Birth_Date.toString()} />
              <InfoItem label="LOCATION" value={bioData.hometown} />
              <div className="col-span-2">
                <InfoItem label="STATUS" value={bioData.status} />
              </div>
            </div>

            {/* Bio */}
            <p className="mt-4 text-gray-400 text-xs font-mono leading-relaxed">
              {bioData.bio}
            </p>

            {/* Skills */}
            <div className="mt-4">
              <span className="text-cyber-pink text-xs font-mono">SKILLS</span>
              <div className="flex flex-wrap gap-2 mt-2">
                {bioData.skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="px-2 py-1 text-xs font-mono bg-cyber-blue/10 border border-cyber-blue/30 text-cyber-blue rounded"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="mt-4 pt-3 border-t border-cyber-blue/20 flex flex-col gap-2">
              <a 
                href={bioData.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-cyber-blue hover:text-white transition-colors break-all"
              >
                [GITHUB] {bioData.social.github}
              </a>
              <a 
                href={`mailto:${bioData.social.email}`}
                className="text-xs font-mono text-cyber-pink hover:text-white transition-colors break-all"
              >
                [EMAIL] {bioData.social.email}
              </a>
            </div>
          </div>
        </div>


      </div>
    </motion.div>
  )
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col">
      <span className="text-cyber-blue/60 text-[10px] tracking-wider">{label}</span>
      <span className="text-white text-sm">{value}</span>
    </div>
  )
}

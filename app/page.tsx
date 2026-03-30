'use client'

import { useState, useEffect } from 'react'
import CyberspaceBackground from '@/components/CyberspaceBackground'
import PersonalHUD from '@/components/PersonalHUD'
import Navigation from '@/components/Navigation'
import ContentDisplay from '@/components/ContentDisplay'

export default function Home() {
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [mouseCoord, setMouseCoord] = useState({ x: 0, y: 0 })

  const handleNavigate = (section: string) => {
    if (section === 'home') {
      setActiveSection(null)
    } else {
      setActiveSection(activeSection === section ? null : section)
    }
  }

  // 监听鼠标移动和点击，更新坐标
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouseCoord({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    // 注意：去掉了 bg-cyber-black，让画布主导背景
    <main className="relative min-h-screen w-full overflow-hidden bg-transparent">
      
      {/* 极客星空背景 - 处于 z-0 层级 */}
      <CyberspaceBackground />

      {/* 以下所有 UI 内容组件层级都在 z-10 及以上 */}
      <div className="relative z-10">
        {/* Personal HUD - Top Right */}
        <PersonalHUD />

        {/* Center Content Display */}
        <ContentDisplay activeSection={activeSection} />

        {/* Navigation - Bottom */}
        <Navigation onNavigate={handleNavigate} activeSection={activeSection || ''} />
      </div>

      {/* Decorative corner elements */}
      <div className="fixed top-4 left-4 z-20 pointer-events-none">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-cyber-blue animate-pulse" />
          <span className="font-mono text-xs text-cyber-blue">SYS_ONLINE</span>
        </div>
        <div className="mt-1 text-xs font-mono text-gray-500">
          v2.0.26 | Build 2026.03
        </div>
      </div>

      {/* Bottom left info */}
      <div className="fixed bottom-4 left-4 z-20 pointer-events-none">
        <div className="font-mono text-xs text-gray-600">
          <span className="text-cyber-blue">COORD:</span>
          <span className="ml-1">X:{mouseCoord.x} Y:{mouseCoord.y}</span>
        </div>
      </div>

      {/* Scanline overlay effect */}
      <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.02]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 212, 255, 0.03) 2px, rgba(0, 212, 255, 0.03) 4px)',
          }}
        />
      </div>
    </main>
  )
}
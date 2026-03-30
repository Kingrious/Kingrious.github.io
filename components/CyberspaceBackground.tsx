'use client'

import { useEffect, useRef } from 'react'

export default function CyberspaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let particles: any[] = []
    const mouse = { x: -1000, y: -1000 }
    
    // 核心参数配置
    const PARTICLE_COUNT = 250   // 粒子总数
    const MAX_DIST = 280         // 鼠标影响半径
    const CONNECT_DIST = 110     // 连线最大距离

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    const initParticles = () => {
      particles = []
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          originX: Math.random() * canvas.width,
          originY: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5, // 基础漂移速度
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 1.5 + 0.5,
          active: 0 // 亮度/活跃度：0为暗，1为最亮
        })
      }
    }

    const draw = () => {
      // 创造拖尾残影效果 (透明度0.15控制拖尾长度)
      ctx.fillStyle = 'rgba(5, 5, 8, 0.15)' 
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // 更新与绘制粒子
      particles.forEach((p) => {
        // 让粒子的"锚点"自由漂移
        p.originX += p.vx
        p.originY += p.vy
        
        // 边缘环绕
        if (p.originX < 0) p.originX = canvas.width
        if (p.originX > canvas.width) p.originX = 0
        if (p.originY < 0) p.originY = canvas.height
        if (p.originY > canvas.height) p.originY = 0

        const dx = mouse.x - p.x
        const dy = mouse.y - p.y
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < MAX_DIST) {
          // 鼠标靠近：物理聚集与点亮
          const force = (MAX_DIST - dist) / MAX_DIST
          p.x += dx * force * 0.04
          p.y += dy * force * 0.04
          p.active += (force - p.active) * 0.15
        } else {
          // 鼠标远离：缓慢弹回原点并熄灭
          p.x += (p.originX - p.x) * 0.02
          p.y += (p.originY - p.y) * 0.02
          p.active -= 0.015
        }

        // 限制活跃度范围 [0, 1]
        p.active = Math.max(0, Math.min(1, p.active))

        // 绘制单个粒子
        if (p.active > 0.05) {
          // 鼠标影响下的高亮蓝紫粒子
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.size * (1 + p.active), 0, Math.PI * 2)
          ctx.fillStyle = `rgba(0, 212, 255, ${p.active * 0.9})` // 赛博蓝
          ctx.fill()
        } else {
           // 无人问津时的暗色背景粒子
           ctx.beginPath()
           ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
           ctx.fillStyle = `rgba(255, 255, 255, 0.03)` 
           ctx.fill()
        }
      })

      // 绘制粒子间的星轨网络
      ctx.lineWidth = 0.6
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i]
          const p2 = particles[j]
          
          // 如果两个粒子都很暗，则不消耗性能连线
          if (p1.active < 0.05 && p2.active < 0.05) continue

          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < CONNECT_DIST) {
            const maxActive = Math.max(p1.active, p2.active)
            // 距离越近、粒子越亮，连线越清晰
            const opacity = (1 - dist / CONNECT_DIST) * maxActive
            
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(138, 43, 226, ${opacity})` // 紫罗兰色连线
            ctx.stroke()
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw)
    }

    const handlePointerMove = (e: PointerEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    const handlePointerLeave = () => {
      mouse.x = -1000
      mouse.y = -1000
    }

    // 初始化与事件绑定
    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('pointerleave', handlePointerLeave)

    resize()
    draw()

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerleave', handlePointerLeave)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      // 固定在底层，且不阻挡鼠标事件，让下方UI可以被点击
      className="fixed inset-0 z-0 pointer-events-none"
      // 基础底色设为深渊黑
      style={{ background: '#050508' }} 
    />
  )
}
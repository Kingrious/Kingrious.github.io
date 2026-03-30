'use client'

import { useEffect, useRef } from 'react'

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let mouseX = -1000
    let mouseY = -1000
    const particles: Particle[] = []
    const PARTICLE_COUNT = 120
    const MOUSE_RADIUS = 150

    class Particle {
      x: number
      y: number
      baseX: number
      baseY: number
      size: number
      color: string
      opacity: number
      targetOpacity: number

      constructor() {
        this.x = Math.random() * canvas!.width
        this.y = Math.random() * canvas!.height
        this.baseX = this.x
        this.baseY = this.y
        this.size = Math.random() * 2 + 1
        this.color = this.getRandomColor()
        this.opacity = 0.05
        this.targetOpacity = 0.05
      }

      getRandomColor() {
        const colors = ['#00d4ff', '#8b5cf6', '#a855f7', '#6366f1', '#00ffff']
        return colors[Math.floor(Math.random() * colors.length)]
      }

      update() {
        const dx = mouseX - this.x
        const dy = mouseY - this.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < MOUSE_RADIUS) {
          const force = (MOUSE_RADIUS - distance) / MOUSE_RADIUS
          this.targetOpacity = 0.3 + force * 0.7
          this.x = this.baseX - dx * force * 0.3
          this.y = this.baseY - dy * force * 0.3
        } else {
          this.targetOpacity = 0.05
          this.x += (this.baseX - this.x) * 0.05
          this.y += (this.baseY - this.y) * 0.05
        }

        this.opacity += (this.targetOpacity - this.opacity) * 0.1
      }

      draw() {
        ctx!.beginPath()
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx!.fillStyle = this.color
        ctx!.globalAlpha = this.opacity
        ctx!.fill()

        if (this.opacity > 0.3) {
          ctx!.shadowBlur = 15
          ctx!.shadowColor = this.color
        }
      }
    }

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      particles.forEach(p => {
        p.baseX = Math.random() * canvas.width
        p.baseY = Math.random() * canvas.height
      })
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const handleMouseLeave = () => {
      mouseX = -1000
      mouseY = -1000
    }

    const init = () => {
      resize()
      particles.length = 0
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push(new Particle())
      }
    }

    const animate = () => {
      ctx.fillStyle = '#000000'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.shadowBlur = 0
      particles.forEach(p => {
        p.update()
        p.draw()
      })

      ctx.globalAlpha = 1
      animationId = requestAnimationFrame(animate)
    }

    init()
    animate()

    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10"
      style={{ display: 'block' }}
    />
  )
}

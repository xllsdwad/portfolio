import { useEffect, useRef } from 'react'
import './Hero.css'

export default function Hero() {
  const canvasRef = useRef(null)
  const videoRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationId
    let offscreen = null

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      // Rebuild offscreen grid
      offscreen = document.createElement('canvas')
      offscreen.width = canvas.width
      offscreen.height = canvas.height
      const octx = offscreen.getContext('2d')
      octx.strokeStyle = 'rgba(167, 139, 250, 0.025)'
      octx.lineWidth = 0.5
      const gs = 60
      for (let x = 0; x < canvas.width; x += gs) {
        octx.beginPath(); octx.moveTo(x, 0); octx.lineTo(x, canvas.height); octx.stroke()
      }
      for (let y = 0; y < canvas.height; y += gs) {
        octx.beginPath(); octx.moveTo(0, y); octx.lineTo(canvas.width, y); octx.stroke()
      }
    }
    resize()
    window.addEventListener('resize', resize)

    // Particles with connection lines
    const particles = Array.from({ length: 300 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 2 + 1,
      alpha: Math.random() * 0.4 + 0.1,
    }))

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      // Draw pre-rendered grid
      if (offscreen) ctx.drawImage(offscreen, 0, 0)

      // Draw connections (limited)
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(167, 139, 250, ${0.06 * (1 - dist / 120)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      // Draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(167, 139, 250, ${p.alpha})`
        ctx.fill()
      }

      animationId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
      offscreen = null
    }
  }, [])

  return (
    <section id="hero" className="hero">
      <video ref={videoRef} className="hero-video-bg" autoPlay muted loop playsInline poster="/video/bg.jpg" onLoadedMetadata={() => { if (videoRef.current) videoRef.current.playbackRate = 0.5; }}>
        <source src="/video/bg.mp4" type="video/mp4" />
      </video>
      <div className="hero-video-overlay" />
      <canvas ref={canvasRef} className="hero-canvas" />
      <div className="hero-gradient-overlay" />
      <div className="hero-scanline" />

      <div className="hero-content container">
        <div className="hero-badge">
          <span className="badge-dot" />
          三维动画 / 赛博朋克视觉
        </div>
        <h1 className="hero-title">
          周思宇
          <br />
          <span className="hero-title-accent">3D Animator & Visual Creator</span>
        </h1>
        <p className="hero-desc">
          四川电影电视学院 · 影视动画专业本科在读，2026届。
          以三维动画与赛博朋克美学为方向，探索视觉叙事的更多可能。
        </p>
       <div className="hero-actions">
         <a href="#about" className="hero-btn-primary">
          关于我
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
             <path d="M3 9H15M15 9L9 3M15 9L9 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
           </svg>
         </a>
       </div>
      </div>

      <div className="hero-scroll-indicator">
        <span className="scroll-text">Scroll</span>
        <span className="scroll-line" />
      </div>

      <div className="hero-corner tl" /><div className="hero-corner tr" />
      <div className="hero-corner bl" /><div className="hero-corner br" />
    </section>
  )
}

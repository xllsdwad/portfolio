import { useState, useEffect, useRef } from 'react'
import "./Navbar.css"

const navLinks = [
  { label: "首页", href: "#hero" },
  { label: "关于", href: "#about" },
  { label: "作品", href: "#projects" },
  { label: "能力", href: "#strengths" },
  { label: "联系", href: "#contact" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [musicOn, setMusicOn] = useState(true)
  const audioRef = useRef(null)
  const interacted = useRef(false)
  const musicOnRef = useRef(true)
  const pausedByVideoRef = useRef(false)

  const FADE_DURATION = 800
  const TARGET_VOL = 0.03125

  useEffect(() => {
    musicOnRef.current = musicOn
  }, [musicOn])

  const setVolume = (v) => {
    if (audioRef.current) audioRef.current.volume = Math.max(0, Math.min(1, v))
  }

  const fadeTo = (from, to, dur) => {
    const start = performance.now()
    const step = (now) => {
      const p = Math.min((now - start) / dur, 1)
      setVolume(from + (to - from) * p)
      if (p < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }

  useEffect(() => {
    const startOnInteraction = () => {
      if (audioRef.current && musicOnRef.current && audioRef.current.paused) {
        const playPromise = audioRef.current.play()
        if (playPromise !== undefined) {
          playPromise.then(function() { interacted.current = true }).catch(function() {})
        } else {
          interacted.current = true
        }
      }
    }
    const markInteracted = () => {
      if (!interacted.current) {
        interacted.current = true
      }
    }


    const onVideoPlay = () => {
      if (audioRef.current && musicOnRef.current) {
        pausedByVideoRef.current = true
        fadeTo(TARGET_VOL, 0, 300)
        setTimeout(() => {
          if (audioRef.current) audioRef.current.pause()
          setMusicOn(false)
        }, 300)
      }
    }

    // Click to resume music when paused by video
    const resumeOnClick = () => {
      if (pausedByVideoRef.current) {
        if (audioRef.current && !musicOnRef.current) {
          pausedByVideoRef.current = false
          setVolume(0)
          audioRef.current.play().catch(() => {})
          fadeTo(0, TARGET_VOL, FADE_DURATION)
          setMusicOn(true)
        }
      }
    }

    setVolume(TARGET_VOL)
    window.addEventListener("click", startOnInteraction)
    window.addEventListener("touchstart", startOnInteraction)
    window.addEventListener("wheel", markInteracted)
    window.addEventListener("touchmove", markInteracted)
    window.addEventListener("keydown", startOnInteraction)
    window.addEventListener("video-play", onVideoPlay)
    window.addEventListener("click", resumeOnClick)

    return () => {
      window.removeEventListener("click", startOnInteraction)
      window.removeEventListener("touchstart", startOnInteraction)
    window.removeEventListener("wheel", markInteracted)
    window.removeEventListener("touchmove", markInteracted)
      window.removeEventListener("keydown", startOnInteraction)
      window.removeEventListener("video-play", onVideoPlay)
      window.removeEventListener("click", resumeOnClick)
    }
  }, [])

  const toggleMusic = () => {
    if (musicOn) {
      pausedByVideoRef.current = false
      fadeTo(TARGET_VOL, 0, FADE_DURATION)
      setTimeout(() => {
        if (audioRef.current) audioRef.current.pause()
        setMusicOn(false)
      }, FADE_DURATION)
    } else {
      pausedByVideoRef.current = false
      setVolume(0)
      audioRef.current.play().catch(() => {})
      fadeTo(0, TARGET_VOL, FADE_DURATION)
      setMusicOn(true)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
      const sections = navLinks.map((l) => l.href.slice(1))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 300) {
          setActiveSection(sections[i])
          break
        }
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={"navbar" + (scrolled ? " scrolled" : "")}>
      <div className="navbar-inner container">
        <a href="#hero" className="navbar-logo">
          <span className="logo-icon"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="1" y="1" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="1.5" /><path d="M6 14L10 6L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M7.5 11.5H12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg></span>
          <span className="logo-text">周思宇</span>
        </a>
        <div className="navbar-links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={"nav-link" + (activeSection === link.href.slice(1) ? " active" : "")}>{link.label}</a>
          ))}
        </div>
        <div className="navbar-right">
        <audio ref={audioRef} src="/music/bg.mp3" loop preload="auto" autoPlay />
        <button className={"music-toggle" + (musicOn ? " playing" : "")} onClick={toggleMusic} aria-label="背景音乐开关">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="6.5" width="3.5" height="7" rx="0.8" />
            <path d="M6.5 5.5L11 2v16L6.5 14.5" />
            <path d="M13 7Q16 10 13 13" opacity={musicOn ? 1 : 0} />
            <path d="M15.5 4.5Q19.5 10 15.5 15.5" opacity={musicOn ? 0.5 : 0} />
            <line x1="13" y1="7" x2="18" y2="13" opacity={musicOn ? 0 : 1} />
            <line x1="18" y1="7" x2="13" y2="13" opacity={musicOn ? 0 : 1} />
          </svg>
        </button>
        </div>
      </div>
    </nav>
  )
}


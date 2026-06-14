import { useState, useEffect, useRef } from "react"
import "./Projects.css"

const projects = [
    { id: 1, title: "Virus", category: "三维动画短片", subtitle: "赛博朋克美学实践 · 毕业设计", tags: ["Blender", "赛博朋克", "角色动画"], gradient: "linear-gradient(135deg, #0d0221, #1a0a3e, #0f3460)", accent: "#A78BFA", desc: "以记忆可被拷贝的未来为背景，讲述仿生机器人陷入身份迷失的科幻故事。使用Blender全程创作，DaVinci Resolve调色后期。", video: "/video/demo.mp4", poster: "/video/poster.jpg", thumb: "/images/virus_preview.jpg" },
    { id: 2, title: "请问要来点薯条吗", category: "三维动画", subtitle: "动画期末作业 · 角色动画练习", tags: ["Blender", "角色动画", "运动规律"], gradient: "linear-gradient(135deg, #0d0221, #1a0a3e, #2d1b69)", accent: "#F59E0B", desc: "动画课程期末作业，通过角色表演练习动画运动规律与表演节奏，讲述一个关于薯条的趣味小故事。", video: "/video/fries.mp4", poster: "/video/fries.jpg", thumb: "/images/fries_preview.jpg" },
    { id: 3, title: "小雨伞大世界", category: "AI绘本动画练习", subtitle: "AI辅助绘本动画 · 创意实践", tags: ["即梦AI", "Stable Diffusion", "AI动画"], gradient: "linear-gradient(135deg, #0a1628, #1a2744, #2d1b69)", accent: "#22D3EE", desc: "使用AI工具辅助创作的绘本动画练习作品，探索AI在动画叙事中的应用可能。", video: "/video/umbrella.mp4", poster: "/video/umbrella.jpg", thumb: "/images/umbrella_preview.jpg" },
    { id: 7, title: "即梦AI视觉实验", category: "AI生成动画", subtitle: "AI生成视频 · 光影氛围探索", tags: ["即梦AI", "AI生成", "视觉实验"], gradient: "linear-gradient(135deg, #0a1628, #1a2744, #2d1b69)", accent: "#22D3EE", desc: "使用即梦AI探索AI生成视频的视觉可能性，从晨光到洞穴、从雨窗到案头，每一帧都在尝试AI影像与氛围叙事的边界。", videos: ["/video/ai/01.mp4", "/video/ai/02.mp4", "/video/ai/04.mp4", "/video/ai/05.mp4", "/video/ai/03.mp4"] },
    { id: 4, title: "别跑！我抓住你啦！", category: "绘本创作", subtitle: "手绘绘本 · 完整故事", tags: ["故事创作", "插画", "手绘"], gradient: "linear-gradient(135deg, #1a0a2e, #0f2027, #2c3e50)", accent: "#F59E0B", desc: "手绘绘本作品，讲述主人公小明与老奶奶拾金不昧的温暖故事。涵盖封面、环衬、正文到版权的完整绘本结构。", photos: ["/images/picbook_绘本封面封底.jpg", "/images/picbook_前环衬.jpg", "/images/picbook_扉页_版权页.jpg", "/images/picbook_p1-p2.jpg", "/images/picbook_p3-p4.jpg", "/images/picbook_p5-p6.jpg", "/images/picbook_P7-P8.jpg", "/images/picbook_p9-p10.jpg", "/images/picbook_p11-p12.jpg", "/images/picbook_P13-P14.jpg", "/images/picbook_p15-p16.jpg", "/images/picbook_后环衬.jpg"] },
    { id: 5, title: "分镜头作品集", category: "分镜头练习", subtitle: "动画分镜作业 · 故事板合集", tags: ["分镜", "故事板", "叙事", "机位图"], gradient: "linear-gradient(135deg, #0d1b2a, #1b2838, #1e3a5f)", accent: "#34D399", desc: "动画分镜课程作业合集，涵盖穿越题材故事板、上学路场景分镜以及动物角色分镜设计。", photos: ["/images/storyboard_1.jpg", "/images/storyboard_2.jpg", "/images/storyboard_3.jpg", "/images/storyboard_4.jpg", "/images/storyboard_5.jpg", "/images/storyboard_school_1.jpg", "/images/storyboard_school_2.jpg", "/images/storyboard_school_3.jpg", "/images/storyboard_school_4.jpg", "/images/storyboard_school_5.jpg", "/images/storyboard_badger_1.jpg", "/images/storyboard_badger_2.jpg", "/images/storyboard_badger_3.jpg"] },
   { id: 6, title: "光影叙事", category: "摄影作品", subtitle: "商品布光 · 风景摄影", tags: ["摄影摄像", "布光", "曝光控制"], gradient: "linear-gradient(135deg, #0d1b2a, #1b2838, #1e3a5f)", accent: "#60A5FA", desc: "摄影课程作业精选，涵盖商品布光练习与自然风景记录，通过镜头语言记录光影故事。", photos: ["/images/photo_lighting_1.jpg", "/images/photo_lighting_2.jpg", "/images/photo_lighting_3.jpg", "/images/photo_exposure_1.jpg", "/images/photo_exposure_2.jpg", "/images/photo_exposure_3.jpg"] }

]

export default function Projects() {
  const [hoveredId, setHoveredId] = useState(null)
  const [playingVideo, setPlayingVideo] = useState(null)
  const [modal, setModal] = useState(null)
  const [photoIdx, setPhotoIdx] = useState(0)
  const [carouselIdx, setCarouselIdx] = useState({})
  const handleCarouselNav = function(projectId, dir) {
    const project = projects.find(function(p) { return p.id === projectId })
    if (!project || !project.videos) return
    setCarouselIdx(function(prev) {
      const current = prev[projectId] || 0
      const total = project.videos.length
      return Object.assign({}, prev, { [projectId]: (current + dir + total) % total })
    })
  }

  const handleCardClick = (e, project) => {
    if (project.video || project.videos) {
      setPlayingVideo(project.id)
      window.dispatchEvent(new CustomEvent("video-play"))
    } else if (project.photos) {
      setModal(project)
      setPhotoIdx(0)
      document.body.style.overflow = "hidden"
      // window.dispatchEvent(new CustomEvent('video-play'))
    }
  }

  const closeVideo = (e, projectId) => {
    e.stopPropagation()
    setPlayingVideo(null)
    
  }

  const closeModal = () => {
    setModal(null)
    document.body.style.overflow = ""
    
  }

  const prevPhoto = () => {
    if (!modal) return
    setPhotoIdx(function(i) { return (i - 1 + modal.photos.length) % modal.photos.length })
  }

  const nextPhoto = () => {
    if (!modal) return
    setPhotoIdx(function(i) { return (i + 1) % modal.photos.length })
  }

  useEffect(function() {
    if (!modal) return
    function handleKey(e) {
      if (e.key === "ArrowLeft") { prevPhoto(); e.preventDefault() }
      if (e.key === "ArrowRight") { nextPhoto(); e.preventDefault() }
      if (e.key === "Escape") { closeModal(); e.preventDefault() }
    }
    function handleWheel(e) {
      if (e.deltaY > 0) { nextPhoto(); e.preventDefault() }
      if (e.deltaY < 0) { prevPhoto(); e.preventDefault() }
    }
    window.addEventListener("keydown", handleKey)
    window.addEventListener("wheel", handleWheel, { passive: false })
    return function() {
      window.removeEventListener("keydown", handleKey)
      window.removeEventListener("wheel", handleWheel)
    }
  }, [modal, photoIdx])

  return (
    <>
      <section id="projects" className="projects section">
        <div className="container">
          <div className="projects-header">
            <span className="section-label">精选作品</span>
            <h2 className="section-title">创作项目</h2>
            <p className="section-subtitle">从三维动画到概念设计，每个项目都是对视觉叙事的探索与实践。</p>
          </div>
          <div className="projects-grid">
            {projects.map(function(project) {
              return (
                <div key={project.id} className={"project-card" + (hoveredId === project.id ? " hovered" : "") + (hoveredId !== null && hoveredId !== project.id ? " blurred" : "")} onMouseEnter={function() { setHoveredId(project.id) }} onMouseLeave={function() { setHoveredId(null) }} onClick={function(e) { handleCardClick(e, project) }}>
                  <div className="project-card-visual" style={{ background: project.gradient || "var(--bg-card)" }}>
                    {project.videos && playingVideo === project.id ? (
                      <div className="inline-video-wrapper">
                        <video key={carouselIdx[project.id] || 0} className="inline-video" controls autoPlay playsInline>
                          <source src={project.videos[carouselIdx[project.id] || 0]} type="video/mp4" />
                        </video>
                        <div className="player-counter">{(carouselIdx[project.id] || 0) + 1} / {project.videos.length}</div>
                        <button className="carousel-player-btn carousel-player-prev" onClick={function(e) { e.stopPropagation(); handleCarouselNav(project.id, -1) }}>
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M13 4L7 10L13 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </button>
                        <button className="carousel-player-btn carousel-player-next" onClick={function(e) { e.stopPropagation(); handleCarouselNav(project.id, 1) }}>
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </button>
                        <button className="inline-video-close" onClick={function(e) { closeVideo(e, project.id) }}>
                          <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M4 4L14 14M14 4L4 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                        </button>
                      </div>
                    ) : project.videos ? (
                      <div className="card-carousel" style={{ background: project.gradient }}>
                        <video key={carouselIdx[project.id] || 0} src={project.videos[carouselIdx[project.id] || 0]} muted preload="metadata" className="carousel-video-poster" />
                        <button className="card-carousel-btn card-carousel-prev" onClick={function(e) { e.stopPropagation(); handleCarouselNav(project.id, -1) }}>
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </button>
                        <button className="card-carousel-btn card-carousel-next" onClick={function(e) { e.stopPropagation(); handleCarouselNav(project.id, 1) }}>
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </button>
                        <span className="carousel-video-count">{(carouselIdx[project.id] || 0) + 1} / {project.videos.length}</span>
                        <div className="card-carousel-dots">
                          {project.videos.map(function(_, i) {
                            var activeClass = (carouselIdx[project.id] || 0) === i ? " active" : "";
                            return <span key={i} className={"card-carousel-dot" + activeClass} onClick={function(e) { e.stopPropagation(); setCarouselIdx(function(prev) { var n = {}; Object.assign(n, prev); n[project.id] = i; return n; }) }} />
                          })}
                        </div>
                      </div>
                    ) : project.video && playingVideo === project.id ? (
                      <div className="inline-video-wrapper">
                        <video className="inline-video" controls autoPlay playsInline poster={project.poster} onEnded={function() { setPlayingVideo(null);  }}>
                          <source src={project.video} type="video/mp4" />
                        </video>
                        <button className="inline-video-close" onClick={function(e) { closeVideo(e, project.id) }}>
                          <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M4 4L14 14M14 4L4 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                        </button>
                      </div>
                    ) : project.photos ? (
                      <div className="photo-preview-grid">
                        {project.photos.slice(0, 4).map(function(p, i) { return <img key={i} src={p} alt="作品" className="photo-preview-img" /> })}
                      </div>
                    ) : project.thumb ? <img src={project.thumb} alt={project.title} className="project-thumb-img" /> : <div className="project-visual-grid" />}
                    <div className="project-visual-corner" style={{ borderColor: project.accent }} />
                    {playingVideo !== project.id && (
                      <div className="project-visual-overlay">
                        <span className="project-view-btn" style={{ borderColor: project.accent, color: project.accent }}>
                          {project.video || project.videos ? <><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 2L14 8L4 14V2Z" fill="currentColor"/></svg>播放作品</> : <><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="1" y="2" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.3"/><circle cx="6" cy="7" r="1.5" stroke="currentColor" strokeWidth="1.3"/><path d="M1 10L5 7L9 10L11 8L15 11" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>查看作品</>}
                        </span>
                      </div>
                    )}
                    <div className="project-badge" style={{ background: project.accent + "15", color: project.accent, borderColor: project.accent + "30" }}>{project.category}</div>
                  </div>
                  <div className="project-card-info">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-subtitle">{project.subtitle}</p>
                    <p className="project-desc">{project.desc}</p>
                    <div className="project-tags">{project.tags.map(function(tag) { return <span key={tag} className="project-tag">{tag}</span> })}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {modal && (
        <div className="photo-viewer" onClick={closeModal}>
          <div className="photo-viewer-content" onClick={function(e) { e.stopPropagation() }}>
            <div className="photo-viewer-topbar">
              <span className="photo-viewer-counter">{photoIdx + 1} / {modal.photos.length}</span>
              <span className="photo-viewer-title">{modal.title}</span>
              <button className="photo-viewer-close" onClick={closeModal}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              </button>
            </div>
            <div className="photo-viewer-body">
              <button className="photo-viewer-nav photo-viewer-prev" onClick={prevPhoto}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              <div className="photo-viewer-image-wrap">
                <img src={modal.photos[photoIdx]} alt={"作品 " + (photoIdx + 1)} className="photo-viewer-image" />
              </div>
              <button className="photo-viewer-nav photo-viewer-next" onClick={nextPhoto}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>
            <div className="photo-thumbstrip">
              {modal.photos.map(function(p, i) {
                return (
                  <img key={i} src={p} alt={"" + (i+1)}
                    className={"photo-thumbstrip-img" + (photoIdx === i ? " active" : "")}
                    onClick={function() { setPhotoIdx(i) }}
                  />
                )
              })}
            </div>
          </div>
        </div>
      )}
    </>
  )
}



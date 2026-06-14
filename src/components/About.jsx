import './About.css'

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-grid">
          <div className="about-visual">
            <div className="avatar-frame">
              <div className="avatar-placeholder">
                <img src="/images/avatar.png" alt="周思宇" className="avatar-img" />
                <div className="avatar-ring" />
              </div>
            </div>
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">2026</span>
                <span className="stat-label">毕业届</span>
              </div>

              <div className="stat-divider" />
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">作品项目</span>
              </div>
            </div>
          </div>

          <div className="about-info">
            <span className="section-label">关于我</span>
            <h2 className="section-title">
              周思宇 · 动画创作者
              <br />
              以赛博朋克美学探索三维世界
            </h2>
            <p className="about-desc">
              四川电影电视学院 · 新媒体学院影视动画专业本科毕业生（2022-2026）。
              热爱摄影与视觉艺术，具备扎实的美术功底和敏锐的视觉审美，
              擅长通过镜头捕捉故事感画面。
            </p>
            <p className="about-desc">
              熟练运用 <strong>Blender</strong>、<strong>Photoshop</strong>、
              <strong>Premiere Pro</strong>、<strong>DaVinci Resolve</strong>、
              <strong>CSP</strong>、<strong>剪映</strong> 等创作工具，
              同时积极探索AI辅助创作工作流，熟悉 <strong>Stable Diffusion</strong>、
              <strong>即梦AI</strong> 等视觉生成工具，
              以及 <strong>ChatGPT</strong>、<strong>DeepSeek</strong>、
              <strong>Codex</strong> 等AI协作平台。
              具备从前期概念设计到后期制作的全流程执行能力。
              毕业设计以赛博朋克三维动画短片《Virus》为核心，
              探索三维动画中赛博朋克美学的视觉表达。
            </p>
            <p className="about-desc about-quote">
              "AI 不会取代创作者，但驾驭 AI 的创作者，正在定义下一代的视觉语言。"
            </p>

            <div className="about-contact">
              <div className="contact-row">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3 4.5C3 3.67157 3.67157 3 4.5 3H13.5C14.3284 3 15 3.67157 15 4.5V13.5C15 14.3284 14.3284 15 13.5 15H4.5C3.67157 15 3 14.3284 3 13.5V4.5Z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 6L9 10L15 6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>2914412512@qq.com</span>
              </div>
              <div className="contact-row">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M15.75 12.25V14.75C15.75 15.1642 15.4142 15.5 15 15.5C8.06294 15.5 2.5 9.93706 2.5 3C2.5 2.58579 2.83579 2.25 3.25 2.25H5.75C6.16421 2.25 6.5 2.58579 6.5 3V3.75C6.5 5.49121 6.15933 7.15202 5.53769 8.67253C5.41178 8.98039 5.48951 9.33282 5.73223 9.57554L8.42446 12.2678C8.66718 12.5105 9.01961 12.5882 9.32747 12.4623C10.848 11.8407 12.5088 11.5 14.25 11.5H15C15.4142 11.5 15.75 11.8358 15.75 12.25Z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>+86 198-2823-6191</span>
              </div>
              <div className="contact-row">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M9 16.5C9 16.5 14.5 12 14.5 7.5C14.5 4.46243 12.0376 2 9 2C5.96243 2 3.5 4.46243 3.5 7.5C3.5 12 9 16.5 9 16.5Z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 10C10.3807 10 11.5 8.88071 11.5 7.5C11.5 6.11929 10.3807 5 9 5C7.61929 5 6.5 6.11929 6.5 7.5C6.5 8.88071 7.61929 10 9 10Z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Chengdu, China</span>
              </div>
            </div>

            <a href="#projects" className="about-cta">
              我的作品
             <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

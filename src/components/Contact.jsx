import './Contact.css'

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-canvas-bg" />
      <div className="contact-overlay" />

      <div className="contact-content container">
        <div className="contact-header">
          <span className="section-label" style={{ color: '#A78BFA' }}>联系我</span>
          <h2 className="contact-title">
            一起创作
            <br />
            <span className="contact-title-accent">下一个视觉故事</span>
          </h2>
          <p className="contact-subtitle">
            无论是项目合作还是创意交流，欢迎随时联系。
          </p>
        </div>

        <div className="contact-body">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-item-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M3 5C3 3.89543 3.89543 3 5 3H15C16.1046 3 17 3.89543 17 5V15C17 16.1046 16.1046 17 15 17H5C3.89543 17 3 16.1046 3 15V5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 7L10 11L17 7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <span className="contact-item-label">邮箱</span>
                <a href="mailto:2914412512@qq.com" className="contact-item-value">2914412512@qq.com</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M5 10C5 7.23858 7.23858 5 10 5H14C16.7614 5 19 7.23858 19 10V12C19 14.7614 16.7614 17 14 17H10C9.2 17 8.4 16.8 7.7 16.4L5 17.5L6.3 15.2C5.5 14 5 12.6 5 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 10C9 10.5523 8.55228 11 8 11C7.44772 11 7 10.5523 7 10C7 9.44772 7.44772 9 8 9C8.55228 9 9 9.44772 9 10Z" fill="currentColor"/>
                  <path d="M13 10C13 10.5523 12.5523 11 12 11C11.4477 11 11 10.5523 11 10C11 9.44772 11.4477 9 12 9C12.5523 9 13 9.44772 13 10Z" fill="currentColor"/>
                  <path d="M14 13C14 13 13.5 14.5 12 14.5C10.5 14.5 10 13 10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <span className="contact-item-label">微信</span>
                <span className="contact-item-value">zsy2914412512</span>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M17.5 13.75V16.25C17.5 16.6642 17.1642 17 16.75 17C8.81294 17 3.25 11.4371 3.25 3.5C3.25 3.08579 3.58579 2.75 4 2.75H6.5C6.91421 2.75 7.25 3.08579 7.25 3.5V4.25C7.25 6.16793 6.84674 7.99087 6.12345 9.63008C5.99927 9.90596 6.05467 10.2304 6.26516 10.4409L9.55911 13.7348C9.7696 13.9453 10.094 14.0007 10.3699 13.8766C12.0091 13.1533 13.8321 12.75 15.75 12.75H16.5C16.9142 12.75 17.25 13.0858 17.25 13.5V13.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <span className="contact-item-label">电话</span>
                <span className="contact-item-value">+86 198-2823-6191</span>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 18C10 18 15.5 13.5 15.5 9C15.5 5.96243 13.0376 3.5 10 3.5C6.96243 3.5 4.5 5.96243 4.5 9C4.5 13.5 10 18 10 18Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 11.5C11.3807 11.5 12.5 10.3807 12.5 9C12.5 7.61929 11.3807 6.5 10 6.5C8.61929 6.5 7.5 7.61929 7.5 9C7.5 10.3807 8.61929 11.5 10 11.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <span className="contact-item-label">地址</span>
                <span className="contact-item-value">Chengdu, China</span>
              </div>
            </div>
          </div>

          <div className="contact-social">
            <h3 className="social-title">关注我</h3>
            <div className="social-links">
              <a href="https://space.bilibili.com/290462629" className="social-link" aria-label="Bilibili" target="_blank" rel="noopener noreferrer">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M9 3L12 6L15 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M5 8C5 6.89543 5.89543 6 7 6H17C18.1046 6 19 6.89543 19 8V16C19 18.2091 17.2091 20 15 20H9C6.79086 20 5 18.2091 5 16V8Z" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M10 11V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M14 11V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </a>
              <a href="https://v.douyin.com/OssEtrewbcQ/" className="social-link" aria-label="抖音" target="_blank" rel="noopener noreferrer">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M19 7V9C17.5 9 16 8.5 15 7.5V14C15 16.2 13.2 18 11 18C8.8 18 7 16.2 7 14C7 11.8 8.8 10 11 10C11.3 10 11.7 10.1 12 10.2V12.3C11.7 12.1 11.3 12 11 12C9.9 12 9 12.9 9 14C9 15.1 9.9 16 11 16C12.1 16 13 15.1 13 14V3H15C15 4.1 15.9 5 17 5V7C16.3 7 15.6 6.6 15 6V7H19Z" fill="currentColor"/>
                </svg>
              </a>

            </div>
          </div>
        </div>

        <div className="contact-footer">
          <div className="contact-footer-border" />
          <p className="contact-copyright">
            &copy; {new Date().getFullYear()} 周思宇 · All rights reserved.
          </p>
        </div>
      </div>
    </section>
  )
}

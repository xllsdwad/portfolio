import { useState } from 'react'
import './Strengths.css'

const strengths = [
  {
    id: 1,
    title: '三维动画制作',
    tools: 'Blender',
    desc: '使用Blender完成从建模、雕刻、贴图、绑定到动画渲染的全流程三维动画创作。毕业设计短片《Virus》全程Blender制作。',
    accent: '#A78BFA',
  },
  {
    id: 2,
    title: '后期剪辑与调色',
    tools: 'Pr / DaVinci / 剪映',
    desc: '熟练使用Premiere Pro与DaVinci Resolve进行视频剪辑、调色与后期合成，擅长赛博朋克风格的色彩分级与视觉特效。',
    accent: '#22D3EE',
  },
  {
    id: 3,
    title: '摄影摄像',
    tools: '构图 / 光影 / 叙事',
    desc: '热爱摄影，具备扎实的美术功底与敏锐的视觉审美，擅长通过镜头捕捉故事感画面，作品注重新媒体传播属性。',
    accent: '#60A5FA',
  },
  {
    id: 4,
    title: '绘画与概念设计',
    tools: '优动漫 / Photoshop',
    desc: '具备扎实的绘画基础与角色造型能力，能够独立完成从概念草图到精细渲染的角色设计与场景概念创作。',
    accent: '#F472B6',
  },
,
  {
    id: 5,
    title: "AI辅助创作",
    tools: "Stable Diffusion / 即梦AI / ChatGPT",
    desc: "积极将AI工具融入创作工作流，使用Stable Diffusion与即梦AI进行视觉生成，结合ChatGPT、DeepSeek、Codex等AI平台提升创作效率。",
    accent: "#A78BFA",
  }
]

export default function Strengths() {
  const [hoveredStr, setHoveredStr] = useState(null)
  return (
    <section id="strengths" className="strengths section">
      <div className="container">
        <div className="strengths-header">
          <span className="section-label">核心能力</span>
          <h2 className="section-title">专业技能</h2>
          <p className="section-subtitle">
            从三维动画到后期制作，从绘画设计到摄影摄像，构建完整的视觉创作能力体系。
          </p>
        </div>

        <div className="strengths-grid">
          {strengths.map(s => (
            <div key={s.id} className={"strength-card" + (hoveredStr === s.id ? " hovered" : "")} onMouseEnter={() => setHoveredStr(s.id)} onMouseLeave={() => setHoveredStr(null)}>
              <div className="strength-icon-wrap" style={{ borderColor: `${s.accent}30`, color: s.accent }}>
                <span className="strength-icon-num">{String(s.id).padStart(2, '0')}</span>
              </div>
              <h3 className="strength-title">{s.title}</h3>
              <span className="strength-tools" style={{ color: s.accent }}>{s.tools}</span>
              <p className="strength-desc">{s.desc}</p>
              <div className="strength-bar">
                <div className="strength-bar-fill" style={{ background: `linear-gradient(90deg, ${s.accent}44, ${s.accent}88)` }} />
              </div>
            </div>
          ))}
        </div>

        <div className="strengths-bottom">
                      <div className="strength-cert">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 1L10 5L14 5.5L11 8.5L12 13L8 10.5L4 13L5 8.5L2 5.5L6 5L8 1Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
            </svg>
            <span>国家普通话水平测试 · 二级乙等</span>
            <span className="cert-divider" />
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <rect x="2" y="3" width="12" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
              <path d="M5 3V1M11 3V1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
              <path d="M4 7H12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
            </svg>
            <span>机动车驾驶证 C1</span>
          </div>
        </div>
      </div>
    </section>
  )
}

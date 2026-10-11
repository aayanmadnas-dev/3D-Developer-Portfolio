import React, { useState } from 'react';
import { GraduationCap, MapPin, Code2, Cpu, ShieldCheck, Copy, Check } from 'lucide-react';
import { playClick, playHover } from '../utils/audio';

export default function AboutSection() {
  const [copiedTerminal, setCopiedTerminal] = useState(false);

  const bioJson = `{
  "name": "Aayan Madnas",
  "status": "Undergraduate Student",
  "institution": "Chameli Devi Group of Institutions",
  "degree": "B.Tech / B.E. in Software Engineering",
  "expectedGraduation": 2029,
  "location": "Indore, Madhya Pradesh, India",
  "coreFocus": [
    "Web Development",
    "C++ & OOP Architecture",
    "Python & Scripting",
    "Data Structures & Algorithms"
  ]
}`;

  const copyBioJson = () => {
    navigator.clipboard.writeText(bioJson);
    setCopiedTerminal(true);
    playClick();
    setTimeout(() => setCopiedTerminal(false), 2200);
  };

  return (
    <section id="about" className="section-wrapper" aria-label="About Aayan Madnas">
      <div className="section-header">
        <span className="section-subtitle">01 // Academic &amp; Engineering Profile</span>
        <h2 className="section-title">
          About <span className="gradient-text">Me</span>
        </h2>
        <p className="section-desc">
          Building practical software solutions with clean architecture, algorithmic clarity, and modern user-centric interfaces.
        </p>
      </div>

      <div className="about-grid">
        {/* Left Column: Story & Education */}
        <div className="about-narrative-col">
          <div className="glass-panel about-card-main">
            <div className="profile-header-strip">
              <div className="avatar-monogram">
                <span>AM</span>
              </div>
              <div>
                <h3 className="profile-name">Aayan Madnas</h3>
                <p className="profile-role">Software Engineering Student | Web Developer</p>
                <div className="profile-location">
                  <MapPin size={14} className="text-cyan" />
                  <span>Indore, Madhya Pradesh, India</span>
                </div>
              </div>
            </div>

            <div className="about-bio-text">
              <p>
                “I am a software engineering student at Chameli Devi Group of Institutions, with an expected graduation year of 2029. I enjoy building web applications, developing practical software solutions, and strengthening my programming and problem-solving skills.”
              </p>
              <p>
                “My technical interests include responsive web development, C++, Python, data structures and algorithms, database fundamentals, and interactive user interfaces.”
              </p>
            </div>

            {/* Education Badge Card */}
            <div className="education-card">
              <div className="edu-icon-wrap">
                <GraduationCap size={24} className="text-cyan" />
              </div>
              <div className="edu-details">
                <span className="edu-label">Higher Education</span>
                <h4 className="edu-institution">Chameli Devi Group of Institutions</h4>
                <p className="edu-degree">Bachelor of Technology / Bachelor of Engineering</p>
                <div className="edu-meta">
                  <span className="edu-badge">Expected Graduation: 2029</span>
                  <span className="edu-badge edu-badge-alt">Indore, Madhya Pradesh</span>
                </div>
              </div>
            </div>
          </div>

          {/* Academic Journey Pillars */}
          <div className="pillars-grid">
            <div className="glass-panel pillar-item">
              <Code2 size={20} className="pillar-icon text-cyan" />
              <div className="pillar-content">
                <h4>Systematic Problem Solving</h4>
                <p>Strengthening algorithmic logic and data structures with C++ and Python.</p>
              </div>
            </div>

            <div className="glass-panel pillar-item">
              <Cpu size={20} className="pillar-icon text-purple" />
              <div className="pillar-content">
                <h4>Full-Stack Fundamentals</h4>
                <p>Building real end-to-end web apps with relational MySQL and modular PHP/JS.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Terminal & Principles */}
        <div className="about-tech-col">
          <div className="glass-panel terminal-window">
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="dot dot-red" />
                <span className="dot dot-yellow" />
                <span className="dot dot-green" />
              </div>
              <span className="terminal-title font-mono">profile@aayan: ~/bio.json</span>
              <button 
                type="button" 
                className="terminal-copy-btn"
                onClick={copyBioJson}
                onMouseEnter={playHover}
                title="Copy JSON representation"
                aria-label="Copy JSON representation"
              >
                {copiedTerminal ? <Check size={14} className="text-emerald" /> : <Copy size={14} />}
                <span>{copiedTerminal ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            <pre className="terminal-body font-mono">
              <code>{bioJson}</code>
            </pre>

            <div className="terminal-footer font-mono">
              <span className="text-cyan">$</span> cat interests.txt: Responsive UI, 3D Canvas, OOP Architecture
            </div>
          </div>

          {/* Core Values Card */}
          <div className="glass-panel principles-card">
            <div className="principles-header">
              <ShieldCheck size={20} className="text-cyan" />
              <h4>Academic Mindset &amp; Work Ethic</h4>
            </div>
            <ul className="principles-list">
              <li>
                <span className="bullet-glow" />
                <span><strong>No Placeholder Experience:</strong> Grounded strictly in real coursework, self-initiated projects, and active GitHub repositories.</span>
              </li>
              <li>
                <span className="bullet-glow" />
                <span><strong>Clean Code Discipline:</strong> Focus on readability, object-oriented principles, and modular separation of concerns.</span>
              </li>
              <li>
                <span className="bullet-glow" />
                <span><strong>Continuous Learning:</strong> Daily practice in data structures, algorithms, and cutting-edge web interfaces.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 32px;
          align-items: start;
        }

        .about-narrative-col {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .about-card-main {
          padding: 36px;
        }

        .profile-header-strip {
          display: flex;
          align-items: center;
          gap: 20px;
          padding-bottom: 24px;
          border-bottom: 1px solid var(--border-subtle);
          margin-bottom: 24px;
        }

        .avatar-monogram {
          width: 64px;
          height: 64px;
          border-radius: 16px;
          background: linear-gradient(135deg, rgba(0, 240, 255, 0.2), rgba(139, 92, 246, 0.2));
          border: 1px solid var(--border-glow);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-heading);
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--primary-cyan);
          box-shadow: 0 0 20px rgba(0, 240, 255, 0.2);
        }

        .profile-name {
          font-size: 1.6rem;
          margin-bottom: 4px;
        }

        .profile-role {
          font-size: 0.95rem;
          color: var(--primary-blue);
          margin-bottom: 6px;
        }

        .profile-location {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .text-cyan {
          color: var(--primary-cyan);
        }

        .text-purple {
          color: #c084fc;
        }

        .text-emerald {
          color: #10b981;
        }

        .about-bio-text {
          font-size: 1.05rem;
          line-height: 1.7;
          color: var(--text-secondary);
          margin-bottom: 28px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .education-card {
          display: flex;
          gap: 18px;
          background: rgba(3, 7, 18, 0.6);
          border: 1px solid rgba(56, 189, 248, 0.2);
          border-radius: var(--radius-md);
          padding: 20px;
          position: relative;
        }

        .edu-icon-wrap {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: rgba(56, 189, 248, 0.1);
          border: 1px solid rgba(56, 189, 248, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .edu-label {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--primary-cyan);
          display: block;
          margin-bottom: 4px;
        }

        .edu-institution {
          font-size: 1.15rem;
          margin-bottom: 4px;
        }

        .edu-degree {
          font-size: 0.92rem;
          color: var(--text-secondary);
          margin-bottom: 12px;
        }

        .edu-meta {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .edu-badge {
          display: inline-block;
          font-family: var(--font-mono);
          font-size: 0.76rem;
          background: rgba(56, 189, 248, 0.12);
          color: var(--primary-blue);
          padding: 4px 10px;
          border-radius: var(--radius-full);
          border: 1px solid rgba(56, 189, 248, 0.25);
        }

        .edu-badge-alt {
          background: rgba(139, 92, 246, 0.12);
          color: #c084fc;
          border-color: rgba(139, 92, 246, 0.25);
        }

        .pillars-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .pillar-item {
          padding: 22px;
          display: flex;
          gap: 14px;
          align-items: flex-start;
        }

        .pillar-icon {
          flex-shrink: 0;
          margin-top: 2px;
        }

        .pillar-content h4 {
          font-size: 1rem;
          margin-bottom: 6px;
        }

        .pillar-content p {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        /* Terminal Window */
        .terminal-window {
          padding: 0;
          overflow: hidden;
          background: rgba(5, 10, 20, 0.9);
          border: 1px solid var(--border-subtle);
          margin-bottom: 24px;
        }

        .terminal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 18px;
          background: rgba(15, 23, 42, 0.6);
          border-bottom: 1px solid var(--border-subtle);
        }

        .terminal-dots {
          display: flex;
          gap: 6px;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
        .dot-red { background: #ef4444; }
        .dot-yellow { background: #f59e0b; }
        .dot-green { background: #10b981; }

        .terminal-title {
          font-size: 0.78rem;
          color: var(--text-muted);
        }

        .terminal-copy-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: transparent;
          border: 1px solid var(--border-subtle);
          border-radius: 6px;
          padding: 3px 8px;
          color: var(--text-secondary);
          font-size: 0.75rem;
          font-family: var(--font-mono);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .terminal-copy-btn:hover {
          color: #ffffff;
          border-color: var(--primary-cyan);
        }

        .terminal-body {
          padding: 20px;
          font-size: 0.84rem;
          line-height: 1.6;
          color: #7dd3fc;
          overflow-x: auto;
        }

        .terminal-footer {
          padding: 10px 20px;
          background: rgba(10, 15, 30, 0.6);
          border-top: 1px solid var(--border-subtle);
          font-size: 0.76rem;
          color: var(--text-secondary);
        }

        .principles-card {
          padding: 28px;
        }

        .principles-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 18px;
        }

        .principles-header h4 {
          font-size: 1.1rem;
        }

        .principles-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .principles-list li {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.55;
        }

        .principles-list strong {
          color: var(--text-primary);
        }

        .bullet-glow {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--primary-cyan);
          box-shadow: 0 0 8px var(--primary-cyan);
          margin-top: 8px;
          flex-shrink: 0;
        }

        @media (max-width: 992px) {
          .about-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .pillars-grid {
            grid-template-columns: 1fr;
          }
          .about-card-main {
            padding: 24px;
          }
        }
      `}</style>
    </section>
  );
}

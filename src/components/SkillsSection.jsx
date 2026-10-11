import React, { useState } from 'react';
import { Code, Globe, Wrench, Brain, Layers, Sparkles, CheckCircle2 } from 'lucide-react';
import { playClick, playHover } from '../utils/audio';

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedSkill, setSelectedSkill] = useState(null);

  const categories = [
    { id: 'all', label: 'All Disciplines', icon: Layers },
    { id: 'programming', label: 'Programming & Logic', icon: Code },
    { id: 'web', label: 'Web Development', icon: Globe },
    { id: 'tools', label: 'Tools & Workflow', icon: Wrench },
    { id: 'additional', label: 'Additional Knowledge', icon: Brain },
  ];

  const skillsData = [
    // Programming
    {
      id: 'cpp',
      name: 'C++',
      category: 'programming',
      focus: 'Algorithms & OOP Systems',
      description: 'Primary language for core programming logic, classes, inheritance, memory awareness, and building console systems like ATM Logic.',
      color: '#38bdf8'
    },
    {
      id: 'python',
      name: 'Python',
      category: 'programming',
      focus: 'Scripting & Data Analysis',
      description: 'Used for procedural logic, algorithm experimentation, automation scripts, and foundational data science tasks.',
      color: '#34d399'
    },
    {
      id: 'javascript',
      name: 'JavaScript',
      category: 'programming',
      focus: 'Client & Logic Scripting',
      description: 'Interactive browser functionality, asynchronous DOM updates, dynamic state management, and 3D WebGL event coordination.',
      color: '#facc15'
    },
    {
      id: 'php',
      name: 'PHP',
      category: 'programming',
      focus: 'Server-Side Web Processing',
      description: 'Backend script execution, HTTP form processing, session authentication, and MySQL integration in the Auto Garage system.',
      color: '#a78bfa'
    },
    {
      id: 'dsa',
      name: 'Data Structures & Algorithms',
      category: 'programming',
      focus: 'Computational Efficiency',
      description: 'Linear and non-linear data structures, searching, sorting, algorithmic complexity, and time-space optimization.',
      color: '#00f0ff'
    },

    // Web Development
    {
      id: 'html5',
      name: 'HTML5',
      category: 'web',
      focus: 'Semantic Document Architecture',
      description: 'Clean semantic elements, accessible document landmarks, SEO-friendly metadata, and modern web specifications.',
      color: '#f97316'
    },
    {
      id: 'css3',
      name: 'CSS3',
      category: 'web',
      focus: 'Modern Layouts & Animations',
      description: 'Flexbox, CSS Grid, custom properties, glassmorphism, responsive media queries, and hardware-accelerated transitions.',
      color: '#38bdf8'
    },
    {
      id: 'resp-design',
      name: 'Responsive Web Design',
      category: 'web',
      focus: 'Cross-Device Adaptability',
      description: 'Fluid layout scaling, mobile-first breakpoints, touch-friendly hit areas, and legible typography on all screen sizes.',
      color: '#10b981'
    },

    // Tools
    {
      id: 'git',
      name: 'Git',
      category: 'tools',
      focus: 'Version Control & History',
      description: 'Distributed commit logging, branching workflows, repository status tracking, and safe code merges.',
      color: '#f43f5e'
    },
    {
      id: 'github',
      name: 'GitHub',
      category: 'tools',
      focus: 'Collaboration & Repositories',
      description: 'Remote project hosting, open-source portfolio repositories, release documentation, and version tracking.',
      color: '#94a3b8'
    },
    {
      id: 'vscode',
      name: 'Visual Studio Code',
      category: 'tools',
      focus: 'Primary Development IDE',
      description: 'Daily code editing environment configured with linting, C++ compilers, debugging extensions, and Git integration.',
      color: '#0284c7'
    },
    {
      id: 'jupyter',
      name: 'Jupyter Notebook',
      category: 'tools',
      focus: 'Interactive Computing',
      description: 'Step-by-step Python code execution, algorithmic visualization, and structured data exploration.',
      color: '#f97316'
    },

    // Additional Knowledge
    {
      id: 'db-fund',
      name: 'Database Fundamentals',
      category: 'additional',
      focus: 'Relational Schemas & SQL',
      description: 'Relational tables, primary & foreign keys, CRUD queries, and relational data integrity applied with MySQL.',
      color: '#00f0ff'
    },
    {
      id: 'uiux',
      name: 'UI/UX Design',
      category: 'additional',
      focus: 'User Experience & Interface Polish',
      description: 'Visual hierarchy, typography contrast, interaction feedback, reduced-motion ergonomics, and intuitive navigation.',
      color: '#c084fc'
    },
    {
      id: 'data-analysis',
      name: 'Data Analysis',
      category: 'additional',
      focus: 'Insight Extraction',
      description: 'Exploratory data assessment, dataset cleaning, descriptive statistics, and visualization fundamentals.',
      color: '#38bdf8'
    },
    {
      id: 'ml-fund',
      name: 'Machine Learning Fundamentals',
      category: 'additional',
      focus: 'Foundational Concepts',
      description: 'Core concepts of supervised and unsupervised learning, model training concepts, and predictive workflows.',
      color: '#a855f7'
    }
  ];

  const filteredSkills = activeTab === 'all' 
    ? skillsData 
    : skillsData.filter(s => s.category === activeTab);

  const currentInspector = selectedSkill || skillsData[0];

  return (
    <section id="skills" className="section-wrapper" aria-label="Technical Skills & Competencies">
      <div className="section-header">
        <span className="section-subtitle">02 // Technical Competencies</span>
        <h2 className="section-title">
          Technical <span className="gradient-text">Skills</span>
        </h2>
        <p className="section-desc">
          Categorized technologies and engineering disciplines drawn directly from academic coursework and practical software development.
        </p>
      </div>

      {/* Category Tabs Filter */}
      <div className="skills-tabs-container" role="tablist">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isActive = activeTab === cat.id;
          return (
            <button
              key={cat.id}
              role="tab"
              aria-selected={isActive}
              className={`skills-tab-btn ${isActive ? 'active' : ''}`}
              onClick={() => {
                playClick();
                setActiveTab(cat.id);
              }}
              onMouseEnter={playHover}
            >
              <Icon size={16} />
              <span>{cat.label}</span>
              <span className="tab-count">
                {cat.id === 'all' 
                  ? skillsData.length 
                  : skillsData.filter(s => s.category === cat.id).length}
              </span>
            </button>
          );
        })}
      </div>

      {/* Two Column Layout: Cards Grid + Interactive Inspector */}
      <div className="skills-layout-grid">
        <div className="skills-cards-grid">
          {filteredSkills.map((skill) => {
            const isSelected = currentInspector.id === skill.id;
            return (
              <div
                key={skill.id}
                className={`glass-panel skill-card ${isSelected ? 'selected' : ''}`}
                onClick={() => {
                  playClick();
                  setSelectedSkill(skill);
                }}
                onMouseEnter={() => {
                  playHover();
                  setSelectedSkill(skill);
                }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setSelectedSkill(skill);
                  }
                }}
                aria-label={`Inspect ${skill.name}`}
              >
                <div className="skill-card-top">
                  <span 
                    className="skill-pill-dot" 
                    style={{ backgroundColor: skill.color, boxShadow: `0 0 10px ${skill.color}` }}
                  />
                  <span className="skill-cat-label font-mono">
                    {skill.category.toUpperCase()}
                  </span>
                </div>

                <h3 className="skill-title">{skill.name}</h3>
                <p className="skill-focus font-mono">{skill.focus}</p>

                <div className="skill-card-footer">
                  <span className="inspect-cue">Click to Inspect &rarr;</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Skill Inspector Panel */}
        <div className="skills-inspector-col">
          <div className="glass-panel inspector-panel">
            <div className="inspector-header">
              <Sparkles size={18} className="text-cyan" />
              <span className="font-mono text-cyan">SKILL INSPECTOR // ACTIVE SPEC</span>
            </div>

            <div className="inspector-main">
              <div 
                className="inspector-color-bar" 
                style={{ backgroundColor: currentInspector.color, boxShadow: `0 0 16px ${currentInspector.color}` }}
              />
              <h4 className="inspector-title">{currentInspector.name}</h4>
              <div className="inspector-badge">
                <span>Domain: {currentInspector.focus}</span>
              </div>

              <div className="inspector-desc-box">
                <p className="inspector-desc">{currentInspector.description}</p>
              </div>

              <div className="inspector-audit">
                <div className="audit-item">
                  <CheckCircle2 size={16} className="text-emerald" />
                  <span>Verified academic coursework &amp; GitHub implementation</span>
                </div>
                <div className="audit-item">
                  <CheckCircle2 size={16} className="text-emerald" />
                  <span>No inflated proficiency claims or fictitious metrics</span>
                </div>
              </div>
            </div>

            <div className="inspector-footer font-mono">
              <span>Category: [{currentInspector.category}]</span>
              <span>ID: #{currentInspector.id}</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .skills-tabs-container {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 40px;
        }

        .skills-tab-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(15, 23, 42, 0.6);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-full);
          padding: 10px 18px;
          color: var(--text-secondary);
          font-family: var(--font-heading);
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          backdrop-filter: blur(10px);
          transition: all 0.2s ease;
        }

        .skills-tab-btn:hover {
          color: #ffffff;
          border-color: rgba(56, 189, 248, 0.3);
          background: rgba(30, 41, 59, 0.8);
        }

        .skills-tab-btn.active {
          color: #030712;
          background: linear-gradient(135deg, var(--primary-cyan), #38bdf8);
          border-color: var(--primary-cyan);
          font-weight: 600;
          box-shadow: 0 0 20px rgba(0, 240, 255, 0.35);
        }

        .tab-count {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          padding: 2px 7px;
          background: rgba(0, 0, 0, 0.25);
          border-radius: var(--radius-full);
        }

        .skills-tab-btn.active .tab-count {
          background: rgba(0, 0, 0, 0.35);
          color: #ffffff;
        }

        .skills-layout-grid {
          display: grid;
          grid-template-columns: 1.25fr 0.75fr;
          gap: 32px;
          align-items: start;
        }

        .skills-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 16px;
        }

        .skill-card {
          padding: 20px;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          gap: 10px;
          position: relative;
          outline: none;
        }

        .skill-card:focus-visible {
          border-color: var(--primary-cyan);
          box-shadow: 0 0 0 2px var(--primary-cyan);
        }

        .skill-card.selected {
          border-color: var(--primary-cyan);
          background: rgba(20, 30, 55, 0.85);
          box-shadow: 0 0 25px rgba(0, 240, 255, 0.2);
          transform: translateY(-2px);
        }

        .skill-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .skill-pill-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .skill-cat-label {
          font-size: 0.68rem;
          color: var(--text-muted);
          letter-spacing: 0.08em;
        }

        .skill-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .skill-focus {
          font-size: 0.76rem;
          color: var(--primary-blue);
          line-height: 1.4;
        }

        .skill-card-footer {
          margin-top: auto;
          padding-top: 8px;
        }

        .inspect-cue {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--text-muted);
          transition: color 0.2s ease;
        }

        .skill-card:hover .inspect-cue,
        .skill-card.selected .inspect-cue {
          color: var(--primary-cyan);
        }

        /* Inspector */
        .skills-inspector-col {
          position: sticky;
          top: 100px;
        }

        .inspector-panel {
          padding: 32px;
          background: rgba(10, 16, 32, 0.85);
          border: 1px solid rgba(56, 189, 248, 0.25);
        }

        .inspector-header {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.8rem;
          letter-spacing: 0.1em;
          padding-bottom: 20px;
          border-bottom: 1px solid var(--border-subtle);
          margin-bottom: 24px;
        }

        .inspector-color-bar {
          height: 4px;
          width: 60px;
          border-radius: 2px;
          margin-bottom: 16px;
        }

        .inspector-title {
          font-size: 1.8rem;
          margin-bottom: 10px;
        }

        .inspector-badge {
          display: inline-block;
          font-family: var(--font-mono);
          font-size: 0.82rem;
          background: rgba(56, 189, 248, 0.12);
          color: var(--primary-blue);
          padding: 5px 12px;
          border-radius: var(--radius-full);
          border: 1px solid rgba(56, 189, 248, 0.25);
          margin-bottom: 20px;
        }

        .inspector-desc-box {
          background: rgba(3, 7, 18, 0.6);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 20px;
          margin-bottom: 24px;
        }

        .inspector-desc {
          font-size: 0.96rem;
          color: var(--text-secondary);
          line-height: 1.7;
        }

        .inspector-audit {
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding-bottom: 24px;
          border-bottom: 1px solid var(--border-subtle);
          margin-bottom: 20px;
        }

        .audit-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.84rem;
          color: var(--text-secondary);
        }

        .inspector-footer {
          display: flex;
          justify-content: space-between;
          font-size: 0.72rem;
          color: var(--text-muted);
        }

        @media (max-width: 992px) {
          .skills-layout-grid {
            grid-template-columns: 1fr;
          }
          .skills-inspector-col {
            position: static;
          }
        }
      `}</style>
    </section>
  );
}

import React, { useState } from 'react';
import { Lightbulb, Compass, Palette, Code2, GitBranch, RefreshCw, CheckCircle, ArrowRight } from 'lucide-react';
import { playClick, playHover } from '../utils/audio';

export default function HowIBuildSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'Understand the Problem',
      icon: Lightbulb,
      tag: 'Analysis & Scope',
      summary: 'Deconstructing technical constraints, user needs, and defining the system boundaries before writing any code.',
      details: [
        'Analyze user stories, functional prerequisites, and expected edge cases.',
        'Clarify system constraints (e.g. CLI vs Web, memory efficiency, browser compatibility).',
        'Map out core entities and data flow dependencies.'
      ],
      terminalCommand: 'git init & analyze --spec "requirements.md"'
    },
    {
      num: '02',
      title: 'Plan the Solution',
      icon: Compass,
      tag: 'Architecture & Modeling',
      summary: 'Formulating modular software architecture, algorithm selection, and relational schema designs.',
      details: [
        'Design object-oriented class hierarchies and inheritance models in C++.',
        'Normalize database tables with primary and foreign keys in MySQL.',
        'Select optimal algorithms and data structures for time-space efficiency.'
      ],
      terminalCommand: 'model --entities "Account, GarageBay, UserSession"'
    },
    {
      num: '03',
      title: 'Design the Interface',
      icon: Palette,
      tag: 'UI/UX & Accessibility',
      summary: 'Drafting intuitive visual hierarchies, accessible contrast palettes, and responsive layouts.',
      details: [
        'Establish coherent design tokens (typography, spacing, dark mode colorways).',
        'Guarantee WCAG AA contrast standards and keyboard navigability.',
        'Design responsive CSS layouts from mobile screens up to wide monitors.'
      ],
      terminalCommand: 'style --tokens "dark-mode, glassmorphism, flex-grid"'
    },
    {
      num: '04',
      title: 'Develop & Test the Application',
      icon: Code2,
      tag: 'Implementation & Quality',
      summary: 'Writing clean, readable code with modular separation of concerns and thorough edge-case testing.',
      details: [
        'Implement DRY (Don\'t Repeat Yourself) and SOLID engineering principles.',
        'Sanitize all client inputs and validate server-side parameters.',
        'Perform boundary value testing (e.g., negative withdrawals, malformed inputs).'
      ],
      terminalCommand: 'npm run test || g++ -Wall -Wextra main.cpp'
    },
    {
      num: '05',
      title: 'Use Git & GitHub to Manage Changes',
      icon: GitBranch,
      tag: 'Version Control & Integrity',
      summary: 'Maintaining an atomic, meaningful commit history with clear documentation and branch safety.',
      details: [
        'Structure git commits with clear semantic prefixes (feat, fix, docs, refactor).',
        'Publish clean repositories with comprehensive README setup instructions.',
        'Protect repository history against accidental regressions or secret leaks.'
      ],
      terminalCommand: 'git add -A && git commit -m "feat: complete ATM logic validation"'
    },
    {
      num: '06',
      title: 'Refine Experience & Maintain Code',
      icon: RefreshCw,
      tag: 'Optimization & Longevity',
      summary: 'Benchmarking performance, fine-tuning transitions, and writing documentation for future maintainability.',
      details: [
        'Optimize WebGL canvas frame rates, memory buffers, and bundle sizes.',
        'Incorporate user feedback to polish micro-interactions and touch targets.',
        'Ensure sustainable, readable codebase documentation.'
      ],
      terminalCommand: 'perf --audit "lighthouse, core-web-vitals, clean-code"'
    }
  ];

  const currentStep = steps[activeStep];
  const StepIcon = currentStep.icon;

  return (
    <section id="process" className="section-wrapper" aria-label="Development Approach & Problem Solving">
      <div className="section-header">
        <span className="section-subtitle">04 // Engineering Methodology</span>
        <h2 className="section-title">
          How I <span className="gradient-text">Build</span>
        </h2>
        <p className="section-desc">
          A disciplined, step-by-step engineering approach applied to all coursework and software projects — from problem analysis to maintainable code.
        </p>
      </div>

      <div className="process-layout">
        {/* Step Selector Horizontal / Grid Track */}
        <div className="steps-nav-track" role="tablist">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isCurrent = activeStep === idx;
            return (
              <button
                key={step.num}
                type="button"
                role="tab"
                aria-selected={isCurrent}
                className={`step-nav-btn ${isCurrent ? 'active' : ''}`}
                onClick={() => {
                  playClick();
                  setActiveStep(idx);
                }}
                onMouseEnter={playHover}
              >
                <span className="step-num font-mono">{step.num}</span>
                <Icon size={18} className="step-icon" />
                <span className="step-label">{step.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Step Deep-Dive Card */}
        <div className="glass-panel active-step-panel">
          <div className="step-panel-header">
            <div className="step-header-left">
              <div className="step-circle-icon">
                <StepIcon size={28} className="text-cyan" />
              </div>
              <div>
                <span className="step-tag-badge font-mono">
                  PHASE {currentStep.num} // {currentStep.tag.toUpperCase()}
                </span>
                <h3 className="step-active-heading">{currentStep.title}</h3>
              </div>
            </div>

            <div className="step-counter-display font-mono">
              <span className="text-cyan">{activeStep + 1}</span>
              <span>/</span>
              <span>{steps.length}</span>
            </div>
          </div>

          <p className="step-summary-paragraph">{currentStep.summary}</p>

          <div className="step-deep-grid">
            <div className="step-checklist-box">
              <h4 className="checklist-heading">Key Engineering Actions:</h4>
              <ul className="step-checklist">
                {currentStep.details.map((item, index) => (
                  <li key={index}>
                    <CheckCircle size={16} className="text-cyan flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="step-terminal-box">
              <div className="step-terminal-bar font-mono">
                <span>TERMINAL WORKFLOW // COMMAND SIMULATION</span>
              </div>
              <div className="step-terminal-content font-mono">
                <span className="terminal-prompt">aayan@eng-ws:~$</span>
                <code className="terminal-cmd-text">{currentStep.terminalCommand}</code>
                <div className="terminal-output-line">
                  &gt; [SUCCESS]: Phase {currentStep.num} parameters verified and staged.
                </div>
              </div>
            </div>
          </div>

          {/* Step Nav Prev / Next buttons */}
          <div className="step-panel-footer">
            <button
              type="button"
              className="btn-secondary"
              disabled={activeStep === 0}
              onClick={() => {
                playClick();
                setActiveStep(prev => Math.max(0, prev - 1));
              }}
              style={{ opacity: activeStep === 0 ? 0.4 : 1, cursor: activeStep === 0 ? 'not-allowed' : 'pointer' }}
            >
              &larr; Previous Phase
            </button>

            <button
              type="button"
              className="btn-primary"
              onClick={() => {
                playClick();
                setActiveStep(prev => (prev + 1) % steps.length);
              }}
            >
              <span>{activeStep === steps.length - 1 ? 'Restart Progression' : 'Next Phase'}</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .process-layout {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .steps-nav-track {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 12px;
        }

        .step-nav-btn {
          background: rgba(15, 23, 42, 0.6);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 16px 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          transition: all 0.2s ease;
          color: var(--text-muted);
          text-align: center;
        }

        .step-nav-btn:hover {
          color: #ffffff;
          border-color: rgba(56, 189, 248, 0.3);
          background: rgba(20, 30, 55, 0.7);
        }

        .step-nav-btn.active {
          color: #ffffff;
          background: rgba(20, 30, 60, 0.9);
          border-color: var(--primary-cyan);
          box-shadow: 0 0 20px rgba(0, 240, 255, 0.2);
        }

        .step-num {
          font-size: 0.76rem;
          color: var(--primary-blue);
        }

        .step-icon {
          color: inherit;
        }

        .step-label {
          font-family: var(--font-heading);
          font-size: 0.78rem;
          font-weight: 600;
          line-height: 1.3;
        }

        .active-step-panel {
          padding: 40px;
          background: rgba(10, 16, 32, 0.85);
          border: 1px solid rgba(56, 189, 248, 0.3);
        }

        .step-panel-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 24px;
          border-bottom: 1px solid var(--border-subtle);
          margin-bottom: 24px;
        }

        .step-header-left {
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .step-circle-icon {
          width: 58px;
          height: 58px;
          border-radius: 16px;
          background: rgba(0, 240, 255, 0.1);
          border: 1px solid rgba(0, 240, 255, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .step-tag-badge {
          font-size: 0.74rem;
          color: var(--primary-cyan);
          letter-spacing: 0.1em;
          display: block;
          margin-bottom: 4px;
        }

        .step-active-heading {
          font-size: 1.8rem;
        }

        .step-counter-display {
          font-size: 1.4rem;
          display: flex;
          gap: 4px;
          color: var(--text-muted);
        }

        .step-summary-paragraph {
          font-size: 1.1rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 28px;
        }

        .step-deep-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 28px;
          margin-bottom: 32px;
        }

        .step-checklist-box {
          background: rgba(3, 7, 18, 0.6);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 24px;
        }

        .checklist-heading {
          font-size: 0.92rem;
          color: var(--text-primary);
          margin-bottom: 16px;
        }

        .step-checklist {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .step-checklist li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .step-terminal-box {
          background: rgba(3, 7, 18, 0.9);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .step-terminal-bar {
          background: rgba(15, 23, 42, 0.8);
          padding: 10px 16px;
          font-size: 0.72rem;
          color: var(--text-muted);
          border-bottom: 1px solid var(--border-subtle);
        }

        .step-terminal-content {
          padding: 20px;
          font-size: 0.82rem;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .terminal-prompt {
          color: var(--primary-cyan);
        }

        .terminal-cmd-text {
          color: #7dd3fc;
          background: rgba(0, 0, 0, 0.4);
          padding: 8px;
          border-radius: 4px;
        }

        .terminal-output-line {
          color: #34d399;
          font-size: 0.78rem;
          margin-top: 6px;
        }

        .step-panel-footer {
          display: flex;
          justify-content: space-between;
          border-top: 1px solid var(--border-subtle);
          padding-top: 24px;
        }

        @media (max-width: 992px) {
          .steps-nav-track {
            grid-template-columns: repeat(3, 1fr);
          }
          .step-deep-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .steps-nav-track {
            grid-template-columns: repeat(2, 1fr);
          }
          .active-step-panel {
            padding: 24px;
          }
          .step-header-left {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </section>
  );
}

import React, { useState, useEffect } from 'react';
import { X, ExternalLink, CheckCircle } from 'lucide-react';
import { GithubIcon } from './Icons';
import { playClick } from '../utils/audio';

export default function ProjectModal({ project, isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-label={`${project.title} Details`}>
      <div className="project-modal-card glass-panel" onClick={(e) => e.stopPropagation()}>
        {/* Modal Top Control Header */}
        <div className="modal-header-strip">
          <div className="modal-header-left">
            <span className="font-mono text-cyan modal-sub">SPEC INSPECTOR // {project.category.toUpperCase()}</span>
            <h3 className="modal-main-title">{project.title}</h3>
          </div>

          <div className="modal-header-right">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-github-pill"
              onClick={playClick}
            >
              <GithubIcon size={16} />
              <span>GitHub Repo</span>
              <ExternalLink size={13} />
            </a>

            <button 
              type="button" 
              className="modal-close-icon"
              onClick={() => { playClick(); onClose(); }}
              aria-label="Close Project Modal"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="modal-tabs-row" role="tablist">
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'architecture', label: 'Architecture & Tech' },
            { id: 'features', label: 'Key Features' },
          ].map(tab => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTab === tab.id}
              className={`modal-tab-btn font-mono ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => { playClick(); setActiveTab(tab.id); }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Modal Body Content */}
        <div className="modal-scroll-body">
          {activeTab === 'overview' && (
            <div className="modal-tab-content">
              <div className="overview-summary-box">
                <h4 className="content-heading">Project Synopsis</h4>
                <p className="synopsis-p">{project.description}</p>
              </div>

              <div className="tech-stack-showcase">
                <h4 className="content-heading">Technologies Utilized</h4>
                <div className="modal-tech-list">
                  {project.technologies.map(tech => (
                    <span key={tech} className="tech-badge font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="repo-direct-box">
                <div className="repo-info-text">
                  <strong>Verified Source Code Available:</strong>
                  <span>Every commit, structural component, and documentation file is hosted publicly on GitHub.</span>
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  onClick={playClick}
                >
                  <GithubIcon size={16} />
                  <span>Inspect Code on GitHub</span>
                </a>
              </div>
            </div>
          )}

          {activeTab === 'architecture' && (
            <div className="modal-tab-content">
              <div className="arch-blueprint-card">
                <h4 className="content-heading">System Design &amp; Architecture</h4>

                {project.id === 'atm-logic-cpp' && (
                  <div className="arch-notes">
                    <p>
                      <strong>Modular OOP Class Design:</strong> Employs structured classes representing banking accounts, balance state registers, and authentication handlers.
                    </p>
                    <div className="arch-flow-diagram font-mono">
                      [User Input PIN] &rarr; [Authentication Guard] &rarr; [Account Session State] &rarr; [Deposit / Withdrawal / Balance Methods]
                    </div>
                    <ul className="arch-points-list">
                      <li><strong>Input Sanitization:</strong> Prevents non-numeric input crashes and stream failure flags using C++ input validation loops.</li>
                      <li><strong>Overdraft Prevention:</strong> Validates requested withdrawal amounts against current account balances prior to state modification.</li>
                      <li><strong>Encapsulation:</strong> Private data members protect balance integrity against direct manipulation.</li>
                    </ul>
                  </div>
                )}

                {project.id === 'auto-garage' && (
                  <div className="arch-notes">
                    <p>
                      <strong>Relational Web Architecture:</strong> Combines PHP server scripting with MySQL relational tables to deliver end-to-end garage operations.
                    </p>
                    <div className="arch-flow-diagram font-mono">
                      [Admin &amp; Customer UI] &rarr; [PHP Request Handlers] &rarr; [Session Authentication] &rarr; [MySQL Relational Tables]
                    </div>
                    <ul className="arch-points-list">
                      <li><strong>Database Normalization:</strong> Separates customers, vehicles, appointments, and service logs with primary/foreign keys.</li>
                      <li><strong>Administrative Security:</strong> Protected admin login sessions with credential verification.</li>
                      <li><strong>CRUD Operations:</strong> Complete create, read, update, and report generation workflows.</li>
                    </ul>
                  </div>
                )}

                {project.id === 'portfolio-website' && (
                  <div className="arch-notes">
                    <p>
                      <strong>Interactive 3D WebGL Pipeline:</strong> Procedural geometry generation with Three.js coupled with responsive, zero-framework CSS.
                    </p>
                    <div className="arch-flow-diagram font-mono">
                      [Window Viewport] &rarr; [Three.js Scene &amp; Camera] &rarr; [Procedural Shader Geometries] &rarr; [Event-Driven Parallax]
                    </div>
                    <ul className="arch-points-list">
                      <li><strong>Performance Optimization:</strong> Clamps pixel ratio, throttles event listeners, and uses requestAnimationFrame loops.</li>
                      <li><strong>Accessibility &amp; Fallbacks:</strong> Respects reduced motion preferences and provides graceful 2D fallbacks if WebGL is disabled.</li>
                      <li><strong>Glassmorphism CSS:</strong> Clean design system using CSS custom properties and backdrop filter utilities.</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'features' && (
            <div className="modal-tab-content">
              <h4 className="content-heading">Detailed Feature Breakdown</h4>

              <div className="features-checklist-grid">
                {(project.featuresToHighlight || project.programmingConcepts || project.highlights || []).map((feat, i) => (
                  <div key={i} className="feat-check-card">
                    <CheckCircle size={18} className="text-cyan flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .project-modal-card {
          width: 100%;
          max-width: 800px;
          max-height: 85vh;
          background: #090e1c;
          border: 1px solid var(--border-glow);
          border-radius: var(--radius-lg);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          box-shadow: 0 24px 64px rgba(0, 0, 0, 0.85);
        }

        .modal-header-strip {
          padding: 24px 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid var(--border-subtle);
          background: rgba(15, 23, 42, 0.6);
          flex-wrap: wrap;
          gap: 16px;
        }

        .modal-sub {
          font-size: 0.74rem;
          letter-spacing: 0.1em;
          display: block;
          margin-bottom: 4px;
        }

        .modal-main-title {
          font-size: 1.6rem;
        }

        .modal-header-right {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .btn-github-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid var(--border-subtle);
          color: var(--text-primary);
          padding: 8px 14px;
          border-radius: var(--radius-full);
          font-size: 0.82rem;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .btn-github-pill:hover {
          background: rgba(0, 240, 255, 0.12);
          border-color: var(--primary-cyan);
          color: #ffffff;
        }

        .modal-close-icon {
          background: transparent;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
        }

        .modal-close-icon:hover {
          color: #ffffff;
        }

        .modal-tabs-row {
          display: flex;
          background: rgba(10, 16, 32, 0.5);
          border-bottom: 1px solid var(--border-subtle);
          padding: 0 24px;
        }

        .modal-tab-btn {
          padding: 14px 20px;
          background: transparent;
          border: none;
          border-bottom: 2px solid transparent;
          color: var(--text-muted);
          font-size: 0.8rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .modal-tab-btn:hover {
          color: #ffffff;
        }

        .modal-tab-btn.active {
          color: var(--primary-cyan);
          border-bottom-color: var(--primary-cyan);
          font-weight: 600;
        }

        .modal-scroll-body {
          padding: 28px;
          overflow-y: auto;
        }

        .modal-tab-content {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .content-heading {
          font-size: 1.05rem;
          color: var(--text-primary);
          margin-bottom: 12px;
        }

        .synopsis-p {
          font-size: 1rem;
          color: var(--text-secondary);
          line-height: 1.65;
        }

        .overview-summary-box {
          background: rgba(3, 7, 18, 0.6);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 20px;
        }

        .modal-tech-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .tech-badge {
          background: rgba(56, 189, 248, 0.1);
          border: 1px solid rgba(56, 189, 248, 0.3);
          color: #38bdf8;
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 0.8rem;
        }

        .repo-direct-box {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px;
          background: rgba(15, 23, 42, 0.7);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          flex-wrap: wrap;
          gap: 16px;
        }

        .repo-info-text {
          display: flex;
          flex-direction: column;
          gap: 4px;
          font-size: 0.88rem;
          color: var(--text-secondary);
        }

        .repo-info-text strong {
          color: #ffffff;
        }

        .arch-blueprint-card {
          background: rgba(3, 7, 18, 0.6);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 24px;
        }

        .arch-notes p {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 16px;
        }

        .arch-flow-diagram {
          background: rgba(10, 16, 32, 0.9);
          border: 1px dashed var(--border-glow);
          border-radius: 8px;
          padding: 16px;
          color: #7dd3fc;
          font-size: 0.8rem;
          margin-bottom: 20px;
          overflow-x: auto;
        }

        .arch-points-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .arch-points-list li {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .arch-points-list strong {
          color: #ffffff;
        }

        .features-checklist-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .feat-check-card {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          background: rgba(3, 7, 18, 0.5);
          border: 1px solid var(--border-subtle);
          border-radius: 8px;
          padding: 14px;
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.45;
        }

        @media (max-width: 640px) {
          .features-checklist-grid {
            grid-template-columns: 1fr;
          }
          .modal-header-strip {
            padding: 18px;
          }
          .modal-scroll-body {
            padding: 18px;
          }
        }
      `}</style>
    </div>
  );
}

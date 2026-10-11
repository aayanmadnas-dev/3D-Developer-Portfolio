import React, { useState } from 'react';
import { ExternalLink, Terminal, Database, Sparkles, ChevronRight, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './Icons';
import { playClick, playHover, playSuccess } from '../utils/audio';

export default function ProjectsSection({ onOpenProjectModal }) {
  // Live in-card interactive simulator states
  // ATM Simulator State
  const [atmState, setAtmState] = useState({
    authenticated: false,
    pinInput: '',
    balance: 1500,
    message: 'PLEASE INSERT CARD & ENTER PIN (Default: 1234)',
    actionAmount: ''
  });

  // Auto Garage Tab State
  const [garageActiveTab, setGarageActiveTab] = useState('appointments');

  const projects = [
    {
      id: 'portfolio-website',
      title: 'Portfolio Website',
      category: 'Creative Frontend & 3D WebGL',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Three.js', 'Git', 'GitHub'],
      description: 'A responsive personal portfolio website designed to showcase software projects and technical work, featuring interactive web components and 3D elements.',
      github: 'https://github.com/aayanmadnas-dev/Portfolio-Website',
      highlights: [
        'Procedural 3D scene built with Three.js rendering a cybernetic core',
        'Hardware-accelerated CSS glassmorphism and pointer parallax',
        'Strictly zero external UI template dependencies',
        'WCAG AA accessible contrast, keyboard navigation, and reduced-motion'
      ],
      interactiveType: 'canvas-demo'
    },
    {
      id: 'auto-garage',
      title: 'Auto Garage Management System',
      category: 'Full-Stack Web & Relational Database',
      technologies: ['PHP', 'HTML5', 'CSS3', 'JavaScript', 'MySQL'],
      description: 'A web-based auto garage management system featuring customer records, service management, appointment booking, and an administrative dashboard.',
      github: 'https://github.com/aayanmadnas-dev/Auto-garage',
      featuresToHighlight: [
        'Admin authentication & secure session control',
        'Appointment booking & scheduling workflow',
        'Customer record database with service history',
        'Service inventory & pricing catalogue',
        'FAQs and configuration settings',
        'Reports and contact communication workflows',
        'Normalized MySQL database integration'
      ],
      interactiveType: 'garage-flow'
    },
    {
      id: 'atm-logic-cpp',
      title: 'ATM Logic with C++',
      category: 'Systems & Object-Oriented Programming',
      technologies: ['C++', 'Object-Oriented Programming'],
      description: 'A console-based ATM application implementing core banking operations, including account authentication, deposits, withdrawals, balance checking, and PIN management.',
      github: 'https://github.com/aayanmadnas-dev/ATM-logic-with-c',
      programmingConcepts: [
        'Classes and modular encapsulation',
        'Inheritance & separation of account types',
        'Conditional branch verification and loop protection',
        'Structured functions with parameter passing',
        'Robust user input handling & state persistence',
        'Core banking balance validation logic'
      ],
      interactiveType: 'atm-simulator'
    }
  ];

  // ATM Logic Handlers
  const handlePinSubmit = (e) => {
    e.preventDefault();
    playClick();
    if (atmState.pinInput === '1234') {
      playSuccess();
      setAtmState(prev => ({
        ...prev,
        authenticated: true,
        message: 'AUTHENTICATION SUCCESSFUL. WELCOME, ACCOUNT #AM-951602'
      }));
    } else {
      setAtmState(prev => ({
        ...prev,
        message: 'INVALID PIN. PLEASE TRY PIN 1234'
      }));
    }
  };

  const handleDeposit = () => {
    const val = parseFloat(atmState.actionAmount);
    if (!val || val <= 0) {
      setAtmState(prev => ({ ...prev, message: 'ENTER A VALID POSITIVE DEPOSIT AMOUNT' }));
      return;
    }
    playSuccess();
    setAtmState(prev => ({
      ...prev,
      balance: prev.balance + val,
      actionAmount: '',
      message: `DEPOSIT SUCCESSFUL: +$${val.toFixed(2)}. NEW BALANCE: $${(prev.balance + val).toFixed(2)}`
    }));
  };

  const handleWithdraw = () => {
    const val = parseFloat(atmState.actionAmount);
    if (!val || val <= 0) {
      setAtmState(prev => ({ ...prev, message: 'ENTER A VALID POSITIVE WITHDRAWAL AMOUNT' }));
      return;
    }
    if (val > atmState.balance) {
      setAtmState(prev => ({ ...prev, message: 'INSUFFICIENT FUNDS. OVERDRAFT PROHIBITED' }));
      return;
    }
    playSuccess();
    setAtmState(prev => ({
      ...prev,
      balance: prev.balance - val,
      actionAmount: '',
      message: `WITHDRAWAL PROCESSED: -$${val.toFixed(2)}. REMAINING: $${(prev.balance - val).toFixed(2)}`
    }));
  };

  const handleLogoutATM = () => {
    playClick();
    setAtmState({
      authenticated: false,
      pinInput: '',
      balance: 1500,
      message: 'CARD EJECTED. PLEASE INSERT CARD & ENTER PIN (Default: 1234)',
      actionAmount: ''
    });
  };

  return (
    <section id="projects" className="section-wrapper" aria-label="Featured Software Projects">
      <div className="section-header">
        <span className="section-subtitle">03 // Verified Software Projects</span>
        <h2 className="section-title">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="section-desc">
          Real production repositories engineered with clean code, modular architectures, and verifiable GitHub source code.
        </p>
      </div>

      <div className="projects-collection">
        {projects.map((project, index) => {
          return (
            <article key={project.id} className="glass-panel project-card-item">
              <div className="project-card-header">
                <div className="project-meta-pill font-mono">
                  <span>PROJECT 0{index + 1}</span>
                  <span className="pill-dot" />
                  <span>{project.category}</span>
                </div>

                <div className="project-top-actions">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action-icon-link"
                    title={`View ${project.title} source on GitHub`}
                    aria-label={`View ${project.title} source on GitHub`}
                    onClick={playClick}
                    onMouseEnter={playHover}
                  >
                    <GithubIcon size={18} />
                    <span>View Source</span>
                    <ExternalLink size={13} />
                  </a>

                  <button
                    type="button"
                    className="btn-details-trigger"
                    onClick={() => {
                      playClick();
                      onOpenProjectModal(project);
                    }}
                    onMouseEnter={playHover}
                  >
                    <span>Details &amp; Architecture</span>
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>

              <div className="project-body-grid">
                {/* Left Side: Overview & Tech Tags */}
                <div className="project-details-side">
                  <h3 className="project-name">{project.title}</h3>
                  <p className="project-summary-text">{project.description}</p>

                  <div className="tech-tags-wrapper">
                    {project.technologies.map(tech => (
                      <span key={tech} className="tech-pill font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.featuresToHighlight && (
                    <div className="key-specs-box">
                      <h4 className="specs-title">
                        <Database size={15} className="text-cyan" />
                        <span>Core Architectural Modules</span>
                      </h4>
                      <ul className="specs-list">
                        {project.featuresToHighlight.slice(0, 4).map(f => (
                          <li key={f}>
                            <CheckCircle2 size={13} className="text-cyan" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {project.programmingConcepts && (
                    <div className="key-specs-box">
                      <h4 className="specs-title">
                        <Terminal size={15} className="text-cyan" />
                        <span>Object-Oriented C++ Concepts</span>
                      </h4>
                      <ul className="specs-list">
                        {project.programmingConcepts.slice(0, 4).map(c => (
                          <li key={c}>
                            <CheckCircle2 size={13} className="text-cyan" />
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {project.highlights && (
                    <div className="key-specs-box">
                      <h4 className="specs-title">
                        <Sparkles size={15} className="text-cyan" />
                        <span>Design &amp; Engineering Highlights</span>
                      </h4>
                      <ul className="specs-list">
                        {project.highlights.map(h => (
                          <li key={h}>
                            <CheckCircle2 size={13} className="text-cyan" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Right Side: Interactive Live In-Card Demo / Sandbox */}
                <div className="project-preview-side">
                  {/* PREVIEW 1: Portfolio 3D Wireframe Canvas */}
                  {project.interactiveType === 'canvas-demo' && (
                    <div className="sandbox-panel">
                      <div className="sandbox-bar">
                        <div className="sandbox-title font-mono">
                          <Sparkles size={14} className="text-cyan" />
                          <span>Three.js WebGL Architecture Preview</span>
                        </div>
                        <span className="live-status-pill font-mono">ACTIVE RENDERER</span>
                      </div>
                      <div className="sandbox-canvas-mock">
                        <div className="canvas-geometric-wireframe">
                          <div className="wireframe-ring ring-a" />
                          <div className="wireframe-ring ring-b" />
                          <div className="wireframe-center">
                            <span className="font-mono text-cyan">THREE.WebGLRenderer</span>
                          </div>
                        </div>
                        <div className="canvas-stats font-mono">
                          <div>SCENE: Procedural Core</div>
                          <div>VERTICES: 850 Points</div>
                          <div>SHADERS: Additive Blending</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* PREVIEW 2: Auto Garage Management Flow */}
                  {project.interactiveType === 'garage-flow' && (
                    <div className="sandbox-panel">
                      <div className="sandbox-bar">
                        <div className="sandbox-title font-mono">
                          <Database size={14} className="text-purple" />
                          <span>System Workflow Inspector</span>
                        </div>
                        <span className="live-status-pill font-mono">PHP + MySQL</span>
                      </div>

                      <div className="garage-nav-tabs">
                        {['appointments', 'customers', 'services', 'reports'].map(tab => (
                          <button
                            key={tab}
                            type="button"
                            className={`garage-tab-btn font-mono ${garageActiveTab === tab ? 'active' : ''}`}
                            onClick={() => { playClick(); setGarageActiveTab(tab); }}
                          >
                            {tab.toUpperCase()}
                          </button>
                        ))}
                      </div>

                      <div className="garage-tab-content font-mono">
                        {garageActiveTab === 'appointments' && (
                          <div className="flow-step">
                            <div className="flow-badge">MODULE: Booking Engine</div>
                            <p className="flow-desc">
                              Validates scheduled service time slots, customer vehicle registration, and prevents double-booked garage bays.
                            </p>
                            <div className="flow-code-preview">
                              <code>SELECT * FROM appointments WHERE date = ? AND status = 'confirmed';</code>
                            </div>
                          </div>
                        )}
                        {garageActiveTab === 'customers' && (
                          <div className="flow-step">
                            <div className="flow-badge">MODULE: Customer Records</div>
                            <p className="flow-desc">
                              Stores contact info, vehicle history, past invoices, and upcoming maintenance alerts using relational primary keys.
                            </p>
                            <div className="flow-code-preview">
                              <code>TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(100), phone VARCHAR(15));</code>
                            </div>
                          </div>
                        )}
                        {garageActiveTab === 'services' && (
                          <div className="flow-step">
                            <div className="flow-badge">MODULE: Service Catalog</div>
                            <p className="flow-desc">
                              Defines service pricing tiers (Oil Change, Brake Inspection, Engine Diagnostics) and technician assignments.
                            </p>
                            <div className="flow-code-preview">
                              <code>INSERT INTO service_records (vehicle_id, service_type, cost) VALUES (?, ?, ?);</code>
                            </div>
                          </div>
                        )}
                        {garageActiveTab === 'reports' && (
                          <div className="flow-step">
                            <div className="flow-badge">MODULE: Admin Reporting</div>
                            <p className="flow-desc">
                              Generates revenue analytics, completed service breakdowns, and administrative audit logs for garage management.
                            </p>
                            <div className="flow-code-preview">
                              <code>SELECT SUM(cost) AS total_revenue FROM service_records WHERE month(created_at) = ?;</code>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* PREVIEW 3: ATM Logic C++ Interactive Terminal Simulator */}
                  {project.interactiveType === 'atm-simulator' && (
                    <div className="sandbox-panel atm-terminal-panel">
                      <div className="sandbox-bar">
                        <div className="sandbox-title font-mono">
                          <Terminal size={14} className="text-cyan" />
                          <span>C++ Console Logic Emulator</span>
                        </div>
                        <span className="live-status-pill font-mono">LIVE EXECUTION</span>
                      </div>

                      <div className="atm-screen font-mono">
                        <div className="atm-status-strip">
                          <span>SYSTEM: C++ OOP BANKING</span>
                          <span>STATUS: {atmState.authenticated ? 'LOGGED IN' : 'LOCKED'}</span>
                        </div>

                        <div className="atm-message-box">
                          <p className="text-cyan">{atmState.message}</p>
                          {atmState.authenticated && (
                            <p className="balance-display">
                              CURRENT BALANCE: <span className="text-emerald">${atmState.balance.toFixed(2)}</span>
                            </p>
                          )}
                        </div>

                        {!atmState.authenticated ? (
                          <form onSubmit={handlePinSubmit} className="atm-auth-form">
                            <div className="pin-input-group">
                              <label htmlFor="atm-pin" className="pin-label">ENTER 4-DIGIT PIN:</label>
                              <input
                                id="atm-pin"
                                type="password"
                                maxLength={4}
                                value={atmState.pinInput}
                                onChange={(e) => setAtmState(prev => ({ ...prev, pinInput: e.target.value }))}
                                placeholder="1234"
                                className="atm-input"
                              />
                            </div>
                            <button type="submit" className="atm-btn atm-btn-primary">
                              <span>VERIFY PIN &rarr;</span>
                            </button>
                          </form>
                        ) : (
                          <div className="atm-actions-deck">
                            <div className="atm-amount-group">
                              <span className="currency-symbol">$</span>
                              <input
                                type="number"
                                min="1"
                                placeholder="Amount (e.g. 100)"
                                value={atmState.actionAmount}
                                onChange={(e) => setAtmState(prev => ({ ...prev, actionAmount: e.target.value }))}
                                className="atm-input"
                              />
                            </div>

                            <div className="atm-btn-row">
                              <button type="button" onClick={handleDeposit} className="atm-btn atm-btn-deposit">
                                + Deposit
                              </button>
                              <button type="button" onClick={handleWithdraw} className="atm-btn atm-btn-withdraw">
                                - Withdraw
                              </button>
                              <button type="button" onClick={handleLogoutATM} className="atm-btn atm-btn-exit">
                                Eject Card
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <style>{`
        .projects-collection {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .project-card-item {
          padding: 36px;
          position: relative;
          overflow: hidden;
          background: rgba(10, 16, 32, 0.7);
          border: 1px solid var(--border-subtle);
          transition: transform var(--transition-normal), border-color var(--transition-normal), box-shadow var(--transition-normal);
        }

        .project-card-item:hover {
          border-color: rgba(56, 189, 248, 0.4);
          box-shadow: 0 16px 48px -12px rgba(0, 240, 255, 0.12);
        }

        .project-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 24px;
          border-bottom: 1px solid var(--border-subtle);
          margin-bottom: 28px;
          flex-wrap: wrap;
          gap: 16px;
        }

        .project-meta-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.78rem;
          color: var(--primary-cyan);
          letter-spacing: 0.08em;
        }

        .pill-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: var(--text-muted);
        }

        .project-top-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .action-icon-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-heading);
          font-size: 0.88rem;
          color: var(--text-secondary);
          text-decoration: none;
          padding: 8px 16px;
          border-radius: var(--radius-full);
          border: 1px solid var(--border-subtle);
          background: rgba(15, 23, 42, 0.6);
          transition: all 0.2s ease;
        }

        .action-icon-link:hover {
          color: #ffffff;
          border-color: var(--primary-cyan);
          background: rgba(0, 240, 255, 0.1);
        }

        .btn-details-trigger {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-heading);
          font-size: 0.88rem;
          color: var(--primary-blue);
          background: rgba(56, 189, 248, 0.08);
          border: 1px solid rgba(56, 189, 248, 0.25);
          padding: 8px 16px;
          border-radius: var(--radius-full);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .btn-details-trigger:hover {
          background: rgba(56, 189, 248, 0.2);
          color: #ffffff;
        }

        .project-body-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 36px;
          align-items: center;
        }

        .project-name {
          font-size: 1.85rem;
          margin-bottom: 12px;
        }

        .project-summary-text {
          font-size: 1rem;
          color: var(--text-secondary);
          line-height: 1.65;
          margin-bottom: 20px;
        }

        .tech-tags-wrapper {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 24px;
        }

        .tech-pill {
          font-size: 0.74rem;
          padding: 4px 10px;
          border-radius: 6px;
          background: rgba(15, 23, 42, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #7dd3fc;
        }

        .key-specs-box {
          background: rgba(3, 7, 18, 0.5);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 18px;
        }

        .specs-title {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.88rem;
          color: var(--text-primary);
          margin-bottom: 12px;
        }

        .specs-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .specs-list li {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 0.84rem;
          color: var(--text-secondary);
          line-height: 1.45;
        }

        /* Sandbox & Preview Panels */
        .sandbox-panel {
          background: rgba(5, 10, 20, 0.9);
          border: 1px solid rgba(56, 189, 248, 0.2);
          border-radius: var(--radius-md);
          overflow: hidden;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.5);
        }

        .sandbox-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 18px;
          background: rgba(15, 23, 42, 0.75);
          border-bottom: 1px solid var(--border-subtle);
        }

        .sandbox-title {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.78rem;
          color: var(--text-secondary);
        }

        .live-status-pill {
          font-size: 0.68rem;
          padding: 2px 8px;
          border-radius: 4px;
          background: rgba(16, 185, 129, 0.15);
          color: #34d399;
          border: 1px solid rgba(16, 185, 129, 0.3);
        }

        /* Geometric Canvas Mock */
        .sandbox-canvas-mock {
          padding: 36px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          background: radial-gradient(circle at center, rgba(0, 240, 255, 0.05) 0%, transparent 70%);
        }

        .canvas-geometric-wireframe {
          position: relative;
          width: 160px;
          height: 160px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
        }

        .wireframe-ring {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 1.5px dashed var(--primary-cyan);
        }

        .ring-a {
          animation: spinWire 14s linear infinite;
        }

        .ring-b {
          inset: 15px;
          border-color: var(--primary-violet);
          animation: spinWireRev 10s linear infinite;
        }

        @keyframes spinWire {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes spinWireRev {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        .wireframe-center {
          font-size: 0.72rem;
          background: rgba(3, 7, 18, 0.8);
          padding: 4px 8px;
          border-radius: 6px;
          border: 1px solid var(--border-subtle);
        }

        .canvas-stats {
          display: flex;
          gap: 16px;
          font-size: 0.72rem;
          color: var(--text-muted);
          border-top: 1px solid var(--border-subtle);
          padding-top: 12px;
          width: 100%;
          justify-content: space-around;
        }

        /* Garage Nav */
        .garage-nav-tabs {
          display: flex;
          border-bottom: 1px solid var(--border-subtle);
          background: rgba(10, 15, 30, 0.5);
        }

        .garage-tab-btn {
          flex: 1;
          padding: 10px;
          font-size: 0.72rem;
          background: transparent;
          border: none;
          border-bottom: 2px solid transparent;
          color: var(--text-muted);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .garage-tab-btn:hover {
          color: #ffffff;
        }

        .garage-tab-btn.active {
          color: var(--primary-cyan);
          border-bottom-color: var(--primary-cyan);
          background: rgba(0, 240, 255, 0.04);
        }

        .garage-tab-content {
          padding: 24px;
        }

        .flow-badge {
          display: inline-block;
          font-size: 0.72rem;
          color: #c084fc;
          margin-bottom: 8px;
        }

        .flow-desc {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 14px;
        }

        .flow-code-preview {
          background: rgba(3, 7, 18, 0.85);
          padding: 12px;
          border-radius: 6px;
          border: 1px solid var(--border-subtle);
          font-size: 0.76rem;
          color: #38bdf8;
          overflow-x: auto;
        }

        /* ATM Terminal */
        .atm-screen {
          padding: 24px;
        }

        .atm-status-strip {
          display: flex;
          justify-content: space-between;
          font-size: 0.72rem;
          color: var(--text-muted);
          margin-bottom: 16px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          padding-bottom: 8px;
        }

        .atm-message-box {
          background: rgba(3, 7, 18, 0.85);
          padding: 14px;
          border-radius: 6px;
          border: 1px solid rgba(56, 189, 248, 0.25);
          font-size: 0.82rem;
          line-height: 1.5;
          margin-bottom: 20px;
        }

        .balance-display {
          margin-top: 8px;
          font-size: 0.95rem;
          color: #ffffff;
        }

        .atm-auth-form {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .pin-input-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .pin-label {
          font-size: 0.72rem;
          color: var(--text-muted);
        }

        .atm-input {
          background: rgba(15, 23, 42, 0.8);
          border: 1px solid var(--border-subtle);
          border-radius: 6px;
          padding: 10px 14px;
          color: #ffffff;
          font-family: var(--font-mono);
          font-size: 0.9rem;
          outline: none;
        }

        .atm-input:focus {
          border-color: var(--primary-cyan);
        }

        .atm-btn {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          padding: 10px 16px;
          border-radius: 6px;
          cursor: pointer;
          border: 1px solid transparent;
          transition: all 0.2s ease;
        }

        .atm-btn-primary {
          background: var(--primary-cyan);
          color: #030712;
          font-weight: 600;
        }

        .atm-btn-primary:hover {
          background: #38bdf8;
        }

        .atm-actions-deck {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .atm-amount-group {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .currency-symbol {
          color: var(--primary-cyan);
          font-size: 1.1rem;
        }

        .atm-btn-row {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .atm-btn-deposit {
          background: rgba(16, 185, 129, 0.15);
          border-color: rgba(16, 185, 129, 0.35);
          color: #34d399;
        }
        .atm-btn-deposit:hover {
          background: rgba(16, 185, 129, 0.3);
        }

        .atm-btn-withdraw {
          background: rgba(245, 158, 11, 0.15);
          border-color: rgba(245, 158, 11, 0.35);
          color: #fbbf24;
        }
        .atm-btn-withdraw:hover {
          background: rgba(245, 158, 11, 0.3);
        }

        .atm-btn-exit {
          background: rgba(239, 68, 68, 0.15);
          border-color: rgba(239, 68, 68, 0.35);
          color: #f87171;
        }
        .atm-btn-exit:hover {
          background: rgba(239, 68, 68, 0.3);
        }

        @media (max-width: 992px) {
          .project-body-grid {
            grid-template-columns: 1fr;
          }
          .project-card-item {
            padding: 24px;
          }
        }
      `}</style>
    </section>
  );
}

import React, { useEffect } from 'react';
import { X, Printer, MapPin, Mail, Phone } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { playClick } from '../utils/audio';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
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

  if (!isOpen) return null;

  const handlePrint = () => {
    playClick();
    window.print();
  };

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-label="Curriculum Vitae Modal">
      <div className="resume-modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Top Control Bar (Hidden during print) */}
        <div className="modal-actions-bar no-print">
          <div className="modal-title font-mono">
            <span>AAYAN_MADNAS_RESUME.PDF // PREVIEW</span>
          </div>

          <div className="modal-buttons-group">
            <button 
              type="button" 
              className="btn-print font-mono"
              onClick={handlePrint}
              title="Print or Save as PDF"
            >
              <Printer size={15} />
              <span>Print / Save PDF</span>
            </button>

            <button 
              type="button" 
              className="modal-close-btn"
              onClick={() => { playClick(); onClose(); }}
              aria-label="Close CV Modal"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Sheet */}
        <div className="printable-sheet">
          {/* Header */}
          <header className="resume-sheet-header">
            <div>
              <h1 className="resume-name">Aayan Madnas</h1>
              <p className="resume-headline">Software Engineering Student &amp; Web Developer</p>
            </div>

            <div className="resume-contact-block font-mono">
              <div><MapPin size={13} /> Indore, Madhya Pradesh, India</div>
              <div><Mail size={13} /> aayanmadnas@outlook.com</div>
              <div><Phone size={13} /> +91 9516021102</div>
              <div><GithubIcon size={13} /> github.com/aayanmadnas-dev</div>
              <div><LinkedinIcon size={13} /> linkedin.com/in/aayan-madnas-33a5a636</div>
            </div>
          </header>

          <hr className="resume-divider" />

          {/* Education */}
          <section className="resume-section">
            <h2 className="resume-sec-title">EDUCATION</h2>
            <div className="resume-item">
              <div className="resume-item-top">
                <span className="resume-item-org">Chameli Devi Group of Institutions</span>
                <span className="resume-item-date font-mono">Expected Graduation: 2029</span>
              </div>
              <div className="resume-item-sub">Bachelor of Technology / Bachelor of Engineering</div>
              <div className="resume-item-loc">Indore, Madhya Pradesh</div>
            </div>
          </section>

          {/* Summary */}
          <section className="resume-section">
            <h2 className="resume-sec-title">PROFESSIONAL SUMMARY</h2>
            <p className="resume-paragraph">
              Software engineering student at Chameli Devi Group of Institutions with an expected graduation year of 2029. Focuses on developing practical software solutions, strengthening programming and algorithmic problem-solving skills, and building responsive web applications. Technical proficiencies include C++, Python, JavaScript, PHP, Data Structures and Algorithms, MySQL database fundamentals, and interactive user interfaces.
            </p>
          </section>

          {/* Technical Skills */}
          <section className="resume-section">
            <h2 className="resume-sec-title">TECHNICAL SKILLS</h2>
            <div className="resume-skills-table">
              <div className="skill-row">
                <span className="skill-cat">Programming Languages:</span>
                <span className="skill-vals">C++, Python, JavaScript, PHP, Data Structures &amp; Algorithms</span>
              </div>
              <div className="skill-row">
                <span className="skill-cat">Web Development:</span>
                <span className="skill-vals">HTML5, CSS3, JavaScript, PHP, Responsive Web Design</span>
              </div>
              <div className="skill-row">
                <span className="skill-cat">Tools &amp; Environments:</span>
                <span className="skill-vals">Git, GitHub, Visual Studio Code, Jupyter Notebook</span>
              </div>
              <div className="skill-row">
                <span className="skill-cat">Additional Disciplines:</span>
                <span className="skill-vals">Database Fundamentals (MySQL), UI/UX Design, Data Analysis, Machine Learning Fundamentals</span>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section className="resume-section">
            <h2 className="resume-sec-title">FEATURED PROJECTS</h2>

            <div className="resume-project-item">
              <div className="resume-item-top">
                <span className="resume-item-org">Portfolio Website</span>
                <span className="resume-item-date font-mono">HTML5, CSS3, JavaScript, Three.js, Git, GitHub</span>
              </div>
              <p className="resume-project-desc">
                A responsive personal portfolio website designed to showcase software projects and technical work, featuring interactive web components and procedural 3D elements.
              </p>
              <div className="resume-link font-mono">Repository: https://github.com/aayanmadnas-dev/Portfolio-Website</div>
            </div>

            <div className="resume-project-item">
              <div className="resume-item-top">
                <span className="resume-item-org">Auto Garage Management System</span>
                <span className="resume-item-date font-mono">PHP, HTML5, CSS3, JavaScript, MySQL</span>
              </div>
              <p className="resume-project-desc">
                A web-based auto garage management system featuring customer records, service management, appointment booking, and an administrative dashboard. Implements admin authentication, customer records, reports, FAQs, and MySQL relational database integration.
              </p>
              <div className="resume-link font-mono">Repository: https://github.com/aayanmadnas-dev/Auto-garage</div>
            </div>

            <div className="resume-project-item">
              <div className="resume-item-top">
                <span className="resume-item-org">ATM Logic with C++</span>
                <span className="resume-item-date font-mono">C++, Object-Oriented Programming</span>
              </div>
              <p className="resume-project-desc">
                A console-based ATM application implementing core banking operations, including account authentication, deposits, withdrawals, balance checking, and PIN management. Applies classes, inheritance, conditionals, and robust input handling.
              </p>
              <div className="resume-link font-mono">Repository: https://github.com/aayanmadnas-dev/ATM-logic-with-c</div>
            </div>
          </section>

          {/* Engineering Approach */}
          <section className="resume-section">
            <h2 className="resume-sec-title">DEVELOPMENT METHODOLOGY (HOW I BUILD)</h2>
            <p className="resume-paragraph">
              1. Understand Problem Constraints &rarr; 2. Architectural Planning &amp; Modeling &rarr; 3. Interface Design &amp; Accessibility &rarr; 4. Implementation &amp; Boundary Testing &rarr; 5. Version Control via Git/GitHub &rarr; 6. Code Maintenance &amp; Optimization.
            </p>
          </section>
        </div>
      </div>

      <style>{`
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(3, 7, 18, 0.85);
          backdrop-filter: blur(12px);
          z-index: 100000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          overflow-y: auto;
        }

        .resume-modal-card {
          background: #090d16;
          border: 1px solid var(--border-glow);
          border-radius: var(--radius-lg);
          width: 100%;
          max-width: 860px;
          max-height: 90vh;
          display: flex;
          flex-direction: column;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.8);
          overflow: hidden;
        }

        .modal-actions-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 24px;
          background: #0f172a;
          border-bottom: 1px solid var(--border-subtle);
        }

        .modal-title {
          font-size: 0.78rem;
          color: var(--primary-cyan);
        }

        .modal-buttons-group {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .btn-print {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          border-radius: var(--radius-full);
          background: rgba(56, 189, 248, 0.15);
          border: 1px solid rgba(56, 189, 248, 0.4);
          color: var(--primary-blue);
          font-size: 0.78rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .btn-print:hover {
          background: rgba(56, 189, 248, 0.3);
          color: #ffffff;
        }

        .modal-close-btn {
          background: transparent;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          display: flex;
          align-items: center;
        }

        .modal-close-btn:hover {
          color: #ffffff;
        }

        .printable-sheet {
          padding: 36px 44px;
          overflow-y: auto;
          color: #f1f5f9;
          font-family: var(--font-sans);
          line-height: 1.55;
        }

        .resume-sheet-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 20px;
        }

        .resume-name {
          font-size: 2.2rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.1;
          margin-bottom: 4px;
        }

        .resume-headline {
          font-size: 1.05rem;
          color: var(--primary-blue);
          font-weight: 500;
        }

        .resume-contact-block {
          font-size: 0.76rem;
          color: #94a3b8;
          display: flex;
          flex-direction: column;
          gap: 4px;
          text-align: right;
        }

        .resume-contact-block div {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 6px;
        }

        .resume-divider {
          border: none;
          height: 1px;
          background: var(--border-subtle);
          margin: 20px 0 24px;
        }

        .resume-section {
          margin-bottom: 24px;
        }

        .resume-sec-title {
          font-family: var(--font-heading);
          font-size: 0.88rem;
          letter-spacing: 0.1em;
          color: var(--primary-cyan);
          border-bottom: 1px solid rgba(56, 189, 248, 0.2);
          padding-bottom: 4px;
          margin-bottom: 12px;
        }

        .resume-item-top {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 2px;
        }

        .resume-item-org {
          font-size: 1.05rem;
          font-weight: 700;
          color: #ffffff;
        }

        .resume-item-date {
          font-size: 0.76rem;
          color: #38bdf8;
        }

        .resume-item-sub {
          font-size: 0.92rem;
          color: #cbd5e1;
        }

        .resume-item-loc {
          font-size: 0.82rem;
          color: #64748b;
        }

        .resume-paragraph {
          font-size: 0.9rem;
          color: #cbd5e1;
          line-height: 1.6;
        }

        .resume-skills-table {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .skill-row {
          display: grid;
          grid-template-columns: 190px 1fr;
          font-size: 0.86rem;
        }

        .skill-cat {
          font-weight: 600;
          color: #ffffff;
        }

        .skill-vals {
          color: #cbd5e1;
        }

        .resume-project-item {
          margin-bottom: 16px;
        }

        .resume-project-desc {
          font-size: 0.88rem;
          color: #cbd5e1;
          line-height: 1.5;
          margin: 4px 0;
        }

        .resume-link {
          font-size: 0.74rem;
          color: #38bdf8;
        }

        /* Print Media Styles */
        @media print {
          body * {
            visibility: hidden;
          }
          .modal-backdrop, .resume-modal-card, .printable-sheet, .printable-sheet * {
            visibility: visible;
          }
          .modal-backdrop {
            position: absolute;
            left: 0;
            top: 0;
            background: #ffffff !important;
            padding: 0;
          }
          .resume-modal-card {
            border: none;
            background: #ffffff !important;
            color: #000000 !important;
            max-width: 100%;
            box-shadow: none;
          }
          .no-print {
            display: none !important;
          }
          .printable-sheet {
            color: #111827 !important;
            padding: 20px;
          }
          .resume-name, .resume-item-org, .skill-cat {
            color: #000000 !important;
          }
          .resume-headline, .resume-item-date, .resume-sec-title, .resume-link {
            color: #1e3a8a !important;
          }
          .resume-paragraph, .skill-vals, .resume-project-desc, .resume-item-sub {
            color: #374151 !important;
          }
          .resume-contact-block, .resume-item-loc {
            color: #4b5563 !important;
          }
          .resume-divider, .resume-sec-title {
            border-color: #cbd5e1 !important;
          }
        }

        @media (max-width: 640px) {
          .printable-sheet {
            padding: 24px;
          }
          .resume-sheet-header {
            flex-direction: column;
          }
          .resume-contact-block {
            text-align: left;
            align-items: flex-start;
          }
          .resume-contact-block div {
            justify-content: flex-start;
          }
          .skill-row {
            grid-template-columns: 1fr;
            gap: 2px;
          }
        }
      `}</style>
    </div>
  );
}

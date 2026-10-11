import React from 'react';
import { ArrowUp, ShieldCheck } from 'lucide-react';
import { playClick, playHover } from '../utils/audio';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const scrollToTop = () => {
    playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrapper" aria-label="Website Footer">
      <div className="footer-inner">
        {/* Top Tier */}
        <div className="footer-top-row">
          <div className="footer-brand-side">
            <div className="brand-logo-strip">
              <span className="brand-monogram">AM</span>
              <h3 className="brand-title">Aayan Madnas</h3>
            </div>
            <p className="footer-tagline">
              Software Engineering Student &amp; Web Developer • Chameli Devi Group of Institutions (2029) • Indore, Madhya Pradesh, India.
            </p>
            <div className="footer-security-pill font-mono">
              <ShieldCheck size={14} className="text-emerald" />
              <span>SECURITY FIRST: ZERO CLIENT SECRETS // STATIC ASSET INTEGRITY</span>
            </div>
          </div>

          <div className="footer-links-side">
            <div className="footer-links-col">
              <h4 className="links-col-title font-mono">EXPLORE</h4>
              <ul className="footer-nav-list">
                <li><a href="#home" onClick={playClick}>Hero Core</a></li>
                <li><a href="#about" onClick={playClick}>About Me</a></li>
                <li><a href="#skills" onClick={playClick}>Technical Skills</a></li>
                <li><a href="#projects" onClick={playClick}>Featured Projects</a></li>
                <li><a href="#process" onClick={playClick}>How I Build</a></li>
                <li><a href="#contact" onClick={playClick}>Contact</a></li>
              </ul>
            </div>

            <div className="footer-links-col">
              <h4 className="links-col-title font-mono">CONNECT</h4>
              <ul className="footer-nav-list">
                <li>
                  <a href="https://github.com/aayanmadnas-dev" target="_blank" rel="noopener noreferrer" onClick={playClick}>
                    GitHub Profile &rarr;
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com/in/aayan-madnas-33a5a636" target="_blank" rel="noopener noreferrer" onClick={playClick}>
                    LinkedIn Network &rarr;
                  </a>
                </li>
                <li>
                  <a href="mailto:aayanmadnas@outlook.com" onClick={playClick}>
                    aayanmadnas@outlook.com
                  </a>
                </li>
                <li>
                  <a href="tel:+919516021102" onClick={playClick}>
                    +91 9516021102
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Tier */}
        <div className="footer-bottom-row">
          <p className="copyright-line">
            &copy; {CURRENT_YEAR} Aayan Madnas. All rights reserved. Crafted with clean architecture, procedural Three.js 3D &amp; responsive CSS.
          </p>

          <button
            type="button"
            className="back-to-top-btn"
            onClick={scrollToTop}
            onMouseEnter={playHover}
            aria-label="Scroll back to top"
          >
            <span>Back to Top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>

      <style>{`
        .footer-wrapper {
          border-top: 1px solid var(--border-subtle);
          background: rgba(3, 7, 18, 0.95);
          position: relative;
          z-index: 5;
          padding: 80px 24px 40px;
        }

        .footer-inner {
          max-width: 1240px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 60px;
        }

        .footer-top-row {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 48px;
        }

        .footer-brand-side {
          display: flex;
          flex-direction: column;
          gap: 16px;
          max-width: 520px;
        }

        .brand-logo-strip {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .brand-monogram {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: linear-gradient(135deg, rgba(0, 240, 255, 0.2), rgba(139, 92, 246, 0.2));
          border: 1px solid var(--border-glow);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-heading);
          font-weight: 800;
          color: var(--primary-cyan);
        }

        .brand-title {
          font-size: 1.3rem;
        }

        .footer-tagline {
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .footer-security-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(16, 185, 129, 0.08);
          border: 1px solid rgba(16, 185, 129, 0.25);
          padding: 6px 14px;
          border-radius: var(--radius-full);
          font-size: 0.72rem;
          color: #34d399;
          width: fit-content;
        }

        .footer-links-side {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
        }

        .links-col-title {
          font-size: 0.78rem;
          letter-spacing: 0.1em;
          color: var(--primary-cyan);
          margin-bottom: 16px;
        }

        .footer-nav-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .footer-nav-list a {
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 0.88rem;
          transition: color 0.2s ease;
        }

        .footer-nav-list a:hover {
          color: #ffffff;
        }

        .footer-bottom-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 32px;
          border-top: 1px solid var(--border-subtle);
          flex-wrap: wrap;
          gap: 20px;
        }

        .copyright-line {
          font-size: 0.84rem;
          color: var(--text-muted);
        }

        .back-to-top-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(15, 23, 42, 0.7);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-full);
          padding: 10px 18px;
          color: var(--text-secondary);
          font-family: var(--font-heading);
          font-size: 0.84rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .back-to-top-btn:hover {
          color: #ffffff;
          border-color: var(--primary-cyan);
          background: rgba(0, 240, 255, 0.1);
        }

        @media (max-width: 860px) {
          .footer-top-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </footer>
  );
}

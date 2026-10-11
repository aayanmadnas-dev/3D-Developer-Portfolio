import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, FileText, ArrowUpRight } from 'lucide-react';
import { toggleSound, playClick, playHover } from '../utils/audio';

export default function Navbar({ onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundOn, setSoundOn] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'How I Build', href: '#process', id: 'process' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);

      // Calculate scroll progress percentage
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setScrollProgress((scrollY / docHeight) * 100);
      }

      // Scrollspy active section
      const sections = ['contact', 'process', 'projects', 'skills', 'about', 'home'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSoundToggle = () => {
    const nextState = toggleSound();
    setSoundOn(nextState);
  };

  const handleNavClick = (id) => {
    playClick();
    setActiveSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div 
        className="scroll-progress-line" 
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          {/* Brand Logo */}
          <a 
            href="#home" 
            className="navbar-brand" 
            onClick={() => handleNavClick('home')}
            onMouseEnter={playHover}
          >
            <div className="brand-badge">AM</div>
            <div className="brand-text">
              <span className="brand-name">Aayan Madnas</span>
              <span className="brand-sub font-mono">DEV // 2029</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            <ul className="nav-links-list">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      className={`nav-link ${isActive ? 'active' : ''}`}
                      onClick={() => handleNavClick(link.id)}
                      onMouseEnter={playHover}
                    >
                      <span>{link.label}</span>
                      {isActive && <span className="nav-active-dot" />}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right Action Icons & Resume CTA */}
          <div className="nav-actions-right">
            {/* Audio Toggle */}
            <button
              type="button"
              className={`sound-toggle-btn ${soundOn ? 'sound-active' : ''}`}
              onClick={handleSoundToggle}
              title={soundOn ? 'Mute Procedural Audio' : 'Enable Procedural Audio'}
              aria-label={soundOn ? 'Mute Procedural Audio' : 'Enable Procedural Audio'}
            >
              {soundOn ? <Volume2 size={16} /> : <VolumeX size={16} />}
              <span className="sound-label font-mono">{soundOn ? 'AUDIO ON' : 'MUTED'}</span>
            </button>

            {/* Resume Button */}
            {onOpenResume && (
              <button
                type="button"
                className="resume-pill-btn"
                onClick={() => { playClick(); onOpenResume(); }}
                onMouseEnter={playHover}
              >
                <FileText size={14} />
                <span>Verified CV</span>
                <ArrowUpRight size={13} />
              </button>
            )}

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              className="hamburger-btn"
              onClick={() => { playClick(); setMobileMenuOpen(!mobileMenuOpen); }}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-drawer-overlay" onClick={() => setMobileMenuOpen(false)}>
          <div className="mobile-drawer-content" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-drawer-header">
              <span className="font-mono text-cyan">NAVIGATION // MENU</span>
              <button 
                type="button" 
                className="close-drawer-btn" 
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close navigation menu"
              >
                <X size={20} />
              </button>
            </div>

            <ul className="mobile-nav-list">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                      onClick={() => handleNavClick(link.id)}
                    >
                      <span>{link.label}</span>
                      {isActive && <span className="mobile-active-tag font-mono">ACTIVE</span>}
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="mobile-drawer-footer">
              <button
                type="button"
                className="btn-secondary w-full"
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenResume) onOpenResume();
                }}
              >
                <FileText size={16} />
                <span>View Verified CV</span>
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .scroll-progress-line {
          position: fixed;
          top: 0;
          left: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--primary-cyan), var(--primary-violet), #ec4899);
          z-index: 10000;
          transition: width 0.1s ease-out;
          box-shadow: 0 0 10px rgba(0, 240, 255, 0.7);
        }

        .navbar-header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          transition: background 0.3s ease, backdrop-filter 0.3s ease, border-color 0.3s ease;
          padding: 16px 24px;
        }

        .navbar-header.scrolled {
          background: rgba(3, 7, 18, 0.85);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border-bottom: 1px solid var(--border-subtle);
          padding: 12px 24px;
        }

        .navbar-container {
          max-width: 1240px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .navbar-brand {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
        }

        .brand-badge {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: linear-gradient(135deg, rgba(0, 240, 255, 0.2), rgba(139, 92, 246, 0.2));
          border: 1px solid var(--border-glow);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 0.95rem;
          color: var(--primary-cyan);
          box-shadow: 0 0 12px rgba(0, 240, 255, 0.25);
        }

        .brand-text {
          display: flex;
          flex-direction: column;
        }

        .brand-name {
          font-family: var(--font-heading);
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.2;
        }

        .brand-sub {
          font-size: 0.68rem;
          color: var(--primary-blue);
          letter-spacing: 0.08em;
        }

        .desktop-nav {
          display: flex;
        }

        .nav-links-list {
          display: flex;
          align-items: center;
          gap: 28px;
          list-style: none;
        }

        .nav-link {
          font-family: var(--font-heading);
          font-size: 0.92rem;
          color: var(--text-secondary);
          text-decoration: none;
          position: relative;
          padding: 6px 0;
          transition: color 0.2s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .nav-link:hover {
          color: #ffffff;
        }

        .nav-link.active {
          color: var(--primary-cyan);
          font-weight: 600;
        }

        .nav-active-dot {
          position: absolute;
          bottom: -2px;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: var(--primary-cyan);
          box-shadow: 0 0 8px var(--primary-cyan);
        }

        .nav-actions-right {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .sound-toggle-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(15, 23, 42, 0.7);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-full);
          padding: 6px 12px;
          color: var(--text-muted);
          cursor: pointer;
          font-size: 0.72rem;
          transition: all 0.2s ease;
        }

        .sound-toggle-btn:hover {
          color: #ffffff;
          border-color: rgba(56, 189, 248, 0.3);
        }

        .sound-toggle-btn.sound-active {
          color: var(--primary-cyan);
          border-color: var(--primary-cyan);
          background: rgba(0, 240, 255, 0.08);
        }

        .resume-pill-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(56, 189, 248, 0.1);
          border: 1px solid rgba(56, 189, 248, 0.3);
          border-radius: var(--radius-full);
          padding: 7px 14px;
          color: #38bdf8;
          font-family: var(--font-heading);
          font-size: 0.84rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .resume-pill-btn:hover {
          background: rgba(56, 189, 248, 0.2);
          color: #ffffff;
          box-shadow: 0 0 15px rgba(56, 189, 248, 0.3);
        }

        .hamburger-btn {
          display: none;
          background: transparent;
          border: 1px solid var(--border-subtle);
          border-radius: 8px;
          padding: 6px;
          color: var(--text-primary);
          cursor: pointer;
        }

        /* Mobile Drawer */
        .mobile-drawer-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(8px);
          z-index: 10001;
          display: flex;
          justify-content: flex-end;
        }

        .mobile-drawer-content {
          width: 85%;
          max-width: 360px;
          height: 100%;
          background: #090d16;
          border-left: 1px solid var(--border-subtle);
          padding: 24px;
          display: flex;
          flex-direction: column;
        }

        .mobile-drawer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 20px;
          border-bottom: 1px solid var(--border-subtle);
          margin-bottom: 24px;
        }

        .close-drawer-btn {
          background: transparent;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
        }

        .mobile-nav-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: auto;
        }

        .mobile-nav-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 14px;
          border-radius: 8px;
          text-decoration: none;
          color: var(--text-secondary);
          font-family: var(--font-heading);
          font-size: 1.05rem;
          background: rgba(255, 255, 255, 0.02);
        }

        .mobile-nav-link.active {
          color: var(--primary-cyan);
          background: rgba(0, 240, 255, 0.08);
          font-weight: 600;
        }

        .mobile-active-tag {
          font-size: 0.68rem;
          color: var(--primary-cyan);
        }

        .mobile-drawer-footer {
          padding-top: 24px;
          border-top: 1px solid var(--border-subtle);
        }

        .w-full {
          width: 100%;
        }

        @media (max-width: 860px) {
          .desktop-nav {
            display: none;
          }
          .hamburger-btn {
            display: block;
          }
          .sound-label {
            display: none;
          }
        }
      `}</style>
    </>
  );
}

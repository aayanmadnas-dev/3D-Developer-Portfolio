import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Copy, Check, FileText, AlertCircle, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';
import { playClick, playHover, playSuccess } from '../utils/audio';

export default function ContactSection({ onOpenResume }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '' // spam trap
  });

  const [formErrors, setFormErrors] = useState({});
  const [formStatus, setFormStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const emailAddress = 'aayanmadnas@outlook.com';
  const phoneNumber = '+919516021102';
  const displayPhone = '+91 9516021102';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    playSuccess();
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#00f0ff', '#8b5cf6', '#38bdf8']
      });
    } catch {
      // Confetti fallback
    }
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const validate = () => {
    const errors = {};
    if (formData.honeypot) {
      errors.honeypot = 'Automated bot activity detected.';
      return errors;
    }
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errors.name = 'Please enter your full name (minimum 2 characters).';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errors.email = 'Please provide a valid email address.';
    }
    if (!formData.subject.trim() || formData.subject.trim().length < 3) {
      errors.subject = 'Please specify a clear subject (minimum 3 characters).';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errors.message = 'Please provide your message (minimum 10 characters).';
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    playClick();
    const errors = validate();
    setFormErrors(errors);

    if (Object.keys(errors).length > 0) {
      setFormStatus('error');
      setStatusMessage('Please correct the highlighted fields before sending.');
      return;
    }

    setFormStatus('submitting');
    setStatusMessage('Preparing direct communication dispatch...');

    setTimeout(() => {
      // Safe, verified client-side fallback:
      // Formats mailto link with encoded URI parameters
      const subject = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject}`);
      const body = encodeURIComponent(
        `Hello Aayan,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\nSent via Developer Portfolio`
      );
      const mailtoUrl = `mailto:${emailAddress}?subject=${subject}&body=${body}`;

      // Open mail client
      window.location.href = mailtoUrl;

      setFormStatus('success');
      playSuccess();
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.7 },
          colors: ['#00f0ff', '#8b5cf6', '#10b981']
        });
      } catch {
        // Confetti fallback
      }

      setStatusMessage('Communication initiated! Your native mail client has been launched with your inquiry.');
    }, 600);
  };

  return (
    <section id="contact" className="section-wrapper" aria-label="Contact and Connect with Aayan Madnas">
      <div className="section-header">
        <span className="section-subtitle">05 // Get in Touch</span>
        <h2 className="section-title">
          Have a Project <span className="gradient-text">in Mind?</span>
        </h2>
        <p className="section-desc">
          I'm interested in software development opportunities, collaborative projects, and connecting with people who enjoy building useful technology.
        </p>
      </div>

      <div className="contact-layout-grid">
        {/* Left Column: Direct Contact & Social Cards */}
        <div className="contact-info-col">
          <div className="glass-panel contact-details-card">
            <h3 className="card-subheading">Contact Information</h3>
            <p className="card-subtext">Feel free to reach out via direct mail, phone, or professional networks.</p>

            <div className="contact-methods-list">
              {/* Email */}
              <div className="contact-method-item">
                <div className="method-icon-wrap">
                  <Mail size={20} className="text-cyan" />
                </div>
                <div className="method-info">
                  <span className="method-label font-mono">EMAIL ADDRESS</span>
                  <a href={`mailto:${emailAddress}`} className="method-val" onClick={playClick}>
                    {emailAddress}
                  </a>
                </div>
                <button
                  type="button"
                  className="copy-quick-btn"
                  onClick={handleCopyEmail}
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check size={16} className="text-emerald" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Phone */}
              <div className="contact-method-item">
                <div className="method-icon-wrap">
                  <Phone size={20} className="text-purple" />
                </div>
                <div className="method-info">
                  <span className="method-label font-mono">PHONE / WHATSAPP</span>
                  <a href={`tel:${phoneNumber}`} className="method-val" onClick={playClick}>
                    {displayPhone}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="contact-method-item">
                <div className="method-icon-wrap">
                  <MapPin size={20} className="text-cyan" />
                </div>
                <div className="method-info">
                  <span className="method-label font-mono">LOCATION</span>
                  <span className="method-val-static">Indore, Madhya Pradesh, India</span>
                </div>
              </div>
            </div>

            {/* Quick Actions Row */}
            <div className="quick-actions-bar">
              <button 
                type="button" 
                className="btn-secondary"
                onClick={handleCopyEmail}
                onMouseEnter={playHover}
              >
                {copiedEmail ? <Check size={16} className="text-emerald" /> : <Copy size={16} />}
                <span>{copiedEmail ? 'Email Copied!' : 'Copy Email'}</span>
              </button>

              {onOpenResume && (
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={() => { playClick(); onOpenResume(); }}
                  onMouseEnter={playHover}
                >
                  <FileText size={16} className="text-cyan" />
                  <span>Verified CV</span>
                </button>
              )}
            </div>
          </div>

          {/* Social Profiles Grid */}
          <div className="social-profiles-grid">
            <a
              href="https://linkedin.com/in/aayan-madnas-33a5a636"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel social-profile-card"
              onClick={playClick}
              onMouseEnter={playHover}
            >
              <LinkedinIcon size={24} className="text-blue" />
              <div>
                <span className="profile-network font-mono">LINKEDIN</span>
                <span className="profile-handle">aayan-madnas-33a5a636</span>
              </div>
            </a>

            <a
              href="https://github.com/aayanmadnas-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel social-profile-card"
              onClick={playClick}
              onMouseEnter={playHover}
            >
              <GithubIcon size={24} className="text-cyan" />
              <div>
                <span className="profile-network font-mono">GITHUB</span>
                <span className="profile-handle">@aayanmadnas-dev</span>
              </div>
            </a>
          </div>
        </div>

        {/* Right Column: Secure Client Form */}
        <div className="contact-form-col">
          <div className="glass-panel contact-form-card">
            <div className="form-card-header">
              <Sparkles size={20} className="text-cyan" />
              <h3 className="form-card-title">Send a Direct Message</h3>
            </div>
            <p className="form-card-note">
              Equipped with client validation, length constraints, and direct mail dispatch fallback. No private credentials exposed.
            </p>

            <form onSubmit={handleSubmit} noValidate className="interactive-contact-form">
              {/* Spam honeypot (hidden) */}
              <div style={{ display: 'none' }}>
                <label htmlFor="hp-field">Ignore this field</label>
                <input
                  id="hp-field"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.honeypot}
                  onChange={(e) => setFormData(prev => ({ ...prev, honeypot: e.target.value }))}
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="form-name" className="form-label font-mono">YOUR NAME *</label>
                  <input
                    id="form-name"
                    type="text"
                    required
                    maxLength={70}
                    placeholder="e.g. Rahul Sharma"
                    className={`form-input ${formErrors.name ? 'error' : ''}`}
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  />
                  {formErrors.name && <span className="field-error-msg">{formErrors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="form-email" className="form-label font-mono">EMAIL ADDRESS *</label>
                  <input
                    id="form-email"
                    type="email"
                    required
                    maxLength={100}
                    placeholder="name@company.com"
                    className={`form-input ${formErrors.email ? 'error' : ''}`}
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  />
                  {formErrors.email && <span className="field-error-msg">{formErrors.email}</span>}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="form-subject" className="form-label font-mono">SUBJECT *</label>
                <input
                  id="form-subject"
                  type="text"
                  required
                  maxLength={120}
                  placeholder="Software internship / Web collaboration"
                  className={`form-input ${formErrors.subject ? 'error' : ''}`}
                  value={formData.subject}
                  onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                />
                {formErrors.subject && <span className="field-error-msg">{formErrors.subject}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="form-message" className="form-label font-mono">MESSAGE *</label>
                <textarea
                  id="form-message"
                  required
                  rows={5}
                  maxLength={1500}
                  placeholder="Hi Aayan, I reviewed your portfolio and project work..."
                  className={`form-textarea ${formErrors.message ? 'error' : ''}`}
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                />
                {formErrors.message && <span className="field-error-msg">{formErrors.message}</span>}
                <span className="char-counter font-mono">{formData.message.length} / 1500</span>
              </div>

              {formStatus === 'error' && (
                <div className="status-alert alert-error" role="alert">
                  <AlertCircle size={18} />
                  <span>{statusMessage}</span>
                </div>
              )}

              {formStatus === 'success' && (
                <div className="status-alert alert-success" role="alert">
                  <Check size={18} />
                  <span>{statusMessage}</span>
                </div>
              )}

              <div className="form-submit-row">
                <button
                  type="submit"
                  className="btn-primary form-submit-btn"
                  disabled={formStatus === 'submitting'}
                  onMouseEnter={playHover}
                >
                  <span>{formStatus === 'submitting' ? 'Dispatching...' : 'Send Message'}</span>
                  <Send size={16} />
                </button>

                <a
                  href={`mailto:${emailAddress}`}
                  className="direct-mail-fallback font-mono"
                  onClick={playClick}
                >
                  Direct Mailto Link &rarr;
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        .contact-layout-grid {
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 32px;
          align-items: start;
        }

        .contact-info-col {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .contact-details-card {
          padding: 36px;
        }

        .card-subheading {
          font-size: 1.4rem;
          margin-bottom: 8px;
        }

        .card-subtext {
          font-size: 0.92rem;
          color: var(--text-secondary);
          margin-bottom: 28px;
          line-height: 1.55;
        }

        .contact-methods-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-bottom: 30px;
        }

        .contact-method-item {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 14px 18px;
          background: rgba(3, 7, 18, 0.5);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          position: relative;
        }

        .method-icon-wrap {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-subtle);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .method-info {
          display: flex;
          flex-direction: column;
          gap: 2px;
          overflow: hidden;
        }

        .method-label {
          font-size: 0.7rem;
          color: var(--text-muted);
          letter-spacing: 0.08em;
        }

        .method-val {
          color: var(--text-primary);
          text-decoration: none;
          font-weight: 500;
          font-size: 0.95rem;
          transition: color 0.2s ease;
          word-break: break-all;
        }

        .method-val:hover {
          color: var(--primary-cyan);
        }

        .method-val-static {
          font-size: 0.95rem;
          color: var(--text-primary);
        }

        .copy-quick-btn {
          margin-left: auto;
          background: transparent;
          border: 1px solid var(--border-subtle);
          border-radius: 8px;
          padding: 6px;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .copy-quick-btn:hover {
          color: #ffffff;
          border-color: var(--primary-cyan);
        }

        .quick-actions-bar {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .social-profiles-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .social-profile-card {
          padding: 20px;
          display: flex;
          align-items: center;
          gap: 14px;
          text-decoration: none;
          transition: transform 0.2s ease, border-color 0.2s ease;
        }

        .social-profile-card:hover {
          transform: translateY(-2px);
          border-color: var(--primary-cyan);
        }

        .profile-network {
          font-size: 0.72rem;
          color: var(--text-muted);
          letter-spacing: 0.1em;
          display: block;
        }

        .profile-handle {
          font-size: 0.88rem;
          color: var(--text-primary);
          font-weight: 500;
        }

        /* Form Card */
        .contact-form-card {
          padding: 36px;
        }

        .form-card-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 6px;
        }

        .form-card-title {
          font-size: 1.4rem;
        }

        .form-card-note {
          font-size: 0.86rem;
          color: var(--text-muted);
          margin-bottom: 24px;
          line-height: 1.5;
        }

        .interactive-contact-form {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
          position: relative;
        }

        .form-label {
          font-size: 0.72rem;
          color: var(--text-secondary);
          letter-spacing: 0.08em;
        }

        .form-input,
        .form-textarea {
          background: rgba(3, 7, 18, 0.7);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          padding: 12px 14px;
          color: var(--text-primary);
          font-family: var(--font-sans);
          font-size: 0.95rem;
          outline: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .form-input:focus,
        .form-textarea:focus {
          border-color: var(--primary-cyan);
          box-shadow: 0 0 12px rgba(0, 240, 255, 0.2);
        }

        .form-input.error,
        .form-textarea.error {
          border-color: #ef4444;
        }

        .field-error-msg {
          font-size: 0.74rem;
          color: #ef4444;
        }

        .char-counter {
          font-size: 0.68rem;
          color: var(--text-muted);
          align-self: flex-end;
        }

        .status-alert {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 16px;
          border-radius: 8px;
          font-size: 0.86rem;
        }

        .alert-error {
          background: rgba(239, 68, 68, 0.12);
          border: 1px solid rgba(239, 68, 68, 0.3);
          color: #fca5a5;
        }

        .alert-success {
          background: rgba(16, 185, 129, 0.12);
          border: 1px solid rgba(16, 185, 129, 0.3);
          color: #6ee7b7;
        }

        .form-submit-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
          margin-top: 8px;
        }

        .form-submit-btn {
          flex: 1;
        }

        .direct-mail-fallback {
          font-size: 0.78rem;
          color: var(--text-muted);
          text-decoration: none;
        }

        .direct-mail-fallback:hover {
          color: var(--primary-cyan);
        }

        @media (max-width: 992px) {
          .contact-layout-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .form-row {
            grid-template-columns: 1fr;
          }
          .social-profiles-grid {
            grid-template-columns: 1fr;
          }
          .contact-details-card,
          .contact-form-card {
            padding: 24px;
          }
        }
      `}</style>
    </section>
  );
}

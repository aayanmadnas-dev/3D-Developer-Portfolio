import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import HowIBuildSection from './components/HowIBuildSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ResumeModal from './components/ResumeModal';
import ProjectModal from './components/ProjectModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenProjectModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseProjectModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="portfolio-app-root">
      {/* Dynamic Ambient Background Elements */}
      <div className="ambient-bg" aria-hidden="true">
        <div className="ambient-grid" />
        <div className="ambient-orb ambient-orb-1" />
        <div className="ambient-orb ambient-orb-2" />
        <div className="ambient-orb ambient-orb-3" />
      </div>

      {/* Custom Desktop Interactive Cursor */}
      <CustomCursor />

      {/* Main Top Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Primary Page Layout */}
      <main id="main-content">
        {/* Section 00: 3D Interactive Hero */}
        <Hero3D onOpenResume={() => setIsResumeOpen(true)} />

        {/* Section 01: Academic & Engineering Profile */}
        <AboutSection />

        {/* Section 02: Technical Competencies */}
        <SkillsSection />

        {/* Section 03: Verified Software Projects */}
        <ProjectsSection onOpenProjectModal={handleOpenProjectModal} />

        {/* Section 04: Engineering Methodology */}
        <HowIBuildSection />

        {/* Section 05: Contact & Inquiries */}
        <ContactSection onOpenResume={() => setIsResumeOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Curriculum Vitae Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Architectural Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={handleCloseProjectModal}
      />
    </div>
  );
}

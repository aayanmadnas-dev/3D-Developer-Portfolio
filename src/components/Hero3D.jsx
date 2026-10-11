import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Sparkles, Play, Pause, RefreshCw, Eye, ArrowDown, ExternalLink } from 'lucide-react';
import { playHover, playClick } from '../utils/audio';

const checkWebGLSupport = () => {
  if (typeof window === 'undefined') return true;
  try {
    const canvas = document.createElement('canvas');
    return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
  } catch {
    return false;
  }
};

export default function Hero3D({ onOpenResume }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [displayMode, setDisplayMode] = useState('quantum'); // 'quantum' | 'wireframe' | 'particles'
  const [webglSupported, setWebglSupported] = useState(() => checkWebGLSupport());

  // Refs for animation loop
  const animFrameId = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const coreGroupRef = useRef(null);
  const particlesRef = useRef(null);
  const ring1Ref = useRef(null);
  const ring2Ref = useRef(null);
  const targetRotation = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // If WebGL not supported, skip canvas init
    if (!webglSupported) return;

    // Initialize Three.js Scene
    const canvas = canvasRef.current;
    if (!canvas) return;

    const container = containerRef.current;
    const width = container ? container.clientWidth || window.innerWidth : window.innerWidth;
    const height = container ? container.clientHeight || window.innerHeight : window.innerHeight;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance'
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      rendererRef.current = renderer;
    } catch (err) {
      console.warn('WebGL initialization failed, activating fallback:', err);
      setTimeout(() => setWebglSupported(false), 0);
      return;
    }

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 7.5;

    // Parent group for rotation
    const coreGroup = new THREE.Group();
    coreGroupRef.current = coreGroup;
    scene.add(coreGroup);

    // 1. Central Geodesic Icosahedron Core
    const coreGeometry = new THREE.IcosahedronGeometry(1.6, 2);
    const coreMaterial = new THREE.MeshStandardMaterial({
      color: 0x091426,
      metalness: 0.9,
      roughness: 0.15,
      emissive: 0x002244,
      wireframe: false
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    coreGroup.add(coreMesh);

    // Wireframe overlay for glowing edges
    const wireGeometry = new THREE.IcosahedronGeometry(1.62, 2);
    const wireMaterial = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      wireframe: true,
      transparent: true,
      opacity: 0.6
    });
    const wireMesh = new THREE.Mesh(wireGeometry, wireMaterial);
    coreGroup.add(wireMesh);

    // 2. Dual Counter-rotating Orbital Quantum Rings
    const ringGeo1 = new THREE.TorusGeometry(2.35, 0.03, 16, 100);
    const ringMat1 = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      emissive: 0x0284c7,
      metalness: 0.8,
      roughness: 0.2
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    ring1.rotation.y = Math.PI / 6;
    ring1Ref.current = ring1;
    coreGroup.add(ring1);

    const ringGeo2 = new THREE.TorusGeometry(2.8, 0.025, 16, 100);
    const ringMat2 = new THREE.MeshStandardMaterial({
      color: 0xa855f7,
      emissive: 0x7c3aed,
      metalness: 0.9,
      roughness: 0.1
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.y = Math.PI / 3;
    ring2Ref.current = ring2;
    coreGroup.add(ring2);

    // 3. Floating Ambient Particle Constellation (800 particles)
    const particleCount = 850;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const color1 = new THREE.Color(0x00f0ff);
    const color2 = new THREE.Color(0x8b5cf6);

    for (let i = 0; i < particleCount; i++) {
      const radius = 3.2 + Math.random() * 4.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      particlePositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = radius * Math.cos(phi);

      const mixedColor = color1.clone().lerp(color2, Math.random());
      particleColors[i * 3] = mixedColor.r;
      particleColors[i * 3 + 1] = mixedColor.g;
      particleColors[i * 3 + 2] = mixedColor.b;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    particlesRef.current = particles;
    scene.add(particles);

    // 4. Lighting Rig
    const ambientLight = new THREE.AmbientLight(0x0a1128, 1.2);
    scene.add(ambientLight);

    const lightCyan = new THREE.PointLight(0x00f0ff, 3.5, 50);
    lightCyan.position.set(4, 3, 5);
    scene.add(lightCyan);

    const lightPurple = new THREE.PointLight(0x8b5cf6, 3.2, 50);
    lightPurple.position.set(-4, -3, 4);
    scene.add(lightPurple);

    // Handle Resize
    const handleResize = () => {
      if (!containerRef.current || !rendererRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      rendererRef.current.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let prevTime = performance.now();
    const startTime = performance.now();
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const animate = () => {
      animFrameId.current = requestAnimationFrame(animate);
      const now = performance.now();
      const delta = Math.min((now - prevTime) / 1000, 0.1);
      prevTime = now;
      const time = (now - startTime) / 1000;

      if (!isPaused && !reducedMotion) {
        // Continuous smooth rotation
        coreGroup.rotation.y += delta * 0.35;
        coreGroup.rotation.x += delta * 0.15;

        // Counter-rotate rings
        if (ring1Ref.current) {
          ring1Ref.current.rotation.z += delta * 0.6;
        }
        if (ring2Ref.current) {
          ring2Ref.current.rotation.z -= delta * 0.5;
        }

        // Rotate ambient particles
        if (particlesRef.current) {
          particlesRef.current.rotation.y = time * 0.05;
          particlesRef.current.rotation.x = Math.sin(time * 0.2) * 0.05;
        }

        // Dynamic light movement
        lightCyan.position.x = Math.sin(time * 0.8) * 4.5;
        lightCyan.position.y = Math.cos(time * 0.8) * 3.5;
        lightPurple.position.x = -Math.sin(time * 0.8) * 4.5;
        lightPurple.position.y = -Math.cos(time * 0.8) * 3.5;
      }

      // Smooth pointer parallax lerping
      coreGroup.rotation.x += (targetRotation.current.x - coreGroup.rotation.x) * 0.05;
      coreGroup.rotation.y += (targetRotation.current.y - coreGroup.rotation.y) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
      renderer.dispose();
      coreGeometry.dispose();
      coreMaterial.dispose();
      wireGeometry.dispose();
      wireMaterial.dispose();
      ringGeo1.dispose();
      ringMat1.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
    };
  }, [isPaused, webglSupported]);

  // Pointer Interaction Handler
  const handlePointerMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

    targetRotation.current = {
      x: y * 0.45,
      y: x * 0.65
    };
  };

  const handleModeChange = (mode) => {
    playClick();
    setDisplayMode(mode);
    if (!coreGroupRef.current) return;

    const coreMesh = coreGroupRef.current.children[0];
    const wireMesh = coreGroupRef.current.children[1];
    const ring1 = ring1Ref.current;
    const ring2 = ring2Ref.current;

    if (mode === 'wireframe') {
      if (coreMesh) coreMesh.visible = false;
      if (wireMesh) {
        wireMesh.visible = true;
        wireMesh.material.opacity = 1.0;
      }
      if (ring1) ring1.visible = true;
      if (ring2) ring2.visible = true;
    } else if (mode === 'particles') {
      if (coreMesh) coreMesh.visible = false;
      if (wireMesh) wireMesh.visible = false;
      if (ring1) ring1.visible = false;
      if (ring2) ring2.visible = false;
    } else {
      // Quantum standard mode
      if (coreMesh) coreMesh.visible = true;
      if (wireMesh) {
        wireMesh.visible = true;
        wireMesh.material.opacity = 0.6;
      }
      if (ring1) ring1.visible = true;
      if (ring2) ring2.visible = true;
    }
  };

  const resetView = () => {
    playClick();
    targetRotation.current = { x: 0, y: 0 };
    if (coreGroupRef.current) {
      coreGroupRef.current.rotation.set(0, 0, 0);
    }
  };

  return (
    <section 
      id="home" 
      ref={containerRef}
      onMouseMove={handlePointerMove}
      className="hero-section"
      aria-label="Aayan Madnas Introduction & 3D Interactive Showcase"
    >
      {/* Layered Background Watermark Typography */}
      <div className="hero-typography-backdrop" aria-hidden="true">
        <span className="watermark-text watermark-top">AAYAN MADNAS</span>
        <span className="watermark-text watermark-middle">ENGINEERING 2029</span>
        <span className="watermark-text watermark-bottom">INDORE • MP</span>
      </div>

      {/* 3D Canvas / Fallback Container */}
      <div className="canvas-wrapper">
        {webglSupported ? (
          <canvas ref={canvasRef} className="three-canvas" aria-label="Interactive 3D procedural cybernetic core" />
        ) : (
          <div className="webgl-fallback" role="img" aria-label="Stylized geometric cyber core">
            <div className="fallback-orb">
              <div className="fallback-ring fallback-ring-1" />
              <div className="fallback-ring fallback-ring-2" />
              <div className="fallback-core" />
            </div>
            <p className="fallback-caption">Procedural Geometric Core (2D Fallback Active)</p>
          </div>
        )}
      </div>

      {/* 3D Controls Tooldock */}
      <div className="three-controls-dock" role="toolbar" aria-label="3D viewport controls">
        <div className="mode-buttons">
          <button 
            type="button"
            className={`dock-btn ${displayMode === 'quantum' ? 'active' : ''}`}
            onClick={() => handleModeChange('quantum')}
            title="Quantum Core Mode"
            aria-label="Quantum Core Mode"
          >
            <Sparkles size={14} />
            <span>Quantum</span>
          </button>
          <button 
            type="button"
            className={`dock-btn ${displayMode === 'wireframe' ? 'active' : ''}`}
            onClick={() => handleModeChange('wireframe')}
            title="Wireframe Mesh Mode"
            aria-label="Wireframe Mesh Mode"
          >
            <Eye size={14} />
            <span>Wireframe</span>
          </button>
        </div>

        <div className="dock-divider" />

        <button 
          type="button"
          className="dock-icon-btn"
          onClick={() => { playClick(); setIsPaused(!isPaused); }}
          title={isPaused ? "Resume Rotation" : "Pause Rotation"}
          aria-label={isPaused ? "Resume Rotation" : "Pause Rotation"}
        >
          {isPaused ? <Play size={14} /> : <Pause size={14} />}
        </button>

        <button 
          type="button"
          className="dock-icon-btn"
          onClick={resetView}
          title="Reset View"
          aria-label="Reset View"
        >
          <RefreshCw size={14} />
        </button>
      </div>

      {/* Foreground Hero Content Content Layer */}
      <div className="hero-content-container">
        <div className="hero-badge-row">
          <div className="badge-tag">
            <span className="live-dot" />
            Chameli Devi Group of Institutions • Indore, MP
          </div>
          <div className="badge-tag badge-tag-purple">
            Batch 2029 • Software Engineering
          </div>
        </div>

        <h1 className="hero-main-heading">
          Hi, I'm <span className="gradient-text">Aayan Madnas</span>.
        </h1>

        <h2 className="hero-professional-title">
          Software Engineering Student &amp; Developer
        </h2>

        <p className="hero-supporting-text">
          I build interactive web experiences and practical software solutions using modern web technologies, programming, and creative problem-solving.
        </p>

        {/* Primary Recruiter Action CTAs */}
        <div className="hero-actions-group">
          <a 
            href="#projects" 
            className="btn-primary"
            onClick={playClick}
            onMouseEnter={playHover}
          >
            <span>Explore My Work</span>
            <ArrowDown size={18} />
          </a>

          <a 
            href="#contact" 
            className="btn-secondary"
            onClick={playClick}
            onMouseEnter={playHover}
          >
            <span>Let's Connect</span>
          </a>

          {onOpenResume && (
            <button 
              type="button"
              className="btn-ghost-dock"
              onClick={() => { playClick(); onOpenResume(); }}
              onMouseEnter={playHover}
              title="Inspect Academic CV"
            >
              <span>View Verified CV</span>
              <ExternalLink size={14} />
            </button>
          )}
        </div>

        {/* Scroll Indicator */}
        <div className="hero-scroll-cue">
          <a href="#about" aria-label="Scroll down to About section" onClick={playClick}>
            <span className="scroll-indicator-mouse">
              <span className="scroll-wheel" />
            </span>
            <span className="scroll-label">Scroll to Explore</span>
          </a>
        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 120px 24px 60px;
          overflow: hidden;
          z-index: 1;
        }

        .hero-typography-backdrop {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          pointer-events: none;
          z-index: 1;
          opacity: 0.035;
          user-select: none;
          overflow: hidden;
        }

        .watermark-text {
          font-family: var(--font-heading);
          font-size: clamp(4rem, 11vw, 12rem);
          font-weight: 900;
          letter-spacing: 0.15em;
          white-space: nowrap;
          color: #ffffff;
        }

        .canvas-wrapper {
          position: absolute;
          inset: 0;
          z-index: 2;
          pointer-events: auto;
          cursor: grab;
        }

        .canvas-wrapper:active {
          cursor: grabbing;
        }

        .three-canvas {
          width: 100% !important;
          height: 100% !important;
          display: block;
        }

        .webgl-fallback {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 20px;
        }

        .fallback-orb {
          position: relative;
          width: 220px;
          height: 220px;
        }

        .fallback-core {
          position: absolute;
          inset: 30px;
          border-radius: 50%;
          background: radial-gradient(circle, #00f0ff 0%, #8b5cf6 60%, transparent 80%);
          box-shadow: 0 0 50px rgba(0, 240, 255, 0.4);
          animation: pulseOrb 4s ease-in-out infinite alternate;
        }

        .fallback-ring {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 1.5px dashed var(--primary-cyan);
        }

        .fallback-ring-1 {
          animation: rotateRing 12s linear infinite;
        }

        .fallback-ring-2 {
          inset: -15px;
          border-color: var(--primary-violet);
          animation: rotateRingRev 16s linear infinite;
        }

        @keyframes rotateRing {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes rotateRingRev {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        @keyframes pulseOrb {
          from { transform: scale(0.92); opacity: 0.7; }
          to { transform: scale(1.08); opacity: 1; }
        }

        .fallback-caption {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .three-controls-dock {
          position: absolute;
          top: 100px;
          right: 28px;
          z-index: 10;
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(10, 15, 30, 0.75);
          backdrop-filter: blur(16px);
          border: 1px solid var(--border-subtle);
          padding: 6px 10px;
          border-radius: var(--radius-full);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
        }

        .mode-buttons {
          display: flex;
          gap: 4px;
        }

        .dock-btn {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background: transparent;
          border: none;
          color: var(--text-secondary);
          font-family: var(--font-mono);
          font-size: 0.75rem;
          padding: 5px 10px;
          border-radius: var(--radius-full);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .dock-btn:hover {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.06);
        }

        .dock-btn.active {
          color: #030712;
          background: var(--primary-cyan);
          font-weight: 600;
        }

        .dock-divider {
          width: 1px;
          height: 16px;
          background: var(--border-subtle);
          margin: 0 2px;
        }

        .dock-icon-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: transparent;
          border: none;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .dock-icon-btn:hover {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.08);
        }

        .hero-content-container {
          position: relative;
          z-index: 5;
          max-width: 900px;
          text-align: center;
          margin: 0 auto;
          pointer-events: none; /* Let 3D canvas catch events around content */
        }

        .hero-content-container a,
        .hero-content-container button {
          pointer-events: auto; /* Buttons clickable */
        }

        .hero-badge-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 24px;
        }

        .live-dot {
          width: 7px;
          height: 7px;
          background-color: #10b981;
          border-radius: 50%;
          box-shadow: 0 0 8px #10b981;
          display: inline-block;
          animation: livePulse 2s infinite;
        }

        @keyframes livePulse {
          0% { transform: scale(0.95); opacity: 0.8; }
          50% { transform: scale(1.3); opacity: 1; }
          100% { transform: scale(0.95); opacity: 0.8; }
        }

        .hero-main-heading {
          font-size: clamp(2.8rem, 6.5vw, 5.2rem);
          font-weight: 800;
          line-height: 1.08;
          margin-bottom: 16px;
          letter-spacing: -0.03em;
        }

        .hero-professional-title {
          font-family: var(--font-heading);
          font-size: clamp(1.25rem, 2.8vw, 1.9rem);
          font-weight: 600;
          color: var(--primary-blue);
          margin-bottom: 22px;
          letter-spacing: -0.01em;
        }

        .hero-supporting-text {
          font-size: clamp(1rem, 1.8vw, 1.25rem);
          color: var(--text-secondary);
          max-width: 720px;
          margin: 0 auto 36px;
          line-height: 1.65;
        }

        .hero-actions-group {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 50px;
        }

        .btn-ghost-dock {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 13px 22px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px dashed var(--border-subtle);
          border-radius: var(--radius-full);
          color: var(--text-secondary);
          font-family: var(--font-heading);
          font-size: 0.95rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .btn-ghost-dock:hover {
          color: #ffffff;
          border-color: var(--primary-cyan);
          background: rgba(0, 240, 255, 0.06);
        }

        .hero-scroll-cue {
          display: inline-block;
          margin-top: 10px;
        }

        .hero-scroll-cue a {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          color: var(--text-muted);
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .hero-scroll-cue a:hover {
          color: var(--primary-cyan);
        }

        .scroll-indicator-mouse {
          width: 22px;
          height: 36px;
          border: 2px solid rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          display: flex;
          justify-content: center;
          padding-top: 6px;
        }

        .scroll-wheel {
          width: 4px;
          height: 7px;
          background: var(--primary-cyan);
          border-radius: 2px;
          animation: mouseWheel 2s infinite;
        }

        @keyframes mouseWheel {
          0% { transform: translateY(0); opacity: 1; }
          60% { transform: translateY(12px); opacity: 0; }
          100% { transform: translateY(0); opacity: 0; }
        }

        .scroll-label {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        @media (max-width: 768px) {
          .hero-section {
            padding: 110px 16px 40px;
          }
          .three-controls-dock {
            top: 76px;
            right: 16px;
            transform: scale(0.9);
          }
          .hero-main-heading {
            font-size: 2.6rem;
          }
          .hero-supporting-text {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
}

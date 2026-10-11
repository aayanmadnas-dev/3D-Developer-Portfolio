import{n as e}from"./rolldown-runtime-CbXtAM7H.js";import{A as t,B as n,C as r,D as i,E as a,F as o,G as s,H as c,I as l,L as u,M as d,N as f,O as p,P as m,R as h,S as g,T as _,U as v,V as y,W as b,_ as x,a as S,b as ee,c as C,d as w,f as te,g as T,h as E,i as D,j as O,k,l as A,m as j,n as M,o as N,p as ne,r as P,s as F,t as I,u as re,v as L,w as R,x as z,y as B,z as V}from"./vendor-CWxVZf2V.js";import{a as ie,c as H,d as ae,f as oe,g as se,h as ce,i as le,l as ue,m as de,n as fe,o as pe,p as me,r as he,s as ge,t as _e,u as U}from"./three-C8l1sdTR.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var W=e(s(),1),G=b(),K=null,q=!1,ve=()=>{if(q=!q,q&&!K){let e=window.AudioContext||window.webkitAudioContext;e&&(K=new e)}return q&&J(587.33,.08,`sine`),q},J=(e=440,t=.05,n=`sine`,r=.04)=>{if(q)try{if(!K){let e=window.AudioContext||window.webkitAudioContext;e&&(K=new e)}if(K&&K.state===`suspended`&&K.resume(),!K)return;let i=K.createOscillator(),a=K.createGain();i.type=n,i.frequency.setValueAtTime(e,K.currentTime),a.gain.setValueAtTime(r,K.currentTime),a.gain.exponentialRampToValueAtTime(1e-4,K.currentTime+t),i.connect(a),a.connect(K.destination),i.start(),i.stop(K.currentTime+t)}catch{}},Y=()=>J(880,.04,`triangle`,.03),X=()=>J(440,.03,`sine`,.015),Z=()=>{q&&(J(523.25,.08,`sine`,.05),setTimeout(()=>J(659.25,.08,`sine`,.05),80),setTimeout(()=>J(783.99,.12,`sine`,.05),160))},Q=M();function ye({onOpenResume:e}){let[t,n]=(0,W.useState)(!1),[r,i]=(0,W.useState)(`home`),[a,o]=(0,W.useState)(!1),[s,c]=(0,W.useState)(!1),[l,u]=(0,W.useState)(0),d=[{label:`Home`,href:`#home`,id:`home`},{label:`About`,href:`#about`,id:`about`},{label:`Skills`,href:`#skills`,id:`skills`},{label:`Projects`,href:`#projects`,id:`projects`},{label:`How I Build`,href:`#process`,id:`process`},{label:`Contact`,href:`#contact`,id:`contact`}];(0,W.useEffect)(()=>{let e=()=>{let e=window.scrollY;n(e>50);let t=document.documentElement.scrollHeight-window.innerHeight;t>0&&u(e/t*100);for(let e of[`contact`,`process`,`projects`,`skills`,`about`,`home`]){let t=document.getElementById(e);if(t&&t.getBoundingClientRect().top<=200){i(e);break}}};return window.addEventListener(`scroll`,e,{passive:!0}),()=>window.removeEventListener(`scroll`,e)},[]);let f=()=>{let e=ve();c(e)},p=e=>{Y(),i(e),o(!1)};return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(`div`,{className:`scroll-progress-line`,style:{width:`${l}%`},role:`progressbar`,"aria-valuenow":Math.round(l),"aria-valuemin":0,"aria-valuemax":100}),(0,Q.jsx)(`header`,{className:`navbar-header ${t?`scrolled`:``}`,children:(0,Q.jsxs)(`div`,{className:`navbar-container`,children:[(0,Q.jsxs)(`a`,{href:`#home`,className:`navbar-brand`,onClick:()=>p(`home`),onMouseEnter:X,children:[(0,Q.jsx)(`div`,{className:`brand-badge`,children:`AM`}),(0,Q.jsxs)(`div`,{className:`brand-text`,children:[(0,Q.jsx)(`span`,{className:`brand-name`,children:`Aayan Madnas`}),(0,Q.jsx)(`span`,{className:`brand-sub font-mono`,children:`DEV // 2029`})]})]}),(0,Q.jsx)(`nav`,{className:`desktop-nav`,"aria-label":`Main Navigation`,children:(0,Q.jsx)(`ul`,{className:`nav-links-list`,children:d.map(e=>{let t=r===e.id;return(0,Q.jsx)(`li`,{children:(0,Q.jsxs)(`a`,{href:e.href,className:`nav-link ${t?`active`:``}`,onClick:()=>p(e.id),onMouseEnter:X,children:[(0,Q.jsx)(`span`,{children:e.label}),t&&(0,Q.jsx)(`span`,{className:`nav-active-dot`})]})},e.id)})})}),(0,Q.jsxs)(`div`,{className:`nav-actions-right`,children:[(0,Q.jsxs)(`button`,{type:`button`,className:`sound-toggle-btn ${s?`sound-active`:``}`,onClick:f,title:s?`Mute Procedural Audio`:`Enable Procedural Audio`,"aria-label":s?`Mute Procedural Audio`:`Enable Procedural Audio`,children:[s?(0,Q.jsx)(S,{size:16}):(0,Q.jsx)(N,{size:16}),(0,Q.jsx)(`span`,{className:`sound-label font-mono`,children:s?`AUDIO ON`:`MUTED`})]}),e&&(0,Q.jsxs)(`button`,{type:`button`,className:`resume-pill-btn`,onClick:()=>{Y(),e()},onMouseEnter:X,children:[(0,Q.jsx)(_,{size:14}),(0,Q.jsx)(`span`,{children:`Verified CV`}),(0,Q.jsx)(y,{size:13})]}),(0,Q.jsx)(`button`,{type:`button`,className:`hamburger-btn`,onClick:()=>{Y(),o(!a)},"aria-expanded":a,"aria-label":`Toggle navigation menu`,children:a?(0,Q.jsx)(P,{size:22}):(0,Q.jsx)(x,{size:22})})]})]})}),a&&(0,Q.jsx)(`div`,{className:`mobile-drawer-overlay`,onClick:()=>o(!1),children:(0,Q.jsxs)(`div`,{className:`mobile-drawer-content`,onClick:e=>e.stopPropagation(),children:[(0,Q.jsxs)(`div`,{className:`mobile-drawer-header`,children:[(0,Q.jsx)(`span`,{className:`font-mono text-cyan`,children:`NAVIGATION // MENU`}),(0,Q.jsx)(`button`,{type:`button`,className:`close-drawer-btn`,onClick:()=>o(!1),"aria-label":`Close navigation menu`,children:(0,Q.jsx)(P,{size:20})})]}),(0,Q.jsx)(`ul`,{className:`mobile-nav-list`,children:d.map(e=>{let t=r===e.id;return(0,Q.jsx)(`li`,{children:(0,Q.jsxs)(`a`,{href:e.href,className:`mobile-nav-link ${t?`active`:``}`,onClick:()=>p(e.id),children:[(0,Q.jsx)(`span`,{children:e.label}),t&&(0,Q.jsx)(`span`,{className:`mobile-active-tag font-mono`,children:`ACTIVE`})]})},e.id)})}),(0,Q.jsx)(`div`,{className:`mobile-drawer-footer`,children:(0,Q.jsxs)(`button`,{type:`button`,className:`btn-secondary w-full`,onClick:()=>{o(!1),e&&e()},children:[(0,Q.jsx)(_,{size:16}),(0,Q.jsx)(`span`,{children:`View Verified CV`})]})})]})}),(0,Q.jsx)(`style`,{children:`
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
      `})]})}var be=()=>{if(typeof window>`u`)return!0;try{let e=document.createElement(`canvas`);return!!(window.WebGLRenderingContext&&(e.getContext(`webgl`)||e.getContext(`experimental-webgl`)))}catch{return!1}};function xe({onOpenResume:e}){let t=(0,W.useRef)(null),n=(0,W.useRef)(null),[r,o]=(0,W.useState)(!1),[s,c]=(0,W.useState)(`quantum`),[l,u]=(0,W.useState)(()=>be()),d=(0,W.useRef)(null),f=(0,W.useRef)(null),p=(0,W.useRef)(null),m=(0,W.useRef)(null),h=(0,W.useRef)(null),g=(0,W.useRef)(null),_=(0,W.useRef)(null),y=(0,W.useRef)({x:0,y:0});(0,W.useEffect)(()=>{if(!l)return;let e=n.current;if(!e)return;let i=t.current,a=i&&i.clientWidth||window.innerWidth,o=i&&i.clientHeight||window.innerHeight,s;try{s=new _e({canvas:e,alpha:!0,antialias:!0,powerPreference:`high-performance`}),s.setSize(a,o),s.setPixelRatio(Math.min(window.devicePixelRatio,2)),p.current=s}catch(e){console.warn(`WebGL initialization failed, activating fallback:`,e),setTimeout(()=>u(!1),0);return}let c=new ce;f.current=c;let v=new ae(45,a/o,.1,1e3);v.position.z=7.5;let b=new pe;m.current=b,c.add(b);let x=new ge(1.6,2),S=new U({color:594982,metalness:.9,roughness:.15,emissive:8772,wireframe:!1}),ee=new H(x,S);b.add(ee);let C=new ge(1.62,2),w=new ue({color:61695,wireframe:!0,transparent:!0,opacity:.6}),te=new H(C,w);b.add(te);let T=new se(2.35,.03,16,100),E=new U({color:3718648,emissive:165063,metalness:.8,roughness:.2}),D=new H(T,E);D.rotation.x=Math.PI/3,D.rotation.y=Math.PI/6,g.current=D,b.add(D);let O=new se(2.8,.025,16,100),k=new U({color:11032055,emissive:8141549,metalness:.9,roughness:.1}),A=new H(O,k);A.rotation.x=-Math.PI/4,A.rotation.y=Math.PI/3,_.current=A,b.add(A);let j=new le,M=new Float32Array(2550),N=new Float32Array(2550),ne=new ie(61695),P=new ie(9133302);for(let e=0;e<850;e++){let t=3.2+Math.random()*4.2,n=Math.random()*Math.PI*2,r=Math.acos(2*Math.random()-1);M[e*3]=t*Math.sin(r)*Math.cos(n),M[e*3+1]=t*Math.sin(r)*Math.sin(n),M[e*3+2]=t*Math.cos(r);let i=ne.clone().lerp(P,Math.random());N[e*3]=i.r,N[e*3+1]=i.g,N[e*3+2]=i.b}j.setAttribute(`position`,new he(M,3)),j.setAttribute(`color`,new he(N,3));let F=new de({size:.05,vertexColors:!0,transparent:!0,opacity:.75,blending:2}),I=new me(j,F);h.current=I,c.add(I);let re=new fe(659752,1.2);c.add(re);let L=new oe(61695,3.5,50);L.position.set(4,3,5),c.add(L);let R=new oe(9133302,3.2,50);R.position.set(-4,-3,4),c.add(R);let z=()=>{if(!t.current||!p.current)return;let e=t.current.clientWidth,n=t.current.clientHeight;v.aspect=e/n,v.updateProjectionMatrix(),p.current.setSize(e,n)};window.addEventListener(`resize`,z);let B=performance.now(),V=performance.now(),W=window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,G=()=>{d.current=requestAnimationFrame(G);let e=performance.now(),t=Math.min((e-B)/1e3,.1);B=e;let n=(e-V)/1e3;!r&&!W&&(b.rotation.y+=t*.35,b.rotation.x+=t*.15,g.current&&(g.current.rotation.z+=t*.6),_.current&&(_.current.rotation.z-=t*.5),h.current&&(h.current.rotation.y=n*.05,h.current.rotation.x=Math.sin(n*.2)*.05),L.position.x=Math.sin(n*.8)*4.5,L.position.y=Math.cos(n*.8)*3.5,R.position.x=-Math.sin(n*.8)*4.5,R.position.y=-Math.cos(n*.8)*3.5),b.rotation.x+=(y.current.x-b.rotation.x)*.05,b.rotation.y+=(y.current.y-b.rotation.y)*.05,s.render(c,v)};return G(),()=>{window.removeEventListener(`resize`,z),d.current&&cancelAnimationFrame(d.current),s.dispose(),x.dispose(),S.dispose(),C.dispose(),w.dispose(),T.dispose(),E.dispose(),O.dispose(),k.dispose(),j.dispose(),F.dispose()}},[r]);let b=e=>{if(!t.current)return;let n=t.current.getBoundingClientRect(),r=(e.clientX-n.left)/n.width*2-1,i=-((e.clientY-n.top)/n.height*2-1);y.current={x:i*.45,y:r*.65}},x=e=>{if(Y(),c(e),!m.current)return;let t=m.current.children[0],n=m.current.children[1],r=g.current,i=_.current;e===`wireframe`?(t&&(t.visible=!1),n&&(n.visible=!0,n.material.opacity=1),r&&(r.visible=!0),i&&(i.visible=!0)):e===`particles`?(t&&(t.visible=!1),n&&(n.visible=!1),r&&(r.visible=!1),i&&(i.visible=!1)):(t&&(t.visible=!0),n&&(n.visible=!0,n.material.opacity=.6),r&&(r.visible=!0),i&&(i.visible=!0))};return(0,Q.jsxs)(`section`,{id:`home`,ref:t,onMouseMove:b,className:`hero-section`,"aria-label":`Aayan Madnas Introduction & 3D Interactive Showcase`,children:[(0,Q.jsxs)(`div`,{className:`hero-typography-backdrop`,"aria-hidden":`true`,children:[(0,Q.jsx)(`span`,{className:`watermark-text watermark-top`,children:`AAYAN MADNAS`}),(0,Q.jsx)(`span`,{className:`watermark-text watermark-middle`,children:`ENGINEERING 2029`}),(0,Q.jsx)(`span`,{className:`watermark-text watermark-bottom`,children:`INDORE • MP`})]}),(0,Q.jsx)(`div`,{className:`canvas-wrapper`,children:l?(0,Q.jsx)(`canvas`,{ref:n,className:`three-canvas`,"aria-label":`Interactive 3D procedural cybernetic core`}):(0,Q.jsxs)(`div`,{className:`webgl-fallback`,role:`img`,"aria-label":`Stylized geometric cyber core`,children:[(0,Q.jsxs)(`div`,{className:`fallback-orb`,children:[(0,Q.jsx)(`div`,{className:`fallback-ring fallback-ring-1`}),(0,Q.jsx)(`div`,{className:`fallback-ring fallback-ring-2`}),(0,Q.jsx)(`div`,{className:`fallback-core`})]}),(0,Q.jsx)(`p`,{className:`fallback-caption`,children:`Procedural Geometric Core (2D Fallback Active)`})]})}),(0,Q.jsxs)(`div`,{className:`three-controls-dock`,role:`toolbar`,"aria-label":`3D viewport controls`,children:[(0,Q.jsxs)(`div`,{className:`mode-buttons`,children:[(0,Q.jsxs)(`button`,{type:`button`,className:`dock-btn ${s===`quantum`?`active`:``}`,onClick:()=>x(`quantum`),title:`Quantum Core Mode`,"aria-label":`Quantum Core Mode`,children:[(0,Q.jsx)(C,{size:14}),(0,Q.jsx)(`span`,{children:`Quantum`})]}),(0,Q.jsxs)(`button`,{type:`button`,className:`dock-btn ${s===`wireframe`?`active`:``}`,onClick:()=>x(`wireframe`),title:`Wireframe Mesh Mode`,"aria-label":`Wireframe Mesh Mode`,children:[(0,Q.jsx)(a,{size:14}),(0,Q.jsx)(`span`,{children:`Wireframe`})]})]}),(0,Q.jsx)(`div`,{className:`dock-divider`}),(0,Q.jsx)(`button`,{type:`button`,className:`dock-icon-btn`,onClick:()=>{Y(),o(!r)},title:r?`Resume Rotation`:`Pause Rotation`,"aria-label":r?`Resume Rotation`:`Pause Rotation`,children:r?(0,Q.jsx)(ne,{size:14}):(0,Q.jsx)(E,{size:14})}),(0,Q.jsx)(`button`,{type:`button`,className:`dock-icon-btn`,onClick:()=>{Y(),y.current={x:0,y:0},m.current&&m.current.rotation.set(0,0,0)},title:`Reset View`,"aria-label":`Reset View`,children:(0,Q.jsx)(w,{size:14})})]}),(0,Q.jsxs)(`div`,{className:`hero-content-container`,children:[(0,Q.jsxs)(`div`,{className:`hero-badge-row`,children:[(0,Q.jsxs)(`div`,{className:`badge-tag`,children:[(0,Q.jsx)(`span`,{className:`live-dot`}),`Chameli Devi Group of Institutions • Indore, MP`]}),(0,Q.jsx)(`div`,{className:`badge-tag badge-tag-purple`,children:`Batch 2029 • Software Engineering`})]}),(0,Q.jsxs)(`h1`,{className:`hero-main-heading`,children:[`Hi, I'm `,(0,Q.jsx)(`span`,{className:`gradient-text`,children:`Aayan Madnas`}),`.`]}),(0,Q.jsx)(`h2`,{className:`hero-professional-title`,children:`Software Engineering Student & Developer`}),(0,Q.jsx)(`p`,{className:`hero-supporting-text`,children:`I build interactive web experiences and practical software solutions using modern web technologies, programming, and creative problem-solving.`}),(0,Q.jsxs)(`div`,{className:`hero-actions-group`,children:[(0,Q.jsxs)(`a`,{href:`#projects`,className:`btn-primary`,onClick:Y,onMouseEnter:X,children:[(0,Q.jsx)(`span`,{children:`Explore My Work`}),(0,Q.jsx)(v,{size:18})]}),(0,Q.jsx)(`a`,{href:`#contact`,className:`btn-secondary`,onClick:Y,onMouseEnter:X,children:(0,Q.jsx)(`span`,{children:`Let's Connect`})}),e&&(0,Q.jsxs)(`button`,{type:`button`,className:`btn-ghost-dock`,onClick:()=>{Y(),e()},onMouseEnter:X,title:`Inspect Academic CV`,children:[(0,Q.jsx)(`span`,{children:`View Verified CV`}),(0,Q.jsx)(i,{size:14})]})]}),(0,Q.jsx)(`div`,{className:`hero-scroll-cue`,children:(0,Q.jsxs)(`a`,{href:`#about`,"aria-label":`Scroll down to About section`,onClick:Y,children:[(0,Q.jsx)(`span`,{className:`scroll-indicator-mouse`,children:(0,Q.jsx)(`span`,{className:`scroll-wheel`})}),(0,Q.jsx)(`span`,{className:`scroll-label`,children:`Scroll to Explore`})]})})]}),(0,Q.jsx)(`style`,{children:`
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
      `})]})}function Se(){let[e,n]=(0,W.useState)(!1),r=`{
  "name": "Aayan Madnas",
  "status": "Undergraduate Student",
  "institution": "Chameli Devi Group of Institutions",
  "degree": "B.Tech / B.E. in Software Engineering",
  "expectedGraduation": 2029,
  "location": "Indore, Madhya Pradesh, India",
  "coreFocus": [
    "Web Development",
    "C++ & OOP Architecture",
    "Python & Scripting",
    "Data Structures & Algorithms"
  ]
}`;return(0,Q.jsxs)(`section`,{id:`about`,className:`section-wrapper`,"aria-label":`About Aayan Madnas`,children:[(0,Q.jsxs)(`div`,{className:`section-header`,children:[(0,Q.jsx)(`span`,{className:`section-subtitle`,children:`01 // Academic & Engineering Profile`}),(0,Q.jsxs)(`h2`,{className:`section-title`,children:[`About `,(0,Q.jsx)(`span`,{className:`gradient-text`,children:`Me`})]}),(0,Q.jsx)(`p`,{className:`section-desc`,children:`Building practical software solutions with clean architecture, algorithmic clarity, and modern user-centric interfaces.`})]}),(0,Q.jsxs)(`div`,{className:`about-grid`,children:[(0,Q.jsxs)(`div`,{className:`about-narrative-col`,children:[(0,Q.jsxs)(`div`,{className:`glass-panel about-card-main`,children:[(0,Q.jsxs)(`div`,{className:`profile-header-strip`,children:[(0,Q.jsx)(`div`,{className:`avatar-monogram`,children:(0,Q.jsx)(`span`,{children:`AM`})}),(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`h3`,{className:`profile-name`,children:`Aayan Madnas`}),(0,Q.jsx)(`p`,{className:`profile-role`,children:`Software Engineering Student | Web Developer`}),(0,Q.jsxs)(`div`,{className:`profile-location`,children:[(0,Q.jsx)(L,{size:14,className:`text-cyan`}),(0,Q.jsx)(`span`,{children:`Indore, Madhya Pradesh, India`})]})]})]}),(0,Q.jsxs)(`div`,{className:`about-bio-text`,children:[(0,Q.jsx)(`p`,{children:`“I am a software engineering student at Chameli Devi Group of Institutions, with an expected graduation year of 2029. I enjoy building web applications, developing practical software solutions, and strengthening my programming and problem-solving skills.”`}),(0,Q.jsx)(`p`,{children:`“My technical interests include responsive web development, C++, Python, data structures and algorithms, database fundamentals, and interactive user interfaces.”`})]}),(0,Q.jsxs)(`div`,{className:`education-card`,children:[(0,Q.jsx)(`div`,{className:`edu-icon-wrap`,children:(0,Q.jsx)(g,{size:24,className:`text-cyan`})}),(0,Q.jsxs)(`div`,{className:`edu-details`,children:[(0,Q.jsx)(`span`,{className:`edu-label`,children:`Higher Education`}),(0,Q.jsx)(`h4`,{className:`edu-institution`,children:`Chameli Devi Group of Institutions`}),(0,Q.jsx)(`p`,{className:`edu-degree`,children:`Bachelor of Technology / Bachelor of Engineering`}),(0,Q.jsxs)(`div`,{className:`edu-meta`,children:[(0,Q.jsx)(`span`,{className:`edu-badge`,children:`Expected Graduation: 2029`}),(0,Q.jsx)(`span`,{className:`edu-badge edu-badge-alt`,children:`Indore, Madhya Pradesh`})]})]})]})]}),(0,Q.jsxs)(`div`,{className:`pillars-grid`,children:[(0,Q.jsxs)(`div`,{className:`glass-panel pillar-item`,children:[(0,Q.jsx)(f,{size:20,className:`pillar-icon text-cyan`}),(0,Q.jsxs)(`div`,{className:`pillar-content`,children:[(0,Q.jsx)(`h4`,{children:`Systematic Problem Solving`}),(0,Q.jsx)(`p`,{children:`Strengthening algorithmic logic and data structures with C++ and Python.`})]})]}),(0,Q.jsxs)(`div`,{className:`glass-panel pillar-item`,children:[(0,Q.jsx)(k,{size:20,className:`pillar-icon text-purple`}),(0,Q.jsxs)(`div`,{className:`pillar-content`,children:[(0,Q.jsx)(`h4`,{children:`Full-Stack Fundamentals`}),(0,Q.jsx)(`p`,{children:`Building real end-to-end web apps with relational MySQL and modular PHP/JS.`})]})]})]})]}),(0,Q.jsxs)(`div`,{className:`about-tech-col`,children:[(0,Q.jsxs)(`div`,{className:`glass-panel terminal-window`,children:[(0,Q.jsxs)(`div`,{className:`terminal-header`,children:[(0,Q.jsxs)(`div`,{className:`terminal-dots`,children:[(0,Q.jsx)(`span`,{className:`dot dot-red`}),(0,Q.jsx)(`span`,{className:`dot dot-yellow`}),(0,Q.jsx)(`span`,{className:`dot dot-green`})]}),(0,Q.jsx)(`span`,{className:`terminal-title font-mono`,children:`profile@aayan: ~/bio.json`}),(0,Q.jsxs)(`button`,{type:`button`,className:`terminal-copy-btn`,onClick:()=>{navigator.clipboard.writeText(r),n(!0),Y(),setTimeout(()=>n(!1),2200)},onMouseEnter:X,title:`Copy JSON representation`,"aria-label":`Copy JSON representation`,children:[e?(0,Q.jsx)(h,{size:14,className:`text-emerald`}):(0,Q.jsx)(t,{size:14}),(0,Q.jsx)(`span`,{children:e?`Copied`:`Copy`})]})]}),(0,Q.jsx)(`pre`,{className:`terminal-body font-mono`,children:(0,Q.jsx)(`code`,{children:r})}),(0,Q.jsxs)(`div`,{className:`terminal-footer font-mono`,children:[(0,Q.jsx)(`span`,{className:`text-cyan`,children:`$`}),` cat interests.txt: Responsive UI, 3D Canvas, OOP Architecture`]})]}),(0,Q.jsxs)(`div`,{className:`glass-panel principles-card`,children:[(0,Q.jsxs)(`div`,{className:`principles-header`,children:[(0,Q.jsx)(A,{size:20,className:`text-cyan`}),(0,Q.jsx)(`h4`,{children:`Academic Mindset & Work Ethic`})]}),(0,Q.jsxs)(`ul`,{className:`principles-list`,children:[(0,Q.jsxs)(`li`,{children:[(0,Q.jsx)(`span`,{className:`bullet-glow`}),(0,Q.jsxs)(`span`,{children:[(0,Q.jsx)(`strong`,{children:`No Placeholder Experience:`}),` Grounded strictly in real coursework, self-initiated projects, and active GitHub repositories.`]})]}),(0,Q.jsxs)(`li`,{children:[(0,Q.jsx)(`span`,{className:`bullet-glow`}),(0,Q.jsxs)(`span`,{children:[(0,Q.jsx)(`strong`,{children:`Clean Code Discipline:`}),` Focus on readability, object-oriented principles, and modular separation of concerns.`]})]}),(0,Q.jsxs)(`li`,{children:[(0,Q.jsx)(`span`,{className:`bullet-glow`}),(0,Q.jsxs)(`span`,{children:[(0,Q.jsx)(`strong`,{children:`Continuous Learning:`}),` Daily practice in data structures, algorithms, and cutting-edge web interfaces.`]})]})]})]})]})]}),(0,Q.jsx)(`style`,{children:`
        .about-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 32px;
          align-items: start;
        }

        .about-narrative-col {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .about-card-main {
          padding: 36px;
        }

        .profile-header-strip {
          display: flex;
          align-items: center;
          gap: 20px;
          padding-bottom: 24px;
          border-bottom: 1px solid var(--border-subtle);
          margin-bottom: 24px;
        }

        .avatar-monogram {
          width: 64px;
          height: 64px;
          border-radius: 16px;
          background: linear-gradient(135deg, rgba(0, 240, 255, 0.2), rgba(139, 92, 246, 0.2));
          border: 1px solid var(--border-glow);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-heading);
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--primary-cyan);
          box-shadow: 0 0 20px rgba(0, 240, 255, 0.2);
        }

        .profile-name {
          font-size: 1.6rem;
          margin-bottom: 4px;
        }

        .profile-role {
          font-size: 0.95rem;
          color: var(--primary-blue);
          margin-bottom: 6px;
        }

        .profile-location {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .text-cyan {
          color: var(--primary-cyan);
        }

        .text-purple {
          color: #c084fc;
        }

        .text-emerald {
          color: #10b981;
        }

        .about-bio-text {
          font-size: 1.05rem;
          line-height: 1.7;
          color: var(--text-secondary);
          margin-bottom: 28px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .education-card {
          display: flex;
          gap: 18px;
          background: rgba(3, 7, 18, 0.6);
          border: 1px solid rgba(56, 189, 248, 0.2);
          border-radius: var(--radius-md);
          padding: 20px;
          position: relative;
        }

        .edu-icon-wrap {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: rgba(56, 189, 248, 0.1);
          border: 1px solid rgba(56, 189, 248, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .edu-label {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--primary-cyan);
          display: block;
          margin-bottom: 4px;
        }

        .edu-institution {
          font-size: 1.15rem;
          margin-bottom: 4px;
        }

        .edu-degree {
          font-size: 0.92rem;
          color: var(--text-secondary);
          margin-bottom: 12px;
        }

        .edu-meta {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .edu-badge {
          display: inline-block;
          font-family: var(--font-mono);
          font-size: 0.76rem;
          background: rgba(56, 189, 248, 0.12);
          color: var(--primary-blue);
          padding: 4px 10px;
          border-radius: var(--radius-full);
          border: 1px solid rgba(56, 189, 248, 0.25);
        }

        .edu-badge-alt {
          background: rgba(139, 92, 246, 0.12);
          color: #c084fc;
          border-color: rgba(139, 92, 246, 0.25);
        }

        .pillars-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .pillar-item {
          padding: 22px;
          display: flex;
          gap: 14px;
          align-items: flex-start;
        }

        .pillar-icon {
          flex-shrink: 0;
          margin-top: 2px;
        }

        .pillar-content h4 {
          font-size: 1rem;
          margin-bottom: 6px;
        }

        .pillar-content p {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        /* Terminal Window */
        .terminal-window {
          padding: 0;
          overflow: hidden;
          background: rgba(5, 10, 20, 0.9);
          border: 1px solid var(--border-subtle);
          margin-bottom: 24px;
        }

        .terminal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 18px;
          background: rgba(15, 23, 42, 0.6);
          border-bottom: 1px solid var(--border-subtle);
        }

        .terminal-dots {
          display: flex;
          gap: 6px;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
        .dot-red { background: #ef4444; }
        .dot-yellow { background: #f59e0b; }
        .dot-green { background: #10b981; }

        .terminal-title {
          font-size: 0.78rem;
          color: var(--text-muted);
        }

        .terminal-copy-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: transparent;
          border: 1px solid var(--border-subtle);
          border-radius: 6px;
          padding: 3px 8px;
          color: var(--text-secondary);
          font-size: 0.75rem;
          font-family: var(--font-mono);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .terminal-copy-btn:hover {
          color: #ffffff;
          border-color: var(--primary-cyan);
        }

        .terminal-body {
          padding: 20px;
          font-size: 0.84rem;
          line-height: 1.6;
          color: #7dd3fc;
          overflow-x: auto;
        }

        .terminal-footer {
          padding: 10px 20px;
          background: rgba(10, 15, 30, 0.6);
          border-top: 1px solid var(--border-subtle);
          font-size: 0.76rem;
          color: var(--text-secondary);
        }

        .principles-card {
          padding: 28px;
        }

        .principles-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 18px;
        }

        .principles-header h4 {
          font-size: 1.1rem;
        }

        .principles-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .principles-list li {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.55;
        }

        .principles-list strong {
          color: var(--text-primary);
        }

        .bullet-glow {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--primary-cyan);
          box-shadow: 0 0 8px var(--primary-cyan);
          margin-top: 8px;
          flex-shrink: 0;
        }

        @media (max-width: 992px) {
          .about-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .pillars-grid {
            grid-template-columns: 1fr;
          }
          .about-card-main {
            padding: 24px;
          }
        }
      `})]})}function Ce(){let[e,t]=(0,W.useState)(`all`),[n,i]=(0,W.useState)(null),a=[{id:`all`,label:`All Disciplines`,icon:z},{id:`programming`,label:`Programming & Logic`,icon:d},{id:`web`,label:`Web Development`,icon:r},{id:`tools`,label:`Tools & Workflow`,icon:D},{id:`additional`,label:`Additional Knowledge`,icon:V}],o=[{id:`cpp`,name:`C++`,category:`programming`,focus:`Algorithms & OOP Systems`,description:`Primary language for core programming logic, classes, inheritance, memory awareness, and building console systems like ATM Logic.`,color:`#38bdf8`},{id:`python`,name:`Python`,category:`programming`,focus:`Scripting & Data Analysis`,description:`Used for procedural logic, algorithm experimentation, automation scripts, and foundational data science tasks.`,color:`#34d399`},{id:`javascript`,name:`JavaScript`,category:`programming`,focus:`Client & Logic Scripting`,description:`Interactive browser functionality, asynchronous DOM updates, dynamic state management, and 3D WebGL event coordination.`,color:`#facc15`},{id:`php`,name:`PHP`,category:`programming`,focus:`Server-Side Web Processing`,description:`Backend script execution, HTTP form processing, session authentication, and MySQL integration in the Auto Garage system.`,color:`#a78bfa`},{id:`dsa`,name:`Data Structures & Algorithms`,category:`programming`,focus:`Computational Efficiency`,description:`Linear and non-linear data structures, searching, sorting, algorithmic complexity, and time-space optimization.`,color:`#00f0ff`},{id:`html5`,name:`HTML5`,category:`web`,focus:`Semantic Document Architecture`,description:`Clean semantic elements, accessible document landmarks, SEO-friendly metadata, and modern web specifications.`,color:`#f97316`},{id:`css3`,name:`CSS3`,category:`web`,focus:`Modern Layouts & Animations`,description:`Flexbox, CSS Grid, custom properties, glassmorphism, responsive media queries, and hardware-accelerated transitions.`,color:`#38bdf8`},{id:`resp-design`,name:`Responsive Web Design`,category:`web`,focus:`Cross-Device Adaptability`,description:`Fluid layout scaling, mobile-first breakpoints, touch-friendly hit areas, and legible typography on all screen sizes.`,color:`#10b981`},{id:`git`,name:`Git`,category:`tools`,focus:`Version Control & History`,description:`Distributed commit logging, branching workflows, repository status tracking, and safe code merges.`,color:`#f43f5e`},{id:`github`,name:`GitHub`,category:`tools`,focus:`Collaboration & Repositories`,description:`Remote project hosting, open-source portfolio repositories, release documentation, and version tracking.`,color:`#94a3b8`},{id:`vscode`,name:`Visual Studio Code`,category:`tools`,focus:`Primary Development IDE`,description:`Daily code editing environment configured with linting, C++ compilers, debugging extensions, and Git integration.`,color:`#0284c7`},{id:`jupyter`,name:`Jupyter Notebook`,category:`tools`,focus:`Interactive Computing`,description:`Step-by-step Python code execution, algorithmic visualization, and structured data exploration.`,color:`#f97316`},{id:`db-fund`,name:`Database Fundamentals`,category:`additional`,focus:`Relational Schemas & SQL`,description:`Relational tables, primary & foreign keys, CRUD queries, and relational data integrity applied with MySQL.`,color:`#00f0ff`},{id:`uiux`,name:`UI/UX Design`,category:`additional`,focus:`User Experience & Interface Polish`,description:`Visual hierarchy, typography contrast, interaction feedback, reduced-motion ergonomics, and intuitive navigation.`,color:`#c084fc`},{id:`data-analysis`,name:`Data Analysis`,category:`additional`,focus:`Insight Extraction`,description:`Exploratory data assessment, dataset cleaning, descriptive statistics, and visualization fundamentals.`,color:`#38bdf8`},{id:`ml-fund`,name:`Machine Learning Fundamentals`,category:`additional`,focus:`Foundational Concepts`,description:`Core concepts of supervised and unsupervised learning, model training concepts, and predictive workflows.`,color:`#a855f7`}],s=e===`all`?o:o.filter(t=>t.category===e),c=n||o[0];return(0,Q.jsxs)(`section`,{id:`skills`,className:`section-wrapper`,"aria-label":`Technical Skills & Competencies`,children:[(0,Q.jsxs)(`div`,{className:`section-header`,children:[(0,Q.jsx)(`span`,{className:`section-subtitle`,children:`02 // Technical Competencies`}),(0,Q.jsxs)(`h2`,{className:`section-title`,children:[`Technical `,(0,Q.jsx)(`span`,{className:`gradient-text`,children:`Skills`})]}),(0,Q.jsx)(`p`,{className:`section-desc`,children:`Categorized technologies and engineering disciplines drawn directly from academic coursework and practical software development.`})]}),(0,Q.jsx)(`div`,{className:`skills-tabs-container`,role:`tablist`,children:a.map(n=>{let r=n.icon,i=e===n.id;return(0,Q.jsxs)(`button`,{role:`tab`,"aria-selected":i,className:`skills-tab-btn ${i?`active`:``}`,onClick:()=>{Y(),t(n.id)},onMouseEnter:X,children:[(0,Q.jsx)(r,{size:16}),(0,Q.jsx)(`span`,{children:n.label}),(0,Q.jsx)(`span`,{className:`tab-count`,children:n.id===`all`?o.length:o.filter(e=>e.category===n.id).length})]},n.id)})}),(0,Q.jsxs)(`div`,{className:`skills-layout-grid`,children:[(0,Q.jsx)(`div`,{className:`skills-cards-grid`,children:s.map(e=>{let t=c.id===e.id;return(0,Q.jsxs)(`div`,{className:`glass-panel skill-card ${t?`selected`:``}`,onClick:()=>{Y(),i(e)},onMouseEnter:()=>{X(),i(e)},role:`button`,tabIndex:0,onKeyDown:t=>{(t.key===`Enter`||t.key===` `)&&i(e)},"aria-label":`Inspect ${e.name}`,children:[(0,Q.jsxs)(`div`,{className:`skill-card-top`,children:[(0,Q.jsx)(`span`,{className:`skill-pill-dot`,style:{backgroundColor:e.color,boxShadow:`0 0 10px ${e.color}`}}),(0,Q.jsx)(`span`,{className:`skill-cat-label font-mono`,children:e.category.toUpperCase()})]}),(0,Q.jsx)(`h3`,{className:`skill-title`,children:e.name}),(0,Q.jsx)(`p`,{className:`skill-focus font-mono`,children:e.focus}),(0,Q.jsx)(`div`,{className:`skill-card-footer`,children:(0,Q.jsx)(`span`,{className:`inspect-cue`,children:`Click to Inspect →`})})]},e.id)})}),(0,Q.jsx)(`div`,{className:`skills-inspector-col`,children:(0,Q.jsxs)(`div`,{className:`glass-panel inspector-panel`,children:[(0,Q.jsxs)(`div`,{className:`inspector-header`,children:[(0,Q.jsx)(C,{size:18,className:`text-cyan`}),(0,Q.jsx)(`span`,{className:`font-mono text-cyan`,children:`SKILL INSPECTOR // ACTIVE SPEC`})]}),(0,Q.jsxs)(`div`,{className:`inspector-main`,children:[(0,Q.jsx)(`div`,{className:`inspector-color-bar`,style:{backgroundColor:c.color,boxShadow:`0 0 16px ${c.color}`}}),(0,Q.jsx)(`h4`,{className:`inspector-title`,children:c.name}),(0,Q.jsx)(`div`,{className:`inspector-badge`,children:(0,Q.jsxs)(`span`,{children:[`Domain: `,c.focus]})}),(0,Q.jsx)(`div`,{className:`inspector-desc-box`,children:(0,Q.jsx)(`p`,{className:`inspector-desc`,children:c.description})}),(0,Q.jsxs)(`div`,{className:`inspector-audit`,children:[(0,Q.jsxs)(`div`,{className:`audit-item`,children:[(0,Q.jsx)(m,{size:16,className:`text-emerald`}),(0,Q.jsx)(`span`,{children:`Verified academic coursework & GitHub implementation`})]}),(0,Q.jsxs)(`div`,{className:`audit-item`,children:[(0,Q.jsx)(m,{size:16,className:`text-emerald`}),(0,Q.jsx)(`span`,{children:`No inflated proficiency claims or fictitious metrics`})]})]})]}),(0,Q.jsxs)(`div`,{className:`inspector-footer font-mono`,children:[(0,Q.jsxs)(`span`,{children:[`Category: [`,c.category,`]`]}),(0,Q.jsxs)(`span`,{children:[`ID: #`,c.id]})]})]})})]}),(0,Q.jsx)(`style`,{children:`
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
      `})]})}function $({size:e=20,className:t=``}){return(0,Q.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,className:t,"aria-hidden":`true`,children:[(0,Q.jsx)(`path`,{d:`M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4`}),(0,Q.jsx)(`path`,{d:`M9 18c-4.51 2-5-2-7-2`})]})}function we({size:e=20,className:t=``}){return(0,Q.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,className:t,"aria-hidden":`true`,children:[(0,Q.jsx)(`path`,{d:`M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z`}),(0,Q.jsx)(`rect`,{x:`2`,y:`9`,width:`4`,height:`12`}),(0,Q.jsx)(`circle`,{cx:`4`,cy:`4`,r:`2`})]})}function Te({onOpenProjectModal:e}){let[t,n]=(0,W.useState)({authenticated:!1,pinInput:``,balance:1500,message:`PLEASE INSERT CARD & ENTER PIN (Default: 1234)`,actionAmount:``}),[r,a]=(0,W.useState)(`appointments`),o=[{id:`portfolio-website`,title:`Portfolio Website`,category:`Creative Frontend & 3D WebGL`,technologies:[`HTML5`,`CSS3`,`JavaScript`,`Three.js`,`Git`,`GitHub`],description:`A responsive personal portfolio website designed to showcase software projects and technical work, featuring interactive web components and 3D elements.`,github:`https://github.com/aayanmadnas-dev/Portfolio-Website`,highlights:[`Procedural 3D scene built with Three.js rendering a cybernetic core`,`Hardware-accelerated CSS glassmorphism and pointer parallax`,`Strictly zero external UI template dependencies`,`WCAG AA accessible contrast, keyboard navigation, and reduced-motion`],interactiveType:`canvas-demo`},{id:`auto-garage`,title:`Auto Garage Management System`,category:`Full-Stack Web & Relational Database`,technologies:[`PHP`,`HTML5`,`CSS3`,`JavaScript`,`MySQL`],description:`A web-based auto garage management system featuring customer records, service management, appointment booking, and an administrative dashboard.`,github:`https://github.com/aayanmadnas-dev/Auto-garage`,featuresToHighlight:[`Admin authentication & secure session control`,`Appointment booking & scheduling workflow`,`Customer record database with service history`,`Service inventory & pricing catalogue`,`FAQs and configuration settings`,`Reports and contact communication workflows`,`Normalized MySQL database integration`],interactiveType:`garage-flow`},{id:`atm-logic-cpp`,title:`ATM Logic with C++`,category:`Systems & Object-Oriented Programming`,technologies:[`C++`,`Object-Oriented Programming`],description:`A console-based ATM application implementing core banking operations, including account authentication, deposits, withdrawals, balance checking, and PIN management.`,github:`https://github.com/aayanmadnas-dev/ATM-logic-with-c`,programmingConcepts:[`Classes and modular encapsulation`,`Inheritance & separation of account types`,`Conditional branch verification and loop protection`,`Structured functions with parameter passing`,`Robust user input handling & state persistence`,`Core banking balance validation logic`],interactiveType:`atm-simulator`}],s=e=>{e.preventDefault(),Y(),t.pinInput===`1234`?(Z(),n(e=>({...e,authenticated:!0,message:`AUTHENTICATION SUCCESSFUL. WELCOME, ACCOUNT #AM-951602`}))):n(e=>({...e,message:`INVALID PIN. PLEASE TRY PIN 1234`}))},c=()=>{let e=parseFloat(t.actionAmount);!e||e<=0?n(e=>({...e,message:`ENTER A VALID POSITIVE DEPOSIT AMOUNT`})):(Z(),n(t=>({...t,balance:t.balance+e,actionAmount:``,message:`DEPOSIT SUCCESSFUL: +$${e.toFixed(2)}. NEW BALANCE: $${(t.balance+e).toFixed(2)}`})))},l=()=>{let e=parseFloat(t.actionAmount);!e||e<=0?n(e=>({...e,message:`ENTER A VALID POSITIVE WITHDRAWAL AMOUNT`})):e>t.balance?n(e=>({...e,message:`INSUFFICIENT FUNDS. OVERDRAFT PROHIBITED`})):(Z(),n(t=>({...t,balance:t.balance-e,actionAmount:``,message:`WITHDRAWAL PROCESSED: -$${e.toFixed(2)}. REMAINING: $${(t.balance-e).toFixed(2)}`})))},d=()=>{Y(),n({authenticated:!1,pinInput:``,balance:1500,message:`CARD EJECTED. PLEASE INSERT CARD & ENTER PIN (Default: 1234)`,actionAmount:``})};return(0,Q.jsxs)(`section`,{id:`projects`,className:`section-wrapper`,"aria-label":`Featured Software Projects`,children:[(0,Q.jsxs)(`div`,{className:`section-header`,children:[(0,Q.jsx)(`span`,{className:`section-subtitle`,children:`03 // Verified Software Projects`}),(0,Q.jsxs)(`h2`,{className:`section-title`,children:[`Featured `,(0,Q.jsx)(`span`,{className:`gradient-text`,children:`Projects`})]}),(0,Q.jsx)(`p`,{className:`section-desc`,children:`Real production repositories engineered with clean code, modular architectures, and verifiable GitHub source code.`})]}),(0,Q.jsx)(`div`,{className:`projects-collection`,children:o.map((o,f)=>(0,Q.jsxs)(`article`,{className:`glass-panel project-card-item`,children:[(0,Q.jsxs)(`div`,{className:`project-card-header`,children:[(0,Q.jsxs)(`div`,{className:`project-meta-pill font-mono`,children:[(0,Q.jsxs)(`span`,{children:[`PROJECT 0`,f+1]}),(0,Q.jsx)(`span`,{className:`pill-dot`}),(0,Q.jsx)(`span`,{children:o.category})]}),(0,Q.jsxs)(`div`,{className:`project-top-actions`,children:[(0,Q.jsxs)(`a`,{href:o.github,target:`_blank`,rel:`noopener noreferrer`,className:`action-icon-link`,title:`View ${o.title} source on GitHub`,"aria-label":`View ${o.title} source on GitHub`,onClick:Y,onMouseEnter:X,children:[(0,Q.jsx)($,{size:18}),(0,Q.jsx)(`span`,{children:`View Source`}),(0,Q.jsx)(i,{size:13})]}),(0,Q.jsxs)(`button`,{type:`button`,className:`btn-details-trigger`,onClick:()=>{Y(),e(o)},onMouseEnter:X,children:[(0,Q.jsx)(`span`,{children:`Details & Architecture`}),(0,Q.jsx)(u,{size:16})]})]})]}),(0,Q.jsxs)(`div`,{className:`project-body-grid`,children:[(0,Q.jsxs)(`div`,{className:`project-details-side`,children:[(0,Q.jsx)(`h3`,{className:`project-name`,children:o.title}),(0,Q.jsx)(`p`,{className:`project-summary-text`,children:o.description}),(0,Q.jsx)(`div`,{className:`tech-tags-wrapper`,children:o.technologies.map(e=>(0,Q.jsx)(`span`,{className:`tech-pill font-mono`,children:e},e))}),o.featuresToHighlight&&(0,Q.jsxs)(`div`,{className:`key-specs-box`,children:[(0,Q.jsxs)(`h4`,{className:`specs-title`,children:[(0,Q.jsx)(p,{size:15,className:`text-cyan`}),(0,Q.jsx)(`span`,{children:`Core Architectural Modules`})]}),(0,Q.jsx)(`ul`,{className:`specs-list`,children:o.featuresToHighlight.slice(0,4).map(e=>(0,Q.jsxs)(`li`,{children:[(0,Q.jsx)(m,{size:13,className:`text-cyan`}),(0,Q.jsx)(`span`,{children:e})]},e))})]}),o.programmingConcepts&&(0,Q.jsxs)(`div`,{className:`key-specs-box`,children:[(0,Q.jsxs)(`h4`,{className:`specs-title`,children:[(0,Q.jsx)(F,{size:15,className:`text-cyan`}),(0,Q.jsx)(`span`,{children:`Object-Oriented C++ Concepts`})]}),(0,Q.jsx)(`ul`,{className:`specs-list`,children:o.programmingConcepts.slice(0,4).map(e=>(0,Q.jsxs)(`li`,{children:[(0,Q.jsx)(m,{size:13,className:`text-cyan`}),(0,Q.jsx)(`span`,{children:e})]},e))})]}),o.highlights&&(0,Q.jsxs)(`div`,{className:`key-specs-box`,children:[(0,Q.jsxs)(`h4`,{className:`specs-title`,children:[(0,Q.jsx)(C,{size:15,className:`text-cyan`}),(0,Q.jsx)(`span`,{children:`Design & Engineering Highlights`})]}),(0,Q.jsx)(`ul`,{className:`specs-list`,children:o.highlights.map(e=>(0,Q.jsxs)(`li`,{children:[(0,Q.jsx)(m,{size:13,className:`text-cyan`}),(0,Q.jsx)(`span`,{children:e})]},e))})]})]}),(0,Q.jsxs)(`div`,{className:`project-preview-side`,children:[o.interactiveType===`canvas-demo`&&(0,Q.jsxs)(`div`,{className:`sandbox-panel`,children:[(0,Q.jsxs)(`div`,{className:`sandbox-bar`,children:[(0,Q.jsxs)(`div`,{className:`sandbox-title font-mono`,children:[(0,Q.jsx)(C,{size:14,className:`text-cyan`}),(0,Q.jsx)(`span`,{children:`Three.js WebGL Architecture Preview`})]}),(0,Q.jsx)(`span`,{className:`live-status-pill font-mono`,children:`ACTIVE RENDERER`})]}),(0,Q.jsxs)(`div`,{className:`sandbox-canvas-mock`,children:[(0,Q.jsxs)(`div`,{className:`canvas-geometric-wireframe`,children:[(0,Q.jsx)(`div`,{className:`wireframe-ring ring-a`}),(0,Q.jsx)(`div`,{className:`wireframe-ring ring-b`}),(0,Q.jsx)(`div`,{className:`wireframe-center`,children:(0,Q.jsx)(`span`,{className:`font-mono text-cyan`,children:`THREE.WebGLRenderer`})})]}),(0,Q.jsxs)(`div`,{className:`canvas-stats font-mono`,children:[(0,Q.jsx)(`div`,{children:`SCENE: Procedural Core`}),(0,Q.jsx)(`div`,{children:`VERTICES: 850 Points`}),(0,Q.jsx)(`div`,{children:`SHADERS: Additive Blending`})]})]})]}),o.interactiveType===`garage-flow`&&(0,Q.jsxs)(`div`,{className:`sandbox-panel`,children:[(0,Q.jsxs)(`div`,{className:`sandbox-bar`,children:[(0,Q.jsxs)(`div`,{className:`sandbox-title font-mono`,children:[(0,Q.jsx)(p,{size:14,className:`text-purple`}),(0,Q.jsx)(`span`,{children:`System Workflow Inspector`})]}),(0,Q.jsx)(`span`,{className:`live-status-pill font-mono`,children:`PHP + MySQL`})]}),(0,Q.jsx)(`div`,{className:`garage-nav-tabs`,children:[`appointments`,`customers`,`services`,`reports`].map(e=>(0,Q.jsx)(`button`,{type:`button`,className:`garage-tab-btn font-mono ${r===e?`active`:``}`,onClick:()=>{Y(),a(e)},children:e.toUpperCase()},e))}),(0,Q.jsxs)(`div`,{className:`garage-tab-content font-mono`,children:[r===`appointments`&&(0,Q.jsxs)(`div`,{className:`flow-step`,children:[(0,Q.jsx)(`div`,{className:`flow-badge`,children:`MODULE: Booking Engine`}),(0,Q.jsx)(`p`,{className:`flow-desc`,children:`Validates scheduled service time slots, customer vehicle registration, and prevents double-booked garage bays.`}),(0,Q.jsx)(`div`,{className:`flow-code-preview`,children:(0,Q.jsx)(`code`,{children:`SELECT * FROM appointments WHERE date = ? AND status = 'confirmed';`})})]}),r===`customers`&&(0,Q.jsxs)(`div`,{className:`flow-step`,children:[(0,Q.jsx)(`div`,{className:`flow-badge`,children:`MODULE: Customer Records`}),(0,Q.jsx)(`p`,{className:`flow-desc`,children:`Stores contact info, vehicle history, past invoices, and upcoming maintenance alerts using relational primary keys.`}),(0,Q.jsx)(`div`,{className:`flow-code-preview`,children:(0,Q.jsx)(`code`,{children:`TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(100), phone VARCHAR(15));`})})]}),r===`services`&&(0,Q.jsxs)(`div`,{className:`flow-step`,children:[(0,Q.jsx)(`div`,{className:`flow-badge`,children:`MODULE: Service Catalog`}),(0,Q.jsx)(`p`,{className:`flow-desc`,children:`Defines service pricing tiers (Oil Change, Brake Inspection, Engine Diagnostics) and technician assignments.`}),(0,Q.jsx)(`div`,{className:`flow-code-preview`,children:(0,Q.jsx)(`code`,{children:`INSERT INTO service_records (vehicle_id, service_type, cost) VALUES (?, ?, ?);`})})]}),r===`reports`&&(0,Q.jsxs)(`div`,{className:`flow-step`,children:[(0,Q.jsx)(`div`,{className:`flow-badge`,children:`MODULE: Admin Reporting`}),(0,Q.jsx)(`p`,{className:`flow-desc`,children:`Generates revenue analytics, completed service breakdowns, and administrative audit logs for garage management.`}),(0,Q.jsx)(`div`,{className:`flow-code-preview`,children:(0,Q.jsx)(`code`,{children:`SELECT SUM(cost) AS total_revenue FROM service_records WHERE month(created_at) = ?;`})})]})]})]}),o.interactiveType===`atm-simulator`&&(0,Q.jsxs)(`div`,{className:`sandbox-panel atm-terminal-panel`,children:[(0,Q.jsxs)(`div`,{className:`sandbox-bar`,children:[(0,Q.jsxs)(`div`,{className:`sandbox-title font-mono`,children:[(0,Q.jsx)(F,{size:14,className:`text-cyan`}),(0,Q.jsx)(`span`,{children:`C++ Console Logic Emulator`})]}),(0,Q.jsx)(`span`,{className:`live-status-pill font-mono`,children:`LIVE EXECUTION`})]}),(0,Q.jsxs)(`div`,{className:`atm-screen font-mono`,children:[(0,Q.jsxs)(`div`,{className:`atm-status-strip`,children:[(0,Q.jsx)(`span`,{children:`SYSTEM: C++ OOP BANKING`}),(0,Q.jsxs)(`span`,{children:[`STATUS: `,t.authenticated?`LOGGED IN`:`LOCKED`]})]}),(0,Q.jsxs)(`div`,{className:`atm-message-box`,children:[(0,Q.jsx)(`p`,{className:`text-cyan`,children:t.message}),t.authenticated&&(0,Q.jsxs)(`p`,{className:`balance-display`,children:[`CURRENT BALANCE: `,(0,Q.jsxs)(`span`,{className:`text-emerald`,children:[`$`,t.balance.toFixed(2)]})]})]}),t.authenticated?(0,Q.jsxs)(`div`,{className:`atm-actions-deck`,children:[(0,Q.jsxs)(`div`,{className:`atm-amount-group`,children:[(0,Q.jsx)(`span`,{className:`currency-symbol`,children:`$`}),(0,Q.jsx)(`input`,{type:`number`,min:`1`,placeholder:`Amount (e.g. 100)`,value:t.actionAmount,onChange:e=>n(t=>({...t,actionAmount:e.target.value})),className:`atm-input`})]}),(0,Q.jsxs)(`div`,{className:`atm-btn-row`,children:[(0,Q.jsx)(`button`,{type:`button`,onClick:c,className:`atm-btn atm-btn-deposit`,children:`+ Deposit`}),(0,Q.jsx)(`button`,{type:`button`,onClick:l,className:`atm-btn atm-btn-withdraw`,children:`- Withdraw`}),(0,Q.jsx)(`button`,{type:`button`,onClick:d,className:`atm-btn atm-btn-exit`,children:`Eject Card`})]})]}):(0,Q.jsxs)(`form`,{onSubmit:s,className:`atm-auth-form`,children:[(0,Q.jsxs)(`div`,{className:`pin-input-group`,children:[(0,Q.jsx)(`label`,{htmlFor:`atm-pin`,className:`pin-label`,children:`ENTER 4-DIGIT PIN:`}),(0,Q.jsx)(`input`,{id:`atm-pin`,type:`password`,maxLength:4,value:t.pinInput,onChange:e=>n(t=>({...t,pinInput:e.target.value})),placeholder:`1234`,className:`atm-input`})]}),(0,Q.jsx)(`button`,{type:`submit`,className:`atm-btn atm-btn-primary`,children:(0,Q.jsx)(`span`,{children:`VERIFY PIN →`})})]})]})]})]})]})]},o.id))}),(0,Q.jsx)(`style`,{children:`
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
      `})]})}function Ee(){let[e,t]=(0,W.useState)(0),n=[{num:`01`,title:`Understand the Problem`,icon:ee,tag:`Analysis & Scope`,summary:`Deconstructing technical constraints, user needs, and defining the system boundaries before writing any code.`,details:[`Analyze user stories, functional prerequisites, and expected edge cases.`,`Clarify system constraints (e.g. CLI vs Web, memory efficiency, browser compatibility).`,`Map out core entities and data flow dependencies.`],terminalCommand:`git init & analyze --spec "requirements.md"`},{num:`02`,title:`Plan the Solution`,icon:O,tag:`Architecture & Modeling`,summary:`Formulating modular software architecture, algorithm selection, and relational schema designs.`,details:[`Design object-oriented class hierarchies and inheritance models in C++.`,`Normalize database tables with primary and foreign keys in MySQL.`,`Select optimal algorithms and data structures for time-space efficiency.`],terminalCommand:`model --entities "Account, GarageBay, UserSession"`},{num:`03`,title:`Design the Interface`,icon:T,tag:`UI/UX & Accessibility`,summary:`Drafting intuitive visual hierarchies, accessible contrast palettes, and responsive layouts.`,details:[`Establish coherent design tokens (typography, spacing, dark mode colorways).`,`Guarantee WCAG AA contrast standards and keyboard navigability.`,`Design responsive CSS layouts from mobile screens up to wide monitors.`],terminalCommand:`style --tokens "dark-mode, glassmorphism, flex-grid"`},{num:`04`,title:`Develop & Test the Application`,icon:f,tag:`Implementation & Quality`,summary:`Writing clean, readable code with modular separation of concerns and thorough edge-case testing.`,details:[`Implement DRY (Don't Repeat Yourself) and SOLID engineering principles.`,`Sanitize all client inputs and validate server-side parameters.`,`Perform boundary value testing (e.g., negative withdrawals, malformed inputs).`],terminalCommand:`npm run test || g++ -Wall -Wextra main.cpp`},{num:`05`,title:`Use Git & GitHub to Manage Changes`,icon:R,tag:`Version Control & Integrity`,summary:`Maintaining an atomic, meaningful commit history with clear documentation and branch safety.`,details:[`Structure git commits with clear semantic prefixes (feat, fix, docs, refactor).`,`Publish clean repositories with comprehensive README setup instructions.`,`Protect repository history against accidental regressions or secret leaks.`],terminalCommand:`git add -A && git commit -m "feat: complete ATM logic validation"`},{num:`06`,title:`Refine Experience & Maintain Code`,icon:w,tag:`Optimization & Longevity`,summary:`Benchmarking performance, fine-tuning transitions, and writing documentation for future maintainability.`,details:[`Optimize WebGL canvas frame rates, memory buffers, and bundle sizes.`,`Incorporate user feedback to polish micro-interactions and touch targets.`,`Ensure sustainable, readable codebase documentation.`],terminalCommand:`perf --audit "lighthouse, core-web-vitals, clean-code"`}],r=n[e],i=r.icon;return(0,Q.jsxs)(`section`,{id:`process`,className:`section-wrapper`,"aria-label":`Development Approach & Problem Solving`,children:[(0,Q.jsxs)(`div`,{className:`section-header`,children:[(0,Q.jsx)(`span`,{className:`section-subtitle`,children:`04 // Engineering Methodology`}),(0,Q.jsxs)(`h2`,{className:`section-title`,children:[`How I `,(0,Q.jsx)(`span`,{className:`gradient-text`,children:`Build`})]}),(0,Q.jsx)(`p`,{className:`section-desc`,children:`A disciplined, step-by-step engineering approach applied to all coursework and software projects — from problem analysis to maintainable code.`})]}),(0,Q.jsxs)(`div`,{className:`process-layout`,children:[(0,Q.jsx)(`div`,{className:`steps-nav-track`,role:`tablist`,children:n.map((n,r)=>{let i=n.icon,a=e===r;return(0,Q.jsxs)(`button`,{type:`button`,role:`tab`,"aria-selected":a,className:`step-nav-btn ${a?`active`:``}`,onClick:()=>{Y(),t(r)},onMouseEnter:X,children:[(0,Q.jsx)(`span`,{className:`step-num font-mono`,children:n.num}),(0,Q.jsx)(i,{size:18,className:`step-icon`}),(0,Q.jsx)(`span`,{className:`step-label`,children:n.title})]},n.num)})}),(0,Q.jsxs)(`div`,{className:`glass-panel active-step-panel`,children:[(0,Q.jsxs)(`div`,{className:`step-panel-header`,children:[(0,Q.jsxs)(`div`,{className:`step-header-left`,children:[(0,Q.jsx)(`div`,{className:`step-circle-icon`,children:(0,Q.jsx)(i,{size:28,className:`text-cyan`})}),(0,Q.jsxs)(`div`,{children:[(0,Q.jsxs)(`span`,{className:`step-tag-badge font-mono`,children:[`PHASE `,r.num,` // `,r.tag.toUpperCase()]}),(0,Q.jsx)(`h3`,{className:`step-active-heading`,children:r.title})]})]}),(0,Q.jsxs)(`div`,{className:`step-counter-display font-mono`,children:[(0,Q.jsx)(`span`,{className:`text-cyan`,children:e+1}),(0,Q.jsx)(`span`,{children:`/`}),(0,Q.jsx)(`span`,{children:n.length})]})]}),(0,Q.jsx)(`p`,{className:`step-summary-paragraph`,children:r.summary}),(0,Q.jsxs)(`div`,{className:`step-deep-grid`,children:[(0,Q.jsxs)(`div`,{className:`step-checklist-box`,children:[(0,Q.jsx)(`h4`,{className:`checklist-heading`,children:`Key Engineering Actions:`}),(0,Q.jsx)(`ul`,{className:`step-checklist`,children:r.details.map((e,t)=>(0,Q.jsxs)(`li`,{children:[(0,Q.jsx)(o,{size:16,className:`text-cyan flex-shrink-0`}),(0,Q.jsx)(`span`,{children:e})]},t))})]}),(0,Q.jsxs)(`div`,{className:`step-terminal-box`,children:[(0,Q.jsx)(`div`,{className:`step-terminal-bar font-mono`,children:(0,Q.jsx)(`span`,{children:`TERMINAL WORKFLOW // COMMAND SIMULATION`})}),(0,Q.jsxs)(`div`,{className:`step-terminal-content font-mono`,children:[(0,Q.jsx)(`span`,{className:`terminal-prompt`,children:`aayan@eng-ws:~$`}),(0,Q.jsx)(`code`,{className:`terminal-cmd-text`,children:r.terminalCommand}),(0,Q.jsxs)(`div`,{className:`terminal-output-line`,children:[`> [SUCCESS]: Phase `,r.num,` parameters verified and staged.`]})]})]})]}),(0,Q.jsxs)(`div`,{className:`step-panel-footer`,children:[(0,Q.jsx)(`button`,{type:`button`,className:`btn-secondary`,disabled:e===0,onClick:()=>{Y(),t(e=>Math.max(0,e-1))},style:{opacity:e===0?.4:1,cursor:e===0?`not-allowed`:`pointer`},children:`← Previous Phase`}),(0,Q.jsxs)(`button`,{type:`button`,className:`btn-primary`,onClick:()=>{Y(),t(e=>(e+1)%n.length)},children:[(0,Q.jsx)(`span`,{children:e===n.length-1?`Restart Progression`:`Next Phase`}),(0,Q.jsx)(c,{size:16})]})]})]})]}),(0,Q.jsx)(`style`,{children:`
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
      `})]})}function De({onOpenResume:e}){let[n,r]=(0,W.useState)({name:``,email:``,subject:``,message:``,honeypot:``}),[i,a]=(0,W.useState)({}),[o,s]=(0,W.useState)(`idle`),[c,u]=(0,W.useState)(!1),[d,f]=(0,W.useState)(``),p=`aayanmadnas@outlook.com`,m=()=>{navigator.clipboard.writeText(p),u(!0),Z();try{I({particleCount:50,spread:60,origin:{y:.8},colors:[`#00f0ff`,`#8b5cf6`,`#38bdf8`]})}catch{}setTimeout(()=>u(!1),2500)},g=()=>{let e={};return n.honeypot?(e.honeypot=`Automated bot activity detected.`,e):((!n.name.trim()||n.name.trim().length<2)&&(e.name=`Please enter your full name (minimum 2 characters).`),(!n.email.trim()||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n.email.trim()))&&(e.email=`Please provide a valid email address.`),(!n.subject.trim()||n.subject.trim().length<3)&&(e.subject=`Please specify a clear subject (minimum 3 characters).`),(!n.message.trim()||n.message.trim().length<10)&&(e.message=`Please provide your message (minimum 10 characters).`),e)};return(0,Q.jsxs)(`section`,{id:`contact`,className:`section-wrapper`,"aria-label":`Contact and Connect with Aayan Madnas`,children:[(0,Q.jsxs)(`div`,{className:`section-header`,children:[(0,Q.jsx)(`span`,{className:`section-subtitle`,children:`05 // Get in Touch`}),(0,Q.jsxs)(`h2`,{className:`section-title`,children:[`Have a Project `,(0,Q.jsx)(`span`,{className:`gradient-text`,children:`in Mind?`})]}),(0,Q.jsx)(`p`,{className:`section-desc`,children:`I'm interested in software development opportunities, collaborative projects, and connecting with people who enjoy building useful technology.`})]}),(0,Q.jsxs)(`div`,{className:`contact-layout-grid`,children:[(0,Q.jsxs)(`div`,{className:`contact-info-col`,children:[(0,Q.jsxs)(`div`,{className:`glass-panel contact-details-card`,children:[(0,Q.jsx)(`h3`,{className:`card-subheading`,children:`Contact Information`}),(0,Q.jsx)(`p`,{className:`card-subtext`,children:`Feel free to reach out via direct mail, phone, or professional networks.`}),(0,Q.jsxs)(`div`,{className:`contact-methods-list`,children:[(0,Q.jsxs)(`div`,{className:`contact-method-item`,children:[(0,Q.jsx)(`div`,{className:`method-icon-wrap`,children:(0,Q.jsx)(B,{size:20,className:`text-cyan`})}),(0,Q.jsxs)(`div`,{className:`method-info`,children:[(0,Q.jsx)(`span`,{className:`method-label font-mono`,children:`EMAIL ADDRESS`}),(0,Q.jsx)(`a`,{href:`mailto:${p}`,className:`method-val`,onClick:Y,children:p})]}),(0,Q.jsx)(`button`,{type:`button`,className:`copy-quick-btn`,onClick:m,title:`Copy email address`,"aria-label":`Copy email address`,children:c?(0,Q.jsx)(h,{size:16,className:`text-emerald`}):(0,Q.jsx)(t,{size:16})})]}),(0,Q.jsxs)(`div`,{className:`contact-method-item`,children:[(0,Q.jsx)(`div`,{className:`method-icon-wrap`,children:(0,Q.jsx)(j,{size:20,className:`text-purple`})}),(0,Q.jsxs)(`div`,{className:`method-info`,children:[(0,Q.jsx)(`span`,{className:`method-label font-mono`,children:`PHONE / WHATSAPP`}),(0,Q.jsx)(`a`,{href:`tel:+919516021102`,className:`method-val`,onClick:Y,children:`+91 9516021102`})]})]}),(0,Q.jsxs)(`div`,{className:`contact-method-item`,children:[(0,Q.jsx)(`div`,{className:`method-icon-wrap`,children:(0,Q.jsx)(L,{size:20,className:`text-cyan`})}),(0,Q.jsxs)(`div`,{className:`method-info`,children:[(0,Q.jsx)(`span`,{className:`method-label font-mono`,children:`LOCATION`}),(0,Q.jsx)(`span`,{className:`method-val-static`,children:`Indore, Madhya Pradesh, India`})]})]})]}),(0,Q.jsxs)(`div`,{className:`quick-actions-bar`,children:[(0,Q.jsxs)(`button`,{type:`button`,className:`btn-secondary`,onClick:m,onMouseEnter:X,children:[c?(0,Q.jsx)(h,{size:16,className:`text-emerald`}):(0,Q.jsx)(t,{size:16}),(0,Q.jsx)(`span`,{children:c?`Email Copied!`:`Copy Email`})]}),e&&(0,Q.jsxs)(`button`,{type:`button`,className:`btn-secondary`,onClick:()=>{Y(),e()},onMouseEnter:X,children:[(0,Q.jsx)(_,{size:16,className:`text-cyan`}),(0,Q.jsx)(`span`,{children:`Verified CV`})]})]})]}),(0,Q.jsxs)(`div`,{className:`social-profiles-grid`,children:[(0,Q.jsxs)(`a`,{href:`https://linkedin.com/in/aayan-madnas-33a5a636`,target:`_blank`,rel:`noopener noreferrer`,className:`glass-panel social-profile-card`,onClick:Y,onMouseEnter:X,children:[(0,Q.jsx)(we,{size:24,className:`text-blue`}),(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`span`,{className:`profile-network font-mono`,children:`LINKEDIN`}),(0,Q.jsx)(`span`,{className:`profile-handle`,children:`aayan-madnas-33a5a636`})]})]}),(0,Q.jsxs)(`a`,{href:`https://github.com/aayanmadnas-dev`,target:`_blank`,rel:`noopener noreferrer`,className:`glass-panel social-profile-card`,onClick:Y,onMouseEnter:X,children:[(0,Q.jsx)($,{size:24,className:`text-cyan`}),(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`span`,{className:`profile-network font-mono`,children:`GITHUB`}),(0,Q.jsx)(`span`,{className:`profile-handle`,children:`@aayanmadnas-dev`})]})]})]})]}),(0,Q.jsx)(`div`,{className:`contact-form-col`,children:(0,Q.jsxs)(`div`,{className:`glass-panel contact-form-card`,children:[(0,Q.jsxs)(`div`,{className:`form-card-header`,children:[(0,Q.jsx)(C,{size:20,className:`text-cyan`}),(0,Q.jsx)(`h3`,{className:`form-card-title`,children:`Send a Direct Message`})]}),(0,Q.jsx)(`p`,{className:`form-card-note`,children:`Equipped with client validation, length constraints, and direct mail dispatch fallback. No private credentials exposed.`}),(0,Q.jsxs)(`form`,{onSubmit:e=>{e.preventDefault(),Y();let t=g();a(t),Object.keys(t).length>0?(s(`error`),f(`Please correct the highlighted fields before sending.`)):(s(`submitting`),f(`Preparing direct communication dispatch...`),setTimeout(()=>{let e=encodeURIComponent(`[Portfolio Inquiry] ${n.subject}`),t=encodeURIComponent(`Hello Aayan,\n\nName: ${n.name}\nEmail: ${n.email}\n\nMessage:\n${n.message}\n\nSent via Developer Portfolio`),r=`mailto:${p}?subject=${e}&body=${t}`;window.location.href=r,s(`success`),Z();try{I({particleCount:80,spread:70,origin:{y:.7},colors:[`#00f0ff`,`#8b5cf6`,`#10b981`]})}catch{}f(`Communication initiated! Your native mail client has been launched with your inquiry.`)},600))},noValidate:!0,className:`interactive-contact-form`,children:[(0,Q.jsxs)(`div`,{style:{display:`none`},children:[(0,Q.jsx)(`label`,{htmlFor:`hp-field`,children:`Ignore this field`}),(0,Q.jsx)(`input`,{id:`hp-field`,type:`text`,tabIndex:-1,autoComplete:`off`,value:n.honeypot,onChange:e=>r(t=>({...t,honeypot:e.target.value}))})]}),(0,Q.jsxs)(`div`,{className:`form-row`,children:[(0,Q.jsxs)(`div`,{className:`form-group`,children:[(0,Q.jsx)(`label`,{htmlFor:`form-name`,className:`form-label font-mono`,children:`YOUR NAME *`}),(0,Q.jsx)(`input`,{id:`form-name`,type:`text`,required:!0,maxLength:70,placeholder:`e.g. Rahul Sharma`,className:`form-input ${i.name?`error`:``}`,value:n.name,onChange:e=>r(t=>({...t,name:e.target.value}))}),i.name&&(0,Q.jsx)(`span`,{className:`field-error-msg`,children:i.name})]}),(0,Q.jsxs)(`div`,{className:`form-group`,children:[(0,Q.jsx)(`label`,{htmlFor:`form-email`,className:`form-label font-mono`,children:`EMAIL ADDRESS *`}),(0,Q.jsx)(`input`,{id:`form-email`,type:`email`,required:!0,maxLength:100,placeholder:`name@company.com`,className:`form-input ${i.email?`error`:``}`,value:n.email,onChange:e=>r(t=>({...t,email:e.target.value}))}),i.email&&(0,Q.jsx)(`span`,{className:`field-error-msg`,children:i.email})]})]}),(0,Q.jsxs)(`div`,{className:`form-group`,children:[(0,Q.jsx)(`label`,{htmlFor:`form-subject`,className:`form-label font-mono`,children:`SUBJECT *`}),(0,Q.jsx)(`input`,{id:`form-subject`,type:`text`,required:!0,maxLength:120,placeholder:`Software internship / Web collaboration`,className:`form-input ${i.subject?`error`:``}`,value:n.subject,onChange:e=>r(t=>({...t,subject:e.target.value}))}),i.subject&&(0,Q.jsx)(`span`,{className:`field-error-msg`,children:i.subject})]}),(0,Q.jsxs)(`div`,{className:`form-group`,children:[(0,Q.jsx)(`label`,{htmlFor:`form-message`,className:`form-label font-mono`,children:`MESSAGE *`}),(0,Q.jsx)(`textarea`,{id:`form-message`,required:!0,rows:5,maxLength:1500,placeholder:`Hi Aayan, I reviewed your portfolio and project work...`,className:`form-textarea ${i.message?`error`:``}`,value:n.message,onChange:e=>r(t=>({...t,message:e.target.value}))}),i.message&&(0,Q.jsx)(`span`,{className:`field-error-msg`,children:i.message}),(0,Q.jsxs)(`span`,{className:`char-counter font-mono`,children:[n.message.length,` / 1500`]})]}),o===`error`&&(0,Q.jsxs)(`div`,{className:`status-alert alert-error`,role:`alert`,children:[(0,Q.jsx)(l,{size:18}),(0,Q.jsx)(`span`,{children:d})]}),o===`success`&&(0,Q.jsxs)(`div`,{className:`status-alert alert-success`,role:`alert`,children:[(0,Q.jsx)(h,{size:18}),(0,Q.jsx)(`span`,{children:d})]}),(0,Q.jsxs)(`div`,{className:`form-submit-row`,children:[(0,Q.jsxs)(`button`,{type:`submit`,className:`btn-primary form-submit-btn`,disabled:o===`submitting`,onMouseEnter:X,children:[(0,Q.jsx)(`span`,{children:o===`submitting`?`Dispatching...`:`Send Message`}),(0,Q.jsx)(re,{size:16})]}),(0,Q.jsx)(`a`,{href:`mailto:${p}`,className:`direct-mail-fallback font-mono`,onClick:Y,children:`Direct Mailto Link →`})]})]})]})})]}),(0,Q.jsx)(`style`,{children:`
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
      `})]})}var Oe=new Date().getFullYear();function ke(){return(0,Q.jsxs)(`footer`,{className:`footer-wrapper`,"aria-label":`Website Footer`,children:[(0,Q.jsxs)(`div`,{className:`footer-inner`,children:[(0,Q.jsxs)(`div`,{className:`footer-top-row`,children:[(0,Q.jsxs)(`div`,{className:`footer-brand-side`,children:[(0,Q.jsxs)(`div`,{className:`brand-logo-strip`,children:[(0,Q.jsx)(`span`,{className:`brand-monogram`,children:`AM`}),(0,Q.jsx)(`h3`,{className:`brand-title`,children:`Aayan Madnas`})]}),(0,Q.jsx)(`p`,{className:`footer-tagline`,children:`Software Engineering Student & Web Developer • Chameli Devi Group of Institutions (2029) • Indore, Madhya Pradesh, India.`}),(0,Q.jsxs)(`div`,{className:`footer-security-pill font-mono`,children:[(0,Q.jsx)(A,{size:14,className:`text-emerald`}),(0,Q.jsx)(`span`,{children:`SECURITY FIRST: ZERO CLIENT SECRETS // STATIC ASSET INTEGRITY`})]})]}),(0,Q.jsxs)(`div`,{className:`footer-links-side`,children:[(0,Q.jsxs)(`div`,{className:`footer-links-col`,children:[(0,Q.jsx)(`h4`,{className:`links-col-title font-mono`,children:`EXPLORE`}),(0,Q.jsxs)(`ul`,{className:`footer-nav-list`,children:[(0,Q.jsx)(`li`,{children:(0,Q.jsx)(`a`,{href:`#home`,onClick:Y,children:`Hero Core`})}),(0,Q.jsx)(`li`,{children:(0,Q.jsx)(`a`,{href:`#about`,onClick:Y,children:`About Me`})}),(0,Q.jsx)(`li`,{children:(0,Q.jsx)(`a`,{href:`#skills`,onClick:Y,children:`Technical Skills`})}),(0,Q.jsx)(`li`,{children:(0,Q.jsx)(`a`,{href:`#projects`,onClick:Y,children:`Featured Projects`})}),(0,Q.jsx)(`li`,{children:(0,Q.jsx)(`a`,{href:`#process`,onClick:Y,children:`How I Build`})}),(0,Q.jsx)(`li`,{children:(0,Q.jsx)(`a`,{href:`#contact`,onClick:Y,children:`Contact`})})]})]}),(0,Q.jsxs)(`div`,{className:`footer-links-col`,children:[(0,Q.jsx)(`h4`,{className:`links-col-title font-mono`,children:`CONNECT`}),(0,Q.jsxs)(`ul`,{className:`footer-nav-list`,children:[(0,Q.jsx)(`li`,{children:(0,Q.jsx)(`a`,{href:`https://github.com/aayanmadnas-dev`,target:`_blank`,rel:`noopener noreferrer`,onClick:Y,children:`GitHub Profile →`})}),(0,Q.jsx)(`li`,{children:(0,Q.jsx)(`a`,{href:`https://linkedin.com/in/aayan-madnas-33a5a636`,target:`_blank`,rel:`noopener noreferrer`,onClick:Y,children:`LinkedIn Network →`})}),(0,Q.jsx)(`li`,{children:(0,Q.jsx)(`a`,{href:`mailto:aayanmadnas@outlook.com`,onClick:Y,children:`aayanmadnas@outlook.com`})}),(0,Q.jsx)(`li`,{children:(0,Q.jsx)(`a`,{href:`tel:+919516021102`,onClick:Y,children:`+91 9516021102`})})]})]})]})]}),(0,Q.jsxs)(`div`,{className:`footer-bottom-row`,children:[(0,Q.jsxs)(`p`,{className:`copyright-line`,children:[`© `,Oe,` Aayan Madnas. All rights reserved. Crafted with clean architecture, procedural Three.js 3D & responsive CSS.`]}),(0,Q.jsxs)(`button`,{type:`button`,className:`back-to-top-btn`,onClick:()=>{Y(),window.scrollTo({top:0,behavior:`smooth`})},onMouseEnter:X,"aria-label":`Scroll back to top`,children:[(0,Q.jsx)(`span`,{children:`Back to Top`}),(0,Q.jsx)(n,{size:16})]})]})]}),(0,Q.jsx)(`style`,{children:`
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
      `})]})}function Ae(){let[e,t]=(0,W.useState)(!1),[n,r]=(0,W.useState)(!1),i=(0,W.useRef)(null),a=(0,W.useRef)(null),o=(0,W.useRef)({x:-100,y:-100}),s=(0,W.useRef)({x:-100,y:-100}),c=(0,W.useRef)(null);return(0,W.useEffect)(()=>{if(window.matchMedia(`(pointer: coarse)`).matches||window.matchMedia(`(prefers-reduced-motion: reduce)`).matches)return;let e=e=>{o.current={x:e.clientX,y:e.clientY},n||r(!0),a.current&&(a.current.style.left=`${e.clientX}px`,a.current.style.top=`${e.clientY}px`)},l=e=>{let n=e.target;n.tagName===`A`||n.tagName===`BUTTON`||n.tagName===`INPUT`||n.tagName===`TEXTAREA`||n.closest(`button`)||n.closest(`a`)||n.getAttribute(`role`)===`button`?t(!0):t(!1)},u=()=>{r(!1)};window.addEventListener(`mousemove`,e,{passive:!0}),window.addEventListener(`mouseover`,l,{passive:!0}),document.addEventListener(`mouseleave`,u);let d=()=>{s.current.x+=(o.current.x-s.current.x)*.18,s.current.y+=(o.current.y-s.current.y)*.18,i.current&&(i.current.style.left=`${s.current.x}px`,i.current.style.top=`${s.current.y}px`),c.current=requestAnimationFrame(d)};return c.current=requestAnimationFrame(d),()=>{window.removeEventListener(`mousemove`,e),window.removeEventListener(`mouseover`,l),document.removeEventListener(`mouseleave`,u),c.current&&cancelAnimationFrame(c.current)}},[n]),n?(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(`div`,{ref:i,className:`custom-cursor ${e?`active`:``}`,"aria-hidden":`true`}),(0,Q.jsx)(`div`,{ref:a,className:`custom-cursor-dot`,"aria-hidden":`true`})]}):null}function je({isOpen:e,onClose:t}){return(0,W.useEffect)(()=>{let n=e=>{e.key===`Escape`&&t()};return e&&(document.body.style.overflow=`hidden`,window.addEventListener(`keydown`,n)),()=>{document.body.style.overflow=`auto`,window.removeEventListener(`keydown`,n)}},[e,t]),e?(0,Q.jsxs)(`div`,{className:`modal-backdrop`,onClick:t,role:`dialog`,"aria-modal":`true`,"aria-label":`Curriculum Vitae Modal`,children:[(0,Q.jsxs)(`div`,{className:`resume-modal-card`,onClick:e=>e.stopPropagation(),children:[(0,Q.jsxs)(`div`,{className:`modal-actions-bar no-print`,children:[(0,Q.jsx)(`div`,{className:`modal-title font-mono`,children:(0,Q.jsx)(`span`,{children:`AAYAN_MADNAS_RESUME.PDF // PREVIEW`})}),(0,Q.jsxs)(`div`,{className:`modal-buttons-group`,children:[(0,Q.jsxs)(`button`,{type:`button`,className:`btn-print font-mono`,onClick:()=>{Y(),window.print()},title:`Print or Save as PDF`,children:[(0,Q.jsx)(te,{size:15}),(0,Q.jsx)(`span`,{children:`Print / Save PDF`})]}),(0,Q.jsx)(`button`,{type:`button`,className:`modal-close-btn`,onClick:()=>{Y(),t()},"aria-label":`Close CV Modal`,children:(0,Q.jsx)(P,{size:20})})]})]}),(0,Q.jsxs)(`div`,{className:`printable-sheet`,children:[(0,Q.jsxs)(`header`,{className:`resume-sheet-header`,children:[(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`h1`,{className:`resume-name`,children:`Aayan Madnas`}),(0,Q.jsx)(`p`,{className:`resume-headline`,children:`Software Engineering Student & Web Developer`})]}),(0,Q.jsxs)(`div`,{className:`resume-contact-block font-mono`,children:[(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(L,{size:13}),` Indore, Madhya Pradesh, India`]}),(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(B,{size:13}),` aayanmadnas@outlook.com`]}),(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(j,{size:13}),` +91 9516021102`]}),(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)($,{size:13}),` github.com/aayanmadnas-dev`]}),(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(we,{size:13}),` linkedin.com/in/aayan-madnas-33a5a636`]})]})]}),(0,Q.jsx)(`hr`,{className:`resume-divider`}),(0,Q.jsxs)(`section`,{className:`resume-section`,children:[(0,Q.jsx)(`h2`,{className:`resume-sec-title`,children:`EDUCATION`}),(0,Q.jsxs)(`div`,{className:`resume-item`,children:[(0,Q.jsxs)(`div`,{className:`resume-item-top`,children:[(0,Q.jsx)(`span`,{className:`resume-item-org`,children:`Chameli Devi Group of Institutions`}),(0,Q.jsx)(`span`,{className:`resume-item-date font-mono`,children:`Expected Graduation: 2029`})]}),(0,Q.jsx)(`div`,{className:`resume-item-sub`,children:`Bachelor of Technology / Bachelor of Engineering`}),(0,Q.jsx)(`div`,{className:`resume-item-loc`,children:`Indore, Madhya Pradesh`})]})]}),(0,Q.jsxs)(`section`,{className:`resume-section`,children:[(0,Q.jsx)(`h2`,{className:`resume-sec-title`,children:`PROFESSIONAL SUMMARY`}),(0,Q.jsx)(`p`,{className:`resume-paragraph`,children:`Software engineering student at Chameli Devi Group of Institutions with an expected graduation year of 2029. Focuses on developing practical software solutions, strengthening programming and algorithmic problem-solving skills, and building responsive web applications. Technical proficiencies include C++, Python, JavaScript, PHP, Data Structures and Algorithms, MySQL database fundamentals, and interactive user interfaces.`})]}),(0,Q.jsxs)(`section`,{className:`resume-section`,children:[(0,Q.jsx)(`h2`,{className:`resume-sec-title`,children:`TECHNICAL SKILLS`}),(0,Q.jsxs)(`div`,{className:`resume-skills-table`,children:[(0,Q.jsxs)(`div`,{className:`skill-row`,children:[(0,Q.jsx)(`span`,{className:`skill-cat`,children:`Programming Languages:`}),(0,Q.jsx)(`span`,{className:`skill-vals`,children:`C++, Python, JavaScript, PHP, Data Structures & Algorithms`})]}),(0,Q.jsxs)(`div`,{className:`skill-row`,children:[(0,Q.jsx)(`span`,{className:`skill-cat`,children:`Web Development:`}),(0,Q.jsx)(`span`,{className:`skill-vals`,children:`HTML5, CSS3, JavaScript, PHP, Responsive Web Design`})]}),(0,Q.jsxs)(`div`,{className:`skill-row`,children:[(0,Q.jsx)(`span`,{className:`skill-cat`,children:`Tools & Environments:`}),(0,Q.jsx)(`span`,{className:`skill-vals`,children:`Git, GitHub, Visual Studio Code, Jupyter Notebook`})]}),(0,Q.jsxs)(`div`,{className:`skill-row`,children:[(0,Q.jsx)(`span`,{className:`skill-cat`,children:`Additional Disciplines:`}),(0,Q.jsx)(`span`,{className:`skill-vals`,children:`Database Fundamentals (MySQL), UI/UX Design, Data Analysis, Machine Learning Fundamentals`})]})]})]}),(0,Q.jsxs)(`section`,{className:`resume-section`,children:[(0,Q.jsx)(`h2`,{className:`resume-sec-title`,children:`FEATURED PROJECTS`}),(0,Q.jsxs)(`div`,{className:`resume-project-item`,children:[(0,Q.jsxs)(`div`,{className:`resume-item-top`,children:[(0,Q.jsx)(`span`,{className:`resume-item-org`,children:`Portfolio Website`}),(0,Q.jsx)(`span`,{className:`resume-item-date font-mono`,children:`HTML5, CSS3, JavaScript, Three.js, Git, GitHub`})]}),(0,Q.jsx)(`p`,{className:`resume-project-desc`,children:`A responsive personal portfolio website designed to showcase software projects and technical work, featuring interactive web components and procedural 3D elements.`}),(0,Q.jsx)(`div`,{className:`resume-link font-mono`,children:`Repository: https://github.com/aayanmadnas-dev/Portfolio-Website`})]}),(0,Q.jsxs)(`div`,{className:`resume-project-item`,children:[(0,Q.jsxs)(`div`,{className:`resume-item-top`,children:[(0,Q.jsx)(`span`,{className:`resume-item-org`,children:`Auto Garage Management System`}),(0,Q.jsx)(`span`,{className:`resume-item-date font-mono`,children:`PHP, HTML5, CSS3, JavaScript, MySQL`})]}),(0,Q.jsx)(`p`,{className:`resume-project-desc`,children:`A web-based auto garage management system featuring customer records, service management, appointment booking, and an administrative dashboard. Implements admin authentication, customer records, reports, FAQs, and MySQL relational database integration.`}),(0,Q.jsx)(`div`,{className:`resume-link font-mono`,children:`Repository: https://github.com/aayanmadnas-dev/Auto-garage`})]}),(0,Q.jsxs)(`div`,{className:`resume-project-item`,children:[(0,Q.jsxs)(`div`,{className:`resume-item-top`,children:[(0,Q.jsx)(`span`,{className:`resume-item-org`,children:`ATM Logic with C++`}),(0,Q.jsx)(`span`,{className:`resume-item-date font-mono`,children:`C++, Object-Oriented Programming`})]}),(0,Q.jsx)(`p`,{className:`resume-project-desc`,children:`A console-based ATM application implementing core banking operations, including account authentication, deposits, withdrawals, balance checking, and PIN management. Applies classes, inheritance, conditionals, and robust input handling.`}),(0,Q.jsx)(`div`,{className:`resume-link font-mono`,children:`Repository: https://github.com/aayanmadnas-dev/ATM-logic-with-c`})]})]}),(0,Q.jsxs)(`section`,{className:`resume-section`,children:[(0,Q.jsx)(`h2`,{className:`resume-sec-title`,children:`DEVELOPMENT METHODOLOGY (HOW I BUILD)`}),(0,Q.jsx)(`p`,{className:`resume-paragraph`,children:`1. Understand Problem Constraints → 2. Architectural Planning & Modeling → 3. Interface Design & Accessibility → 4. Implementation & Boundary Testing → 5. Version Control via Git/GitHub → 6. Code Maintenance & Optimization.`})]})]})]}),(0,Q.jsx)(`style`,{children:`
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
      `})]}):null}function Me({project:e,isOpen:t,onClose:n}){let[r,a]=(0,W.useState)(`overview`);return(0,W.useEffect)(()=>{let e=e=>{e.key===`Escape`&&n()};return t&&(document.body.style.overflow=`hidden`,window.addEventListener(`keydown`,e)),()=>{document.body.style.overflow=`auto`,window.removeEventListener(`keydown`,e)}},[t,n]),!t||!e?null:(0,Q.jsxs)(`div`,{className:`modal-backdrop`,onClick:n,role:`dialog`,"aria-modal":`true`,"aria-label":`${e.title} Details`,children:[(0,Q.jsxs)(`div`,{className:`project-modal-card glass-panel`,onClick:e=>e.stopPropagation(),children:[(0,Q.jsxs)(`div`,{className:`modal-header-strip`,children:[(0,Q.jsxs)(`div`,{className:`modal-header-left`,children:[(0,Q.jsxs)(`span`,{className:`font-mono text-cyan modal-sub`,children:[`SPEC INSPECTOR // `,e.category.toUpperCase()]}),(0,Q.jsx)(`h3`,{className:`modal-main-title`,children:e.title})]}),(0,Q.jsxs)(`div`,{className:`modal-header-right`,children:[(0,Q.jsxs)(`a`,{href:e.github,target:`_blank`,rel:`noopener noreferrer`,className:`btn-github-pill`,onClick:Y,children:[(0,Q.jsx)($,{size:16}),(0,Q.jsx)(`span`,{children:`GitHub Repo`}),(0,Q.jsx)(i,{size:13})]}),(0,Q.jsx)(`button`,{type:`button`,className:`modal-close-icon`,onClick:()=>{Y(),n()},"aria-label":`Close Project Modal`,children:(0,Q.jsx)(P,{size:20})})]})]}),(0,Q.jsx)(`div`,{className:`modal-tabs-row`,role:`tablist`,children:[{id:`overview`,label:`Overview`},{id:`architecture`,label:`Architecture & Tech`},{id:`features`,label:`Key Features`}].map(e=>(0,Q.jsx)(`button`,{role:`tab`,"aria-selected":r===e.id,className:`modal-tab-btn font-mono ${r===e.id?`active`:``}`,onClick:()=>{Y(),a(e.id)},children:e.label},e.id))}),(0,Q.jsxs)(`div`,{className:`modal-scroll-body`,children:[r===`overview`&&(0,Q.jsxs)(`div`,{className:`modal-tab-content`,children:[(0,Q.jsxs)(`div`,{className:`overview-summary-box`,children:[(0,Q.jsx)(`h4`,{className:`content-heading`,children:`Project Synopsis`}),(0,Q.jsx)(`p`,{className:`synopsis-p`,children:e.description})]}),(0,Q.jsxs)(`div`,{className:`tech-stack-showcase`,children:[(0,Q.jsx)(`h4`,{className:`content-heading`,children:`Technologies Utilized`}),(0,Q.jsx)(`div`,{className:`modal-tech-list`,children:e.technologies.map(e=>(0,Q.jsx)(`span`,{className:`tech-badge font-mono`,children:e},e))})]}),(0,Q.jsxs)(`div`,{className:`repo-direct-box`,children:[(0,Q.jsxs)(`div`,{className:`repo-info-text`,children:[(0,Q.jsx)(`strong`,{children:`Verified Source Code Available:`}),(0,Q.jsx)(`span`,{children:`Every commit, structural component, and documentation file is hosted publicly on GitHub.`})]}),(0,Q.jsxs)(`a`,{href:e.github,target:`_blank`,rel:`noopener noreferrer`,className:`btn-primary`,onClick:Y,children:[(0,Q.jsx)($,{size:16}),(0,Q.jsx)(`span`,{children:`Inspect Code on GitHub`})]})]})]}),r===`architecture`&&(0,Q.jsx)(`div`,{className:`modal-tab-content`,children:(0,Q.jsxs)(`div`,{className:`arch-blueprint-card`,children:[(0,Q.jsx)(`h4`,{className:`content-heading`,children:`System Design & Architecture`}),e.id===`atm-logic-cpp`&&(0,Q.jsxs)(`div`,{className:`arch-notes`,children:[(0,Q.jsxs)(`p`,{children:[(0,Q.jsx)(`strong`,{children:`Modular OOP Class Design:`}),` Employs structured classes representing banking accounts, balance state registers, and authentication handlers.`]}),(0,Q.jsx)(`div`,{className:`arch-flow-diagram font-mono`,children:`[User Input PIN] → [Authentication Guard] → [Account Session State] → [Deposit / Withdrawal / Balance Methods]`}),(0,Q.jsxs)(`ul`,{className:`arch-points-list`,children:[(0,Q.jsxs)(`li`,{children:[(0,Q.jsx)(`strong`,{children:`Input Sanitization:`}),` Prevents non-numeric input crashes and stream failure flags using C++ input validation loops.`]}),(0,Q.jsxs)(`li`,{children:[(0,Q.jsx)(`strong`,{children:`Overdraft Prevention:`}),` Validates requested withdrawal amounts against current account balances prior to state modification.`]}),(0,Q.jsxs)(`li`,{children:[(0,Q.jsx)(`strong`,{children:`Encapsulation:`}),` Private data members protect balance integrity against direct manipulation.`]})]})]}),e.id===`auto-garage`&&(0,Q.jsxs)(`div`,{className:`arch-notes`,children:[(0,Q.jsxs)(`p`,{children:[(0,Q.jsx)(`strong`,{children:`Relational Web Architecture:`}),` Combines PHP server scripting with MySQL relational tables to deliver end-to-end garage operations.`]}),(0,Q.jsx)(`div`,{className:`arch-flow-diagram font-mono`,children:`[Admin & Customer UI] → [PHP Request Handlers] → [Session Authentication] → [MySQL Relational Tables]`}),(0,Q.jsxs)(`ul`,{className:`arch-points-list`,children:[(0,Q.jsxs)(`li`,{children:[(0,Q.jsx)(`strong`,{children:`Database Normalization:`}),` Separates customers, vehicles, appointments, and service logs with primary/foreign keys.`]}),(0,Q.jsxs)(`li`,{children:[(0,Q.jsx)(`strong`,{children:`Administrative Security:`}),` Protected admin login sessions with credential verification.`]}),(0,Q.jsxs)(`li`,{children:[(0,Q.jsx)(`strong`,{children:`CRUD Operations:`}),` Complete create, read, update, and report generation workflows.`]})]})]}),e.id===`portfolio-website`&&(0,Q.jsxs)(`div`,{className:`arch-notes`,children:[(0,Q.jsxs)(`p`,{children:[(0,Q.jsx)(`strong`,{children:`Interactive 3D WebGL Pipeline:`}),` Procedural geometry generation with Three.js coupled with responsive, zero-framework CSS.`]}),(0,Q.jsx)(`div`,{className:`arch-flow-diagram font-mono`,children:`[Window Viewport] → [Three.js Scene & Camera] → [Procedural Shader Geometries] → [Event-Driven Parallax]`}),(0,Q.jsxs)(`ul`,{className:`arch-points-list`,children:[(0,Q.jsxs)(`li`,{children:[(0,Q.jsx)(`strong`,{children:`Performance Optimization:`}),` Clamps pixel ratio, throttles event listeners, and uses requestAnimationFrame loops.`]}),(0,Q.jsxs)(`li`,{children:[(0,Q.jsx)(`strong`,{children:`Accessibility & Fallbacks:`}),` Respects reduced motion preferences and provides graceful 2D fallbacks if WebGL is disabled.`]}),(0,Q.jsxs)(`li`,{children:[(0,Q.jsx)(`strong`,{children:`Glassmorphism CSS:`}),` Clean design system using CSS custom properties and backdrop filter utilities.`]})]})]})]})}),r===`features`&&(0,Q.jsxs)(`div`,{className:`modal-tab-content`,children:[(0,Q.jsx)(`h4`,{className:`content-heading`,children:`Detailed Feature Breakdown`}),(0,Q.jsx)(`div`,{className:`features-checklist-grid`,children:(e.featuresToHighlight||e.programmingConcepts||e.highlights||[]).map((e,t)=>(0,Q.jsxs)(`div`,{className:`feat-check-card`,children:[(0,Q.jsx)(o,{size:18,className:`text-cyan flex-shrink-0`}),(0,Q.jsx)(`span`,{children:e})]},t))})]})]})]}),(0,Q.jsx)(`style`,{children:`
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
      `})]})}function Ne(){let[e,t]=(0,W.useState)(!1),[n,r]=(0,W.useState)(null);return(0,Q.jsxs)(`div`,{className:`portfolio-app-root`,children:[(0,Q.jsxs)(`div`,{className:`ambient-bg`,"aria-hidden":`true`,children:[(0,Q.jsx)(`div`,{className:`ambient-grid`}),(0,Q.jsx)(`div`,{className:`ambient-orb ambient-orb-1`}),(0,Q.jsx)(`div`,{className:`ambient-orb ambient-orb-2`}),(0,Q.jsx)(`div`,{className:`ambient-orb ambient-orb-3`})]}),(0,Q.jsx)(Ae,{}),(0,Q.jsx)(ye,{onOpenResume:()=>t(!0)}),(0,Q.jsxs)(`main`,{id:`main-content`,children:[(0,Q.jsx)(xe,{onOpenResume:()=>t(!0)}),(0,Q.jsx)(Se,{}),(0,Q.jsx)(Ce,{}),(0,Q.jsx)(Te,{onOpenProjectModal:e=>{r(e)}}),(0,Q.jsx)(Ee,{}),(0,Q.jsx)(De,{onOpenResume:()=>t(!0)})]}),(0,Q.jsx)(ke,{}),(0,Q.jsx)(je,{isOpen:e,onClose:()=>t(!1)}),(0,Q.jsx)(Me,{project:n,isOpen:!!n,onClose:()=>{r(null)}})]})}(0,G.createRoot)(document.getElementById(`root`)).render((0,Q.jsx)(W.StrictMode,{children:(0,Q.jsx)(Ne,{})}));
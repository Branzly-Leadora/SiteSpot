/**
 * SiteSpot — Three.js Background Scene
 * Orbital energy sphere inspired by the logo
 * Transforms on scroll: expand → fragment → grid
 */

(function () {
  'use strict';

  const canvas = document.getElementById('bg-canvas');
  if (!canvas || typeof THREE === 'undefined') return;

  // ── Scene Setup ──────────────────────────────────────────────
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x000000, 0);

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.set(0, 0, 5);

  // ── State ─────────────────────────────────────────────────────
  let scrollProgress = 0; // 0–1 across full page height
  let time = 0;
  let mouseX = 0;
  let mouseY = 0;

  // ── Materials ─────────────────────────────────────────────────
  const cyanColor  = new THREE.Color(0x00c8ff);
  const tealColor  = new THREE.Color(0x00ffcc);
  const whiteColor = new THREE.Color(0xffffff);

  // ── Helper: ring geometry ─────────────────────────────────────
  function makeRing(radius, tube, segments, color, opacity) {
    const geo = new THREE.TorusGeometry(radius, tube, 8, segments);
    const mat = new THREE.MeshBasicMaterial({
      color,
      transparent: true,
      opacity,
      wireframe: false,
    });
    return new THREE.Mesh(geo, mat);
  }

  // ── Orbital Ring Group ────────────────────────────────────────
  const orbitalGroup = new THREE.Group();
  scene.add(orbitalGroup);

  // Main outer rings (like the logo's orbit lines)
  const ringData = [
    { r: 1.8, tube: 0.008, tilt: 0,    color: cyanColor,  opacity: 0.6 },
    { r: 1.6, tube: 0.006, tilt: 60,   color: tealColor,  opacity: 0.5 },
    { r: 1.5, tube: 0.006, tilt: -45,  color: cyanColor,  opacity: 0.4 },
    { r: 1.3, tube: 0.005, tilt: 90,   color: tealColor,  opacity: 0.35 },
    { r: 1.1, tube: 0.005, tilt: 30,   color: cyanColor,  opacity: 0.3 },
    { r: 0.9, tube: 0.004, tilt: -70,  color: tealColor,  opacity: 0.25 },
  ];

  const rings = ringData.map((d) => {
    const ring = makeRing(d.r, d.tube, 120, d.color, d.opacity);
    ring.rotation.x = (d.tilt * Math.PI) / 180;
    orbitalGroup.add(ring);
    return { mesh: ring, baseTilt: d.tilt, baseRadius: d.r };
  });

  // ── Core energy sphere ────────────────────────────────────────
  const coreGroup = new THREE.Group();
  orbitalGroup.add(coreGroup);

  // Outer glow sphere
  const glowGeo = new THREE.SphereGeometry(0.4, 32, 32);
  const glowMat = new THREE.MeshBasicMaterial({
    color: cyanColor,
    transparent: true,
    opacity: 0.15,
    wireframe: false,
  });
  const glowSphere = new THREE.Mesh(glowGeo, glowMat);
  coreGroup.add(glowSphere);

  // Inner bright core
  const coreGeo = new THREE.SphereGeometry(0.18, 32, 32);
  const coreMat = new THREE.MeshBasicMaterial({
    color: whiteColor,
    transparent: true,
    opacity: 0.9,
  });
  const coreSphere = new THREE.Mesh(coreGeo, coreMat);
  coreGroup.add(coreSphere);

  // Wireframe sphere (icosphere feel)
  const wfGeo = new THREE.IcosahedronGeometry(0.32, 2);
  const wfMat = new THREE.MeshBasicMaterial({
    color: cyanColor,
    transparent: true,
    opacity: 0.4,
    wireframe: true,
  });
  const wfSphere = new THREE.Mesh(wfGeo, wfMat);
  coreGroup.add(wfSphere);

  // ── Code brackets <  > (logo detail) ─────────────────────────
  function makeAngleBracket(isRight) {
    const shape = new THREE.Shape();
    const dir = isRight ? 1 : -1;
    const w = 0.12;
    const h = 0.22;
    shape.moveTo(dir * -w,  h);
    shape.lineTo(dir *  w,  0);
    shape.lineTo(dir * -w, -h);
    const pts = shape.getPoints(20);
    const positions = [];
    for (let i = 0; i < pts.length - 1; i++) {
      positions.push(pts[i].x, pts[i].y, 0);
      positions.push(pts[i + 1].x, pts[i + 1].y, 0);
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    const mat = new THREE.LineBasicMaterial({
      color: 0xaaccee,
      transparent: true,
      opacity: 0.7,
    });
    const line = new THREE.LineSegments(geo, mat);
    line.position.x = isRight ? 0.55 : -0.55;
    return line;
  }

  const bracketL = makeAngleBracket(false);
  const bracketR = makeAngleBracket(true);
  orbitalGroup.add(bracketL);
  orbitalGroup.add(bracketR);

  // ── Particle field ────────────────────────────────────────────
  const particleCount = 200;
  const pPositions = new Float32Array(particleCount * 3);
  const pSizes     = new Float32Array(particleCount);

  for (let i = 0; i < particleCount; i++) {
    const theta = Math.random() * Math.PI * 2;
    const phi   = Math.acos(2 * Math.random() - 1);
    const r     = 2.5 + Math.random() * 2.5;
    pPositions[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
    pPositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    pPositions[i * 3 + 2] = r * Math.cos(phi);
    pSizes[i] = Math.random() * 2 + 0.5;
  }

  const pGeo = new THREE.BufferGeometry();
  pGeo.setAttribute('position', new THREE.Float32BufferAttribute(pPositions, 3));
  pGeo.setAttribute('size', new THREE.Float32BufferAttribute(pSizes, 1));

  const pMat = new THREE.PointsMaterial({
    color: 0x4488aa,
    size: 0.015,
    transparent: true,
    opacity: 0.6,
    sizeAttenuation: true,
  });

  const particles = new THREE.Points(pGeo, pMat);
  scene.add(particles);

  // ── Position: right side of screen (hero) ────────────────────
  orbitalGroup.position.set(3.5, 0, 0);

  // ── Scroll Listener ───────────────────────────────────────────
  function updateScroll() {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    scrollProgress = totalHeight > 0 ? window.scrollY / totalHeight : 0;
  }
  window.addEventListener('scroll', updateScroll, { passive: true });

  // ── Mouse parallax ────────────────────────────────────────────
  window.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth  - 0.5) * 2;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
  }, { passive: true });

  // ── Resize ────────────────────────────────────────────────────
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  // ── Animation Loop ────────────────────────────────────────────
  function animate() {
    requestAnimationFrame(animate);
    time += 0.008;

    const s = scrollProgress; // 0–1

    // --- Scroll transformations ---

    // Phase 1 (s: 0→0.3): Orbit from right → center, expand
    // Phase 2 (s: 0.3→0.6): Orbits speed up, rings tilt
    // Phase 3 (s: 0.6→1.0): Dissolve outward, core becomes large

    // X position: glide from right (3.5) to left-center (0)
    orbitalGroup.position.x = 3.5 - s * 5.5;

    // Y position: slight float
    orbitalGroup.position.y = Math.sin(time * 0.5) * 0.08 + s * 0.5;

    // Scale: grow as you scroll
    const baseScale = 1 + s * 0.8;
    orbitalGroup.scale.setScalar(baseScale);

    // Main rotation (slow ambient + scroll-speed-up)
    const rotSpeed = 0.004 + s * 0.025;
    orbitalGroup.rotation.y += rotSpeed;
    orbitalGroup.rotation.x = mouseY * 0.15 + s * 0.3;

    // Ring individual rotations
    rings.forEach((r, i) => {
      r.mesh.rotation.z += 0.003 * (i % 2 === 0 ? 1 : -1) * (1 + s * 2);
      // Rings expand outward when scrolled
      const expandFactor = 1 + s * 0.6;
      const newRadius = r.baseRadius * expandFactor;
      // Update torus geometry via scale trick
      r.mesh.scale.setScalar(expandFactor);
      // Fade rings at end
      r.mesh.material.opacity = ringData[i].opacity * (1 - s * 0.5);
    });

    // Core pulsation
    const pulse = 1 + Math.sin(time * 3) * 0.06;
    coreGroup.scale.setScalar(pulse);
    wfSphere.rotation.x += 0.012;
    wfSphere.rotation.y += 0.008;

    // Core brightness with scroll
    coreMat.opacity = 0.9 - s * 0.3;
    glowMat.opacity = 0.15 + Math.sin(time * 2) * 0.05 + s * 0.1;

    // Brackets subtle drift
    bracketL.position.x = -0.55 - s * 0.3;
    bracketR.position.x =  0.55 + s * 0.3;

    // Particles drift
    particles.rotation.y += 0.0005;
    particles.rotation.x  = mouseY * 0.05;
    pMat.opacity = 0.6 - s * 0.3;

    // Camera subtle parallax
    camera.position.x += (mouseX * 0.3 - camera.position.x) * 0.05;
    camera.position.y += (-mouseY * 0.2 - camera.position.y) * 0.05;
    camera.lookAt(0, 0, 0);

    renderer.render(scene, camera);
  }

  animate();
})();
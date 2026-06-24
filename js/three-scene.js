/**
 * SiteSpot — Three.js Scene v3
 * - Složitější 3D objekt: icosahedron wire cage + orbiting rings + 2500 particles
 * - Scroll-driven morph: kompaktní koule → rozvinutý toroid → disperzní mrak
 * - Canvas je FIXED — vždy viditelný přes celý scroll
 * - Mouse parallax na kameře
 */

(function () {
  'use strict';

  const canvas = document.getElementById('bg-canvas');
  if (!canvas || typeof THREE === 'undefined') return;

  // ── Renderer ─────────────────────────────────────────────────
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x000000, 0);

  const scene  = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(52, window.innerWidth / window.innerHeight, 0.1, 200);
  camera.position.set(0, 0, 7);

  // ── State ─────────────────────────────────────────────────────
  let time = 0;
  let scrollRaw = 0, scrollSmooth = 0;
  let mouseX = 0, mouseY = 0;
  let camX = 0, camY = 0;

  // ── Root group — sits right-centre of screen ──────────────────
  const root = new THREE.Group();
  root.position.set(2.4, 0.2, 0);
  scene.add(root);

  // ═════════════════════════════════════════════════════════════
  //  1. PARTICLE SYSTEM — 2500 particles, 4 morph targets
  // ═════════════════════════════════════════════════════════════
  const N = 2500;

  const posSphere  = new Float32Array(N * 3);
  const posToroid  = new Float32Array(N * 3);
  const posCloud   = new Float32Array(N * 3);
  const posRings   = new Float32Array(N * 3);
  const aRandom    = new Float32Array(N * 3); // phase, size, bright
  const aColorArr  = new Float32Array(N * 3);

  const C0 = new THREE.Color(0xc8ff3e);  // lime
  const C1 = new THREE.Color(0x88cc00);  // green
  const C2 = new THREE.Color(0xffffff);  // white cores

  for (let i = 0; i < N; i++) {
    const i3 = i * 3;

    // SPHERE (fibonacci lattice, layered radii)
    const ga = Math.PI * (3 - Math.sqrt(5));
    const fy = 1 - (i / (N - 1)) * 2;
    const fr = Math.sqrt(Math.max(0, 1 - fy * fy));
    const ft = ga * i;
    const R = 1.5 + (Math.random() - 0.5) * 0.5;
    posSphere[i3]     = Math.cos(ft) * fr * R;
    posSphere[i3 + 1] = fy * R;
    posSphere[i3 + 2] = Math.sin(ft) * fr * R;

    // TOROID (torus surface with noise)
    const tu = (i / N) * Math.PI * 2;
    const tv = Math.random() * Math.PI * 2;
    const tR = 1.6, tr = 0.55;
    posToroid[i3]     = (tR + tr * Math.cos(tv)) * Math.cos(tu) + (Math.random()-0.5)*0.12;
    posToroid[i3 + 1] = tr * Math.sin(tv) + (Math.random()-0.5)*0.12;
    posToroid[i3 + 2] = (tR + tr * Math.cos(tv)) * Math.sin(tu) + (Math.random()-0.5)*0.12;

    // CONCENTRIC RINGS (3 rings at different tilts)
    const ri = i % 3;
    const ra = (i / N) * Math.PI * 2 * (1 + ri * 0.33);
    const rR = [1.1, 1.65, 2.1][ri];
    const tilt = [0.0, 0.9, -0.5][ri];
    posRings[i3]     = Math.cos(ra) * rR + (Math.random()-0.5)*0.09;
    posRings[i3 + 1] = Math.sin(ra) * rR * Math.cos(tilt) + (Math.random()-0.5)*0.09;
    posRings[i3 + 2] = Math.sin(ra) * rR * Math.sin(tilt) + (Math.random()-0.5)*0.09;

    // CLOUD (dispersed)
    const cr = 2.8 + Math.random() * 1.2;
    const ca = Math.random() * Math.PI * 2;
    const cb = Math.acos(2 * Math.random() - 1);
    posCloud[i3]     = Math.sin(cb) * Math.cos(ca) * cr;
    posCloud[i3 + 1] = Math.sin(cb) * Math.sin(ca) * cr;
    posCloud[i3 + 2] = Math.cos(cb) * cr;

    // Randoms
    aRandom[i3]     = Math.random() * Math.PI * 2;
    aRandom[i3 + 1] = 0.35 + Math.random() * 0.65;
    aRandom[i3 + 2] = 0.55 + Math.random() * 0.45;

    // Colors: lime → green gradient, brightest white
    const mix = (posSphere[i3 + 1] / R + 1) * 0.5;
    const pc = new THREE.Color().lerpColors(C1, C0, Math.max(0, Math.min(1, mix)));
    if (aRandom[i3 + 2] > 0.96) pc.set(C2);
    aColorArr[i3] = pc.r; aColorArr[i3+1] = pc.g; aColorArr[i3+2] = pc.b;
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position',  new THREE.BufferAttribute(posSphere.slice(), 3));
  geo.setAttribute('aSphere',   new THREE.BufferAttribute(posSphere, 3));
  geo.setAttribute('aToroid',   new THREE.BufferAttribute(posToroid, 3));
  geo.setAttribute('aRings',    new THREE.BufferAttribute(posRings,  3));
  geo.setAttribute('aCloud',    new THREE.BufferAttribute(posCloud,  3));
  geo.setAttribute('aRandom',   new THREE.BufferAttribute(aRandom,   3));
  geo.setAttribute('aColor',    new THREE.BufferAttribute(aColorArr, 3));

  const vertShader = /* glsl */`
    attribute vec3 aSphere;
    attribute vec3 aToroid;
    attribute vec3 aRings;
    attribute vec3 aCloud;
    attribute vec3 aRandom;
    attribute vec3 aColor;

    uniform float uTime;
    uniform float uMA; // sphere→toroid
    uniform float uMB; // toroid→rings
    uniform float uMC; // rings→cloud
    uniform float uSize;

    varying vec3  vColor;
    varying float vAlpha;

    void main() {
      vec3 p = aSphere;
      p = mix(p, aToroid, uMA);
      p = mix(p, aRings,  uMB);
      p = mix(p, aCloud,  uMC);

      // breathing
      float wave = sin(uTime * 1.2 + aRandom.x) * 0.04;
      p += normalize(p + vec3(0.001)) * wave;

      vColor = aColor;
      vAlpha = aRandom.z;

      vec4 mv = modelViewMatrix * vec4(p, 1.0);
      gl_Position  = projectionMatrix * mv;
      float dist   = length(mv.xyz);
      gl_PointSize = uSize * aRandom.y * (5.5 / dist);
    }
  `;

  const fragShader = /* glsl */`
    varying vec3  vColor;
    varying float vAlpha;
    void main() {
      vec2  uv = gl_PointCoord - 0.5;
      float d  = length(uv);
      if (d > 0.5) discard;
      float s = pow(1.0 - smoothstep(0.0, 0.5, d), 1.8);
      gl_FragColor = vec4(vColor * s, s * vAlpha);
    }
  `;

  const pMat = new THREE.ShaderMaterial({
    vertexShader: vertShader,
    fragmentShader: fragShader,
    uniforms: {
      uTime:  { value: 0 },
      uMA:    { value: 0 },
      uMB:    { value: 0 },
      uMC:    { value: 0 },
      uSize:  { value: 3.8 },
    },
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    vertexColors: true,
  });

  root.add(new THREE.Points(geo, pMat));

  // ═════════════════════════════════════════════════════════════
  //  2. ICOSAHEDRON WIRE CAGE — the "brain" of the object
  // ═════════════════════════════════════════════════════════════
  const cageGroup = new THREE.Group();
  root.add(cageGroup);

  function makeWireIco(radius, detail, opacity, color) {
    const g = new THREE.IcosahedronGeometry(radius, detail);
    const m = new THREE.MeshBasicMaterial({
      color,
      wireframe: true,
      transparent: true,
      opacity,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    return new THREE.Mesh(g, m);
  }

  const cage0 = makeWireIco(0.72, 1, 0.22, 0xc8ff3e);
  const cage1 = makeWireIco(0.50, 0, 0.30, 0xffffff);
  const cage2 = makeWireIco(0.95, 2, 0.10, 0x88cc00);
  cageGroup.add(cage0, cage1, cage2);

  // Inner glowing core sphere
  const coreSphere = new THREE.Mesh(
    new THREE.SphereGeometry(0.18, 32, 32),
    new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })
  );
  cageGroup.add(coreSphere);

  // ═════════════════════════════════════════════════════════════
  //  3. ORBIT RINGS — 3 torus rings at different tilts
  // ═════════════════════════════════════════════════════════════
  const ringsGroup = new THREE.Group();
  root.add(ringsGroup);

  function makeTorus(R, tube, tiltX, tiltZ, color, opacity) {
    const g = new THREE.TorusGeometry(R, tube, 5, 180);
    const m = new THREE.MeshBasicMaterial({
      color,
      transparent: true,
      opacity,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const mesh = new THREE.Mesh(g, m);
    mesh.rotation.x = tiltX;
    mesh.rotation.z = tiltZ;
    return mesh;
  }

  const ring0 = makeTorus(1.75, 0.012, 0,    0,    0xc8ff3e, 0.55);
  const ring1 = makeTorus(1.55, 0.009, 1.05, 0.4,  0x88cc00, 0.42);
  const ring2 = makeTorus(1.35, 0.008, -0.6, 1.1,  0xc8ff3e, 0.32);
  const ring3 = makeTorus(1.10, 0.007, 0.3,  -0.8, 0xffffff, 0.20);
  ringsGroup.add(ring0, ring1, ring2, ring3);

  // ═════════════════════════════════════════════════════════════
  //  4. OUTER HALO
  // ═════════════════════════════════════════════════════════════
  const haloMesh = new THREE.Mesh(
    new THREE.SphereGeometry(2.3, 24, 24),
    new THREE.MeshBasicMaterial({
      color: 0x2a4400,
      transparent: true,
      opacity: 0.10,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.BackSide,
    })
  );
  root.add(haloMesh);

  // ── Events ───────────────────────────────────────────────────
  window.addEventListener('scroll', () => {
    const total = document.documentElement.scrollHeight - window.innerHeight;
    scrollRaw = total > 0 ? window.scrollY / total : 0;
  }, { passive: true });

  window.addEventListener('mousemove', e => {
    mouseX = (e.clientX / window.innerWidth  - 0.5) * 2;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
  }, { passive: true });

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  // ── Helpers ───────────────────────────────────────────────────
  function lerp(a, b, t) { return a + (b - a) * t; }
  function smooth(lo, hi, x) {
    const t = Math.max(0, Math.min(1, (x - lo) / (hi - lo)));
    return t * t * (3 - 2 * t);
  }

  // ── Animation loop ────────────────────────────────────────────
  function animate() {
    requestAnimationFrame(animate);
    time += 0.01;

    scrollSmooth = lerp(scrollSmooth, scrollRaw, 0.055);
    const s = scrollSmooth;

    // Morph phases driven by scroll 0→1
    // 0.00–0.30  sphere (tight)
    // 0.25–0.55  → toroid
    // 0.50–0.75  → rings
    // 0.72–1.00  → cloud
    const mA = smooth(0.20, 0.48, s);
    const mB = smooth(0.45, 0.68, s);
    const mC = smooth(0.65, 0.92, s);

    pMat.uniforms.uTime.value = time;
    pMat.uniforms.uMA.value   = mA;
    pMat.uniforms.uMB.value   = mB;
    pMat.uniforms.uMC.value   = mC;
    pMat.uniforms.uSize.value = 3.8 - mC * 1.0;

    // Root: drift from right to centre as page scrolls
    const targetX = lerp(2.4, lerp(0.6, 0.0, mB), mA);
    const targetY = Math.sin(time * 0.35) * 0.08 + s * 0.3;
    const targetScale = 1.0 + mA * 0.28 + mB * 0.32;
    root.position.x = lerp(root.position.x, targetX, 0.03);
    root.position.y = lerp(root.position.y, targetY, 0.03);
    root.scale.setScalar(lerp(root.scale.x, targetScale, 0.04));

    // Rotation — speeds up during morph
    root.rotation.y += 0.003 + mA * 0.010 + mB * 0.006;
    root.rotation.x  = lerp(root.rotation.x, mouseY * 0.10 + s * 0.18, 0.035);

    // Cage: rotate each sub-mesh independently
    cage0.rotation.y += 0.008;
    cage0.rotation.z += 0.005;
    cage1.rotation.x += 0.010;
    cage1.rotation.y -= 0.007;
    cage2.rotation.z -= 0.004;
    cage2.rotation.y += 0.006;

    // Cage scale — shrinks into particles as morph progresses
    const cageScale = Math.max(0.0, 1.0 - mA * 0.7);
    cageGroup.scale.setScalar(cageScale);
    cage0.material.opacity = 0.22 * cageScale;
    cage1.material.opacity = 0.30 * cageScale;
    cage2.material.opacity = 0.10 * cageScale;

    const pulse = 1 + Math.sin(time * 3.0) * 0.08;
    coreSphere.scale.setScalar(pulse);
    coreSphere.material.opacity = 0.85 * cageScale;

    // Orbit rings: spin at varying speeds, fade as cloud takes over
    const rOpacity = Math.max(0, 1.0 - mC * 1.4);
    ring0.rotation.z += 0.004;
    ring1.rotation.z -= 0.005;
    ring2.rotation.x += 0.006;
    ring3.rotation.y += 0.007;
    ring0.material.opacity = 0.55 * (1 - mA * 0.5) * rOpacity;
    ring1.material.opacity = 0.42 * (1 - mA * 0.4) * rOpacity;
    ring2.material.opacity = 0.32 * rOpacity;
    ring3.material.opacity = 0.20 * rOpacity;
    ringsGroup.scale.setScalar(1 + mA * 0.35 + mB * 0.3);

    haloMesh.material.opacity = 0.10 * (1 - mA * 0.6);

    // Camera parallax
    camX = lerp(camX, mouseX * 0.22, 0.035);
    camY = lerp(camY, -mouseY * 0.16, 0.035);
    camera.position.x = camX;
    camera.position.y = camY;
    camera.lookAt(0, 0, 0);

    renderer.render(scene, camera);
  }

  animate();
})();
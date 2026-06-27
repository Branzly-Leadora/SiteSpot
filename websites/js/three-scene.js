(function () {
  'use strict';

  const canvas = document.getElementById('bg-canvas');
  if (!canvas || typeof THREE === 'undefined') return;

  /* ─────────────────────────────────────────────────────────────
     RENDERER
  ───────────────────────────────────────────────────────────── */
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: false,
    alpha: true,
    powerPreference: 'high-performance',
    stencil: false,
    depth: false,
  });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
  renderer.setSize(innerWidth, innerHeight);
  renderer.setClearColor(0x000000, 0);

  const scene  = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(50, innerWidth / innerHeight, 0.1, 500);
  camera.position.set(0, 0, 7.5);

  /* ─────────────────────────────────────────────────────────────
     STATE
  ───────────────────────────────────────────────────────────── */
  let T  = 0;               // elapsed time
  let sR = 0, sS = 0;       // scroll raw / smooth
  let mX = 0, mY = 0;       // mouse -1…1
  let cX = 0, cY = 0;       // camera drift

  /* ─────────────────────────────────────────────────────────────
     MATH HELPERS
  ───────────────────────────────────────────────────────────── */
  const lerp  = (a, b, t) => a + (b - a) * t;
  const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
  const sStep = (lo, hi, x) => { const t = clamp((x - lo) / (hi - lo), 0, 1); return t * t * (3 - 2 * t); };
  const rand  = (lo = 0, hi = 1) => lo + Math.random() * (hi - lo);

  /* ─────────────────────────────────────────────────────────────
     ROOT GROUP
  ───────────────────────────────────────────────────────────── */
  const root = new THREE.Group();
  root.position.set(1.8, 0.1, 0);
  scene.add(root);

  /* ═══════════════════════════════════════════════════════════
     LAYER 0 — DEEP STARFIELD
  ═══════════════════════════════════════════════════════════ */
  (function buildStarfield() {
    const S = 1200;
    const pos = new Float32Array(S * 3);
    const col = new Float32Array(S * 3);
    const sz  = new Float32Array(S);

    for (let i = 0; i < S; i++) {
      const r   = rand(14, 45);
      const th  = rand(0, Math.PI * 2);
      const phi = Math.acos(rand(-1, 1));
      pos[i*3]   = r * Math.sin(phi) * Math.cos(th);
      pos[i*3+1] = r * Math.sin(phi) * Math.sin(th);
      pos[i*3+2] = r * Math.cos(phi);

      // Cool star colors: blue-white / white / warm-white
      const pick = Math.random();
      const c = pick < 0.3 ? new THREE.Color(0x88aaff)
              : pick < 0.6 ? new THREE.Color(0xffffff)
              : new THREE.Color(0xffeecc);
      const br = rand(0.15, 0.55);
      col[i*3] = c.r * br; col[i*3+1] = c.g * br; col[i*3+2] = c.b * br;
      sz[i] = rand(0.4, 1.6);
    }

    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    g.setAttribute('aColor',   new THREE.BufferAttribute(col, 3));
    g.setAttribute('aSize',    new THREE.BufferAttribute(sz,  1));

    const mat = new THREE.ShaderMaterial({
      uniforms: { uT: { value: 0 } },
      vertexShader: `
        attribute float aSize;
        attribute vec3 aColor;
        varying vec3 vCol;
        uniform float uT;
        void main() {
          vCol = aColor;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_Position  = projectionMatrix * mv;
          float twinkle = 0.7 + 0.3 * sin(uT * 1.5 + position.x * 8.3 + position.y * 5.7);
          gl_PointSize = aSize * twinkle * (80.0 / length(mv.xyz));
        }`,
      fragmentShader: `
        varying vec3 vCol;
        void main() {
          float d = length(gl_PointCoord - 0.5);
          if (d > 0.5) discard;
          float a = pow(1.0 - d * 2.0, 2.2);
          gl_FragColor = vec4(vCol * a, a);
        }`,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const stars = new THREE.Points(g, mat);
    scene.add(stars);

    // Store for animation
    root.userData.stars    = stars;
    root.userData.starsMat = mat;
  })();

  /* ═══════════════════════════════════════════════════════════
     LAYER 1 — QUANTUM CORE (displaced icosphere)
  ═══════════════════════════════════════════════════════════ */
  const coreGroup = new THREE.Group();
  root.add(coreGroup);

  const CORE_VERT = `
    uniform float uT;
    uniform float uScroll;
    uniform float uPulse;
    varying vec3  vNorm;
    varying vec3  vPos;
    varying float vDisp;

    // ── FBM noise ──────────────────────────────────────────
    vec3 hash3(vec3 p) {
      p = fract(p * vec3(127.1, 311.7, 74.7));
      p += dot(p, p.yxz + 19.19);
      return fract((p.xxy + p.yxx) * p.zyx);
    }
    float noise(vec3 p) {
      vec3 i = floor(p), f = fract(p);
      f = f*f*(3.0-2.0*f);
      return mix(
        mix( mix(dot(hash3(i            )-0.5, f            ),
                 dot(hash3(i+vec3(1,0,0))-0.5, f-vec3(1,0,0)), f.x),
             mix(dot(hash3(i+vec3(0,1,0))-0.5, f-vec3(0,1,0)),
                 dot(hash3(i+vec3(1,1,0))-0.5, f-vec3(1,1,0)), f.x), f.y),
        mix( mix(dot(hash3(i+vec3(0,0,1))-0.5, f-vec3(0,0,1)),
                 dot(hash3(i+vec3(1,0,1))-0.5, f-vec3(1,0,1)), f.x),
             mix(dot(hash3(i+vec3(0,1,1))-0.5, f-vec3(0,1,1)),
                 dot(hash3(i+vec3(1,1,1))-0.5, f-vec3(1,1,1)), f.x), f.y), f.z
      ) * 0.5 + 0.5;
    }
    float fbm(vec3 p) {
      float v = 0.0, a = 0.5;
      for (int i = 0; i < 5; i++) {
        v += a * noise(p);
        p  = p * 2.1 + vec3(1.7, 9.2, 2.8);
        a *= 0.5;
      }
      return v;
    }

    void main() {
      vNorm = normalize(normalMatrix * normal);
      vec3 p = position;

      // Multi-octave FBM displacement — grows with scroll
      float disp = fbm(p * 1.8 + uT * 0.12) * (0.22 + uScroll * 0.38);
      // Secondary high-freq detail
      disp += fbm(p * 4.5 - uT * 0.18) * 0.06;
      // Pulsating beat
      disp *= 1.0 + uPulse * 0.12;

      p += normal * disp;
      vDisp = disp;
      vPos  = p;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
    }
  `;

  const CORE_FRAG = `
    uniform float uT;
    uniform float uScroll;
    uniform vec3  uCamPos;
    varying vec3  vNorm;
    varying vec3  vPos;
    varying float vDisp;

    void main() {
      // Fresnel
      vec3 viewDir = normalize(uCamPos - vPos);
      float rim = pow(1.0 - max(dot(vNorm, viewDir), 0.0), 3.5);

      // Iridescent color: shifts with scroll + time
      float t1 = sin(vPos.y * 3.0 + uT * 0.5) * 0.5 + 0.5;
      float t2 = sin(vPos.x * 2.1 - uT * 0.3 + vPos.z * 1.4) * 0.5 + 0.5;

      vec3 c0 = vec3(0.10, 0.72, 0.65);  // teal
      vec3 c1 = vec3(0.36, 0.84, 1.00);  // sky-blue
      vec3 c2 = vec3(0.55, 0.22, 1.00);  // violet — appears at high scroll
      vec3 base = mix(c0, c1, t1);
      base = mix(base, c2, t2 * uScroll * 0.7);

      // Energy veins from displacement
      float vein = smoothstep(0.18, 0.35, vDisp);
      base += c1 * vein * 0.8;

      // Combine: dark body + bright rim
      vec3 col = base * (0.15 + rim * 0.85);
      float alpha = 0.80 + rim * 0.18;

      gl_FragColor = vec4(col, alpha);
    }
  `;

  const coreGeo = new THREE.IcosahedronGeometry(0.95, 7);
  const coreMat = new THREE.ShaderMaterial({
    vertexShader:   CORE_VERT,
    fragmentShader: CORE_FRAG,
    uniforms: {
      uT:      { value: 0 },
      uScroll: { value: 0 },
      uPulse:  { value: 0 },
      uCamPos: { value: camera.position },
    },
    transparent: true,
    side: THREE.FrontSide,
  });

  const coreMesh = new THREE.Mesh(coreGeo, coreMat);
  coreGroup.add(coreMesh);

  // Inner bright nucleus
  const nucleusMesh = new THREE.Mesh(
    new THREE.SphereGeometry(0.22, 32, 32),
    new THREE.MeshBasicMaterial({
      color: 0xffffff, transparent: true, opacity: 0.92,
      blending: THREE.AdditiveBlending, depthWrite: false,
    })
  );
  coreGroup.add(nucleusMesh);

  /* ═══════════════════════════════════════════════════════════
     LAYER 2 — CRYSTAL LATTICE CAGE
  ═══════════════════════════════════════════════════════════ */
  const latticeGroup = new THREE.Group();
  root.add(latticeGroup);

  const latticeData = [
    { r: 1.08, d: 1, op: 0.28, c: 0x27b7a5, speed: [0.009, 0.005,  0.000] },
    { r: 0.82, d: 0, op: 0.22, c: 0xffffff, speed: [0.000, 0.011, -0.008] },
    { r: 1.30, d: 2, op: 0.12, c: 0x5dd9cb, speed: [-0.006, 0.000, 0.007] },
    { r: 0.60, d: 1, op: 0.18, c: 0x88aaff, speed: [0.013, -0.009, 0.000] },
    { r: 1.55, d: 1, op: 0.07, c: 0x27b7a5, speed: [0.004, 0.000, -0.005] },
    { r: 0.42, d: 0, op: 0.32, c: 0xffffff, speed: [0.000, 0.015,  0.010] },
  ];

  const latticeMeshes = latticeData.map(d => {
    const m = new THREE.Mesh(
      new THREE.IcosahedronGeometry(d.r, d.d),
      new THREE.MeshBasicMaterial({
        color: d.c, wireframe: true, transparent: true, opacity: d.op,
        blending: THREE.AdditiveBlending, depthWrite: false,
      })
    );
    m.userData.speed = d.speed;
    m.userData.baseOp = d.op;
    latticeGroup.add(m);
    return m;
  });

  /* ═══════════════════════════════════════════════════════════
     LAYER 3 — ENERGY ARCS (Catmull-Rom tube paths)
  ═══════════════════════════════════════════════════════════ */
  const arcsGroup = new THREE.Group();
  root.add(arcsGroup);

  const ARC_FRAG = `
    varying float vT;
    uniform float uTime;
    uniform vec3 uC0;
    uniform vec3 uC1;
    void main() {
      // Flowing energy pulse along arc
      float flow = fract(vT - uTime * 0.6);
      float pulse = pow(1.0 - abs(flow - 0.5) * 2.0, 2.5);
      float edge = smoothstep(0.0, 0.08, vT) * smoothstep(1.0, 0.92, vT);
      vec3 col = mix(uC0, uC1, vT);
      gl_FragColor = vec4(col * (pulse * 1.4 + 0.1) * edge, (pulse * 0.7 + 0.08) * edge);
    }
  `;
  const ARC_VERT = `
    attribute float aT;
    varying float vT;
    void main() {
      vT = aT;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  function buildArc(seed, radius, tiltX, tiltY) {
    // Generate random control points on sphere surface
    const pts = [];
    const N_PTS = 6;
    for (let i = 0; i < N_PTS; i++) {
      const a = (i / N_PTS) * Math.PI * 2 + seed;
      const elev = Math.sin(seed * 3.7 + i * 1.3) * 0.8;
      const r = radius * (0.9 + Math.sin(seed + i * 2.1) * 0.15);
      pts.push(new THREE.Vector3(
        Math.cos(a) * Math.cos(elev) * r,
        Math.sin(elev) * r,
        Math.sin(a) * Math.cos(elev) * r
      ));
    }
    pts.push(pts[0].clone()); // close loop

    const curve  = new THREE.CatmullRomCurve3(pts, true);
    const N_SEG  = 120;
    const points = curve.getPoints(N_SEG);
    const pos    = new Float32Array((N_SEG + 1) * 3);
    const tArr   = new Float32Array(N_SEG + 1);

    points.forEach((p, i) => {
      pos[i*3] = p.x; pos[i*3+1] = p.y; pos[i*3+2] = p.z;
      tArr[i]  = i / N_SEG;
    });

    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    g.setAttribute('aT',       new THREE.BufferAttribute(tArr, 1));

    // Alternate colors per arc
    const even = seed % 2 < 1;
    const mat  = new THREE.ShaderMaterial({
      vertexShader: ARC_VERT,
      fragmentShader: ARC_FRAG,
      uniforms: {
        uTime: { value: 0 },
        uC0: { value: new THREE.Color(even ? 0x27b7a5 : 0x5588ff) },
        uC1: { value: new THREE.Color(even ? 0xffffff : 0xaa44ff) },
      },
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const line = new THREE.Line(g, mat);
    line.rotation.x = tiltX;
    line.rotation.y = tiltY;
    line.userData.mat = mat;
    arcsGroup.add(line);
    return line;
  }

  const arcs = [];
  for (let i = 0; i < 8; i++) {
    arcs.push(buildArc(
      i * 0.785,
      rand(1.4, 1.85),
      rand(-1.2, 1.2),
      rand(-Math.PI, Math.PI)
    ));
  }

  /* ═══════════════════════════════════════════════════════════
     LAYER 4 — MAIN PARTICLE CLOUD (8000 particles, 5 morphs)
  ═══════════════════════════════════════════════════════════ */
  const N = 8000;
  const pA  = new Float32Array(N * 3); // morph 0: sphere
  const pB  = new Float32Array(N * 3); // morph 1: double helix
  const pC  = new Float32Array(N * 3); // morph 2: triaxial rings
  const pD  = new Float32Array(N * 3); // morph 3: hypercube shell
  const pE  = new Float32Array(N * 3); // morph 4: nebula cloud
  const pRnd = new Float32Array(N * 4); // phase, size, bright, colorMix
  const pCol = new Float32Array(N * 3);

  const PC0 = new THREE.Color(0x27b7a5); // teal
  const PC1 = new THREE.Color(0x5dd9cb); // cyan
  const PC2 = new THREE.Color(0x88aaff); // blue
  const PC3 = new THREE.Color(0xffffff); // white spark
  const GA  = Math.PI * (3 - Math.sqrt(5));

  for (let i = 0; i < N; i++) {
    const i3 = i * 3;
    const i4 = i * 4;

    /* ── Morph A: Fibonacci sphere ── */
    const fy = 1 - (i / (N - 1)) * 2;
    const fr = Math.sqrt(Math.max(0, 1 - fy * fy));
    const ft = GA * i;
    const RS = rand(1.35, 1.75);
    pA[i3]   = Math.cos(ft) * fr * RS;
    pA[i3+1] = fy * RS;
    pA[i3+2] = Math.sin(ft) * fr * RS;

    /* ── Morph B: Double helix (two interleaved Archimedean spirals) ── */
    const strand = i % 2;
    const ht   = (i / N) * Math.PI * 8; // 4 full turns
    const hR   = 1.4 + Math.sin(ht * 0.5) * 0.18;
    const hOff = strand * Math.PI; // 180° offset between strands
    const hUp  = (i / N) * 3.0 - 1.5; // vertical spread
    pB[i3]   = Math.cos(ht + hOff) * hR + rand(-0.06, 0.06);
    pB[i3+1] = hUp + rand(-0.04, 0.04);
    pB[i3+2] = Math.sin(ht + hOff) * hR + rand(-0.06, 0.06);

    /* ── Morph C: Three orthogonal orbital rings ── */
    const ringIdx = i % 3;
    const rAngle  = (i / N) * Math.PI * 2 * (1 + ringIdx * 0.618);
    const rR      = [1.20, 1.55, 1.90][ringIdx];
    const noise   = rand(-0.07, 0.07);
    if (ringIdx === 0) {
      pC[i3]   = Math.cos(rAngle) * rR + noise;
      pC[i3+1] = Math.sin(rAngle) * rR + noise;
      pC[i3+2] = noise;
    } else if (ringIdx === 1) {
      pC[i3]   = Math.cos(rAngle) * rR + noise;
      pC[i3+1] = noise;
      pC[i3+2] = Math.sin(rAngle) * rR + noise;
    } else {
      pC[i3]   = noise;
      pC[i3+1] = Math.cos(rAngle) * rR + noise;
      pC[i3+2] = Math.sin(rAngle) * rR + noise;
    }

    /* ── Morph D: Hypercube shell (sphere warped to box-like) ── */
    // Map fibonacci sphere to quasi-cube surface
    const fx = pA[i3], fy2 = pA[i3+1], fz = pA[i3+2];
    const maxC = Math.max(Math.abs(fx), Math.abs(fy2), Math.abs(fz));
    const cube = maxC > 0 ? 1.6 / maxC : 1;
    pD[i3]   = fx * cube * rand(0.92, 1.08);
    pD[i3+1] = fy2 * cube * rand(0.92, 1.08);
    pD[i3+2] = fz * cube * rand(0.92, 1.08);

    /* ── Morph E: Nebula cloud ── */
    const cr = rand(2.6, 4.8);
    const ca = rand(0, Math.PI * 2);
    const cb = Math.acos(rand(-1, 1));
    pE[i3]   = Math.sin(cb) * Math.cos(ca) * cr;
    pE[i3+1] = Math.sin(cb) * Math.sin(ca) * cr * rand(0.4, 1.0); // flattened
    pE[i3+2] = Math.cos(cb) * cr;

    /* ── Per-particle random attributes ── */
    pRnd[i4]   = rand(0, Math.PI * 2); // phase offset
    pRnd[i4+1] = rand(0.3, 1.0);       // size multiplier
    pRnd[i4+2] = rand(0.5, 1.0);       // alpha brightness
    pRnd[i4+3] = rand(0.0, 1.0);       // color mix

    /* ── Color: gradient based on sphere latitude + random tint ── */
    const lat  = (pA[i3+1] / RS + 1) * 0.5;
    const tint = pRnd[i4+3];
    let pc;
    if (tint < 0.6)       pc = new THREE.Color().lerpColors(PC0, PC1, lat);
    else if (tint < 0.88) pc = new THREE.Color().lerpColors(PC1, PC2, lat);
    else                  pc = new THREE.Color(PC3); // rare white spark
    pCol[i3] = pc.r; pCol[i3+1] = pc.g; pCol[i3+2] = pc.b;
  }

  const pGeo = new THREE.BufferGeometry();
  pGeo.setAttribute('position', new THREE.BufferAttribute(pA.slice(), 3));
  pGeo.setAttribute('pA',       new THREE.BufferAttribute(pA,   3));
  pGeo.setAttribute('pB',       new THREE.BufferAttribute(pB,   3));
  pGeo.setAttribute('pC',       new THREE.BufferAttribute(pC,   3));
  pGeo.setAttribute('pD',       new THREE.BufferAttribute(pD,   3));
  pGeo.setAttribute('pE',       new THREE.BufferAttribute(pE,   3));
  pGeo.setAttribute('pRnd',     new THREE.BufferAttribute(pRnd, 4));
  pGeo.setAttribute('pCol',     new THREE.BufferAttribute(pCol, 3));

  const P_VERT = `
    attribute vec3  pA, pB, pC, pD, pE;
    attribute vec4  pRnd;   // phase, size, alpha, colorMix
    attribute vec3  pCol;
    uniform float   uT, uMA, uMB, uMC, uMD, uSz;
    varying vec3    vCol;
    varying float   vAlpha, vSizeFactor;

    void main() {
      // Sequential morph chain
      vec3 p = pA;
      p = mix(p, pB, uMA);
      p = mix(p, pC, uMB);
      p = mix(p, pD, uMC);
      p = mix(p, pE, uMD);

      // Organic breathing: layered sin waves
      float breath = sin(uT * 1.1 + pRnd.x) * 0.035
                   + sin(uT * 2.3 + pRnd.x * 1.7) * 0.012
                   + sin(uT * 0.4 + pRnd.x * 0.5) * 0.022;
      p += normalize(p + vec3(0.001)) * breath;

      vCol       = pCol;
      vAlpha     = pRnd.z;
      vSizeFactor = pRnd.y;

      vec4 mv  = modelViewMatrix * vec4(p, 1.0);
      gl_Position  = projectionMatrix * mv;
      float dist   = length(mv.xyz);
      // Larger base size + distance attenuation + breathing size pulse
      float blink  = 0.85 + 0.15 * sin(uT * 3.1 + pRnd.x * 4.4);
      gl_PointSize = uSz * vSizeFactor * blink * (6.5 / dist);
    }
  `;

  const P_FRAG = `
    varying vec3  vCol;
    varying float vAlpha, vSizeFactor;

    void main() {
      vec2  uv = gl_PointCoord - 0.5;
      float d  = length(uv);
      if (d > 0.5) discard;

      // Soft gaussian core
      float core = exp(-d * d * 18.0);
      // Wide glow halo
      float halo = exp(-d * d * 4.5) * 0.35;
      float s    = core + halo;

      // Brighten large/bright particles
      float boost = mix(1.0, 1.6, step(0.9, vSizeFactor));
      gl_FragColor = vec4(vCol * s * boost, s * vAlpha);
    }
  `;

  const pMat = new THREE.ShaderMaterial({
    vertexShader:   P_VERT,
    fragmentShader: P_FRAG,
    uniforms: {
      uT:  { value: 0 },
      uMA: { value: 0 },
      uMB: { value: 0 },
      uMC: { value: 0 },
      uMD: { value: 0 },
      uSz: { value: 4.2 },
    },
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });

  root.add(new THREE.Points(pGeo, pMat));

  /* ═══════════════════════════════════════════════════════════
     LAYER 5 — VOLUMETRIC HALO RINGS
  ═══════════════════════════════════════════════════════════ */
  const haloGroup = new THREE.Group();
  root.add(haloGroup);

  const haloData = [
    { R: 1.80, tube: 0.018, rx: 0.00,  rz: 0.00, c: 0x27b7a5, op: 0.50 },
    { R: 1.62, tube: 0.013, rx: 1.05,  rz: 0.40, c: 0x5dd9cb, op: 0.38 },
    { R: 1.45, tube: 0.011, rx: -0.60, rz: 1.10, c: 0x27b7a5, op: 0.28 },
    { R: 1.25, tube: 0.009, rx: 0.30,  rz: -0.80,c: 0x88aaff, op: 0.20 },
    { R: 2.05, tube: 0.007, rx: 0.75,  rz: 0.55, c: 0x5dd9cb, op: 0.14 },
    { R: 2.30, tube: 0.005, rx: -0.40, rz: 0.90, c: 0x27b7a5, op: 0.08 },
  ];

  const haloMeshes = haloData.map(d => {
    const m = new THREE.Mesh(
      new THREE.TorusGeometry(d.R, d.tube, 8, 220),
      new THREE.MeshBasicMaterial({
        color: d.c, transparent: true, opacity: d.op,
        blending: THREE.AdditiveBlending, depthWrite: false,
      })
    );
    m.rotation.x = d.rx;
    m.rotation.z = d.rz;
    m.userData.baseOp = d.op;
    haloGroup.add(m);
    return m;
  });

  /* ═══════════════════════════════════════════════════════════
     LAYER 6 — SHOCKWAVE DISK
  ═══════════════════════════════════════════════════════════ */
  const shockMesh = new THREE.Mesh(
    new THREE.RingGeometry(0.0, 0.12, 64),
    new THREE.ShaderMaterial({
      uniforms: {
        uR:    { value: 0.0 },
        uTime: { value: 0.0 },
      },
      vertexShader: `
        varying vec2 vUV;
        void main() { vUV = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
      `,
      fragmentShader: `
        uniform float uR, uTime;
        varying vec2 vUV;
        void main() {
          float r = length(vUV - 0.5) * 2.0;
          float ring = smoothstep(uR - 0.06, uR, r) * smoothstep(uR + 0.06, uR, r);
          float fade = 1.0 - uR;
          gl_FragColor = vec4(vec3(0.16, 0.72, 0.65) * ring * fade * 1.5, ring * fade * 0.7);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
    })
  );
  shockMesh.rotation.x = Math.PI / 2;
  root.add(shockMesh);

  /* ═══════════════════════════════════════════════════════════
     LAYER 7 — LENS FLARE SPARKS (16 billboards)
  ═══════════════════════════════════════════════════════════ */
  const sparkGroup = new THREE.Group();
  root.add(sparkGroup);

  const sparkData = Array.from({ length: 16 }, () => ({
    phi:   rand(0, Math.PI * 2),
    theta: Math.acos(rand(-1, 1)),
    r:     rand(1.5, 2.6),
    size:  rand(0.012, 0.028),
    speed: rand(0.4, 1.2),
    phase: rand(0, Math.PI * 2),
  }));

  sparkData.forEach(d => {
    const m = new THREE.Mesh(
      new THREE.PlaneGeometry(d.size, d.size),
      new THREE.ShaderMaterial({
        uniforms: {
          uT:     { value: 0 },
          uPhase: { value: d.phase },
          uSpeed: { value: d.speed },
        },
        vertexShader: `
          void main() { gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
        `,
        fragmentShader: `
          uniform float uT, uPhase, uSpeed;
          void main() {
            float flicker = 0.4 + 0.6 * abs(sin(uT * uSpeed + uPhase));
            vec3 col = mix(vec3(0.16,0.72,0.65), vec3(1.0,1.0,1.0), flicker);
            gl_FragColor = vec4(col, flicker * 0.8);
          }
        `,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      })
    );
    m.position.set(
      d.r * Math.sin(d.theta) * Math.cos(d.phi),
      d.r * Math.sin(d.theta) * Math.sin(d.phi),
      d.r * Math.cos(d.theta)
    );
    m.userData = { phase: d.phase, speed: d.speed };
    sparkGroup.add(m);
  });

  /* ═══════════════════════════════════════════════════════════
     OUTER ATMOSPHERE (BackSide sphere)
  ═══════════════════════════════════════════════════════════ */
  root.add(new THREE.Mesh(
    new THREE.SphereGeometry(2.8, 32, 32),
    new THREE.MeshBasicMaterial({
      color: 0x001a14,
      transparent: true,
      opacity: 0.12,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.BackSide,
    })
  ));

  /* ─────────────────────────────────────────────────────────────
     EVENTS
  ───────────────────────────────────────────────────────────── */
  window.addEventListener('mousemove', e => {
    mX = (e.clientX / innerWidth  - 0.5) * 2;
    mY = (e.clientY / innerHeight - 0.5) * 2;
  }, { passive: true });

  // Support both SS panel engine and normal scroll
  window.addEventListener('scroll', () => {
    const tot = document.documentElement.scrollHeight - innerHeight;
    sR = tot > 0 ? scrollY / tot : 0;
  }, { passive: true });

  window.addEventListener('resize', () => {
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(innerWidth, innerHeight);
  });

  function getScroll() {
    if (typeof window._ssCurrent === 'number' &&
        typeof window._ssPanels  === 'number' &&
        window._ssPanels > 1) {
      return window._ssCurrent / (window._ssPanels - 1);
    }
    return sR;
  }

  /* ─────────────────────────────────────────────────────────────
     SHOCKWAVE STATE
  ───────────────────────────────────────────────────────────── */
  let lastSection  = 0;
  let shockR       = 1.1; // start beyond visible — idle
  let shockActive  = false;

  function triggerShockwave() {
    shockR      = 0.0;
    shockActive = true;
  }

  /* ─────────────────────────────────────────────────────────────
     RENDER LOOP
  ───────────────────────────────────────────────────────────── */
  function animate() {
    requestAnimationFrame(animate);
    T += 0.008;

    /* Smooth scroll */
    sS = lerp(sS, getScroll(), 0.052);
    const s = sS;

    /* Detect section change → trigger shockwave */
    const secNow = Math.floor(s * 4.99);
    if (secNow !== lastSection) { lastSection = secNow; triggerShockwave(); }

    /* ── 5-phase morph ────────────────────────────────────────
       mA: sphere   → double helix   (0.15 – 0.38)
       mB: helix    → triaxial rings (0.35 – 0.58)
       mC: rings    → hypercube      (0.55 – 0.76)
       mD: hypercube→ nebula cloud   (0.73 – 0.96)
    ─────────────────────────────────────────────────────────── */
    const mA = sStep(0.15, 0.38, s);
    const mB = sStep(0.35, 0.58, s);
    const mC = sStep(0.55, 0.76, s);
    const mD = sStep(0.73, 0.96, s);

    pMat.uniforms.uT.value  = T;
    pMat.uniforms.uMA.value = mA;
    pMat.uniforms.uMB.value = mB;
    pMat.uniforms.uMC.value = mC;
    pMat.uniforms.uMD.value = mD;
    // Particles grow slightly during helix, shrink in cloud
    pMat.uniforms.uSz.value = 4.2 + mA * 0.6 - mD * 1.4;

    /* ── Root position: centred on hero → glides right then back ─ */
    // On hero (s=0, mA=0): x=0 (centred). As we scroll it first moves
    // slightly right during helix morph, then back to centre in cloud.
    const tx = lerp(1.8, lerp(0.5, -0.2, mC), mA);
    const ty = Math.sin(T * 0.32) * 0.07 + s * 0.3;
    root.position.x = lerp(root.position.x, tx, 0.028);
    root.position.y = lerp(root.position.y, ty, 0.028);

    // Scale: expands at helix, contracts in cloud
    const targetScale = 1.0 + mA * 0.35 + mB * 0.15 - mD * 0.18;
    root.scale.setScalar(lerp(root.scale.x, targetScale, 0.04));

    // Rotation accelerates during morphs
    root.rotation.y += 0.0028 + mA * 0.012 + mB * 0.007 + mC * 0.004;
    root.rotation.x  = lerp(root.rotation.x, mY * 0.08 + s * 0.14, 0.032);

    /* ── Core: custom shader ───────────────────────────────── */
    const pulse = Math.sin(T * 2.8) * 0.5 + 0.5;
    coreMat.uniforms.uT.value      = T;
    coreMat.uniforms.uScroll.value = s;
    coreMat.uniforms.uPulse.value  = pulse;
    coreMat.uniforms.uCamPos.value.copy(camera.position);

    // Core dissolves as particles take over
    const coreVisible = clamp(1.0 - mA * 1.2, 0, 1);
    coreMesh.scale.setScalar(coreVisible > 0.01 ? 1 : 0.001);
    nucleusMesh.scale.setScalar((1 + pulse * 0.12) * coreVisible);
    nucleusMesh.material.opacity = 0.92 * coreVisible;

    /* ── Lattice cage: each mesh rotates independently ─────── */
    const latticeVisible = clamp(1.0 - mA * 0.85, 0, 1);
    latticeMeshes.forEach((m, i) => {
      m.rotation.x += m.userData.speed[0];
      m.rotation.y += m.userData.speed[1];
      m.rotation.z += m.userData.speed[2];
      m.material.opacity = m.userData.baseOp * latticeVisible;
    });
    latticeGroup.scale.setScalar(1 + pulse * 0.04);

    /* ── Energy arcs: flow + fade with scroll ──────────────── */
    const arcFade = clamp(1.0 - mC * 1.3, 0, 1);
    arcs.forEach((arc, i) => {
      arc.userData.mat.uniforms.uTime.value = T + i * 0.4;
      arc.rotation.y += 0.0015 * (i % 2 === 0 ? 1 : -1);
      arc.rotation.x += 0.0008 * (i % 3 === 0 ? 1 : -1);
      // Opacity: emerge during helix, fade in cloud
      const arcPeak = clamp(mA * 2.0, 0, 1) * arcFade;
      arc.material = arc.userData.mat; // keep ref
      arc.userData.mat.uniforms.uTime.value = T * (0.6 + i * 0.08);
    });
    arcsGroup.scale.setScalar(lerp(0.0, 1.0 + mB * 0.3, clamp(mA * 3, 0, 1)) * arcFade);

    /* ── Halo rings: spin, expand, fade in cloud ───────────── */
    const haloFade = clamp(1.0 - mD * 1.5, 0, 1);
    haloMeshes.forEach((m, i) => {
      const speeds = [0.0040, -0.0050, 0.0062, 0.0073, -0.0031, 0.0025];
      const axes   = ['z', 'z', 'x', 'y', 'z', 'x'];
      m.rotation[axes[i]] += speeds[i] * (1 + mA * 1.5);
      // Scale expands during helix + rings phases
      const sc = 1.0 + mA * 0.30 + mB * 0.20;
      m.scale.setScalar(sc);
      m.material.opacity = m.userData.baseOp * haloFade * (1 - mA * 0.3 * (i < 2 ? 1 : 0));
    });

    /* ── Shockwave disk ─────────────────────────────────────── */
    if (shockActive) {
      shockR += 0.022;
      shockMesh.material.uniforms.uR.value = shockR;
      shockMesh.scale.setScalar(1 + shockR * 2.5);
      if (shockR > 1.1) { shockActive = false; shockR = 1.1; }
    }
    shockMesh.material.uniforms.uTime.value = T;
    shockMesh.rotation.z += 0.008;

    /* ── Sparks: billboard + flicker ───────────────────────── */
    sparkGroup.children.forEach((m, i) => {
      m.material.uniforms.uT.value = T;
      // Bill board — face camera
      m.quaternion.copy(camera.quaternion);
      // Orbit slowly
      const d = sparkData[i];
      d.phi += 0.001 * d.speed;
      m.position.set(
        d.r * Math.sin(d.theta) * Math.cos(d.phi),
        d.r * Math.sin(d.theta) * Math.sin(d.phi),
        d.r * Math.cos(d.theta)
      );
    });

    /* ── Stars twinkle ──────────────────────────────────────── */
    root.userData.starsMat.uniforms.uT.value = T;
    root.userData.stars.rotation.y += 0.00008;

    /* ── Camera parallax ─────────────────────────────────────── */
    cX = lerp(cX, mX * 0.28, 0.032);
    cY = lerp(cY, -mY * 0.20, 0.032);
    camera.position.x = cX;
    camera.position.y = cY;
    camera.lookAt(0, 0, 0);

    renderer.render(scene, camera);
  }

  animate();

})();
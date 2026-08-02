import { useEffect, useRef } from 'react'

// Deep-space background: procedural nebula (FBM) + twinkling starfield, all in-shader.
// Reads like a looping space video, zero downloaded assets.
//
// Written against raw WebGL on purpose. This used to go through three.js, which
// dragged ~600 kB of renderer/scene-graph code into the main bundle for what is
// really one full-screen triangle and one fragment shader.
const FRAG = `
precision mediump float;
uniform vec2 uRes;
uniform float uTime;

// hash / noise helpers
float hash(vec2 p){ p = fract(p*vec2(123.34,456.21)); p += dot(p,p+45.32); return fract(p.x*p.y); }
float noise(vec2 p){
  vec2 i = floor(p), f = fract(p);
  float a = hash(i), b = hash(i+vec2(1.,0.)), c = hash(i+vec2(0.,1.)), d = hash(i+vec2(1.,1.));
  vec2 u = f*f*(3.-2.*f);
  return mix(a,b,u.x) + (c-a)*u.y*(1.-u.x) + (d-b)*u.x*u.y;
}
float fbm(vec2 p){
  float v = 0.0, a = 0.5;
  mat2 m = mat2(1.6,1.2,-1.2,1.6);
  for(int i=0;i<4;i++){ v += a*noise(p); p = m*p; a *= 0.5; }
  return v;
}

// twinkling star layer
float stars(vec2 uv, float density, float sharp, float tw){
  vec2 g = uv*density;
  vec2 id = floor(g); vec2 f = fract(g)-0.5;
  float h = hash(id);
  if(h < 0.965) return 0.0;                 // sparse
  float d = length(f);
  float s = smoothstep(0.5*sharp, 0.0, d);
  float twinkle = 0.6 + 0.4*sin(uTime*tw + h*40.0);
  return s*twinkle;
}

void main(){
  vec2 uv = gl_FragCoord.xy / uRes.xy;
  vec2 p = (gl_FragCoord.xy - 0.5*uRes.xy) / uRes.y;

  float t = uTime*0.015;
  // drifting nebula clouds
  vec2 q = p*1.4;
  float n1 = fbm(q + vec2(t, t*0.6));
  float n2 = fbm(q*2.1 - vec2(t*0.8, t*0.4) + n1);
  float neb = smoothstep(0.15, 1.15, n1*0.65 + n2*0.55);

  vec3 deep   = vec3(0.02, 0.03, 0.07);     // base space
  vec3 blue   = vec3(0.10, 0.20, 0.55);
  vec3 violet = vec3(0.32, 0.14, 0.55);
  vec3 cyan   = vec3(0.10, 0.35, 0.55);

  vec3 col = deep;
  col = mix(col, blue,   neb*0.7);
  col = mix(col, violet, smoothstep(0.4,1.0,n2)*neb*0.8);
  col += cyan * pow(neb,2.0) * 0.25;

  // star layers (parallax densities)
  float st = 0.0;
  st += stars(uv + vec2(t*0.5,0.0),  90.0, 1.0, 3.0)*0.9;
  st += stars(uv*1.7 - vec2(t*0.3,0.0), 140.0, 0.8, 4.5)*0.7;
  st += stars(uv*2.6 + vec2(t*0.2,0.0), 210.0, 0.6, 6.0)*0.5;
  col += vec3(0.9,0.95,1.0) * st;

  // subtle bright core glow lower-center + vignette
  float glow = smoothstep(0.9, 0.0, length(p - vec2(0.0,-0.15)));
  col += blue * glow * 0.10;
  float vig = smoothstep(1.25, 0.25, length(p));
  col *= 0.55 + 0.45*vig;

  gl_FragColor = vec4(col, 1.0);
}
`

// one oversized triangle covers the viewport with 3 vertices (no quad seam) —
// cheaper to set up and to rasterise than the usual two-triangle plane
const VERT = `
attribute vec2 aPos;
void main(){ gl_Position = vec4(aPos, 0.0, 1.0); }
`

// The nebula is a soft, low-frequency image: rendering it below CSS resolution
// and letting the browser scale it up is visually indistinguishable, and it cuts
// the fragment count (the expensive part — 4 FBM octaves + 3 star layers per
// pixel) to roughly a third. The old code ran at devicePixelRatio 1.25, i.e.
// ~4× more pixels than this on a retina MacBook.
const RENDER_SCALE = 0.6

function compile(gl, type, src) {
  const sh = gl.createShader(type)
  gl.shaderSource(sh, src)
  gl.compileShader(sh)
  if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) { gl.deleteShader(sh); return null }
  return sh
}

// `paused` freezes the loop without unmounting: once the hero video is up it
// covers this canvas completely, so animating underneath it is pure GPU burn.
// The last painted frame stays on screen as the fallback backdrop.
export default function SpaceHero({ paused = false }) {
  const ref = useRef(null)
  const pausedRef = useRef(paused)
  const ctrl = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    const parent = canvas.parentElement
    let gl
    try {
      gl = canvas.getContext('webgl', {
        antialias: false, alpha: false, depth: false, stencil: false,
        powerPreference: 'low-power', preserveDrawingBuffer: false,
      })
    } catch { /* no WebGL → CSS gradient shows through */ }
    if (!gl) return

    const vs = compile(gl, gl.VERTEX_SHADER, VERT)
    const fs = compile(gl, gl.FRAGMENT_SHADER, FRAG)
    if (!vs || !fs) return
    const prog = gl.createProgram()
    gl.attachShader(prog, vs); gl.attachShader(prog, fs); gl.linkProgram(prog)
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return
    gl.useProgram(prog)

    const buf = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buf)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW)
    const aPos = gl.getAttribLocation(prog, 'aPos')
    gl.enableVertexAttribArray(aPos)
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0)

    const uTime = gl.getUniformLocation(prog, 'uTime')
    const uRes = gl.getUniformLocation(prog, 'uRes')

    const resize = () => {
      const w = Math.max(1, Math.round(parent.clientWidth * RENDER_SCALE))
      const h = Math.max(1, Math.round(parent.clientHeight * RENDER_SCALE))
      if (canvas.width === w && canvas.height === h) return
      canvas.width = w; canvas.height = h
      gl.viewport(0, 0, w, h)
      gl.uniform2f(uRes, w, h)
    }

    let raf = 0, running = false, visible = false
    const start = performance.now()
    const draw = (t) => {
      gl.uniform1f(uTime, (t - start) / 1000)
      gl.drawArrays(gl.TRIANGLES, 0, 3)
    }
    const frame = (t) => { draw(t); raf = requestAnimationFrame(frame) }
    const play = () => { if (running || pausedRef.current || !visible) return; running = true; raf = requestAnimationFrame(frame) }
    const stop = () => { running = false; cancelAnimationFrame(raf); raf = 0 }

    resize()
    draw(performance.now())

    // only render while the hero is actually on screen — frees the GPU everywhere else
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; visible ? play() : stop() }, { threshold: 0 })
    io.observe(parent)

    // resize coalesced into one rAF — the raw event fires dozens of times per
    // window drag and every pass reallocates the drawing buffer
    let rraf = 0
    const onResize = () => {
      if (rraf) return
      rraf = requestAnimationFrame(() => { rraf = 0; resize(); if (!running) draw(performance.now()) })
    }
    window.addEventListener('resize', onResize, { passive: true })

    // survive GPU context loss (mobile backgrounding, driver resets)
    const onLost = (e) => { e.preventDefault(); stop() }
    const onRestored = () => { resize(); play() }
    canvas.addEventListener('webglcontextlost', onLost)
    canvas.addEventListener('webglcontextrestored', onRestored)

    ctrl.current = { play, stop }

    return () => {
      ctrl.current = null
      io.disconnect(); stop(); cancelAnimationFrame(rraf)
      window.removeEventListener('resize', onResize)
      canvas.removeEventListener('webglcontextlost', onLost)
      canvas.removeEventListener('webglcontextrestored', onRestored)
      gl.deleteBuffer(buf); gl.deleteProgram(prog); gl.deleteShader(vs); gl.deleteShader(fs)
      gl.getExtension('WEBGL_lose_context')?.loseContext()
    }
  }, [])

  useEffect(() => {
    pausedRef.current = paused
    const c = ctrl.current
    if (!c) return
    paused ? c.stop() : c.play()
  }, [paused])

  return <canvas ref={ref} className="hero-space" aria-hidden />
}

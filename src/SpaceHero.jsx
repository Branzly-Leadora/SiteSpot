import { useEffect, useRef } from 'react'
import * as THREE from 'three'

// Deep-space background: procedural nebula (FBM) + twinkling starfield, all in-shader.
// Reads like a looping space video, zero downloaded assets.
const FRAG = `
precision highp float;
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

const VERT = `void main(){ gl_Position = vec4(position, 1.0); }`

export default function SpaceHero() {
  const ref = useRef(null)
  useEffect(() => {
    const canvas = ref.current
    const parent = canvas.parentElement
    const reduce = false // animations always on (OS reduced-motion used to blank the whole site)
    let renderer
    try {
      renderer = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance' })
    } catch { return } // no WebGL → CSS gradient shows through
    renderer.setPixelRatio(Math.min(1.25, window.devicePixelRatio || 1))
    const scene = new THREE.Scene()
    const camera = new THREE.Camera()
    const uniforms = { uTime: { value: 0 }, uRes: { value: new THREE.Vector2(1, 1) } }
    const mat = new THREE.ShaderMaterial({ vertexShader: VERT, fragmentShader: FRAG, uniforms })
    scene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), mat))

    const resize = () => {
      const w = parent.clientWidth, h = parent.clientHeight
      renderer.setSize(w, h, false)
      uniforms.uRes.value.set(w * renderer.getPixelRatio(), h * renderer.getPixelRatio())
    }
    resize()
    window.addEventListener('resize', resize)

    let raf = 0, running = false, start = performance.now()
    const frame = () => {
      uniforms.uTime.value = (performance.now() - start) / 1000
      renderer.render(scene, camera)
      raf = requestAnimationFrame(frame)
    }
    const play = () => { if (running || reduce) return; running = true; raf = requestAnimationFrame(frame) }
    const stop = () => { running = false; cancelAnimationFrame(raf) }

    // only render while the hero is actually on screen — frees the GPU everywhere else
    const io = new IntersectionObserver(([e]) => { e.isIntersecting ? play() : stop() }, { threshold: 0 })
    io.observe(parent)
    if (reduce) { uniforms.uTime.value = 8; renderer.render(scene, camera) }

    // survive GPU context loss (mobile backgrounding, driver resets)
    const onLost = (e) => { e.preventDefault(); stop() }
    const onRestored = () => { resize(); play() }
    canvas.addEventListener('webglcontextlost', onLost)
    canvas.addEventListener('webglcontextrestored', onRestored)

    return () => {
      io.disconnect(); stop(); window.removeEventListener('resize', resize)
      canvas.removeEventListener('webglcontextlost', onLost)
      canvas.removeEventListener('webglcontextrestored', onRestored)
      mat.dispose(); renderer.dispose()
    }
  }, [])
  return <canvas ref={ref} className="hero-space" aria-hidden />
}

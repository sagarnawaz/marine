import type * as THREE from "three";

export interface HorizonThreeController {
  setCameraTargets: (y: number, z: number) => void;
  updateScroll: (progress: number) => void;
  resize: () => void;
  dispose: () => void;
}

const MARITIME_COLORS = {
  deep: 0x020617,
  navy: 0x0a1628,
  ocean: 0x1a6b8a,
  mist1: 0x2389a8,
  mist2: 0x3ba8c4,
};

export async function createHorizonScene(
  canvas: HTMLCanvasElement
): Promise<HorizonThreeController> {
  const THREE = await import("three");

  let animationId: number | null = null;
  const smoothCameraPos = { x: 0, y: 30, z: 100 };
  let targetCameraX = 0;
  let targetCameraY = 30;
  let targetCameraZ = 100;
  const locations: number[] = [];

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(MARITIME_COLORS.deep, 0.0003);

  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    2000
  );
  camera.position.set(0, 20, 100);

  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
    powerPreference: "high-performance",
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 0.5;

  const stars: THREE.Points[] = [];
  const mountains: THREE.Mesh[] = [];
  let nebula: THREE.Mesh | null = null;
  let atmosphere: THREE.Mesh | null = null;

  const createStarField = () => {
    const starCount = 1800;
    for (let i = 0; i < 2; i++) {
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(starCount * 3);
      const colors = new Float32Array(starCount * 3);
      const sizes = new Float32Array(starCount);

      for (let j = 0; j < starCount; j++) {
        const radius = 200 + Math.random() * 600;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(Math.random() * 2 - 1);
        positions[j * 3] = radius * Math.sin(phi) * Math.cos(theta);
        positions[j * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
        positions[j * 3 + 2] = radius * Math.cos(phi);

        const color = new THREE.Color();
        const pick = Math.random();
        if (pick < 0.6) color.setHSL(0.55, 0.4, 0.7);
        else if (pick < 0.85) color.setHSL(0.5, 0.3, 0.85);
        else color.setHSL(0, 0, 0.9);

        colors[j * 3] = color.r;
        colors[j * 3 + 1] = color.g;
        colors[j * 3 + 2] = color.b;
        sizes[j] = Math.random() * 1.5 + 0.3;
      }

      geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
      geometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

      const material = new THREE.ShaderMaterial({
        uniforms: { time: { value: 0 }, depth: { value: i } },
        vertexShader: `
          attribute float size;
          attribute vec3 color;
          varying vec3 vColor;
          uniform float time;
          uniform float depth;
          void main() {
            vColor = color;
            vec3 pos = position;
            float angle = time * 0.04 * (1.0 - depth * 0.3);
            mat2 rot = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
            pos.xy = rot * pos.xy;
            vec4 mv = modelViewMatrix * vec4(pos, 1.0);
            gl_PointSize = size * (280.0 / -mv.z);
            gl_Position = projectionMatrix * mv;
          }
        `,
        fragmentShader: `
          varying vec3 vColor;
          void main() {
            float d = length(gl_PointCoord - vec2(0.5));
            if (d > 0.5) discard;
            gl_FragColor = vec4(vColor, 1.0 - smoothstep(0.0, 0.5, d));
          }
        `,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });

      const starField = new THREE.Points(geometry, material);
      scene.add(starField);
      stars.push(starField);
    }
  };

  const createNebula = () => {
    const geometry = new THREE.PlaneGeometry(8000, 4000, 64, 64);
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        color1: { value: new THREE.Color(MARITIME_COLORS.mist1) },
        color2: { value: new THREE.Color(MARITIME_COLORS.mist2) },
        opacity: { value: 0.22 },
      },
      vertexShader: `
        varying vec2 vUv;
        varying float vElevation;
        uniform float time;
        void main() {
          vUv = uv;
          vec3 pos = position;
          float e = sin(pos.x * 0.008 + time) * cos(pos.y * 0.008 + time) * 18.0;
          pos.z += e;
          vElevation = e;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 color1;
        uniform vec3 color2;
        uniform float opacity;
        uniform float time;
        varying vec2 vUv;
        varying float vElevation;
        void main() {
          float mixF = sin(vUv.x * 8.0 + time) * cos(vUv.y * 8.0 + time);
          vec3 col = mix(color1, color2, mixF * 0.5 + 0.5);
          float alpha = opacity * (1.0 - length(vUv - 0.5) * 1.8);
          alpha *= 1.0 + vElevation * 0.01;
          gl_FragColor = vec4(col, alpha);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
      depthWrite: false,
    });

    nebula = new THREE.Mesh(geometry, material);
    nebula.position.z = -800;
    scene.add(nebula);
  };

  const createMountains = () => {
    const layers = [
      { distance: -50, height: 55, color: MARITIME_COLORS.deep, opacity: 1 },
      { distance: -100, height: 75, color: MARITIME_COLORS.navy, opacity: 0.85 },
      { distance: -150, height: 95, color: 0x0f2140, opacity: 0.65 },
      { distance: -200, height: 115, color: MARITIME_COLORS.ocean, opacity: 0.45 },
    ];

    layers.forEach((layer, index) => {
      const points: THREE.Vector2[] = [];
      const segments = 50;
      for (let i = 0; i <= segments; i++) {
        const x = (i / segments - 0.5) * 1000;
        const y =
          Math.sin(i * 0.1) * layer.height +
          Math.sin(i * 0.05) * layer.height * 0.5 +
          Math.random() * layer.height * 0.15 -
          100;
        points.push(new THREE.Vector2(x, y));
      }
      points.push(new THREE.Vector2(5000, -300));
      points.push(new THREE.Vector2(-5000, -300));

      const shape = new THREE.Shape(points);
      const geometry = new THREE.ShapeGeometry(shape);
      const material = new THREE.MeshBasicMaterial({
        color: layer.color,
        transparent: true,
        opacity: layer.opacity,
        side: THREE.DoubleSide,
      });

      const mountain = new THREE.Mesh(geometry, material);
      mountain.position.z = layer.distance;
      mountain.position.y = 50;
      scene.add(mountain);
      mountains.push(mountain);
      locations[index] = layer.distance;
    });
  };

  const createAtmosphere = () => {
    const geometry = new THREE.SphereGeometry(600, 32, 32);
    const material = new THREE.ShaderMaterial({
      uniforms: { time: { value: 0 } },
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        uniform float time;
        void main() {
          float intensity = pow(0.65 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
          vec3 atm = vec3(0.15, 0.55, 0.75) * intensity;
          atm *= sin(time * 1.5) * 0.08 + 0.92;
          gl_FragColor = vec4(atm, intensity * 0.2);
        }
      `,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
      transparent: true,
    });

    atmosphere = new THREE.Mesh(geometry, material);
    scene.add(atmosphere);
  };

  createStarField();
  createNebula();
  createMountains();
  createAtmosphere();

  const animate = () => {
    animationId = requestAnimationFrame(animate);
    const time = Date.now() * 0.001;

    stars.forEach((sf) => {
      if (sf.material instanceof THREE.ShaderMaterial) {
        sf.material.uniforms.time.value = time;
      }
    });

    if (nebula?.material instanceof THREE.ShaderMaterial) {
      nebula.material.uniforms.time.value = time * 0.4;
    }

    if (atmosphere?.material instanceof THREE.ShaderMaterial) {
      atmosphere.material.uniforms.time.value = time;
    }

    const s = 0.04;
    smoothCameraPos.x += (targetCameraX - smoothCameraPos.x) * s;
    smoothCameraPos.y += (targetCameraY - smoothCameraPos.y) * s;
    smoothCameraPos.z += (targetCameraZ - smoothCameraPos.z) * s;

    camera.position.x = smoothCameraPos.x + Math.sin(time * 0.1) * 1.5;
    camera.position.y = smoothCameraPos.y + Math.cos(time * 0.12) * 0.8;
    camera.position.z = smoothCameraPos.z;
    camera.lookAt(0, 10, -500);

    mountains.forEach((m, i) => {
      const pf = 1 + i * 0.4;
      m.position.x = Math.sin(time * 0.08) * 1.5 * pf;
    });

    renderer.render(scene, camera);
  };

  animate();

  return {
    setCameraTargets: (y: number, z: number) => {
      targetCameraY = y;
      targetCameraZ = z;
    },
    updateScroll: (progress: number) => {
      targetCameraY = 30 + progress * 15;
      targetCameraZ = 100 - progress * 120;
      mountains.forEach((m, i) => {
        if (progress < 0.85) {
          m.position.z = locations[i] + progress * (1 + i * 0.5) * 30;
        }
      });
      if (nebula) nebula.position.z = -800 + progress * 40;
    },
    resize: () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    },
    dispose: () => {
      if (animationId) cancelAnimationFrame(animationId);
      stars.forEach((s) => {
        s.geometry.dispose();
        (s.material as THREE.Material).dispose();
      });
      mountains.forEach((m) => {
        m.geometry.dispose();
        (m.material as THREE.Material).dispose();
      });
      if (nebula) {
        nebula.geometry.dispose();
        (nebula.material as THREE.Material).dispose();
      }
      if (atmosphere) {
        atmosphere.geometry.dispose();
        (atmosphere.material as THREE.Material).dispose();
      }
      renderer.dispose();
    },
  };
}

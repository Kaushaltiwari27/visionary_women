import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export const ThreeHeroSculpture: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check WebGL availability
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) {
      setWebglSupported(false);
      return;
    }

    let animationFrameId: number;
    let renderer: THREE.WebGLRenderer;

    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance',
      });
    } catch {
      setWebglSupported(false);
      return;
    }

    const width = container.clientWidth || 450;
    const height = container.clientHeight || 450;
    const isMobile = window.innerWidth < 768;

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 6.2;

    // Root group for overall orientation and mouse parallax
    const sculptureGroup = new THREE.Group();
    scene.add(sculptureGroup);

    // 1. Central Core Sphere (Visionary Nucleus)
    const sphereGeo = new THREE.IcosahedronGeometry(0.85, isMobile ? 2 : 4);
    const sphereMat = new THREE.MeshPhysicalMaterial({
      color: 0x01155B,
      emissive: 0x031B75,
      emissiveIntensity: 0.6,
      roughness: 0.15,
      metalness: 0.85,
      clearcoat: 0.9,
      clearcoatRoughness: 0.1,
      wireframe: false,
    });
    const coreSphere = new THREE.Mesh(sphereGeo, sphereMat);
    sculptureGroup.add(coreSphere);

    // Outer subtle wireframe shell over core
    const wireGeo = new THREE.IcosahedronGeometry(0.92, 2);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x47C8BF,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    const wireShell = new THREE.Mesh(wireGeo, wireMat);
    sculptureGroup.add(wireShell);

    // 2. Orbital Ring 1: Celestial Teal Ring (Large Outer)
    const ring1Geo = new THREE.TorusGeometry(2.2, 0.024, 16, isMobile ? 60 : 100);
    const ring1Mat = new THREE.MeshStandardMaterial({
      color: 0x47C8BF,
      emissive: 0x47C8BF,
      emissiveIntensity: 0.5,
      metalness: 0.9,
      roughness: 0.1,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI * 0.35;
    ring1.rotation.y = Math.PI * 0.15;
    sculptureGroup.add(ring1);

    // 3. Orbital Ring 2: Elegant Warm Gold/Orange Ring (Inclined)
    const ring2Geo = new THREE.TorusGeometry(1.7, 0.032, 16, isMobile ? 60 : 100);
    const ring2Mat = new THREE.MeshStandardMaterial({
      color: 0xFFDE59,
      emissive: 0xFF8F00,
      emissiveIntensity: 0.4,
      metalness: 0.85,
      roughness: 0.15,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = -Math.PI * 0.4;
    ring2.rotation.z = Math.PI * 0.25;
    sculptureGroup.add(ring2);

    // 4. Orbital Ring 3: Deep Navy/White Gyroscopic Ring
    const ring3Geo = new THREE.TorusGeometry(1.3, 0.02, 16, isMobile ? 48 : 80);
    const ring3Mat = new THREE.MeshStandardMaterial({
      color: 0xFFFFFF,
      emissive: 0x47C8BF,
      emissiveIntensity: 0.3,
      metalness: 0.95,
      roughness: 0.05,
    });
    const ring3 = new THREE.Mesh(ring3Geo, ring3Mat);
    ring3.rotation.y = Math.PI * 0.5;
    sculptureGroup.add(ring3);

    // 5. Floating Geometric Satellite Elements (Octahedrons)
    const satellites: THREE.Mesh[] = [];
    const satCount = isMobile ? 4 : 8;
    const satGeo = new THREE.OctahedronGeometry(0.12, 0);

    for (let i = 0; i < satCount; i++) {
      const isGold = i % 2 === 0;
      const satMat = new THREE.MeshStandardMaterial({
        color: isGold ? 0xFFDE59 : 0x47C8BF,
        emissive: isGold ? 0xFF8F00 : 0x47C8BF,
        emissiveIntensity: 0.6,
        metalness: 0.9,
        roughness: 0.1,
      });
      const sat = new THREE.Mesh(satGeo, satMat);
      const angle = (i / satCount) * Math.PI * 2;
      const radius = 1.95;
      sat.position.set(Math.cos(angle) * radius, (Math.sin(angle) * 0.5), Math.sin(angle) * radius);
      satellites.push(sat);
      sculptureGroup.add(sat);
    }

    // 6. Stardust Particle Cloud
    const particleCount = isMobile ? 120 : 320;
    const posArray = new Float32Array(particleCount * 3);
    const colArray = new Float32Array(particleCount * 3);

    const tealCol = new THREE.Color(0x47C8BF);
    const goldCol = new THREE.Color(0xFFDE59);
    const whiteCol = new THREE.Color(0xFFFFFF);

    for (let i = 0; i < particleCount; i++) {
      const radius = 1.2 + Math.random() * 2.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      posArray[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      posArray[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      posArray[i * 3 + 2] = radius * Math.cos(phi);

      const pickedCol = Math.random() > 0.6 ? goldCol : (Math.random() > 0.3 ? tealCol : whiteCol);
      colArray[i * 3] = pickedCol.r;
      colArray[i * 3 + 1] = pickedCol.g;
      colArray[i * 3 + 2] = pickedCol.b;
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colArray, 3));

    const particleMat = new THREE.PointsMaterial({
      size: isMobile ? 0.035 : 0.045,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    sculptureGroup.add(particles);

    // 7. Cinematic Studio Lighting
    const ambientLight = new THREE.AmbientLight(0x010521, 2.5);
    scene.add(ambientLight);

    const tealLight = new THREE.PointLight(0x47C8BF, 4.0, 15);
    tealLight.position.set(4, 3, 4);
    scene.add(tealLight);

    const warmLight = new THREE.PointLight(0xFF8F00, 3.5, 15);
    warmLight.position.set(-4, -2, 3);
    scene.add(warmLight);

    const topWhiteLight = new THREE.DirectionalLight(0xFFFFFF, 1.8);
    topWhiteLight.position.set(0, 6, 4);
    scene.add(topWhiteLight);

    // 8. Interactive Mouse Movement & Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetX = x * 0.4;
      targetY = y * 0.4;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // 9. Resize Handling
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // 10. Animation Loop
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Smooth mouse lerping
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      sculptureGroup.rotation.y = elapsed * 0.25 + mouseX;
      sculptureGroup.rotation.x = mouseY;

      // Independent ring rotations
      ring1.rotation.z = elapsed * 0.2;
      ring2.rotation.y = -elapsed * 0.3;
      ring3.rotation.x = elapsed * 0.25;

      // Core pulsing
      const pulse = 1 + Math.sin(elapsed * 2) * 0.03;
      coreSphere.scale.set(pulse, pulse, pulse);
      wireShell.rotation.y = -elapsed * 0.4;
      wireShell.rotation.x = elapsed * 0.2;

      // Orbiting Satellites
      satellites.forEach((sat, i) => {
        const speed = 0.5 + (i % 3) * 0.2;
        const angle = (i / satCount) * Math.PI * 2 + elapsed * speed;
        const radius = 1.95 + Math.sin(elapsed * 2 + i) * 0.15;
        sat.position.x = Math.cos(angle) * radius;
        sat.position.z = Math.sin(angle) * radius;
        sat.position.y = Math.sin(elapsed * 1.5 + i) * 0.4;
        sat.rotation.x += 0.02;
        sat.rotation.y += 0.03;
      });

      // Particles gentle swirl
      particles.rotation.y = elapsed * 0.08;
      particles.rotation.z = -elapsed * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
      renderer.dispose();
      sphereGeo.dispose();
      sphereMat.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      ring3Geo.dispose();
      ring3Mat.dispose();
      satGeo.dispose();
      particleGeo.dispose();
      particleMat.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="relative w-full h-[360px] sm:h-[460px] lg:h-[540px] flex items-center justify-center pointer-events-auto cursor-grab active:cursor-grabbing"
    >
      {/* Graceful Fallback if WebGL is disabled or unsupported */}
      {!webglSupported && (
        <div className="relative w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#47C8BF]/40 animate-spin-slow" />
          <div className="absolute inset-8 rounded-full border border-[#FFDE59]/40 animate-spin-reverse" />
          <div className="relative w-44 h-44 rounded-full bg-gradient-to-tr from-[#01155B] to-[#010521] border border-[#47C8BF] shadow-glow-teal flex items-center justify-center p-3">
            <img
              src="/assets/vw-logo.png"
              alt="Visionary Women 3D Fallback"
              className="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(71,200,191,0.5)]"
            />
          </div>
        </div>
      )}

      {/* Floating Interactive Badge overlay */}
      <div className="absolute -bottom-2 right-4 sm:right-8 bg-navy-950/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#47C8BF]/30 shadow-lg flex items-center space-x-2 pointer-events-none select-none">
        <span className="w-2 h-2 rounded-full bg-[#47C8BF] animate-ping" />
        <span className="text-[10px] uppercase font-bold tracking-widest text-[#47C8BF]">
          Interactive 3D Orbital
        </span>
      </div>
    </div>
  );
};

import { useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ParticleField() {
  const ref = useRef<THREE.Points>(null);

  // Generate smaller star-like particles
  const particleCount = 1000;
  const positions = new Float32Array(particleCount * 3);
  
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 300;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 300;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 150;
  }

  useFrame((state) => {
    if (ref.current) {
      const time = state.clock.getElapsedTime();
      
      // Faster, more noticeable movement
      ref.current.rotation.x = time * 0.035;
      ref.current.rotation.y = time * 0.025;

      // More dynamic floating animation for stars
      const positions = ref.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] += Math.sin(time * 0.8 + positions[i] * 0.01) * 0.008;
        positions[i] += Math.cos(time * 0.6 + positions[i + 2] * 0.01) * 0.006;
      }
      ref.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.8}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.8}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}


export default function ThreeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  return (
    <div className="fixed inset-0 -z-10 opacity-20">
      <Canvas
        ref={canvasRef}
        camera={{ position: [0, 0, 50], fov: 75 }}
        style={{
          background: 'radial-gradient(circle at center, rgba(13, 16, 32, 0.8) 0%, rgba(6, 8, 16, 1) 100%)',
        }}
      >
        <ambientLight intensity={0.2} />
        <pointLight position={[20, 20, 20]} intensity={0.1} color="#4f46e5" />
        <pointLight position={[-20, -20, -20]} intensity={0.05} color="#7c3aed" />
        
        <ParticleField />
      </Canvas>
    </div>
  );
}
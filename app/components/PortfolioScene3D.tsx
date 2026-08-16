"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";

type Motion = {
  scroll: number;
  pointerX: number;
  pointerY: number;
};

function Box({
  position,
  scale,
  color,
  rotation,
}: {
  position: [number, number, number];
  scale: [number, number, number];
  color: string;
  rotation?: [number, number, number];
}) {
  return (
    <mesh position={position} scale={scale} rotation={rotation}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} roughness={0.82} />
    </mesh>
  );
}

function DeskWorld({ motion }: { motion: React.MutableRefObject<Motion> }) {
  const group = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!group.current) return;

    const { scroll, pointerX, pointerY } = motion.current;
    group.current.rotation.y = THREE.MathUtils.damp(
      group.current.rotation.y,
      -0.35 + scroll * Math.PI * 1.1 + pointerX * 0.05,
      2.4,
      delta,
    );
    group.current.rotation.x = THREE.MathUtils.damp(
      group.current.rotation.x,
      -0.08 + pointerY * 0.02,
      2.4,
      delta,
    );
    state.camera.position.x = THREE.MathUtils.damp(
      state.camera.position.x,
      pointerX * 0.2,
      2,
      delta,
    );
    state.camera.lookAt(0, 0.35, 0);
  });

  return (
    <group ref={group} rotation={[-0.08, -0.35, 0]}>
      <mesh position={[0, -0.25, 0]}>
        <cylinderGeometry args={[3.2, 2.75, 0.6, 8]} />
        <meshStandardMaterial color="#e5d4b5" roughness={0.95} />
      </mesh>
      <mesh position={[0, 0.05, 0]}>
        <cylinderGeometry args={[3.02, 3.2, 0.1, 8]} />
        <meshStandardMaterial color="#f6efe0" roughness={1} />
      </mesh>

      <Box position={[0, 0.32, 0]} scale={[4.25, 0.17, 2.25]} color="#aa7952" />
      <Box position={[-1.75, -0.2, -0.75]} scale={[0.16, 1.05, 0.16]} color="#775135" />
      <Box position={[1.75, -0.2, -0.75]} scale={[0.16, 1.05, 0.16]} color="#775135" />
      <Box position={[-1.75, -0.2, 0.75]} scale={[0.16, 1.05, 0.16]} color="#775135" />
      <Box position={[1.75, -0.2, 0.75]} scale={[0.16, 1.05, 0.16]} color="#775135" />

      <group position={[-0.3, 0.62, 0]} rotation={[0, -0.15, 0]}>
        <Box position={[0, 0, 0]} scale={[1.55, 0.08, 0.95]} color="#27343a" />
        <group position={[0, 0.58, -0.42]} rotation={[-0.12, 0, 0]}>
          <Box position={[0, 0, 0]} scale={[1.5, 0.96, 0.06]} color="#263238" />
          <mesh position={[0, 0, -0.04]}>
            <planeGeometry args={[1.3, 0.72]} />
            <meshBasicMaterial color="#15303a" />
          </mesh>
          <mesh position={[-0.18, 0.1, -0.05]}>
            <planeGeometry args={[0.72, 0.05]} />
            <meshBasicMaterial color="#f4a261" />
          </mesh>
          <mesh position={[-0.28, -0.08, -0.05]}>
            <planeGeometry args={[0.48, 0.05]} />
            <meshBasicMaterial color="#59c3c3" />
          </mesh>
        </group>
      </group>

      <group position={[1.45, 0.53, -0.35]}>
        <Box position={[0, 0, 0]} scale={[0.82, 0.14, 0.58]} color="#e76f51" rotation={[0, -0.06, 0]} />
        <Box position={[0, 0.16, 0]} scale={[0.82, 0.14, 0.58]} color="#2a9d8f" rotation={[0, 0.04, 0]} />
        <Box position={[0, 0.32, 0]} scale={[0.82, 0.14, 0.58]} color="#e9c46a" rotation={[0, -0.02, 0]} />
      </group>

      <group position={[-1.5, 0.57, 0.35]}>
        <Box position={[0, 0, 0]} scale={[0.92, 0.16, 0.5]} color="#f3efe2" />
        <mesh position={[0.28, 0.12, 0]}>
          <sphereGeometry args={[0.08, 10, 10]} />
          <meshBasicMaterial color="#e76f51" />
        </mesh>
        <mesh position={[0.44, 0.12, -0.06]}>
          <sphereGeometry args={[0.065, 10, 10]} />
          <meshBasicMaterial color="#2a9d8f" />
        </mesh>
      </group>

      <group position={[1.75, 0.9, 0.75]} rotation={[0, -0.5, 0]}>
        <Box position={[0, 0, 0]} scale={[0.95, 0.68, 0.06]} color="#f7f0dd" />
        <mesh position={[0, 0, -0.04]}>
          <planeGeometry args={[0.72, 0.45]} />
          <meshBasicMaterial color="#fffaf0" />
        </mesh>
      </group>

      <mesh position={[0.1, 1.42, 1.35]}>
        <sphereGeometry args={[0.22, 14, 12]} />
        <meshStandardMaterial color="#d59b72" roughness={0.95} />
      </mesh>
      <mesh position={[0.1, 1.02, 1.35]}>
        <capsuleGeometry args={[0.24, 0.42, 5, 10]} />
        <meshStandardMaterial color="#27343a" roughness={0.9} />
      </mesh>

      <mesh position={[-2.5, 2.4, -1.2]} rotation={[0.4, 0.6, 0.2]}>
        <octahedronGeometry args={[0.18, 0]} />
        <meshStandardMaterial color="#e76f51" />
      </mesh>
      <mesh position={[2.5, 2.7, -1.5]} rotation={[0.3, 0.4, 0.1]}>
        <torusGeometry args={[0.2, 0.05, 6, 16]} />
        <meshStandardMaterial color="#2a9d8f" />
      </mesh>
    </group>
  );
}

export function PortfolioScene3D() {
  const motion = useRef<Motion>({ scroll: 0, pointerX: 0, pointerY: 0 });

  useEffect(() => {
    let scrollFrame = 0;
    let pointerFrame = 0;

    const updateScroll = () => {
      if (scrollFrame) return;
      scrollFrame = requestAnimationFrame(() => {
        const range = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
        motion.current.scroll = Math.min(Math.max(window.scrollY / range, 0), 1);
        scrollFrame = 0;
      });
    };

    const updatePointer = (event: PointerEvent) => {
      if (pointerFrame) return;
      pointerFrame = requestAnimationFrame(() => {
        motion.current.pointerX = (event.clientX / window.innerWidth) * 2 - 1;
        motion.current.pointerY = (event.clientY / window.innerHeight) * 2 - 1;
        pointerFrame = 0;
      });
    };

    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("pointermove", updatePointer, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("pointermove", updatePointer);
      if (scrollFrame) cancelAnimationFrame(scrollFrame);
      if (pointerFrame) cancelAnimationFrame(pointerFrame);
    };
  }, []);

  return (
    <div
      className="world-canvas"
      role="img"
      aria-label="A lightweight three-dimensional paper-craft engineer desk scene."
    >
      <Canvas
        camera={{ position: [0, 3.15, 7.5], fov: 42, near: 0.1, far: 40 }}
        dpr={1}
        gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={1.7} />
        <hemisphereLight args={["#fff4de", "#3b5662", 1.25]} />
        <directionalLight position={[5, 8, 5]} intensity={2.8} color="#fff2d7" />
        <fog attach="fog" args={["#dfe8e7", 9, 17]} />
        <DeskWorld motion={motion} />
      </Canvas>
    </div>
  );
}

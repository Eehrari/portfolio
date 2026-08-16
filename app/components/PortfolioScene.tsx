"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  Suspense,
  useEffect,
  useMemo,
  useRef,
  type MutableRefObject,
} from "react";
import * as THREE from "three";

type MotionState = {
  scroll: number;
  pointerX: number;
  pointerY: number;
  reduced: boolean;
};

function RoundedBox({
  position,
  rotation,
  scale,
  color,
}: {
  position: [number, number, number];
  rotation?: [number, number, number];
  scale: [number, number, number];
  color: string;
}) {
  return (
    <mesh position={position} rotation={rotation} scale={scale} castShadow receiveShadow>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} roughness={0.72} metalness={0.02} />
    </mesh>
  );
}

function Laptop() {
  return (
    <group position={[-0.3, 0.66, 0]} rotation={[0, -0.2, 0]}>
      <RoundedBox position={[0, 0, 0]} scale={[1.65, 0.09, 1.05]} color="#27343a" />
      <group position={[0, 0.62, -0.48]} rotation={[-0.14, 0, 0]}>
        <RoundedBox position={[0, 0, 0]} scale={[1.64, 1.05, 0.08]} color="#263238" />
        <mesh position={[0, 0, -0.052]}>
          <planeGeometry args={[1.42, 0.84]} />
          <meshStandardMaterial color="#12222b" emissive="#0e2030" emissiveIntensity={0.5} />
        </mesh>
        {[
          { y: 0.25, x: -0.22, w: 0.72, c: "#f4a261" },
          { y: 0.05, x: -0.35, w: 0.46, c: "#59c3c3" },
          { y: -0.15, x: -0.13, w: 0.9, c: "#f0e6d2" },
          { y: -0.34, x: -0.31, w: 0.5, c: "#e76f51" },
        ].map((line) => (
          <mesh key={`${line.y}-${line.w}`} position={[line.x, line.y, -0.1]}>
            <planeGeometry args={[line.w, 0.055]} />
            <meshBasicMaterial color={line.c} />
          </mesh>
        ))}
      </group>
      <mesh position={[0, 0.075, 0.15]}>
        <planeGeometry args={[0.66, 0.42]} />
        <meshStandardMaterial color="#38474d" roughness={0.8} />
      </mesh>
    </group>
  );
}

function BookStack() {
  const books = [
    { y: 0, color: "#e76f51", rot: -0.08 },
    { y: 0.17, color: "#2a9d8f", rot: 0.05 },
    { y: 0.34, color: "#e9c46a", rot: -0.02 },
  ];
  return (
    <group position={[1.65, 0.54, -0.45]}>
      {books.map((book) => (
        <RoundedBox
          key={book.y}
          position={[0, book.y, 0]}
          rotation={[0, book.rot, 0]}
          scale={[0.9, 0.15, 0.62]}
          color={book.color}
        />
      ))}
    </group>
  );
}

function GameController() {
  return (
    <group position={[-1.75, 0.56, 0.28]} rotation={[0.12, 0.3, -0.08]}>
      <RoundedBox position={[0, 0, 0]} scale={[1, 0.18, 0.58]} color="#f3efe2" />
      <mesh position={[-0.26, 0.12, -0.02]} rotation={[-Math.PI / 2, 0, 0]}>
        <boxGeometry args={[0.28, 0.07, 0.08]} />
        <meshStandardMaterial color="#263238" />
      </mesh>
      <mesh position={[-0.26, 0.12, -0.02]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
        <boxGeometry args={[0.28, 0.07, 0.08]} />
        <meshStandardMaterial color="#263238" />
      </mesh>
      <mesh position={[0.26, 0.13, 0]} castShadow>
        <sphereGeometry args={[0.085, 18, 18]} />
        <meshStandardMaterial color="#e76f51" />
      </mesh>
      <mesh position={[0.45, 0.13, -0.09]} castShadow>
        <sphereGeometry args={[0.07, 18, 18]} />
        <meshStandardMaterial color="#2a9d8f" />
      </mesh>
    </group>
  );
}

function MentorBoard() {
  return (
    <group position={[1.9, 0.84, 0.9]} rotation={[-0.02, -0.55, 0.03]}>
      <RoundedBox position={[0, 0, 0]} scale={[1.05, 0.76, 0.08]} color="#f7f0dd" />
      <mesh position={[0, 0.04, -0.05]}>
        <planeGeometry args={[0.82, 0.52]} />
        <meshBasicMaterial color="#fffaf0" />
      </mesh>
      {[-0.16, 0, 0.16].map((y, index) => (
        <mesh key={y} position={[index === 1 ? 0.04 : -0.08, y, -0.065]}>
          <planeGeometry args={[index === 1 ? 0.48 : 0.62, 0.035]} />
          <meshBasicMaterial color={index === 0 ? "#e76f51" : index === 1 ? "#2a9d8f" : "#264653"} />
        </mesh>
      ))}
      <RoundedBox position={[-0.34, -0.53, 0.03]} scale={[0.07, 0.62, 0.07]} color="#855d3b" />
      <RoundedBox position={[0.34, -0.53, 0.03]} scale={[0.07, 0.62, 0.07]} color="#855d3b" />
    </group>
  );
}

function Character() {
  return (
    <group position={[0.15, 0.87, 1.62]} rotation={[0, Math.PI, 0]}>
      <mesh position={[0, 0.72, 0]} castShadow>
        <sphereGeometry args={[0.25, 24, 24]} />
        <meshStandardMaterial color="#d59b72" roughness={0.9} />
      </mesh>
      <mesh position={[0, 0.34, 0]} castShadow>
        <capsuleGeometry args={[0.27, 0.46, 8, 16]} />
        <meshStandardMaterial color="#27343a" roughness={0.85} />
      </mesh>
      <mesh position={[-0.17, -0.04, 0]} rotation={[0, 0, -0.1]} castShadow>
        <capsuleGeometry args={[0.075, 0.42, 6, 12]} />
        <meshStandardMaterial color="#1f2930" />
      </mesh>
      <mesh position={[0.17, -0.04, 0]} rotation={[0, 0, 0.1]} castShadow>
        <capsuleGeometry args={[0.075, 0.42, 6, 12]} />
        <meshStandardMaterial color="#1f2930" />
      </mesh>
      <mesh position={[0, 0.84, 0.08]} castShadow>
        <sphereGeometry args={[0.255, 24, 12, 0, Math.PI * 2, 0, Math.PI / 2.1]} />
        <meshStandardMaterial color="#1e2022" roughness={1} />
      </mesh>
    </group>
  );
}

function FloatingShapes({ progress }: { progress: number }) {
  const shapes = useMemo(
    () => [
      { p: [-3.2, 1.8, -1.2] as [number, number, number], c: "#e76f51", s: 0.22 },
      { p: [3.1, 2.2, -1.6] as [number, number, number], c: "#2a9d8f", s: 0.28 },
      { p: [-2.6, 3.2, -2.4] as [number, number, number], c: "#e9c46a", s: 0.18 },
      { p: [2.3, 3.45, -0.5] as [number, number, number], c: "#7b61a8", s: 0.16 },
    ],
    [],
  );

  return (
    <>
      {shapes.map((shape, index) => (
        <mesh
          key={shape.c}
          position={[
            shape.p[0],
            shape.p[1] + Math.sin(progress * Math.PI * 2 + index) * 0.25,
            shape.p[2],
          ]}
          rotation={[progress * (index + 1), progress * 2, 0.4]}
          castShadow
        >
          {index % 2 === 0 ? (
            <octahedronGeometry args={[shape.s, 0]} />
          ) : (
            <torusGeometry args={[shape.s, shape.s * 0.28, 10, 28]} />
          )}
          <meshStandardMaterial color={shape.c} roughness={0.72} />
        </mesh>
      ))}
    </>
  );
}

function World({ motion }: { motion: MutableRefObject<MotionState> }) {
  const world = useRef<THREE.Group>(null);
  const island = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!world.current || !island.current) return;
    const { scroll, pointerX, pointerY, reduced } = motion.current;
    const targetRotation = scroll * Math.PI * 1.36 + pointerX * 0.08;
    world.current.rotation.y = THREE.MathUtils.damp(
      world.current.rotation.y,
      targetRotation,
      2.2,
      delta,
    );
    world.current.rotation.x = THREE.MathUtils.damp(
      world.current.rotation.x,
      pointerY * 0.025 - 0.06,
      2.4,
      delta,
    );
    world.current.position.y = THREE.MathUtils.damp(
      world.current.position.y,
      -0.28 + Math.sin(scroll * Math.PI * 3) * 0.25,
      2,
      delta,
    );
    island.current.position.y = THREE.MathUtils.damp(
      island.current.position.y,
      reduced ? 0 : Math.sin(scroll * Math.PI * 4) * 0.045,
      2.2,
      delta,
    );
    island.current.rotation.z = THREE.MathUtils.damp(
      island.current.rotation.z,
      reduced ? 0 : pointerX * 0.01,
      2.2,
      delta,
    );

    state.camera.position.x = THREE.MathUtils.damp(
      state.camera.position.x,
      pointerX * 0.34 + Math.sin(scroll * Math.PI) * 0.35,
      1.8,
      delta,
    );
    state.camera.position.y = THREE.MathUtils.damp(
      state.camera.position.y,
      3.25 + pointerY * -0.16 + scroll * 0.3,
      1.8,
      delta,
    );
    state.camera.lookAt(0, 0.35, 0);
  });

  return (
    <group ref={world} rotation={[-0.06, -0.25, 0]}>
      <group ref={island}>
        <mesh position={[0, -0.28, 0]} receiveShadow castShadow>
          <cylinderGeometry args={[3.35, 2.78, 0.66, 8]} />
          <meshStandardMaterial color="#e6d6b8" roughness={0.9} />
        </mesh>
        <mesh position={[0, 0.07, 0]} receiveShadow>
          <cylinderGeometry args={[3.13, 3.34, 0.12, 8]} />
          <meshStandardMaterial color="#f6efe0" roughness={0.96} />
        </mesh>

        <RoundedBox position={[0, 0.34, 0]} scale={[4.4, 0.18, 2.35]} color="#ae7c53" />
        <RoundedBox position={[-1.85, -0.21, -0.86]} scale={[0.17, 1.1, 0.17]} color="#775135" />
        <RoundedBox position={[1.85, -0.21, -0.86]} scale={[0.17, 1.1, 0.17]} color="#775135" />
        <RoundedBox position={[-1.85, -0.21, 0.86]} scale={[0.17, 1.1, 0.17]} color="#775135" />
        <RoundedBox position={[1.85, -0.21, 0.86]} scale={[0.17, 1.1, 0.17]} color="#775135" />

        <Laptop />
        <BookStack />
        <GameController />
        <MentorBoard />
        <Character />

        <mesh position={[0, 0.16, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[2.62, 0.035, 8, 96]} />
          <meshStandardMaterial color="#d35f45" roughness={0.8} />
        </mesh>

        <FloatingShapes progress={motion.current.scroll} />
      </group>
    </group>
  );
}

export function PortfolioScene() {
  const motion = useRef<MotionState>({
    scroll: 0,
    pointerX: 0,
    pointerY: 0,
    reduced: false,
  });

  useEffect(() => {
    const reducedQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateReduced = () => {
      motion.current.reduced = reducedQuery.matches;
    };
    const updateScroll = () => {
      const range = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      motion.current.scroll = Math.min(Math.max(window.scrollY / range, 0), 1);
    };
    const updatePointer = (event: PointerEvent) => {
      if (motion.current.reduced) return;
      motion.current.pointerX = (event.clientX / window.innerWidth) * 2 - 1;
      motion.current.pointerY = (event.clientY / window.innerHeight) * 2 - 1;
    };

    updateReduced();
    updateScroll();
    reducedQuery.addEventListener("change", updateReduced);
    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("pointermove", updatePointer, { passive: true });

    return () => {
      reducedQuery.removeEventListener("change", updateReduced);
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("pointermove", updatePointer);
    };
  }, []);

  return (
    <div
      className="world-canvas"
      role="img"
      aria-label="A three-dimensional paper-craft engineer's desk with a laptop, books, game controller, mentor board, and floating code-inspired objects."
    >
      <Suspense fallback={<div className="world-fallback" />}>
        <Canvas
          camera={{ position: [0, 3.25, 7.6], fov: 42, near: 0.1, far: 60 }}
          dpr={[1, 1.45]}
          gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
          shadows
        >
          <ambientLight intensity={1.4} />
          <hemisphereLight args={["#fff4de", "#3b5662", 1.35]} />
          <directionalLight
            position={[5, 8, 5]}
            intensity={3.2}
            color="#fff2d7"
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
          <pointLight position={[-4, 2, 3]} intensity={12} color="#6fc6c0" distance={10} />
          <pointLight position={[4, 1, 2]} intensity={10} color="#f08a63" distance={9} />
          <fog attach="fog" args={["#dfe8e7", 9, 18]} />
          <World motion={motion} />
        </Canvas>
      </Suspense>
      <span className="sr-only">
        A scroll-driven three-dimensional engineer&apos;s desk with a laptop,
        books, game controller, mentoring board, and stylized character.
      </span>
    </div>
  );
}

"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { CanvasLoader } from "./canvas-loader";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

function Earth() {
  return (
    <primitive
      object={useGLTF("./planet/scene.gltf").scene}
      scale={2.5}
      position-y={0}
      rotation-y={0}
    />
  );
}

export function EarthCanvas() {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
        <Preload all />
      </Suspense>
    </Canvas>
  );
}

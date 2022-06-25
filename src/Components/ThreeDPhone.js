import { Suspense } from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Iphone from "./Iphone";

export default function IPHONE() {
  return (
      <Canvas clasName="canvas">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} />
        <Suspense fallback={null}>
          <Iphone />
        </Suspense>
      </Canvas>
  );
}


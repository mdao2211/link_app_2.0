import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  Preload,
  useGLTF,
} from "@react-three/drei";
import EarthIcon from "../../public/Earth";
import CanvasLoader from "../dynamic-effects/Loader";
import "../../public/App.css";
const EarthCanvas = () => {
  return (
    <div className="z-10 ">
      <Canvas
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [3, 3, 6],
        }}
      >
        <ambientLight />
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls autoRotate enableZoom={false} />
          <EarthIcon scale={[2.25, 2.25, 2.25]} />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
};
export default EarthCanvas;

import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile, mouse }) => {
  const computer = useGLTF("./robot/scene.gltf");

   // Adjust rotation based on mouse position
   const rotation = [
    mouse[1] * 0.5, // Rotation for Y-axis
    mouse[0] * 0.5, // Rotation for X-axis
    0, // No Z-axis rotation
  ];

  return (
    <mesh>
      {/* Enhanced Lighting */}
      <ambientLight intensity={.6} />
      <hemisphereLight intensity={0.4} groundColor="gray" />
      <spotLight
        position={[15, 30, 20]}
        angle={0.3}
        penumbra={1}
        intensity={2.5}
        castShadow
        shadow-mapSize={4096}
      />
      <pointLight intensity={1.5} position={[-10, 10, 10]} />

      {/* 3D Model */}
      <primitive
        object={computer.scene}
        scale={isMobile ? 3.0 : 4} // Larger scale
        position={isMobile ? [0, -2.5, 0] : [0, -3.5, -1]}
        // rotation={[0, Math.PI / 8, 0]} // Slight rotation for a dynamic view
        rotation={rotation} // Dynamic rotation based on mouse movement
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

   // Mouse move handler to rotate the 3D model based on cursor position
   const [mouse, setMouse] = useState([0, 0]);

   // Smoothly update mouse position for smoother movement
   const handleMouseMove = (event) => {
     const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
     const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
 
     setMouse((prevMouse) => [
       prevMouse[0] * 0.9 + mouseX * 0.1, // Smooth transition for X-axis
       prevMouse[1] * 0.9 + mouseY * 0.1, // Smooth transition for Y-axis
     ]);
   };

  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      camera={{ position: [-40, 8, 20], fov: 9 }} // Adjusted camera
      gl={{ preserveDrawingBuffer: true }}
      onMouseMove={handleMouseMove} // Add mouse movement handling
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 4}
        />
        <Computers isMobile={isMobile} mouse={mouse} />
        <EffectComposer>
          <Bloom intensity={1.5} luminanceThreshold={0.3} luminanceSmoothing={0.1} />
        </EffectComposer>
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;

import { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { AnimationMixer, LoopRepeat } from "three";
import CanvasLoader from "../Loader";

const Robots = ({ isMobile }) => {
  const { scene, animations } = useGLTF("./futuristic_flying_animated_robot_-_low_poly/scene.gltf");
  const mixerRef = useRef(null);

  useEffect(() => {
    if (animations.length > 0) {
      const mixer = new AnimationMixer(scene);
      mixerRef.current = mixer;

      animations.forEach((clip) => {
        const action = mixer.clipAction(clip);
        action.setLoop(LoopRepeat); // Enable looping
        action.play();
      });

      return () => {
        mixer.stopAllAction(); // Cleanup when the component unmounts
      };
    }
  }, [animations, scene]);

  useFrame((state, delta) => {
    if (mixerRef.current) {
      mixerRef.current.update(delta); // Update the mixer continuously
    }
  });

  return (
    <mesh>
      {/* Lighting */}
      <ambientLight intensity={0.6} />
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
        object={scene}
        scale={isMobile ? 5.5 : 6}
        position={isMobile ? [0, -2.5, 0] : [0, -3.5, -1]}
        rotation={[0, Math.PI / 8, 0]} 
      />
    </mesh>
  );
};

const RoboCanvas = () => {
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

  return (
    <Canvas
      frameloop="always"
      dpr={[1, 2]}
      camera={{ position: [30, 8, 20], fov: 9 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 4}
        />
        <Robots isMobile={isMobile} />
        <EffectComposer>
          <Bloom intensity={1.5} luminanceThreshold={0.3} luminanceSmoothing={0.1} />
        </EffectComposer>
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default RoboCanvas;
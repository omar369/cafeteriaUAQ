import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Scene from "./components/Scene";
import { Physics } from "@react-three/rapier";
import { KeyboardControls } from "@react-three/drei";
import { FirstPersonPlayer } from "./components/FirstPersonPlayer";

function App() {
  return (

<div className="w-screen h-screen">
		    <KeyboardControls
      map={[
        { name: 'forward', keys: ['KeyW'] },
        { name: 'backward', keys: ['KeyS'] },
        { name: 'left', keys: ['KeyA'] },
        { name: 'right', keys: ['KeyD'] },
      ]}
    >
      <Canvas shadows camera={{ fov: 40 }}>
        <Suspense fallback={null}>
          <Physics gravity={[0, -9.8, 0]}>
            <Scene />
            <FirstPersonPlayer />
          </Physics>
        </Suspense>
      </Canvas>
		</KeyboardControls>
</div>
  );
}

export default App;

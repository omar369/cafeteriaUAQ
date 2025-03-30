import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

const path = "../../../../public/models";

export function Tanque() {
  const { nodes, materials } = useGLTF(`${path}/mobiliario/tanque.glb`);
  return (
    <group dispose={null}>
      <mesh
        geometry={(nodes.Object_7003 as THREE.Mesh).geometry}
        material={materials.GasTall}
        position={[0.332, 1.025, -2.291]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.394}
				castShadow
      />
    </group>
  );
}

useGLTF.preload(`${path}/mobiliario/tanque.glb`);

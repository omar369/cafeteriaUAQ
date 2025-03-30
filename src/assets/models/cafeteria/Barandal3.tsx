import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

const path = "/models";

export function Barandal3() {
  const { nodes, materials } = useGLTF(`${path}/cafeteria/barandal3.glb`);
  return (
    <group dispose={null}>
      <mesh
        geometry={(nodes.Object_467002 as THREE.Mesh).geometry}
        material={materials.chromeo}
        position={[2.502, -0.778, -15.32]}
        rotation={[0, -1.571, 0]}
        scale={[0.025, 0.025, 0.02]}
      />
    </group>
  );
}

useGLTF.preload(`${path}/cafeteria/barandal3.glb`);

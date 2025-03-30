import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

const path = "/models";

export function Barandal4() {
  const { nodes, materials } = useGLTF(`${path}/cafeteria/barandal4.glb`);
  return (
    <group dispose={null}>
      <mesh
        geometry={(nodes.Object_430002 as THREE.Mesh).geometry}
        material={materials.chromeo}
        position={[2.869, -0.844, -22.296]}
        rotation={[0, -1.571, 0]}
        scale={0.026}
      />
    </group>
  );
}

useGLTF.preload(`${path}/cafeteria/barandal4.glb`);

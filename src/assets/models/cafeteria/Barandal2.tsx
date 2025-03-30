import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

const path = "../../../../public/models";

export function Barandal2() {
  const { nodes, materials } = useGLTF(`${path}/cafeteria/barandal2.glb`);
  return (
    <group dispose={null}>
      <mesh
        geometry={(nodes.Object_467001 as THREE.Mesh).geometry}
        material={materials.chromeo}
        position={[6.797, -0.024, -15.32]}
        rotation={[0, -1.571, 0]}
        scale={0.026}
      />
    </group>
  );
}

useGLTF.preload(`${path}/cafeteria/barandal2.glb`);

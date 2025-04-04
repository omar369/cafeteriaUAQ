import { useGLTF } from "@react-three/drei";
import * as THREE from "three";


export function Barandal1() {
  const { nodes, materials } = useGLTF(`/models/cafeteria/barandal1.glb`)
  return (
    <group dispose={null}>
      <mesh
        geometry={(nodes.Object_430001 as THREE.Mesh).geometry}
        material={materials.chromeo}
        position={[9.556, 0.148, -15.325]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.026}
      />
    </group>
  );
}

useGLTF.preload(`/models/cafeteria/barandal1.glb`)

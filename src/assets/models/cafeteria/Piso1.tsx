import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

const path = "../../../../public/models";

export function Piso() {
  const { nodes, materials} = useGLTF(`${path}/cafeteria/piso01.glb`)
  return (
    <group dispose={null}>
        <mesh
          name="Plane003"
          geometry={(nodes.Plane003 as THREE.Mesh).geometry}
          material={materials["concreto deslavado"]}
          position={[6.759, 0.058, -1.453]}
          scale={[15.837, 12.395, 12.395]}
        />
    </group>
  );
}

useGLTF.preload(`${path}/cafeteria/piso01.glb`)

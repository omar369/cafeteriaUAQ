/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 .\piso-exterior.glb --transform --draco 
Files: .\piso-exterior.glb [7.66MB] > C:\Users\UsX\Documents\React_templates\arqui-project\public\models\cafeteria\piso-exterior-transformed.glb [810.86KB] (89%)
*/

import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

const path = "../../../../public/models";

export function PisoExterior() {
  const { nodes, materials } = useGLTF(
    `${path}/cafeteria/piso-exterior-transformed.glb`,
  );
  return (
    <group dispose={null}>
      <group name="Scene">
        <mesh
          name="Plane003"
          geometry={(nodes.Plane003 as THREE.Mesh).geometry}
          material={materials["concreto deslavado"]}
					position={[6,0.1,0]}
          scale={[15.837, 12.395, 12.395]}
        />
      </group>
    </group>
  );
}

useGLTF.preload(`${path}/cafeteria/piso-exterior-transformed.glb`);

import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

const path = "/models";

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

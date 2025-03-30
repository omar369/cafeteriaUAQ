import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

const path = "/models";

export function TerrazaPiso() {
  const { nodes, materials } = useGLTF(
    `${path}/cafeteria/terraza-piso-transformed.glb`,
  );
  return (
    <group dispose={null}>
      <group position={[2.66, -0.995, -18.75]}>
        <mesh
          geometry={(nodes.Cube022 as THREE.Mesh).geometry}
          material={materials["estuco blanco"]}
        />
        <mesh
          geometry={(nodes.Cube022_1 as THREE.Mesh).geometry}
          material={materials["concreto deslavado"]}
        />
        <mesh
          geometry={(nodes.Cube022_2 as THREE.Mesh).geometry}
          material={materials["concreto deslavado 2"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload(`${path}/cafeteria/terraza-piso-transformed.glb`);

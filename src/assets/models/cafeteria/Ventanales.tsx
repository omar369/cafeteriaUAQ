import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

const path = "/models";

export function Ventanales() {
  const { nodes, materials } = useGLTF(
    `${path}/cafeteria/ventanales-transformed.glb`,
  );
  return (
    <group dispose={null}>
      <group position={[8.53, 0.713, -13.725]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={(nodes.Glass_Door_Metal_0_1 as THREE.Mesh).geometry}
          material={materials.Glass}
        />
        <mesh
          geometry={(nodes.Glass_Door_Metal_0_2 as THREE.Mesh).geometry}
          material={materials.Metal}
        />
      </group>
    </group>
  );
}

useGLTF.preload(`${path}/cafeteria/ventanales-transformed.glb`);

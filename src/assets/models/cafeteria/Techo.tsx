import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

const path = "/models";

export function Techo() {
  const { nodes, materials } = useGLTF(
    `${path}/cafeteria/techo-transformed.glb`,
  );
  return (
    <group dispose={null}>
      <group position={[5.288, 3.27, -9.607]}>
        <mesh
          geometry={(nodes.Cube018 as THREE.Mesh).geometry}
          material={materials["estuco AZUL UAQ"]}
					castShadow
        />
        <mesh
          geometry={(nodes.Cube018_1 as THREE.Mesh).geometry}
          material={materials.blanco}
					castShadow
        />
      </group>
    </group>
  );
}

useGLTF.preload(`${path}/cafeteria/techo-transformed.glb`);

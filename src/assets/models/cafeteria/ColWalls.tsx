import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

const path = "/models";

export function ColWalls() {
  const { nodes } = useGLTF(`${path}/cafeteria/COL_PERIMETRO.glb`);
  return (
    <group dispose={null}>
      <mesh
        geometry={(nodes.COLLISION_WALLS as THREE.Mesh).geometry}
        position={[5.224, -1, -24.246]}
      >
        <meshBasicMaterial transparent opacity={0} />
      </mesh>
    </group>
  );
}

useGLTF.preload(`${path}/cafeteria/COL_PERIMETRO.glb`);

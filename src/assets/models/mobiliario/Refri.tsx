import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

const path = "../../../../public/models";

export function Refri() {
  const { nodes, materials } = useGLTF(`${path}/mobiliario/refri.glb`);
  return (
    <group dispose={null}>
      <mesh
        geometry={(nodes.defaultMaterial as THREE.Mesh).geometry}
        material={materials.DefaultMaterial}
        position={[0.557, 0.115, -7.25]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.011}
				castShadow
      />
    </group>
  );
}

useGLTF.preload(`${path}/mobiliario/refri.glb`);

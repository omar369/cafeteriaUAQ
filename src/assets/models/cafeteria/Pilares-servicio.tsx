import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

const path = "../../../../public/models";

export function PilaresServicio() {
  const { nodes, materials } = useGLTF(
    `${path}/cafeteria/pilares-servicio.glb`,
  );
  return (
    <group dispose={null}>
      <mesh
        geometry={(nodes.Cube003 as THREE.Mesh).geometry}
        material={materials["estuco blanco"]}
        position={[2.015, 0, -5.558]}
      />
      <mesh
        geometry={(nodes.Cube004 as THREE.Mesh).geometry}
        material={materials["estuco blanco"]}
        position={[0.013, 0, -5.569]}
      />
    </group>
  );
}

useGLTF.preload(`${path}/cafeteria/pilares-servicio.glb`);

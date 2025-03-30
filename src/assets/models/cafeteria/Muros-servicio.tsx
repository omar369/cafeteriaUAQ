import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

const path = "/models";

export function MurosServicio() {
  const { nodes, materials } = useGLTF(`${path}/cafeteria/muros-servicio.glb`);
  return (
    <group dispose={null}>
      <mesh
        geometry={(nodes.AREA_SERVICIO as THREE.Mesh).geometry}
        material={materials["estuco blanco"]}
        position={[1.008, 0.1, -2.81]}
        scale={1.075}
				castShadow
      />
    </group>
  );
}

useGLTF.preload(`${path}/cafeteria/muros-servicio.glb`);

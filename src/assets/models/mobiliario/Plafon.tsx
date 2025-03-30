import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

const path = "/models";

export function Plafon() {
  const { nodes, materials } = useGLTF(`${path}/mobiliario/plafon.glb`)
  return (
    <group dispose={null}>
      <mesh
        geometry={(nodes.plafonFalso as THREE.Mesh).geometry}
        material={materials.plafon}
        position={[6.705, 2.614, -9.628]}
        rotation={[0, 0, Math.PI]}
        scale={1.199}
      />
    </group>
  );
}

useGLTF.preload(`${path}/mobiliario/plafon.glb`)

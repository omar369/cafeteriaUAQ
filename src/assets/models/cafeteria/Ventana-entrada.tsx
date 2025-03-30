import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

const path = "/models";

export function VentanaEntrada() {
  const { nodes, materials } = useGLTF(
    `${path}/cafeteria/ventana-entrada-transformed.glb`,
  );
  return (
    <group dispose={null}>
      <group
        position={[2.053, 1.591, -4.523]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.526}
      >
        <mesh
          geometry={(nodes.awning_frame_frame1_0_1 as THREE.Mesh).geometry}
          material={materials.PaletteMaterial002}
        />
        <mesh
          geometry={(nodes.awning_frame_frame1_0_2 as THREE.Mesh).geometry}
          material={materials.PaletteMaterial003}
        />
        <mesh
          geometry={(nodes.awning_frame_frame1_0_3 as THREE.Mesh).geometry}
          material={materials.PaletteMaterial004}
        />
        <mesh
          geometry={(nodes.awning_frame_frame1_0_4 as THREE.Mesh).geometry}
          material={materials.PaletteMaterial001}
        />
      </group>
    </group>
  );
}

useGLTF.preload(`${path}/cafeteria/ventana-entrada-transformed.glb`);

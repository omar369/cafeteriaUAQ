import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

const path = "../../../../public/models";

export function Estufa() {
  const { nodes, materials } = useGLTF(`${path}/cafeteria/estufa-separada.glb`)
  return (
    <group dispose={null}>
      <mesh
        geometry={(nodes.Object_10 as THREE.Mesh).geometry}
        material={materials.Brushed_Aluminium_2}
        position={[0.438, 0.288, -12.148]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        geometry={(nodes.Object_11 as THREE.Mesh).geometry}
        material={materials.Brushed_chrome}
        position={[0.438, 0.288, -12.148]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        geometry={(nodes.Object_12 as THREE.Mesh).geometry}
        material={materials.Brushed_chrome}
        position={[0.438, 0.288, -12.148]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        geometry={(nodes.Object_13 as THREE.Mesh).geometry}
        material={materials.Brushed_chrome}
        position={[0.438, 0.288, -12.148]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        geometry={(nodes.Object_14 as THREE.Mesh).geometry}
        material={materials.Brushed_chrome}
        position={[0.438, 0.288, -12.148]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        geometry={(nodes.Object_15 as THREE.Mesh).geometry}
        material={materials.Dirty_Shiny_Plastic}
        position={[0.438, 0.288, -12.148]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        geometry={(nodes.Object_16 as THREE.Mesh).geometry}
        material={materials["Material.001"]}
        position={[0.438, 0.288, -12.148]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        geometry={(nodes.Object_17 as THREE.Mesh).geometry}
        material={materials.Stove_black_plastick}
        position={[0.438, 0.288, -12.148]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        geometry={(nodes.Object_18 as THREE.Mesh).geometry}
        material={materials.Stove_black_plastick}
        position={[0.438, 0.288, -12.148]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        geometry={(nodes.Object_19 as THREE.Mesh).geometry}
        material={materials.Stove_black_plastick}
        position={[0.438, 0.288, -12.148]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        geometry={(nodes.Object_2001 as THREE.Mesh).geometry}
        material={materials.Bronze_Bare}
        position={[0.438, 0.288, -12.148]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        geometry={(nodes.Object_21 as THREE.Mesh).geometry}
        material={materials.oven_colored_metal}
        position={[0.438, 0.288, -12.148]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        geometry={(nodes.Object_22 as THREE.Mesh).geometry}
        material={materials.plastic_jars}
        position={[0.438, 0.288, -12.148]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        geometry={(nodes.Object_23 as THREE.Mesh).geometry}
        material={materials.stainless_steel}
        position={[0.438, 0.288, -12.148]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        geometry={(nodes.Object_3 as THREE.Mesh).geometry}
        material={materials.Bronze_Bare}
        position={[0.438, 0.288, -12.148]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        geometry={(nodes.Object_36 as THREE.Mesh).geometry}
        material={materials.stainless_steel}
        position={[0.438, 0.288, -12.148]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        geometry={(nodes.Object_37 as THREE.Mesh).geometry}
        material={materials.stainless_steel_oven_plate}
        position={[0.438, 0.288, -12.148]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        geometry={(nodes.Object_38 as THREE.Mesh).geometry}
        material={materials.stove_top_grills}
        position={[0.438, 0.288, -12.148]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        geometry={(nodes.Object_39 as THREE.Mesh).geometry}
        material={materials.stove_top_grills}
        position={[0.438, 0.288, -12.148]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        geometry={(nodes.Object_4 as THREE.Mesh).geometry}
        material={materials.Bronze_Bare}
        position={[0.438, 0.288, -12.148]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        geometry={(nodes.Object_40 as THREE.Mesh).geometry}
        material={materials.stove_top_grills}
        position={[0.438, 0.288, -12.148]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        geometry={(nodes.Object_41 as THREE.Mesh).geometry}
        material={materials.stove_top_grills}
        position={[0.438, 0.288, -12.148]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        geometry={(nodes.Object_42 as THREE.Mesh).geometry}
        material={materials.stove_top_grills}
        position={[0.438, 0.288, -12.148]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        geometry={(nodes.Object_43 as THREE.Mesh).geometry}
        material={materials.stove_top_grills}
        position={[0.438, 0.288, -12.148]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        geometry={(nodes.Object_44 as THREE.Mesh).geometry}
        material={materials.stove_top_grills}
        position={[0.438, 0.288, -12.148]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        geometry={(nodes.Object_5 as THREE.Mesh).geometry}
        material={materials.Bronze_Bare}
        position={[0.438, 0.288, -12.148]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        geometry={(nodes.Object_6 as THREE.Mesh).geometry}
        material={materials.Bronze_Bare}
        position={[0.438, 0.288, -12.148]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        geometry={(nodes.Object_7 as THREE.Mesh).geometry}
        material={materials.Bronze_Bare}
        position={[0.438, 0.288, -12.148]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        geometry={(nodes.Object_8 as THREE.Mesh).geometry}
        material={materials.Brushed_Aluminium_2}
        position={[0.438, 0.288, -12.148]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        geometry={(nodes.Object_9 as THREE.Mesh).geometry}
        material={materials.Brushed_Aluminium_2}
        position={[0.438, 0.288, -12.148]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
    </group>
  );
}

useGLTF.preload(`${path}/cafeteria/estufa-separada.glb`)

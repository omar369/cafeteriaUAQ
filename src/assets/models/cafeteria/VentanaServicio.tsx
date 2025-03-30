import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

const path = "/models";

export function VentanaServicio() {
  const { nodes, materials } = useGLTF(`${path}/cafeteria/ventana-servicio.glb`)
  return (
    <group dispose={null}>
      <mesh geometry={(nodes.awning_frame_frame1_0 as THREE.Mesh).geometry} material={materials.oven_colored_metal} position={[2.053, 1.591, -4.523]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={0.526} />
      <group position={[2.094, 1.885, -4.416]} rotation={[-Math.PI / 2, -0.33, -Math.PI / 2]} scale={0.529}>
        <mesh geometry={(nodes.awning_panel_glass_0_1 as THREE.Mesh).geometry} material={materials.glass} />
        <mesh geometry={(nodes.awning_panel_glass_0_2 as THREE.Mesh).geometry} material={materials.parts} />
        <mesh geometry={(nodes.awning_panel_glass_0_3 as THREE.Mesh).geometry} material={materials.frame2} />
        <mesh geometry={(nodes.awning_panel_glass_0_4 as THREE.Mesh).geometry} material={materials.oven_colored_metal} />
      </group>
    </group>
  )
}

useGLTF.preload(`${path}/cafeteria/ventana-servicio.glb`)

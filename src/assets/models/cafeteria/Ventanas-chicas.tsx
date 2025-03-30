import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

const path = "/models";

export function VentanasChicas() {
  const { nodes, materials } = useGLTF(`${path}/cafeteria/ventanas-chicas.glb`)
  return (
    <group dispose={null}>
      <group position={[2, 2, -4.523]} rotation={[Math.PI / 2, -Math.PI / 1.52, Math.PI / 2]} scale={0.526}>
        <mesh geometry={(nodes.awning_panel_glass_0010 as THREE.Mesh).geometry} material={materials['glass.010']} />
        <mesh geometry={(nodes.awning_panel_glass_0010_1 as THREE.Mesh).geometry} material={materials.parts} />
        <mesh geometry={(nodes.awning_panel_glass_0010_2 as THREE.Mesh).geometry} material={materials['glass.002']} />
        <mesh geometry={(nodes.awning_panel_glass_0010_3 as THREE.Mesh).geometry} material={materials['glass.004']} />
        <mesh geometry={(nodes.awning_panel_glass_0010_4 as THREE.Mesh).geometry} material={materials['glass.005']} />
        <mesh geometry={(nodes.awning_panel_glass_0010_5 as THREE.Mesh).geometry} material={materials['glass.007']} />
        <mesh geometry={(nodes.awning_panel_glass_0010_6 as THREE.Mesh).geometry} material={materials['glass.008']} />
        <mesh geometry={(nodes.awning_panel_glass_0010_7 as THREE.Mesh).geometry} material={materials['glass.009']} />
      </group>
    </group>
  )
}

useGLTF.preload(`${path}/cafeteria/ventanas-chicas.glb`)

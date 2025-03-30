import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

const path = "../../../../public/models";

export function PuertaServicio() {
  const { nodes, materials } = useGLTF(`${path}/cafeteria/puerta-servicio.glb`)
  return (
    <group dispose={null}>
      <group position={[2.025, 1.049, -3.026]} rotation={[Math.PI, 0, Math.PI]}>
        <mesh geometry={(nodes.Cylinder001 as THREE.Mesh).geometry} material={materials.door_single_mat} />
        <mesh geometry={(nodes.Cylinder001_1 as THREE.Mesh).geometry} material={materials.window_frame_mat} />
        <mesh geometry={(nodes.Cylinder001_2 as THREE.Mesh).geometry} material={materials.frame_mat} />
      </group>
    </group>
  )
}

useGLTF.preload(`${path}/cafeteria/puerta-servicio.glb`)

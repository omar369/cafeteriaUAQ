import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

const path = "../../../../public/models";

export function Mesa() {
  const { nodes, materials } = useGLTF(`${path}/mobiliario/mesa.glb`)
  return (
    <group dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.001} position={[0,-0.07,0]}>
        <mesh geometry={(nodes.Dining_table_round_for_4_people001_1 as THREE.Mesh).geometry} material={materials.chromeo} castShadow/>
        <mesh geometry={(nodes.Dining_table_round_for_4_people001_2 as THREE.Mesh).geometry} material={materials.mesa} castShadow/>
      </group>
    </group>
  )
}

useGLTF.preload(`${path}/mobiliario/mesa.glb`)




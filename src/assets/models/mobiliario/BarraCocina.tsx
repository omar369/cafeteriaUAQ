import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

const path = "../../../../public/models";

export function BarraCocina() {
  const { nodes, materials } = useGLTF(`${path}/mobiliario/barra-cocina.glb`)
  return (
    <group dispose={null}>
      <group position={[3.286, 0.5, -8.409]} rotation={[0, -Math.PI / 2, 0]} scale={[0.645, 1, 1]}>
        <mesh geometry={(nodes.Cube184 as THREE.Mesh).geometry} material={materials['Cabinets.001']} castShadow/>
        <mesh geometry={(nodes.Cube184_1 as THREE.Mesh).geometry} material={materials['wood.001']} castShadow/>
      </group>
    </group>
  )
}

useGLTF.preload(`${path}/mobiliario/barra-cocina.glb`)

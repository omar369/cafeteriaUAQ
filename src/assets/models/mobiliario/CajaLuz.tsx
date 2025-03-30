import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

const path = "../../../../public/models";

export function CajaLuz() {
  const { nodes, materials } = useGLTF(`${path}/mobiliario/caja-luz.glb`)
  return (
    <group dispose={null}>
      <group position={[0.14, 1.738, -2.876]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
        <mesh geometry={(nodes['������020_K_0_1'] as THREE.Mesh).geometry} material={materials.material_1} />
        <mesh geometry={(nodes['������020_K_0_2'] as THREE.Mesh).geometry} material={materials.material} />
        <mesh geometry={(nodes['������020_K_0_3'] as THREE.Mesh).geometry} material={materials.material_2} />
      </group>
    </group>
  )
}

useGLTF.preload(`${path}/mobiliario/caja-luz.glb`)

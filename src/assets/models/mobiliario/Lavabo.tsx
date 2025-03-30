import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

const path = "../../../../public/models";

export function Lavabo() {
  const { nodes, materials } = useGLTF(`${path}/mobiliario/lavabo.glb`)
  return (
    <group dispose={null}>
      <group position={[0.415, 1.053, -9.173]} rotation={[0, Math.PI / 2, 0]} scale={[1.045, 1, 1]}>
        <mesh geometry={(nodes.Plane072 as THREE.Mesh).geometry} material={materials.MetalKitchen} />
        <mesh geometry={(nodes.Plane072_1 as THREE.Mesh).geometry} material={materials.mesa} />
        <mesh geometry={(nodes.Plane072_2 as THREE.Mesh).geometry} material={materials.wood} />
      </group>
    </group>
  )
}

useGLTF.preload(`${path}/mobiliario/lavabo.glb`)

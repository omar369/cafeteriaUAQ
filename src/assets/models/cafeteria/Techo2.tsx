import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

const path = "/models";

export function TechoDos() {
  const { nodes, materials } = useGLTF(`${path}/cafeteria/techo2.glb`)
  return (
    <group dispose={null}>
      <group position={[-3.412, 2.801, -9.607]} scale={[0.889, 0.256, 0.889]}>
        <mesh geometry={(nodes.Cube019 as THREE.Mesh).geometry} material={materials['estuco AZUL UAQ']} />
        <mesh geometry={(nodes.Cube019_1 as THREE.Mesh).geometry} material={materials['estuco blanco']} />
      </group>
    </group>
  )
}

useGLTF.preload(`${path}/cafeteria/techo2.glb`)

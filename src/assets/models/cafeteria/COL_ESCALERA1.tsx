import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

const path = "/models";

export function ColEscalera1() {
  const { nodes} = useGLTF(`${path}/cafeteria/COL_ESCALERA1.glb`)
  return (
    <group dispose={null}>
      <mesh geometry={(nodes.collisionRamp as THREE.Mesh).geometry} position={[8.578, 0.001, -14.26]}>
        <meshBasicMaterial transparent opacity={0} />
			</mesh>
    </group>
  )
}

useGLTF.preload(`${path}/cafeteria/COL_ESCALERA1.glb`)

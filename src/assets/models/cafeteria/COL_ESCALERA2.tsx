import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

const path = "/models";

export function ColEscalera2() {
  const { nodes} = useGLTF(`${path}/cafeteria/COL_ESCALERA2.glb`)
  return (
    <group dispose={null}>
      <mesh geometry={(nodes.collisionRamp001 as THREE.Mesh).geometry} position={[3.821, -1.633, -14.608]}>
        <meshBasicMaterial transparent opacity={0} />
			</mesh>
    </group>
  )
}

useGLTF.preload(`${path}/cafeteria/COL_ESCALERA2.glb`)

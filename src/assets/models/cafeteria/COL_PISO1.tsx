import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

const path = "../../../../public/models";

export function ColPiso1() {
  const { nodes } = useGLTF(`${path}/cafeteria/COL_PISO1.glb`)
  return (
    <group dispose={null}>
      <mesh
        geometry={(nodes.COLLISION_FLOOR as THREE.Mesh).geometry}
        position={[2.492, -0.086, 0.026]}
      >
        <meshBasicMaterial transparent opacity={0} />
      </mesh>
    </group>
  )
}

useGLTF.preload(`${path}/cafeteria/COL_PISO1.glb`)


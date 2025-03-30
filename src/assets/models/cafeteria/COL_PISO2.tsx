import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

const path = "/models";

export function ColPiso2() {
  const { nodes } = useGLTF(`${path}/cafeteria/COL_PISO2.glb`)
  return (
    <group dispose={null}>
      <mesh
        geometry={(nodes.cOLLISION_BED as THREE.Mesh).geometry}
				position={[5.224, -1.491, -19.386]}
      >
        <meshBasicMaterial transparent opacity={0} />
      </mesh>
    </group>
  )
}

useGLTF.preload(`${path}/cafeteria/COL_PISO2.glb`)


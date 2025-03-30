import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

const path = "../../../../public/env";

export function Pasto() {
  const { nodes, materials } = useGLTF(`${path}/pasto.glb`)
  return (
    <group dispose={null}>
      <mesh geometry={(nodes.Object_5001 as THREE.Mesh).geometry} material={materials.StumpOnGrass} position={[19.433, -0.916, -10.542]} rotation={[-1.636, -0.026, 1.456]} scale={0.412} />
      <mesh geometry={(nodes.Object_5003 as THREE.Mesh).geometry} material={materials['StumpOnGrass.001']} position={[19.882, 0.174, 8.851]} rotation={[-1.539, -0.077, 3.129]} scale={0.412} />
      <mesh geometry={(nodes.Object_5004 as THREE.Mesh).geometry} material={materials['StumpOnGrass.002']} position={[-9.961, -0.383, 17.833]} rotation={[-1.619, 0.02, -0.045]} scale={0.412} />
      <mesh geometry={(nodes.Object_5005 as THREE.Mesh).geometry} material={materials['StumpOnGrass.003']} position={[8.644, 0.089, 21.553]} rotation={[-1.646, -0.037, 1.615]} scale={0.412} />
      <mesh geometry={(nodes.Object_5006 as THREE.Mesh).geometry} material={materials['StumpOnGrass.004']} position={[-15.456, -1.299, -1.243]} rotation={[-1.62, 0.004, -1.574]} scale={0.412} />
      <mesh geometry={(nodes.Object_5007 as THREE.Mesh).geometry} material={materials['StumpOnGrass.005']} position={[-10.92, -1.334, -26.612]} rotation={[-1.53, 0.021, -2.856]} scale={[0.483, 0.594, 0.482]} />
      <mesh geometry={(nodes.Object_5008 as THREE.Mesh).geometry} material={materials['StumpOnGrass.006']} position={[17.347, -1.334, -28.281]} rotation={[-1.608, -0.027, 0.445]} scale={[0.483, 0.594, 0.482]} />
    </group>
  )
}

useGLTF.preload(`${path}/pasto.glb`)

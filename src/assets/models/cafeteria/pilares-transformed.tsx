import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

const path = "/models";

export function Pilares() {
	const { nodes, materials } = useGLTF(`${path}/cafeteria/pilares-transformed.glb`)
	return (
		<group dispose={null}>
			<mesh
				geometry={(nodes.Cube026 as THREE.Mesh).geometry}
				material={materials["concreto deslavado 2"]}
				position={[-3.916, 0, -5.594]}
				rotation={[0, Math.PI / 2, 0]}
				scale={[1, 1, 0.714]}
			/>
		</group>
	);
}

useGLTF.preload(`${path}/cafeteria/pilares-transformed.glb`)

import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

const path = "/models";

export function MuroTrasero2() {
	const { nodes, materials } = useGLTF(`${path}/cafeteria/muros-trasero2.glb`);
	return (
		<group dispose={null}>
			<mesh
				geometry={(nodes.Cube029 as THREE.Mesh).geometry}
				material={materials["estuco blanco.001"]}
				position={[7.975, 0.1, -14.7]}
				rotation={[0, Math.PI / 2, 0]}
			/>
		</group>
	);
}

useGLTF.preload(`${path}/cafeteria/muros-trasero2.glb`);

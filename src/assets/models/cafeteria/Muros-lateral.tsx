import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

const path = "../../../../public/models";

export function MuroLateral() {
	const { nodes, materials } = useGLTF(`${path}/cafeteria/muros-lateral.glb`);
	return (
		<group dispose={null}>
			<mesh
				geometry={(nodes.Cube011 as THREE.Mesh).geometry}
        material={materials["estuco blanco"]}
				position={[-7.045, 0.041, -9.96]}
			/>
		</group>
	);
}

useGLTF.preload(`${path}/cafeteria/muros-lateral.glb`);

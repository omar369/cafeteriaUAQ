import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

const path = "../../../../public/models";

export function MuroTrasero() {
	const { nodes, materials } = useGLTF(`${path}/cafeteria/muros-trasero.glb`);
	return (
		<group position={[-0.794, 0.1, -14.62]} rotation={[0, Math.PI / 2, 0]}>
			<mesh
				geometry={(nodes.Cube003 as THREE.Mesh).geometry}
				material={materials["estuco blanco"]}
			/>
			<mesh
				geometry={(nodes.Cube003_1 as THREE.Mesh).geometry}
				material={materials["estuco blanco"]}
			/>
		</group>
	);
}

useGLTF.preload(`${path}/cafeteria/muros-trasero.glb`);

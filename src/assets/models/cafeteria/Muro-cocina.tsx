import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

const path = "../../../../public/models";

export function MuroCocina() {
	const { nodes, materials } = useGLTF(`${path}/cafeteria/muro-cocina.glb`)
	return (
		<group dispose={null}>
			<mesh
				geometry={(nodes.Cube009 as THREE.Mesh).geometry}
				material={materials["mosaico cocina.001"]}
				position={[0.928, 0.041, -9.96]}
				castShadow
			/>
		</group>
	);
}

useGLTF.preload(`${path}/cafeteria/muro-cocina.glb`)

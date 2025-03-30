import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

const path = "/models";

export function MuroFrente() {
	const { nodes, materials } = useGLTF(
		`${path}/cafeteria/muros-frente.glb`,
	);
	return (
		<group dispose={null}>
			<mesh
				geometry={(nodes.Cube012 as THREE.Mesh).geometry}
        material={materials["estuco blanco"]}
				position={[-3.919, 1.08, -5.517]}
				rotation={[0, Math.PI / 2, 0]}
				castShadow
			/>
		</group>
	);
}

useGLTF.preload(`${path}/cafeteria/muros-frente.glb`);

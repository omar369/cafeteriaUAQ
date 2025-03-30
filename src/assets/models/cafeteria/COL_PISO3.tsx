import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

const path = "../../../../public/models";

export function ColPiso3() {
	const { nodes } = useGLTF(`${path}/cafeteria/COL_PISO3.glb`);
	return (
		<group dispose={null}>
			<mesh
				geometry={(nodes.cOLLISION_BED001 as THREE.Mesh).geometry}
				position={[-1.842, -1.825, -19.386]}
				rotation={[0, Math.PI / 2, 0]}
			>
				<meshBasicMaterial transparent opacity={0} />
			</mesh>
		</group>
	);
}

useGLTF.preload(`${path}/cafeteria/COL_PISO3.glb`);

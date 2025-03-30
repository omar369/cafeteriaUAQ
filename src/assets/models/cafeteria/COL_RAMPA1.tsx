import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

const path = "../../../../public/models";

export function ColRamp1() {
	const { nodes } = useGLTF(`${path}/cafeteria/COL_RAMPA1.glb`);
	return (
		<group dispose={null}>
			<mesh
				geometry={(nodes.CollisionRamp2 as THREE.Mesh).geometry}
				position={[8.578, -0.734, -18.886]}
			>
				<meshBasicMaterial transparent opacity={0} />
			</mesh>
		</group>
	);
}

useGLTF.preload(`${path}/cafeteria/COL_RAMPA1.glb`);

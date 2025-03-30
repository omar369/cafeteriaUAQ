import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

const path = "/models";

export function ColRamp2() {
	const { nodes } = useGLTF(`${path}/cafeteria/COL_RAMPA2.glb`);
	return (
		<group dispose={null}>
			<mesh
				geometry={(nodes.CollisionRamp2001 as THREE.Mesh).geometry}
				position={[-0.408, -1.768, -22.89]}
				rotation={[0, Math.PI / 2, 0]}
			>
				<meshBasicMaterial transparent opacity={0} />
			</mesh>
		</group>
	);
}

useGLTF.preload(`${path}/cafeteria/COL_RAMPA2.glb`);

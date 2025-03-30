import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

const path = "../../../../public/models";

export function Sillas() {
	const { nodes, materials } = useGLTF(`${path}/mobiliario/silla.glb`);
	return (
		<group dispose={null}>
			<group
				position={[9.7, 0.55, -8]}
				rotation={[Math.PI / 2, 0, -0.281]}
				scale={[0.01, 0.01, 0.008]}
			>
				<mesh
					geometry={(nodes.Stool_chrome001 as THREE.Mesh).geometry}
					material={materials.chromeo}
					castShadow
				/>
				<mesh
					geometry={(nodes.Stool_chrome001_1 as THREE.Mesh).geometry}
					material={materials["silla plastico"]}
					castShadow
				/>
			</group>

			<group
				position={[8.67, 0.55, -9.12]}
				rotation={[-Math.PI / 2, Math.PI / 1, -0.3]}
				scale={[0.01, 0.01, 0.008]}
			>
				<mesh
					geometry={(nodes.Stool_chrome001 as THREE.Mesh).geometry}
					material={materials.chromeo}
					castShadow
				/>
				<mesh
					geometry={(nodes.Stool_chrome001_1 as THREE.Mesh).geometry}
					material={materials["silla plastico"]}
					castShadow
				/>
			</group>

						<group
				position={[9.7, 0.55, -9.1]}
				rotation={[-Math.PI / 2, Math.PI / 1, 1.3]}
				scale={[0.01, 0.01, 0.008]}
			>
				<mesh
					geometry={(nodes.Stool_chrome001 as THREE.Mesh).geometry}
					material={materials.chromeo}
					castShadow
				/>
				<mesh
					geometry={(nodes.Stool_chrome001_1 as THREE.Mesh).geometry}
					material={materials["silla plastico"]}
					castShadow
				/>
			</group>

			<group
				position={[8.67, 0.55, -8]}
				rotation={[-Math.PI / 2, Math.PI / 1, -1.9]}
				scale={[0.01, 0.01, 0.008]}
			>
				<mesh
					geometry={(nodes.Stool_chrome001 as THREE.Mesh).geometry}
					material={materials.chromeo}
					castShadow
				/>
				<mesh
					geometry={(nodes.Stool_chrome001_1 as THREE.Mesh).geometry}
					material={materials["silla plastico"]}
					castShadow
				/>
			</group>
		</group>
	);
}

useGLTF.preload(`${path}/mobiliario/silla.glb`);

import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

const path = "../../../../public/models";

export function Sombrilla() {
	const { nodes, materials } = useGLTF(`${path}/mobiliario/sombrilla.glb`);
	return (
		<group dispose={null}>
			<group
				rotation={[-Math.PI / 2, 0, 0]}
				scale={0.011}
				position={[5, -1.05, -17.5]}
			>
				<group rotation={[Math.PI / 2, 0, 0]}>
					<mesh
						geometry={
							(nodes.Patio_Umbrella_Patio_Umbrella_0 as THREE.Mesh).geometry
						}
						material={materials.Patio_Umbrella}
						rotation={[-Math.PI / 2, 0, 0]}
					/>
				</group>
			</group>

			<group
				rotation={[-Math.PI / 2, 0, 0]}
				scale={0.011}
				position={[5, -1.05, -21]}
			>
				<group rotation={[Math.PI / 2, 0, 0]}>
					<mesh
						geometry={
							(nodes.Patio_Umbrella_Patio_Umbrella_0 as THREE.Mesh).geometry
						}
						material={materials.Patio_Umbrella}
						rotation={[-Math.PI / 2, 0, 0]}
					/>
				</group>
			</group>

			<group
				rotation={[-Math.PI / 2, 0, 0]}
				scale={0.011}
				position={[0, -1.63, -17.5]}
			>
				<group rotation={[Math.PI / 2, 0, 0]}>
					<mesh
						geometry={
							(nodes.Patio_Umbrella_Patio_Umbrella_0 as THREE.Mesh).geometry
						}
						material={materials.Patio_Umbrella}
						rotation={[-Math.PI / 2, 0, 0]}
					/>
				</group>
			</group>

			<group
				rotation={[-Math.PI / 2, 0, 0]}
				scale={0.011}
				position={[0, -1.63, -21]}
			>
				<group rotation={[Math.PI / 2, 0, 0]}>
					<mesh
						geometry={
							(nodes.Patio_Umbrella_Patio_Umbrella_0 as THREE.Mesh).geometry
						}
						material={materials.Patio_Umbrella}
						rotation={[-Math.PI / 2, 0, 0]}
					/>
				</group>
			</group>
		</group>
	);
}

useGLTF.preload(`${path}/mobiliario/sombrilla.glb`);

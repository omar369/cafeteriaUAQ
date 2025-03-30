import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

const path = "../../../../public/models";

export function Jardinera() {
	const { nodes, materials } = useGLTF(`${path}/mobiliario/jardinera.glb`);
	return (
		<group dispose={null}>
			<mesh
				geometry={(nodes.Object_4006 as THREE.Mesh).geometry}
				material={materials["Material_0.003"]}
				position={[2.919, -0.397, -16.3]}
				rotation={[0.587, 1.533, -0.602]}
				scale={[0.473, 0.465, 0.465]}
			/>
			<mesh
				geometry={(nodes.Object_4006 as THREE.Mesh).geometry}
				material={materials["Material_0.003"]}
				position={[2.919, -0.397, -17.95]}
				rotation={[0.587, 1.533, -0.602]}
				scale={[0.473, 0.465, 0.465]}
			/>
		<mesh
				geometry={(nodes.Object_4006 as THREE.Mesh).geometry}
				material={materials["Material_0.003"]}
				position={[2.919, -0.397, -19.6]}
				rotation={[0.587, 1.533, -0.602]}
				scale={[0.473, 0.465, 0.465]}
			/>
			<mesh
				geometry={(nodes.Object_4006 as THREE.Mesh).geometry}
				material={materials["Material_0.003"]}
				position={[2.919, -0.397, -21.25]}
				rotation={[0.587, 1.533, -0.602]}
				scale={[0.473, 0.465, 0.465]}
			/>
		</group>
	);
}

useGLTF.preload(`${path}/mobiliario/jardinera.glb`);

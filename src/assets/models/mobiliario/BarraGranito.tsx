import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

const path = "../../../../public/models";

export function BarraGranito() {
	const { nodes, materials } = useGLTF(`${path}/mobiliario/barra-granito.glb`);
	return (
		<group dispose={null}>
			<mesh
				geometry={(nodes.Cabinets003 as THREE.Mesh).geometry}
				material={materials["GRANITO BCO"]}
				position={[3.3, 0.449, -8.41]}
				rotation={[0, -Math.PI / 2, 0]}
				scale={[0.645, 1, 1]}
			/>
		</group>
	);
}

useGLTF.preload(`${path}/mobiliario/barra-granito.glb`);

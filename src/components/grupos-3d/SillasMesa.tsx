import { Mesa } from "../../assets/models/mobiliario/Mesa";
import { Sillas } from "../../assets/models/mobiliario/Silla";

interface SillasMesaProps {
	position?: [number,number,number];
}

export default function SillasMesa({position}:SillasMesaProps) {
  return (
	<group position={position}>
			<Mesa />
			<Sillas />
		</group>
)
}


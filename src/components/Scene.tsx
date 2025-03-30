import { Environment, SoftShadows } from "@react-three/drei";

import { MurosServicio } from "../assets/models/cafeteria/Muros-servicio";
import { Piso } from "../assets/models/cafeteria/Piso1";
import { Pilares } from "../assets/models/cafeteria/pilares-transformed";
import { TerrazaPiso } from "../assets/models/cafeteria/Terraza-piso";
import { Techo } from "../assets/models/cafeteria/Techo";
import { TechoDos } from "../assets/models/cafeteria/Techo2";
import { Ventanales } from "../assets/models/cafeteria/Ventanales";
import { VentanasChicas } from "../assets/models/cafeteria/Ventanas-chicas";
import { RigidBody } from "@react-three/rapier";
import { ColEscalera1 } from "../assets/models/cafeteria/COL_ESCALERA1";
import { ColEscalera2 } from "../assets/models/cafeteria/COL_ESCALERA2";
import { ColPiso1 } from "../assets/models/cafeteria/COL_PISO1";
import { ColPiso2 } from "../assets/models/cafeteria/COL_PISO2";
import { ColPiso3 } from "../assets/models/cafeteria/COL_PISO3";
import { ColRamp1 } from "../assets/models/cafeteria/COL_RAMPA1";
import { ColRamp2 } from "../assets/models/cafeteria/COL_RAMPA2";
import { ColWalls } from "../assets/models/cafeteria/ColWalls";
import { MuroFrente } from "../assets/models/cafeteria/Muros-frente";
import { MuroLateral } from "../assets/models/cafeteria/Muros-lateral";
import { MuroTrasero } from "../assets/models/cafeteria/Muros-trasero";
import { MuroTrasero2 } from "../assets/models/cafeteria/Muros-trasero2";
import { Barandal1 } from "../assets/models/cafeteria/Barandal1";
import { Barandal2 } from "../assets/models/cafeteria/Barandal2";
import { Barandal3 } from "../assets/models/cafeteria/Barandal3";
import { Barandal4 } from "../assets/models/cafeteria/Barandal4";
import SillasMesa from "./grupos-3d/SillasMesa";
import { Estufa } from "../assets/models/mobiliario/Estufa";
import { BarraGranito } from "../assets/models/mobiliario/BarraGranito";
import { BarraCocina } from "../assets/models/mobiliario/BarraCocina";
import { MuroCocina } from "../assets/models/cafeteria/Muro-cocina";
import { PuertaServicio } from "../assets/models/cafeteria/PuertaServicio";
import { Refri } from "../assets/models/mobiliario/Refri";
import { Lavabo } from "../assets/models/mobiliario/Lavabo";
import { Plafon } from "../assets/models/mobiliario/Plafon";
import { Tanque } from "../assets/models/mobiliario/Tanque";
import { CajaLuz } from "../assets/models/mobiliario/CajaLuz";
import { PilaresServicio } from "../assets/models/cafeteria/Pilares-servicio";
import { Jardinera } from "../assets/models/mobiliario/Jardinera";
import { Sombrilla } from "../assets/models/mobiliario/Sombrilla";
import { VentanaServicio } from "../assets/models/cafeteria/VentanaServicio";
import { Pasto } from "../assets/models/cafeteria/Pasto";

const Scene = () => {
  return (
    <>
      <Environment
        files={"garden.exr"}
        path="./env/"
        ground={{
          height: -2,
          radius: 300,
          scale: 26,
        }}
        background
        backgroundIntensity={0.1}
        backgroundBlurriness={0.5}
      />

      <fog attach="fog" args={["#001100", 15, 30]} />

      <SoftShadows />

      {/* CONTRUCCIÓN CAFETERÍA VISIBLE*/}
      <Piso />
      <Techo />
      <Ventanales />
      <VentanasChicas />
      <TechoDos />
      <TerrazaPiso />
      <Barandal1 />
      <Barandal2 />
      <Barandal3 />
      <Barandal4 />
      <Estufa />
      <BarraGranito />
      <PuertaServicio />
      <Refri />
      <Lavabo />
      <Plafon />
      <Tanque />
      <CajaLuz />
      <PilaresServicio />
      <Jardinera />
      <Sombrilla />
      <VentanaServicio />
      <Pasto />

      {/* GRUPOS DE OBJETOS*/}
      <group position={[0.2, 0, 0]}>
        <SillasMesa position={[-2.3, 0, 1.4]} />
        <SillasMesa position={[-4.2, 0, 1.4]} />
        <SillasMesa position={[-2.3, 0, -1.1]} />
        <SillasMesa position={[-4.2, 0, -1.1]} />
        <SillasMesa position={[-2.3, 0, -3.6]} />
        <SillasMesa position={[-4.2, 0, -3.6]} />
      </group>

      <group position={[0.2, 0, 0]}>
        <SillasMesa position={[-3.3, -1.1, -8]} />
        <SillasMesa position={[-5.2, -1.1, -8]} />
        <SillasMesa position={[-3.3, -1.1, -10.5]} />
        <SillasMesa position={[-5.2, -1.1, -10.5]} />
        <SillasMesa position={[-3.3, -1.1, -13]} />
        <SillasMesa position={[-5.2, -1.1, -13]} />
      </group>

      <group position={[0.2, 0, 0]}>
        <SillasMesa position={[-8.5, -1.72, -7.5]} />
        <SillasMesa position={[-10.5, -1.72, -7.5]} />
        <SillasMesa position={[-8.5, -1.72, -10]} />
        <SillasMesa position={[-10.5, -1.72, -10]} />
        <SillasMesa position={[-8.5, -1.72, -12.5]} />
        <SillasMesa position={[-10.5, -1.72, -12.5]} />
      </group>

      {/* COLISIONES STATIC VISIBLES*/}
      <RigidBody type="fixed" position={[0, -0.05, 0]} colliders="trimesh">
        <MurosServicio />
        <MuroFrente />
        <MuroLateral />
        <MuroTrasero />
        <MuroTrasero2 />
        <Pilares />
        <BarraCocina />
        <MuroCocina />
      </RigidBody>

      {/* COLISIONES STATIC INVISIBLES */}
      <RigidBody type="fixed" position={[0, -0.1, 0]} colliders="trimesh">
        <ColWalls />
        <ColEscalera1 />
        <ColEscalera2 />
        <ColPiso1 />
        <ColPiso2 />
        <ColPiso3 />
        <ColRamp1 />
        <ColRamp2 />
      </RigidBody>
    </>
  );
};

export default Scene;

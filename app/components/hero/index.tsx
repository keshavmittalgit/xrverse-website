'use client';

import { Svg } from "@react-three/drei";
import { isMobile } from "react-device-detect";
import CloudContainer from "../models/Cloud";
import StarsContainer from "../models/Stars";
import WindowModel from "../models/WindowModel";
import TextWindow from "./TextWindow";

const Hero = () => {
  const scale = isMobile ? 0.038 : 0.055;

  return (
    <>
      <group position={[0, 0, -10]}>
        <group scale={[scale, scale, scale]}>
          <Svg
            src="icons/logo.svg"
            position={[-62.5, 33.5, 0]}
            fillMaterial={{ color: "#ffffff" }}
            strokeMaterial={{ color: "#ffffff" }}
          />
        </group>
      </group>
      <StarsContainer />
      <CloudContainer/>
      <group position={[0, -25, 5.69]}>
        <pointLight castShadow position={[1, 1, -2.5]} intensity={60} distance={10}/>
        <WindowModel receiveShadow/>
        <TextWindow/>
      </group>
    </>
  );
};

export default Hero;

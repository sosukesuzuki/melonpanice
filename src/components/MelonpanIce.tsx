import React from "react";
import { useSize } from "../firebase/hooks/melonpanice";

const MelonpanIce: React.FC = () => {
  const size = useSize();

  if (size === null) return null;

  const { x, y } = size;
  
  return (
    <img width={x} height={y} src="./assets/logo.svg" />
  )
}

export default MelonpanIce;

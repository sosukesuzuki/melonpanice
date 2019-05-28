import React from "react";
import { useSize } from "../firebase/hooks/melonpanice";
import incrementSize from '../firebase/incrementSize';

const MelonpanIce = () => {
  const size = useSize();

  if (size === null) return null;

  const { x, y } = size;
  
  return (
    <img width={x} height={y} src="./assets/logo.svg" onClick={incrementSize} />
  )
}

export default MelonpanIce;

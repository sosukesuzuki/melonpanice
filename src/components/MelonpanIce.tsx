import React from "react";
import styled from "styled-components";
import { useSize } from "../firebase/hooks/melonpanice";
import incrementSize from '../firebase/incrementSize';

type ImgProps = {
  size: number;
};

const Img = styled.img`
  width: ${(props: ImgProps) => `${props.size}vw`};
  height: ${(props: ImgProps) => `${props.size}vw`};
`;

const MelonpanIce = () => {
  const size = useSize();

  if (size === null) return null;

  // よく考えたらXとYを持つ必要なかった。
  const { x } = size;
  
  return (
    <Img size={x} src="./assets/logo.svg" onClick={incrementSize} />
  )
}

export default MelonpanIce;

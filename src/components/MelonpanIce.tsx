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
  margin: 0 auto;
`;

const Heading1 = styled.h1`
  font-size: 150px;
  color: red;
`;

const MelonpanIce = () => {
  const size = useSize();

  if (size === null) return null;

  // よく考えたらXとYを持つ必要なかった。
  const { x } = size;

  if (x > 100) {
    return <Heading1>爆発</Heading1>;
  }
  
  return (
    <Img size={x} src="./assets/logo.png" onClick={incrementSize} />
  )
}

export default MelonpanIce;

import React, { useEffect } from "react";
import styled from "styled-components";
import { useSize } from "../firebase/hooks/melonpanice";
import incrementSize from "../firebase/incrementSize";

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

type Props = {
  incrementCount: () => void;
}

const MelonpanIce: React.FC<Props> = ({ incrementCount }) => {
  const size = useSize();

  useEffect(() => {
    if (size === null) return;
    const { x } = size;
    if (x === 100) {
      incrementCount();
    }
  }, [size])

  if (size === null) return null;

  // よく考えたらXとYを持つ必要なかった。
  const { x } = size;

  if (x > 100) {
    return <Heading1>爆発</Heading1>;
  }

  return <Img size={x} src="./logo.png" onClick={async () => {
    incrementSize();
  }} />;
};

export default React.memo(MelonpanIce);

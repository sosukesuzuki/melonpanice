import React from "react";
import styled from "styled-components";
import MelonpanIce from "./MelonpanIce";
import { useExplosionCount } from "../firebase/hooks/melonpanice";

const Heading1 = styled.h1`
  position: fixed;
  top: 0;
  text-align: center;
  width: 100vw;
`;

const Main = styled.main`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-flow: column;
  height: 100vh;
`;

const App = () => {
  const count = useExplosionCount();

  if (count === null) return null;

  return (
    <>
      <Main>
        <MelonpanIce />
      </Main>
      <Heading1>
        現在の爆発数: {count}
        <br/>メロンパンアイスは、タップすると大きくなってやがて爆発します。
      </Heading1>
    </>
  )
}

export default App;

import React from "react";
import styled from "styled-components";
import MelonpanIce from "./MelonpanIce";
import { useExplosionCount } from "../firebase/hooks/melonpanice";

const Main = styled.main`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100vh;
`;

const App = () => {
  const count = useExplosionCount();

  if (count === null) return null;

  return (
    <Main>
      <MelonpanIce />
    </Main>
  )
}

export default App;

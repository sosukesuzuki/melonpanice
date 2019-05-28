import React from "react";
import MelonpanIce from "./MelonpanIce";
import { useExplosionCount } from "../firebase/hooks/melonpanice";

const App = () => {
  const count = useExplosionCount();

  if (count === null) return null;

  return (
    <main>
      <h1>{count}</h1>
      <MelonpanIce />
    </main>
  )
}

export default App;

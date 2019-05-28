import React from "react";

type Props = {
  width: number;
  height: number;
}

const MelonpanIce: React.FC<Props> = ({
  width, height
}) => {
  return (
    <img width={width} height={height} src="./assets/logo.svg" />
  )
}

export default MelonpanIce;

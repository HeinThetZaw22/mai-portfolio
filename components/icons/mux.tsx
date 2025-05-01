import Image from "next/image";
import React from "react";
import Mux from "./mux-logo.svg";

const MuxIcon = () => {
  return (
    <div>
      <Image src={Mux} width={20} height={20} alt="mux" />
    </div>
  );
};

export default MuxIcon;

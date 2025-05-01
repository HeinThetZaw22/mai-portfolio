import Image from "next/image";
import React from "react";
import Tanstack from "../../public/tanstack.png";

const TanstackIcon = () => {
  return (
    <div>
      <Image src={Tanstack} width={20} height={20} alt="mux" />
    </div>
  );
};

export default TanstackIcon;

import Image from "next/image";
import React from "react";
import ImageKit from "../../public/imagekit.png";

const ImageKitIcon = () => {
  return (
    <div>
      <Image src={ImageKit} width={20} height={20} alt="mux" />
    </div>
  );
};

export default ImageKitIcon;

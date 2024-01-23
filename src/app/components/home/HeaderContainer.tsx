import React from "react";
import Image, { StaticImageData } from "next/image";

const HeaderContainer = ({
  image,
  heading,
  text,
  subText,
  ...props
}: {
  image: string | StaticImageData;
  heading: string;
  text: string;
  subText: string;
  className?: string;
}) => {
  return (
    <div {...props}>
      <Image className="w-full h-full" src={image} alt="header Image" />

      <div className="absolute top-5 left-5 lg:top-10 lg:left-10 flex flex-col ">
        <p className="text-textSuccessColor text-sm font-bold">{text}</p>
        <p className="lg:my-2.5 uppercase text-textColor font-bold text-base md:text-2xl lg:text-4xl">
          {heading}
        </p>
        <p className="text-textcolor font-bold text-xs capitalize">{subText}</p>
      </div>
    </div>
  );
};

export default HeaderContainer;

import React from "react";

const FeaturedCard = ({
  svg,
  header,
  text,
}: {
  svg: JSX.Element;
  header: string;
  text: string;
}) => {
  return (
    <div className="flex w-52  lg:w-60 items-center py-5 px-2.5 md:p-5  flex-col">
      {svg}
      <h2 className="capitalize text-center text-2xl mt-5 text-textColor font-bold">
        {header}
      </h2>
      <p className="text-secondaryTextColor mt-5 text-sm text-center">{text}</p>
    </div>
  );
};

export default FeaturedCard;

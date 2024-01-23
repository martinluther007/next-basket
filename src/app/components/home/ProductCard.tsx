import React from "react";
import Image from "next/image";
import productImage from "@/assets/images/product.jpg";

const ProductCard = () => {
  return (
    <div className="w-[183px]">
      <Image
        className="h-[238px] w-[183px]"
        src={productImage}
        alt="product image"
      />
      <div className="flex flex-col items-center w-full ">
        <h2 className="capitalize text-textColor font-bold">Graphic Design</h2>
        <p className="capitalize text-sm text-secondaryTextColor">
          English Department
        </p>
        <p className="font-bold text-mutedColor">
          $16.48
          <span className="text-secondary ml-1.5">$6.48</span>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;

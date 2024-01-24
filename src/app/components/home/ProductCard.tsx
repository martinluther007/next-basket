import React from "react";
import Image from "next/image";
import productImage from "@/assets/images/product.jpg";

const ProductCard = ({ ...props }: { className: string }) => {
  return (
    <div {...props}>
      <Image
        className="h-[238px] w-[183px]"
        src={productImage}
        alt="product image"
      />
      <div className="flex py-4 flex-col items-center w-full ">
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

import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({
  thumbNail,
  title,
  id,
  category,
  price,
  discountPercentage,
  ...props
}: {
  className: string;
  thumbNail: string;
  id: number;
  title: string;
  category: string;
  price: number;
  discountPercentage: number;
}) => {
  const calculateDiscount = (price: number, percentage: number) => {
    return Math.round(price - price * (percentage / 100));
  };
  return (
    <Link href={`/products/${id}`} {...props}>
      <Image
        width={1000}
        height={1000}
        className="h-[238px] w-[183px]"
        src={thumbNail}
        alt="product image"
      />
      <div className="flex py-4 flex-col text-center items-center w-full ">
        <h2 className="capitalize text-textColor font-bold">{title}</h2>
        <p className="capitalize text-sm text-secondaryTextColor">{category}</p>
        <p className="font-bold text-mutedColor">
          ${price}
          <span className="text-secondary ml-1.5">
            ${calculateDiscount(price, discountPercentage)}
          </span>
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;

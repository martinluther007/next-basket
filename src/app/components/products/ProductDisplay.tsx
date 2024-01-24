"use client";
import ProductCard from "@/components/home/ProductCard";
import axios from "axios";
import React, { ReactNode, useEffect, useState } from "react";

type DataItem = {
  thumbnail: string;
  title: string;
  category: string;
  price: number;
  discountPercentage: number;
  id: number;
};

type Data = {
  products: DataItem[];
  total: number;
  skip: number;
  limit: number;
};

async function getData(url: string) {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
}

const ProductDisplay = ({
  showButton,
  header,
}: {
  showButton: boolean;
  header: () => JSX.Element;
}) => {
  const [limit, setLimit] = useState<number>(30);
  const [data, setData] = useState<Data | null>(null);
  useEffect(() => {
    getData(`https://dummyjson.com/products?limit=${limit}`).then((res) =>
      setData(res)
    );
  }, [limit]);

  const handleDataLimit = () => {
    if (limit < data?.total!) {
      setLimit(limit + 20);
    }
  };

  return (
    <section className=" px-10 md:px-16  xl:px-20 ">
      {header()}
      <div className=" py-10 gap-10 xl:px-28 flex flex-col items-center sm:grid grid-cols-3 lg:grid-cols-5">
        {data &&
          data.products.map((ele) => (
            <ProductCard
              id={ele.id}
              key={ele.id}
              thumbNail={ele.thumbnail}
              title={ele.title}
              category={ele.category}
              price={ele.price}
              discountPercentage={ele.discountPercentage}
              className="bg-white w-[183px]"
            />
          ))}
      </div>

      {showButton && data && limit < data.total && (
        <div className="flex justify-center">
          <button
            onClick={handleDataLimit}
            className="border rounded border-primary text-primary py-2.5 px-10 capitalize font-bold text-base"
          >
            LOAD MORE PRODUCTS
          </button>
        </div>
      )}
    </section>
  );
};

export default ProductDisplay;

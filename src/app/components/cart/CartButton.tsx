"use-client";
import { Data } from "@/products/[id]/page";
import { addItem } from "@/redux/slices/cartSlice";
import {
  WishlistItems,
  addWishlist,
  wishlistSelector,
} from "@/redux/slices/wishListSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const CartButton = ({ itemData }: { itemData: Data }) => {
  const dispatch = useDispatch();
  const wislistItems = useSelector(wishlistSelector);

  const HandleAddToCart = (product: any) => {
    dispatch(addItem(product));
    return toast("item added successfully", { position: "bottom-right" });
  };

  const handleAddToWishList = (item: any) => {
    const check = wislistItems.items.find(
      (wishlist: any) => wishlist.id === item.id
    );
    if (check)
      return toast("item already in wishlist", { position: "bottom-right" });

    dispatch(addWishlist(item));
    return toast("item added successfully", { position: "bottom-right" });
  };
  return (
    <div className="flex mt-4 sm:mt-0 items-center">
      <button
        onClick={() => handleAddToWishList(itemData)}
        className="w-[40px] sm:ml-3 h-[40px] flex items-center justify-center border rounded-full"
      >
        <svg
          width="17"
          height="15"
          viewBox="0 0 17 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.50038 2.74805L7.78338 2.01105C6.10038 0.281049 3.01438 0.878049 1.90038 3.05305C1.37738 4.07605 1.25938 5.55305 2.21438 7.43805C3.13438 9.25305 5.04838 11.427 8.50038 13.795C11.9524 11.427 13.8654 9.25305 14.7864 7.43805C15.7414 5.55205 15.6244 4.07605 15.1004 3.05305C13.9864 0.878049 10.9004 0.280049 9.21738 2.01005L8.50038 2.74805ZM8.50038 15C-6.83262 4.86805 3.77938 -3.03995 8.32438 1.14305C8.38438 1.19805 8.44338 1.25505 8.50038 1.31405C8.5568 1.2551 8.61552 1.19839 8.67638 1.14405C13.2204 -3.04195 23.8334 4.86705 8.50038 15Z"
            fill="#252B42"
          />
        </svg>
      </button>
      <button
        onClick={() => HandleAddToCart(itemData)}
        className="w-[40px] ml-3 h-[40px] flex items-center justify-center border rounded-full"
      >
        <svg
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0.633333C0 0.465363 0.0667281 0.304272 0.185505 0.185499C0.304281 0.066726 0.465377 0 0.633353 0H2.53341C2.67469 3.90279e-05 2.8119 0.0473109 2.92322 0.134298C3.03454 0.221285 3.11357 0.342993 3.14776 0.480067L3.66078 2.53333H18.3672C18.4602 2.53342 18.5521 2.55398 18.6362 2.59356C18.7204 2.63315 18.7948 2.69077 18.8541 2.76235C18.9135 2.83393 18.9564 2.9177 18.9797 3.00772C19.0031 3.09774 19.0063 3.19179 18.9892 3.2832L17.0891 13.4165C17.062 13.5617 16.9849 13.6927 16.8714 13.7871C16.7578 13.8815 16.6148 13.9332 16.4672 13.9333H5.06682C4.91917 13.9332 4.7762 13.8815 4.66263 13.7871C4.54906 13.6927 4.47204 13.5617 4.44487 13.4165L2.54608 3.3022L2.0394 1.26667H0.633353C0.465377 1.26667 0.304281 1.19994 0.185505 1.08117C0.0667281 0.962395 0 0.801304 0 0.633333ZM3.92932 3.8L5.59251 12.6667H15.9415L17.6047 3.8H3.92932ZM6.33353 13.9333C5.66163 13.9333 5.01724 14.2002 4.54214 14.6753C4.06703 15.1504 3.80012 15.7948 3.80012 16.4667C3.80012 17.1385 4.06703 17.7829 4.54214 18.258C5.01724 18.7331 5.66163 19 6.33353 19C7.00543 19 7.64981 18.7331 8.12492 18.258C8.60003 17.7829 8.86694 17.1385 8.86694 16.4667C8.86694 15.7948 8.60003 15.1504 8.12492 14.6753C7.64981 14.2002 7.00543 13.9333 6.33353 13.9333ZM15.2005 13.9333C14.5286 13.9333 13.8842 14.2002 13.4091 14.6753C12.934 15.1504 12.6671 15.7948 12.6671 16.4667C12.6671 17.1385 12.934 17.7829 13.4091 18.258C13.8842 18.7331 14.5286 19 15.2005 19C15.8724 19 16.5168 18.7331 16.9919 18.258C17.467 17.7829 17.7339 17.1385 17.7339 16.4667C17.7339 15.7948 17.467 15.1504 16.9919 14.6753C16.5168 14.2002 15.8724 13.9333 15.2005 13.9333ZM6.33353 15.2C6.66948 15.2 6.99167 15.3335 7.22922 15.571C7.46678 15.8085 7.60023 16.1307 7.60023 16.4667C7.60023 16.8026 7.46678 17.1248 7.22922 17.3623C6.99167 17.5999 6.66948 17.7333 6.33353 17.7333C5.99758 17.7333 5.67539 17.5999 5.43783 17.3623C5.20028 17.1248 5.06682 16.8026 5.06682 16.4667C5.06682 16.1307 5.20028 15.8085 5.43783 15.571C5.67539 15.3335 5.99758 15.2 6.33353 15.2ZM15.2005 15.2C15.5364 15.2 15.8586 15.3335 16.0962 15.571C16.3337 15.8085 16.4672 16.1307 16.4672 16.4667C16.4672 16.8026 16.3337 17.1248 16.0962 17.3623C15.8586 17.5999 15.5364 17.7333 15.2005 17.7333C14.8645 17.7333 14.5423 17.5999 14.3048 17.3623C14.0672 17.1248 13.9338 16.8026 13.9338 16.4667C13.9338 16.1307 14.0672 15.8085 14.3048 15.571C14.5423 15.3335 14.8645 15.2 15.2005 15.2Z"
            fill="#252B42"
          />
        </svg>
      </button>
      <button className="w-[40px] ml-3 h-[40px] flex items-center justify-center border rounded-full">
        <svg
          width="16"
          height="12"
          viewBox="0 0 16 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 6C0 6 3 0.5 8 0.5C13 0.5 16 6 16 6C16 6 13 11.5 8 11.5C3 11.5 0 6 0 6ZM8 9.5C8.92826 9.5 9.8185 9.13125 10.4749 8.47487C11.1313 7.8185 11.5 6.92826 11.5 6C11.5 5.07174 11.1313 4.1815 10.4749 3.52513C9.8185 2.86875 8.92826 2.5 8 2.5C7.07174 2.5 6.1815 2.86875 5.52513 3.52513C4.86875 4.1815 4.5 5.07174 4.5 6C4.5 6.92826 4.86875 7.8185 5.52513 8.47487C6.1815 9.13125 7.07174 9.5 8 9.5Z"
            fill="black"
          />
        </svg>
      </button>
    </div>
  );
};

export default CartButton;

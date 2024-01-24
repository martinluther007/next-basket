import { createSlice } from "@reduxjs/toolkit";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type WishlistItems = {
  id: string;
  quantity: number;
  thumbnail: string | StaticImport;
  price?: number;
  totalPrice?: number;
};

interface WishlistState {
  items: WishlistItems[];
}

const initialState: WishlistState = { items: [] };

const wishListSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addWishlist: (state, action) => {
      state.items.push(action.payload);
    },
    removeWishlist: (state, action) => {
      state.items = state.items.filter(
        (item: WishlistItems) => item.id !== action.payload
      );
    },
  },
});

export const { addWishlist, removeWishlist } = wishListSlice.actions;
export const wishlistSelector = (state: any) => state.cart.wishlist;

export default wishListSlice.reducer;

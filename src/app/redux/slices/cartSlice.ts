import { createSlice } from "@reduxjs/toolkit";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
export type CartItems = {
  id: string;
  quantity: number;
  thumbnail: string | StaticImport;
  price: number;
  totalPrice: number;
};

interface CartState {
  items: CartItems[];
}

const initialState: CartState = { items: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const checkIfItemIsinCart = state.items.find(
        (item: any) => item.id === action.payload.id
      );
      if (checkIfItemIsinCart) {
        const itemIndex = state.items.findIndex(
          (item: any) => item.id === action.payload.id
        );
        const newCart = state.items.slice();
        const item = newCart[itemIndex];
        item.quantity = item.quantity + 1;
        item.totalPrice = item.quantity * item.price;
        newCart[itemIndex] = item;
        state.items = newCart;
      } else {
        action.payload.quantity = 1;
        action.payload.totalPrice = action.payload.price * 1;
        state.items.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(
        (item: CartItems) => item.id !== action.payload
      );
    },
    incItem: (state, action) => {
      console.log(action.payload);
      const newCart = state.items.slice();
      const productToUpdateIndex = newCart.findIndex(
        (item: any) => item.id === action.payload
      );

      const productToUpdate = newCart[productToUpdateIndex];
      productToUpdate.quantity += 1;
      productToUpdate.totalPrice =
        productToUpdate.quantity * productToUpdate.price;
      newCart[productToUpdateIndex] = productToUpdate;
      state.items = newCart;
    },
    decItem: (state, action) => {
      const newCart = state.items.slice();
      const productToUpdateIndex = newCart.findIndex(
        (item: any) => item.id === action.payload
      );

      const productToUpdate = newCart[productToUpdateIndex];

      if (productToUpdate.quantity > 1) {
        productToUpdate.quantity -= 1;
        productToUpdate.totalPrice =
          productToUpdate.quantity * productToUpdate.price;
        newCart[productToUpdateIndex] = productToUpdate;
        state.items = newCart;
      } else {
        state.items = state.items.filter(
          (item: CartItems) => item.id !== productToUpdate.id
        );
      }
    },
  },
});

export const { addItem, removeItem, incItem, decItem } = cartSlice.actions;
export const cartSelector = (state: any) => state.cart.cart;

export default cartSlice.reducer;

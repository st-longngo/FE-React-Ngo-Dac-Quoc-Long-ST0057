import React, { createContext, useContext } from "react";
import { ICart } from './../interfaces/cart';
import { getData } from "../common/common";

interface GlobalContent {
  cart: ICart[],
  setCart: (cart: ICart[]) => void
}

export const MyGlobalContext  = createContext<GlobalContent>({
  cart: getData('cart', []),
  setCart: (data: ICart[]) => data
});

export const useGlobalContext = () => useContext(MyGlobalContext);

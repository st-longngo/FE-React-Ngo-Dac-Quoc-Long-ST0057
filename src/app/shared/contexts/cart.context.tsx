import React, { createContext, useContext } from "react";
import { setData, getData } from "../common/common";
import { ICart } from './../interfaces/cart';

interface GlobalContent {
  cart: ICart[],
  setCart: (cart: ICart[]) => void
}

export const MyGlobalContext  = createContext<GlobalContent>({
  cart: getData('cart', []),
  setCart: (data: ICart[]) => data
});

export const useGlobalContext = () => useContext(MyGlobalContext);


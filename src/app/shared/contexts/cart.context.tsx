import React, { createContext, useContext } from 'react';
import { ICart } from './../interfaces/cart';
import { getData } from '../common/common';
import { IForm } from '../interfaces/form';

const initialStateUser = {
  email: "",
  password: "",
  confirmPassword: "",
};

interface GlobalContent {
  cart: ICart[];
  setCart: (cart: ICart[]) => void;
  user: IForm;
  setUser: (user: IForm) => void;
}

export const MyGlobalContext = createContext<GlobalContent>({
  cart: getData("cart", []),
  setCart: (data: ICart[]) => data,
  user: initialStateUser,
  setUser: (user: IForm) => user,
});

export const useGlobalContext = () => useContext(MyGlobalContext);

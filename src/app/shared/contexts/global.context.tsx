import React, { createContext, useContext } from 'react';
import { ICart } from '../interfaces/cart';
import { getData } from '../common/common';
import { IUser } from '../interfaces/user';

const initialStateUser = {
  email: '',
  password: '',
  confirmPassword: '',
};

interface GlobalContent {
  cart: ICart[];
  setCart: (cart: ICart[]) => void;
  user: IUser;
  setUser: (user: IUser) => void;
}

export const MyGlobalContext = createContext<GlobalContent>({
  cart: getData('cart', []),
  setCart: (data: ICart[]) => data,
  user: initialStateUser,
  setUser: (user: IUser) => user,
});

export const useGlobalContext = () => useContext(MyGlobalContext);

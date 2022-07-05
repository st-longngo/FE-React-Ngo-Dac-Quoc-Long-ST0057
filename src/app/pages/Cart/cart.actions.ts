import * as TYPES from '../../shared/constant/types';
import { ICart } from '../../shared/interfaces/cart';
import { IProduct } from '../../shared/interfaces/product';

export const increseQuantityCart = (cart: ICart) => {
  return {
    type: TYPES.INCREASE_QUANTITY_CART,
    payload: cart
  };
};

export const decreseQuantityCart = (cart: ICart) => {
  return {
    type: TYPES.DECREASE_QUANTITY_CART,
    payload: cart
  };
};

export const deleteCart = (idCart: string) => {
  return {
    type: TYPES.DELETE_CART,
    payload: idCart
  };
};

export const addCart = (product: IProduct) => {
  return {
    type: TYPES.ADD_CART,
    payload: product
  };
};

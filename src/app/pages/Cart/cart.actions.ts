import * as TYPES from '../../shared/constant/types';
import { ICart } from '../../shared/interfaces/cart';
import { IProduct } from '../../shared/interfaces/product';

export const changeQuantityCart = (cart: ICart, increase: boolean) => {
  return {
    type: TYPES.CHANGE_QUANTITY_CART,
    payload: { cart, increase }
  }
}

export const deleteCart = (idCart: number) => {
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

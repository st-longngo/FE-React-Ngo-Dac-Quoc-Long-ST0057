import * as TYPES from './../../shared/types/types';
import { ICart } from './../../shared/interfaces/cart';
import { IActionReducer, IStateReducer } from '../../shared/interfaces/reducer';
import { getData, setData } from './../../shared/common/common';

const intitalStateCart = {
  cart: getData('cart', []),
  setCart: (cart: ICart) => cart,
};

const cartReducer = (
  state: IStateReducer = intitalStateCart,
  action: IActionReducer
) => {
  let cartIndex;
  switch (action.type) {
    case TYPES.INCREASE_QUANTITY_CART:
      cartIndex = state.cart.findIndex((item) => item.id === action.payload.id);
      state.cart[cartIndex].quantity += 1;
      return {
        ...state,
        cart: [...state.cart],
        setCart: setData('cart', [...state.cart]),
      };
    case TYPES.DECREASE_QUANTITY_CART:
      cartIndex = state.cart.findIndex((item) => item.id === action.payload.id);
      if (state.cart[cartIndex].quantity > 1) {
        state.cart[cartIndex].quantity -= 1;
        return {
          ...state,
          cart: [...state.cart],
          setCart: setData('cart', [...state.cart]),
        };
      } else {
        const newCart = state.cart.filter(
          (item) => item.id !== action.payload.id
        );
        return {
          ...state,
          cart: newCart,
          setCart: setData('cart', newCart),
        };
      };
    case TYPES.DELETE_CART:
      const newCart = state.cart.filter((item) => item.id !== action.payload);
      return {
        ...state,
        cart: newCart,
        setCart: setData('cart', newCart),
      };
    case TYPES.ADD_CART:
      cartIndex = state.cart.findIndex(
        (item: ICart) => item.id === action.payload.id
      )!;
      if (cartIndex < 0) {
        const newCart = {
          ...action.payload,
          quantity: 1,
        };
        return {
          ...state,
          cart: [...state.cart, newCart],
          setCart: setData('cart', [...state.cart, newCart]),
        };
      } else {
        state.cart[cartIndex].quantity += 1;
        return {
          ...state,
          cart: [...state.cart],
          setCart: setData('cart', [...state.cart]),
        };
      }
    default:
      return state;
  }
};

export default cartReducer;

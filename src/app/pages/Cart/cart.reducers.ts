import * as TYPES from '../../shared/constant/types';
import { ICart } from '../../shared/interfaces/cart';
import { IAction , IRootState } from '../../shared/interfaces/reducer';
import { getData, setData } from '../../shared/common/common';

const intitalStateCart = {
  cart: getData('cart', [])
};

const cartReducer = (
  state: IRootState = intitalStateCart,
  action: IAction
) => {
  let cartIndex;
  switch (action.type) {
    case TYPES.CHANGE_QUANTITY_CART:
      cartIndex = state.cart.findIndex((item) => item.id === action.payload.cart.id);
      if(action.payload.increase) {
        state.cart[cartIndex].quantity += 1;
        setData('cart', [...state.cart]);
        return {
          ...state,
          cart: [...state.cart]
        }
      } else {
        if (state.cart[cartIndex].quantity > 1) {
          state.cart[cartIndex].quantity -= 1;
          setData('cart', [...state.cart]);
          return {
            ...state, 
            cart: [...state.cart],
          };
        } else {
          state.cart.splice(cartIndex, 1);
          setData('cart', [...state.cart]);
          return {
            ...state,
            cart: [...state.cart],
          };
        };
      }
    case TYPES.DELETE_CART:
      cartIndex = state.cart.findIndex((item) => item.id === action.payload);
      state.cart.splice(cartIndex, 1);
      setData('cart', [...state.cart]);
      return {
        ...state,
        cart: [...state.cart]
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
        setData('cart', [...state.cart, newCart]);
        return {
          ...state,
          cart: [...state.cart, newCart],
        };
      } else {
        state.cart[cartIndex].quantity += 1;
        setData('cart', [...state.cart]);
        return {
          ...state,
          cart: [...state.cart],
        };
      };
    default:
      return state;
  }
};

export default cartReducer;

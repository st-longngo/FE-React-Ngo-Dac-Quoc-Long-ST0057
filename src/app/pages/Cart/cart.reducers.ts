import * as TYPES from '../../shared/constant/types';
import { ICart } from './../../shared/interfaces/cart';
import { IAction , IRootState } from '../../shared/interfaces/reducer';
import { getData, setStateOfCart } from './../../shared/common/common';

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
        return setStateOfCart(state);
      } else {
        if (state.cart[cartIndex].quantity > 1) {
          state.cart[cartIndex].quantity -= 1;
          return setStateOfCart(state);
        } else {
          state.cart.splice(cartIndex, 1);
          return setStateOfCart(state);
        };
      }
    case TYPES.DELETE_CART:
      cartIndex = state.cart.findIndex((item) => item.id === action.payload);
      state.cart.splice(cartIndex, 1);
      return setStateOfCart(state);
    case TYPES.ADD_CART:
      cartIndex = state.cart.findIndex(
        (item: ICart) => item.id === action.payload.id
      )!;
      if (cartIndex < 0) {
        const newCart = {
          ...action.payload,
          quantity: 1,
        };
        state.cart.unshift(newCart);
        return setStateOfCart(state);
      } else {
        state.cart[cartIndex].quantity += 1;
        return setStateOfCart(state);
      };
    default:
      return state;
  }
};

export default cartReducer;

import { ICart } from './cart';

export interface IStateReducer {
  cart: ICart[];
  setCart: (cart: ICart) => void
};

export interface IActionReducer {
  type: string,
  payload: any
}

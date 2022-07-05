import { ICart } from './cart';

export interface IStateReducer {
  cart: ICart[];
};

export interface IActionReducer {
  type: string,
  payload: any
}

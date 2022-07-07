import { ICart } from './cart';

export interface IRootState {
  cart: ICart[];
};

export interface IAction {
  type: string,
  payload: any
}

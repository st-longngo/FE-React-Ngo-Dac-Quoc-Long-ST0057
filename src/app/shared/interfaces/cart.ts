import { IProduct } from './product';

export interface ICart extends IProduct {
  quantity: number
}

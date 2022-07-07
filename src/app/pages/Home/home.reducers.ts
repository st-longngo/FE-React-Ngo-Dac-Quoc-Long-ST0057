import * as TYPES from '../../shared/constant/types';
import { IAction } from '../../shared/interfaces/reducer';
import { IProduct } from './../../shared/interfaces/product';

interface IHomeState {
  products: IProduct[],
  isLoading: boolean,
  error: string
}

const initialStateHome = {
  products: [],
  isLoading: true,
  error: ''
}

const homeReducer = (state: IHomeState = initialStateHome, action: IAction) => {
  switch(action.type) {
    case TYPES.GET_PRODUCTS:
      return {
        ...state,
        isLoading: true
      }
    case TYPES.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        isLoading: false,
        error: ''
      }
    case TYPES.GET_PRODUCTS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    default:
      return state;
  }
}

export default homeReducer;

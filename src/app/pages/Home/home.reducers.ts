import { stat } from 'fs';
import * as TYPES from '../../shared/constant/types';
import { IAction } from '../../shared/interfaces/reducer';
import { IProduct } from './../../shared/interfaces/product';

interface IHomeState {
  products: IProduct[],
  isLoading: boolean,
  error: string,
  categories: string[]
}

const initialStateHome = {
  products: [],
  isLoading: true,
  error: '',
  categories: []
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
    case TYPES.FILTER_PRODUCT:
      const categoryIndex = state.categories.findIndex((category: string) => category === action.payload);
      if(categoryIndex > -1) {
        state.categories.splice(categoryIndex, 1);
      } else {
        state.categories.push(action.payload);
      }
      return {
        ...state,
        categories: [...state.categories]
      }
    case TYPES.RESET_HOME_PAGE:
      return {
        products: [],
        isLoading: true,
        error: '',
        categories: []
      }
    default:
      return state;
  }
}

export default homeReducer;

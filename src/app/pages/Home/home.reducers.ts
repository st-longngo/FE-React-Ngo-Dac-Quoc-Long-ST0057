import * as TYPES from '../../shared/constant/types';
import { IAction } from '../../shared/interfaces/reducer';
import { IProduct } from './../../shared/interfaces/product';

interface IHomeState {
  products: IProduct[],
  isLoading: boolean,
  error: string
}

const initialStateProductsHome = {
  products: [],
  isLoading: true,
  error: ''
}

const initialStateCategoriesHome = {
  categories: [],
  isLoading: true,
  error: '',
};

export const homeProductsReducer = (state: IHomeState = initialStateProductsHome, action: IAction) => {
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

export const homeCategoriesReducer = (
  state = initialStateCategoriesHome,
  action: any
) => {
  switch (action.type) {
    case TYPES.GET_CATEGORIES:
      return {
        ...state,
        isLoading: true,
      };

    case TYPES.GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.payload,
        isLoading: false,
        error: '',
      };

    case TYPES.GET_CATEGORIES_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

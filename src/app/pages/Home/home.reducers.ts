import * as TYPES from '../../shared/constant/types';
import { IAction } from '../../shared/interfaces/reducer';
import { IProduct } from './../../shared/interfaces/product';

interface IStateData<D> {
  data: D,
  isLoading: boolean,
  error: string
}

const initialStateProducts = {
  data: [],
  isLoading: true,
  error: ''
}

const initialStateCategories = {
  data: {},
  isLoading: true,
  error: '',
};

export const productsReducer = (state: IStateData<IProduct[]> = initialStateProducts, action: IAction) => {
  switch(action.type) {
    case TYPES.GET_PRODUCTS:
      return {
        ...state,
        isLoading: true
      }
    case TYPES.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        data: action.payload,
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

export const categoriesReducer = (
  state : IStateData<{}> = initialStateCategories,
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
        data: action.payload,
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

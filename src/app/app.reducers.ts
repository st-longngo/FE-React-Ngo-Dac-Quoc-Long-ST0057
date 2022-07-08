import React from 'react';
import { combineReducers } from 'redux';
import cartReducer from './pages/cart/cart.reducers';
import { homeProductsReducer, homeCategoriesReducer} from './pages/home/home.reducers';

const rootReducer = combineReducers({
  cart: cartReducer,
  product: homeProductsReducer,
  categories: homeCategoriesReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

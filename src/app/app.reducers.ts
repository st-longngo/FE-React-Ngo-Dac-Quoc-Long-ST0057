import React from 'react';
import { combineReducers } from 'redux';
import cartReducer from './pages/cart/cart.reducers';
import { productsReducer, categoriesReducer} from './pages/home/home.reducers';

const rootReducer = combineReducers({
  cart: cartReducer,
  product: productsReducer,
  categories: categoriesReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

import React from 'react';
import { combineReducers } from 'redux';
import cartReducer from './pages/cart/cart.reducers';
import { homeReducer, homeCategoriesReducer} from './pages/home/home.reducers';

const rootReducer = combineReducers({
  cart: cartReducer,
  product: homeReducer,
  categories: homeCategoriesReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

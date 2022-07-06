import React from 'react';
import { combineReducers } from 'redux';
import cartReducer from './pages/cart/cart.reducers';
import homeReducer from './pages/home/home.reducers';

const rootReducer = combineReducers({
  cart: cartReducer,
  home: homeReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

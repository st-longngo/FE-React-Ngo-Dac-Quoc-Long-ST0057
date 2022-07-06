import React from 'react';
import { combineReducers } from 'redux';
import cartReducer from './pages/cart/cart.reducers';

const rootReducer = combineReducers({
  cart: cartReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

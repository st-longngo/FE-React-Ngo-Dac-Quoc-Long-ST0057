import React from 'react';
import { combineReducers } from 'redux';
import cartReducer from '../pages/cart/cart.reducer';

const rootReducer = combineReducers({
  cartReducer: cartReducer
});

export default rootReducer;

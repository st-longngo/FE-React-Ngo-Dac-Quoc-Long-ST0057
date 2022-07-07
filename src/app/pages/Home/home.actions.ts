import React from "react";
import axios from "axios";
import * as TYPES from '../../shared/constant/types';
import { Dispatch, AnyAction } from "redux";

export const getProducts = () => async (dispatch: Dispatch<AnyAction>) => {
  try {
    dispatch({ type: TYPES.GET_PRODUCTS });
    const res = await axios.get(
      'https://6088e20da6f4a300174271e7.mockapi.io/products'
    );
    dispatch({
      type: TYPES.GET_PRODUCTS_SUCCESS,
      payload: res.data
    })
  }
  catch (err) {
    dispatch({
      type: TYPES.GET_PRODUCTS_ERROR,
      payload: err
    })
  }
}

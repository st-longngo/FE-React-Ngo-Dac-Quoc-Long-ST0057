import React from 'react';
import * as TYPES from '../../shared/constant/types';

export const getProducts = () => ({
  type: TYPES.GET_PRODUCTS,
});

export const getProductsSuccess = (posts: any) => ({
  type: TYPES.GET_PRODUCTS_SUCCESS,
  payload: posts,
});

export const getProductsError = (error: any) => ({
  type: TYPES.GET_PRODUCTS_ERROR,
  payload: error,
});

export const getCategories = () => ({
  type: TYPES.GET_CATEGORIES,
});

export const getCategoriesSuccess = (categories: any) => ({
  type: TYPES.GET_CATEGORIES_SUCCESS,
  payload: categories,
});

export const getCategoriesError = (error: any) => ({
  type: TYPES.GET_CATEGORIES_ERROR,
  payload: error,
});

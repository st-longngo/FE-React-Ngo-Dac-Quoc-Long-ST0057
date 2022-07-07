import axios, { AxiosResponse } from 'axios';
import { put, takeLatest, all } from 'redux-saga/effects';
import { getProductsError, getProductsSuccess, getCategoriesSuccess, getCategoriesError } from './home.actions';

import * as TYPES from '../../shared/constant/types';

const ENDPOINT = 'https://6088e20da6f4a300174271e7.mockapi.io';

export function* getProducts() {
  try {
    const res: AxiosResponse<any> = yield axios.get(`${ENDPOINT}/products`);
    yield put(getProductsSuccess(res.data));
  } catch (error) {
    yield put(getProductsError(error));
  }
}

export function* getCategories() {
  try {
    const res: AxiosResponse<any> = yield axios.get(`${ENDPOINT}/categories`);
    yield put(getCategoriesSuccess(res.data));
  } catch (error) {
    yield put(getCategoriesError(error));
  }
}

export function* watchProducts() {
  yield all([
    takeLatest(TYPES.GET_PRODUCTS, getProducts),
    takeLatest(TYPES.GET_CATEGORIES, getCategories),
  ]);
};

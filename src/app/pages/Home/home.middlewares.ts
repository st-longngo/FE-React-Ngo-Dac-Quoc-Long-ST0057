import axios, { AxiosResponse } from 'axios';
import { put, takeLatest, all } from 'redux-saga/effects';
import {
  getProductsError,
  getProductsSuccess,
  getCategoriesSuccess,
  getCategoriesError,
} from './home.actions';
import { enviroment, ENDPOINT } from '../../config';

import * as TYPES from '../../shared/constant/types';

export function* getProducts() {
  try {
    const res: AxiosResponse<any> = yield axios.get(
      `${enviroment.apiBaseUrl}${ENDPOINT.products}`
    );
    yield put(getProductsSuccess(res.data));
  } catch (error) {
    yield put(getProductsError(error));
  }
}

export function* getCategories() {
  try {
    const res: AxiosResponse<any> = yield axios.get(
      `${enviroment.apiBaseUrl}${ENDPOINT.categories}`
    );
    yield put(
      getCategoriesSuccess(
        Object.fromEntries(
          [...res.data].map((item: any) => Object.values(item))
        )
      )
    );
  } catch (error) {
    yield put(getCategoriesError(error));
  }
}

export function* watchHome() {
  yield all([
    takeLatest(TYPES.GET_PRODUCTS, getProducts),
    takeLatest(TYPES.GET_CATEGORIES, getCategories),
  ]);
}

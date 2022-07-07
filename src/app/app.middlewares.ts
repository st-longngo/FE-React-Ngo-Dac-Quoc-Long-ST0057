import { all } from 'redux-saga/effects';
import { watchProducts } from './pages/home/home.middlewares';

export default function* appMiddleware() {
  yield all([watchProducts()]);
}

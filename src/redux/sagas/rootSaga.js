import { all } from 'redux-saga/effects';
import { watchTodos } from './todosSaga';

export function* rootSaga() {
  yield all([watchTodos()]);
}

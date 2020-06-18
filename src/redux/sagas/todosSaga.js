import { takeEvery, put, call } from 'redux-saga/effects';
import { addTodoAsync, addTodo } from 'redux/reducers/todosReducer';
import { startLoading, finishLoading } from 'redux/reducers/UIData';

export function* watchTodos() {
  yield takeEvery(addTodoAsync.type, addTodoWorker);
}

function* addTodoWorker({ payload }) {
  yield put(startLoading());
  yield call(delay, 2000);

  yield put(finishLoading());
  yield put(addTodo(payload));
}

function delay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

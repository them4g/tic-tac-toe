import { call, put, takeLatest } from 'redux-saga/effects';
import { MOVE, moveSucceeded, moveReject } from './ducks';
import { gameMove } from './api';

const move = function*({ payload }) {
  try {
    yield call(gameMove, payload);
    yield put(moveSucceeded());
  } catch (error) {
    console.log(error);
    yield put(moveReject());
  }
};

export const watchMove = function*() {
  yield takeLatest(MOVE, move);
};

import { call, put, takeLatest } from 'redux-saga/effects';
import { history } from '@/history';
import { signIn, signOut } from './api';
import {
  LOGIN_FETCH,
  loginSucceeded,
  loginReject,
  LOGOUT_FETCH,
  logoutSucceeded,
  logoutReject,
} from './ducks';
import { userFulfilled, userClear } from '@common/components/User';

const login = function*() {
  try {
    const data = yield call(signIn);
    yield put(loginSucceeded());
    yield put(userFulfilled(data.user));
    yield call(history.replace, '/');
  } catch (error) {
    yield put(loginReject());
  }
};

const logout = function*() {
  try {
    yield call(signOut);
    yield put(logoutSucceeded());
    yield put(userClear());
  } catch (error) {
    yield put(logoutReject());
  }
};

export const watchLogin = function*() {
  yield takeLatest(LOGIN_FETCH, login);
};

export const watchLogout = function*() {
  yield takeLatest(LOGOUT_FETCH, logout);
};

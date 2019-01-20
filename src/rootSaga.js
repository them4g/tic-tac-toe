import { all, fork } from 'redux-saga/effects';
import { watchLogin, watchLogout } from '@features/Login';
import {
  watchCreateGame,
  fetchGamesSaga,
  watchJoinGame,
} from '@features/Dashboard';
import { watchMove } from '@features/Game';

export const rootSaga = function*() {
  yield all(
    [
      watchLogin,
      watchLogout,
      watchCreateGame,
      watchJoinGame,
      fetchGamesSaga,
      watchMove,
    ].map(saga => fork(saga)),
  );
};

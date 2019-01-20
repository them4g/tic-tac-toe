import { eventChannel } from 'redux-saga';
import { call, put, take, takeLatest } from 'redux-saga/effects';
import { history } from '@/history';
import { ROUTES } from '@common/constants/routes';
import { addNewGame, getGameId, joinToGame } from './api';
import {
  GAME_CREATE,
  createGameSucceeded,
  createGameReject,
  JOIN_GAME,
  joinGameSucceeded,
  joinGameReject,
} from './ducks';
import { gameListFulfilled } from '@common/ducks';
import { gamesRef } from '@common/helpers/db';

const createGame = function*() {
  try {
    const gameId = yield call(getGameId);
    yield call(addNewGame, gameId);
    yield put(createGameSucceeded());
    yield call(history.push, `${ROUTES.GAME}/${gameId}`);
  } catch (error) {
    console.log(error);
    yield put(createGameReject());
  }
};

const joinGame = function*({ payload }) {
  try {
    yield call(joinToGame, payload);
    yield put(joinGameSucceeded());
    yield call(history.push, `${ROUTES.GAME}/${payload}`);
  } catch (error) {
    console.log(error);
    yield put(joinGameReject());
  }
};

const createFetchGamesChannel = () =>
  eventChannel(emitter => {
    const gamesFetchHandler = snapshot => {
      emitter(snapshot.val() || {});
    };
    gamesRef().on('value', gamesFetchHandler);

    return () => gamesRef().off('value', gamesFetchHandler);
  });

export const fetchGamesSaga = function*() {
  const gamesFetchChannel = yield call(createFetchGamesChannel);

  while (true) {
    const games = yield take(gamesFetchChannel);
    yield put(gameListFulfilled(games));
  }
};

export const watchCreateGame = function*() {
  yield takeLatest(GAME_CREATE, createGame);
};

export const watchJoinGame = function*() {
  yield takeLatest(JOIN_GAME, joinGame);
};

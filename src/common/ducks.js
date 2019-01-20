const GAME_LIST_FULFILLED = 'games/GAME_LIST_FULFILLED';

export const gameListFulfilled = payload => ({
  type: GAME_LIST_FULFILLED,
  payload,
});

const initialState = {};

export const gamesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GAME_LIST_FULFILLED:
      return {
        ...state,
        ...payload,
      };
    default:
      return { ...state };
  }
};

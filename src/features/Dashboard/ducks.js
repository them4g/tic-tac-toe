export const GAME_CREATE = 'dashboard/GAME_CREATE';
const GAME_CREATE_SUCCEEDED = 'dashboard/GAME_CREATE_SUCCEEDED';
const GAME_CREATE_REJECT = 'dashboard/GAME_CREATE_REJECT';
export const JOIN_GAME = 'dashboard/JOIN_GAME';
export const JOIN_GAME_SUCCEEDED = 'dashboard/JOIN_GAME_SUCCEEDED';
export const JOIN_GAME_REJECT = 'dashboard/JOIN_GAME_REJECT';

export const createGame = () => ({
  type: GAME_CREATE,
});

export const createGameSucceeded = () => ({
  type: GAME_CREATE_SUCCEEDED,
});

export const createGameReject = () => ({
  type: GAME_CREATE_REJECT,
});

export const joinGame = payload => ({
  type: JOIN_GAME,
  payload,
});

export const joinGameSucceeded = () => ({
  type: JOIN_GAME_SUCCEEDED,
});

export const joinGameReject = () => ({
  type: JOIN_GAME_REJECT,
});

const initialState = {
  isCreateGameLoading: true,
  isCreateGameError: false,
  isJoinGameLoading: true,
  isJoinGameError: false,
};

export const dashboardReducer = (state = initialState, { type }) => {
  switch (type) {
    case GAME_CREATE:
      return { ...state, isCreateGameLoading: true, isCreateGameError: false };
    case GAME_CREATE_SUCCEEDED:
      return { ...state, isCreateGameLoading: false, isCreateGameError: false };
    case GAME_CREATE_REJECT:
      return { ...state, isCreateGameLoading: false, isCreateGameError: true };
    case JOIN_GAME:
      return { ...state, isJoinGameLoading: true, isJoinGameError: false };
    case JOIN_GAME_SUCCEEDED:
      return { ...state, isJoinGameLoading: false, isJoinGameError: false };
    case JOIN_GAME_REJECT:
      return { ...state, isJoinGameLoading: false, isJoinGameError: true };
    default:
      return { ...state };
  }
};

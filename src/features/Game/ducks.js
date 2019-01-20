export const MOVE = 'game/MOVE';
const MOVE_SUCCEEDED = 'game/MOVE_SUCCEEDED';
const MOVE_REJECT = 'game/MOVE_REJECT';

export const move = payload => ({
  type: MOVE,
  payload,
});

export const moveSucceeded = () => ({
  type: MOVE_SUCCEEDED,
});

export const moveReject = () => ({
  type: MOVE_REJECT,
});

const initialState = {
  isLoading: true,
  isError: false,
};

export const gameReducer = (state = initialState, { type }) => {
  switch (type) {
    case MOVE:
      return { ...state, isLoading: true, isError: false };
    case MOVE_SUCCEEDED:
      return { ...state, isLoading: false, isError: false };
    case MOVE_REJECT:
      return { ...state, isLoading: false, isError: true };
    default:
      return { ...state };
  }
};

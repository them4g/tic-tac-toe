const USER_CHECK = 'user/USER_CHECK';
const USER_FULFILLED = 'user/USER_FULFILLED';
const USER_CLEAR = 'user/USER_CLEAR';

export const userCheck = () => ({
  type: USER_CHECK,
});

export const userFulfilled = payload => ({
  type: USER_FULFILLED,
  payload,
});

export const userClear = () => ({
  type: USER_CLEAR,
});

const initialState = {
  isCheck: false,
  isLogined: false,
  data: {},
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_CHECK:
      return { ...state, isCheck: true };
    case USER_FULFILLED:
      return {
        ...state,
        data: payload,
        isCheck: true,
        isLogined: true,
      };
    case USER_CLEAR:
      return {
        ...state,
        data: {},
        isCheck: true,
        isLogined: false,
      };
    default:
      return { ...state };
  }
};

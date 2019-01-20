export const LOGIN_FETCH = 'login/LOGIN_FETCH';
export const LOGIN_SUCCEEDED = 'login/LOGIN_SUCCEEDED';
export const LOGIN_REJECT = 'login/LOGIN_REJECT';
export const LOGOUT_FETCH = 'login/LOGOUT_FETCH';
export const LOGOUT_SUCCEEDED = 'login/LOGOUT_SUCCEEDED';
export const LOGOUT_REJECT = 'login/LOGOUT_REJECT';

export const loginFetch = () => ({
  type: LOGIN_FETCH,
});

export const loginSucceeded = () => ({
  type: LOGIN_SUCCEEDED,
});

export const loginReject = () => ({
  type: LOGIN_REJECT,
});

export const logoutFetch = () => ({
  type: LOGOUT_FETCH,
});

export const logoutSucceeded = () => ({
  type: LOGOUT_SUCCEEDED,
});

export const logoutReject = () => ({
  type: LOGOUT_REJECT,
});

const initialState = {
  isLoginLoading: true,
  isLoginError: false,
  isLogoutLoading: true,
  isLogoutError: false,
};

export const loginReducer = (state = initialState, { type }) => {
  switch (type) {
    case LOGIN_FETCH:
      return { ...state, isLoginLoading: true, isLoginError: false };
    case LOGIN_SUCCEEDED:
      return {
        ...state,
        isLoginLoading: false,
        isLoginError: false,
      };
    case LOGIN_REJECT:
      return { ...state, isLoginLoading: false, isLoginError: true };
    case LOGOUT_FETCH:
      return { ...state, isLogoutLoading: true, isLogoutError: false };
    case LOGOUT_SUCCEEDED:
      return {
        ...state,
        isLogoutLoading: false,
        isLogoutError: false,
      };
    case LOGOUT_REJECT:
      return { ...state, isLogoutLoading: false, isLogoutError: true };
    default:
      return { ...state };
  }
};

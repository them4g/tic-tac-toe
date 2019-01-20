import { createSelector } from 'reselect';

const loginSelector = state => state.login;

export const loginIsLoginLoadingSelector = createSelector(
  loginSelector,
  login => login.isLoginLoading,
);

export const loginIsLoginErrorSelector = createSelector(
  loginSelector,
  login => login.isLoginError,
);

export const loginIsLogoutLoadingSelector = createSelector(
  loginSelector,
  login => login.isLogoutLoading,
);

export const loginIsLogoutErrorSelector = createSelector(
  loginSelector,
  login => login.isLogoutError,
);

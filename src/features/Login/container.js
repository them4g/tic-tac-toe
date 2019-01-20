import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Login } from './Login';
import { loginFetch, logoutFetch } from './ducks';
import {
  userIsLoginedSelector,
  userNameSelector,
} from '@common/components/User';
import {
  loginIsLoginLoadingSelector,
  loginIsLoginErrorSelector,
  loginIsLogoutLoadingSelector,
  loginIsLogoutErrorSelector,
} from './selectors';

const mapStateToProps = state => ({
  isLogined: userIsLoginedSelector(state),
  isLoginLoading: loginIsLoginLoadingSelector(state),
  isLoginError: loginIsLoginErrorSelector(state),
  isLogoutLoading: loginIsLogoutLoadingSelector(state),
  isLogoutError: loginIsLogoutErrorSelector(state),
  userName: userNameSelector(state),
});

const mapDispatchToProps = disapatch => ({
  login: () => disapatch(loginFetch()),
  logout: () => disapatch(logoutFetch()),
});

export const LoginContainer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Login),
);

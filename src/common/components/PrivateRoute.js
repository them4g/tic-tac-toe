import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { ROUTES } from '@common/constants/routes';

export const PrivateRoute = ({
  component: Component,
  authenticated,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      authenticated === true ? (
        <Component {...props} {...rest} />
      ) : (
        <Redirect to={ROUTES.SIGN_IN} />
      )
    }
  />
);

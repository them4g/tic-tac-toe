import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Switch } from 'react-router';
import { Route } from 'react-router-dom';
import { ROUTES } from '@common/constants/routes';
import { PrivateRoute } from '@common/components/PrivateRoute';
import { LoginPage } from '@pages/LoginPage';
import { DashboardPage } from '@pages/DashboardPage';
import { PlayPage } from '@pages/PlayPage';
import { userIsLoginedSelector } from '@common/components/User';

class RoutesList extends React.Component {
  render() {
    const { isLogined } = this.props;

    return (
      <Switch>
        <Route exact path={ROUTES.SIGN_IN} component={LoginPage} />
        <PrivateRoute
          exact
          authenticated={isLogined}
          path={ROUTES.DASHBOARD}
          component={DashboardPage}
        />
        <PrivateRoute
          exact
          authenticated={isLogined}
          path={`${ROUTES.GAME}/:id`}
          component={PlayPage}
        />
      </Switch>
    );
  }
}

const mapStateToProps = state => ({
  isLogined: userIsLoginedSelector(state),
});

export const Routes = withRouter(connect(mapStateToProps)(RoutesList));

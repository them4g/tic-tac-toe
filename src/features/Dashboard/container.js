import { connect } from 'react-redux';
import { Dashboard } from './Dashboard';
import { createGame, joinGame } from './ducks';
import {
  dashboardCreateGameIsLoadingSelector,
  dashboardCreateGameIsErrorSelector,
  gamesListSelector,
} from './selectors';

const mapStateToProps = state => ({
  createGameIsLoading: dashboardCreateGameIsLoadingSelector(state),
  createGameIsError: dashboardCreateGameIsErrorSelector(state),
  games: gamesListSelector(state),
});

const mapDispatchToProps = dispatch => ({
  createGame: () => dispatch(createGame()),
  joinGame: id => dispatch(joinGame(id)),
});

export const DashboardContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);

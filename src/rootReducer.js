import { combineReducers } from 'redux';
import { dashboardReducer } from '@features/Dashboard';
import { loginReducer } from '@features/Login';
import { userReducer } from '@common/components/User';
import { gamesReducer } from '@common/ducks';
import { gameReducer } from '@features/Game';

export const rootReducer = combineReducers({
  dashboard: dashboardReducer,
  login: loginReducer,
  user: userReducer,
  games: gamesReducer,
  game: gameReducer,
});

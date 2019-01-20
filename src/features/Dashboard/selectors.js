import { createSelector } from 'reselect';
import { gamesSelector } from '@common/selectors';

const dashboardSelector = state => state.dashboard;

export const dashboardCreateGameIsLoadingSelector = createSelector(
  dashboardSelector,
  dashboard => dashboard.isCreateGameLoading,
);

export const dashboardCreateGameIsErrorSelector = createSelector(
  dashboardSelector,
  dashboard => dashboard.isCreateGameError,
);

export const gamesListSelector = createSelector(gamesSelector, games =>
  Object.keys(games).reduce((acc, gameId) => {
    if (games[gameId].isStarted) return acc;
    acc.push({ ...games[gameId], id: gameId });
    return acc;
  }, []),
);

import { createSelector } from 'reselect';
import { gamesSelector } from '@common/selectors';
import { currentUser } from '@common/helpers/db';

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
    const game = games[gameId];
    console.log(currentUser().uid, game.ownerId);
    if (!game.isStarted && game.ownerId !== currentUser().uid)
      acc.push({ ...games[gameId], id: gameId });

    return acc;
  }, []),
);

import { createSelector } from 'reselect';
import { gamesSelector } from '@common/selectors';

const getCurrentGameId = (state, props) => props.id;

export const currentGameSelector = createSelector(
  gamesSelector,
  getCurrentGameId,
  (games, id) => games[id] || {},
);

export const playerOneSelector = createSelector(
  currentGameSelector,
  game => game.player_one || {},
);

export const playerTwoSelector = createSelector(
  currentGameSelector,
  game => game.player_two || {},
);

export const nextMoveUserSelector = createSelector(
  currentGameSelector,
  game => game.nextMoveUser,
);

export const fieldSelector = createSelector(
  currentGameSelector,
  game =>
    game.field
      ? Object.keys(game.field).reduce((acc, item) => {
          acc.push(game.field[item]);
          return acc;
        }, [])
      : [],
);

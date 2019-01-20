import { currentUser, gamesRef } from '@common/helpers/db';

export const getGameId = () => gamesRef().push().key;

export const addNewGame = gameId => {
  const { uid, displayName } = currentUser();

  return gamesRef(gameId).set({
    ownerId: uid,
    name: displayName,
    isStarted: false,
    nextMoveUser: uid,
    field: [
      ...Array(9)
        .fill()
        .map(() => 0),
    ].reduce((acc, item, index) => {
      acc[index] = item;
      return acc;
    }, {}),
    player_one: {
      uid,
      displayName,
    },
  });
};

export const joinToGame = gameId => {
  const { uid, displayName } = currentUser();

  gamesRef(gameId).update({
    isStarted: true,
    player_two: {
      uid,
      displayName,
    },
  });
};

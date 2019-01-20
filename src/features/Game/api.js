import { gamesRef } from '@common/helpers/db';

export const gameMove = ({ gameId, field, uid }) => {
  console.log({
    field,
    nextMoveUser: uid,
  });

  return gamesRef(gameId).update({
    field,
    nextMoveUser: uid,
  });
};

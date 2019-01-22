import { gamesRef } from '@common/helpers/db';

export const gameMove = ({ gameId, field, uid }) =>
  gamesRef(gameId).update({
    field,
    nextMoveUser: uid,
  });

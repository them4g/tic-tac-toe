import { connect } from 'react-redux';
import { Game } from './Game';
import {
  playerOneSelector,
  playerTwoSelector,
  fieldSelector,
  nextMoveUserSelector,
} from './selectors';
import { userUidSelector } from '@common/components/User';
import { move } from './ducks';

const mapStateToProps = (state, props) => ({
  playerOne: playerOneSelector(state, props),
  playerTwo: playerTwoSelector(state, props),
  field: fieldSelector(state, props),
  uid: userUidSelector(state),
  nextMoveUser: nextMoveUserSelector(state, props),
});

const mapDispatchToProps = dispatch => ({
  move: data => dispatch(move(data)),
});

export const GameContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Game);

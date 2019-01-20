import { connect } from 'react-redux';
import { Root } from './Root';
import { userIsCheckSelector } from '@common/components/User';

const mapStateToProps = state => ({
  userIsCheck: userIsCheckSelector(state),
});

export const RootContainer = connect(mapStateToProps)(Root);

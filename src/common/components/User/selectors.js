import { createSelector } from 'reselect';

const userSelector = state => state.user;

export const userIsCheckSelector = createSelector(
  userSelector,
  user => user.isCheck,
);

export const userIsLoginedSelector = createSelector(
  userSelector,
  user => user.isLogined,
);

export const userDataSelector = createSelector(userSelector, user => user.data);

export const userNameSelector = createSelector(
  userDataSelector,
  data => data.displayName,
);

export const userUidSelector = createSelector(
  userDataSelector,
  data => data.uid,
);

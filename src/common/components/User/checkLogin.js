import firebase from 'firebase';
import { userCheck, userFulfilled } from '@common/components/User/ducks';

export const checkLogin = store => {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      store.dispatch(userFulfilled(user));
    } else {
      store.dispatch(userCheck());
    }
  });
};

import firebase from 'firebase';

export const rootRef = () => firebase.database().ref();
export const gamesRef = (id = '') => firebase.database().ref(`games/${id}`);
export const currentUser = () => firebase.auth().currentUser;

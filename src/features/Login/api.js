import firebase from 'firebase';

const provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

export const signIn = () =>
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(({ user, credential: accessToken }) => ({
      accessToken,
      user,
    }))
    .catch(({ code, message }) =>
      console.log(`Error code: ${code}, error message: ${message}`),
    );

export const signOut = () =>
  firebase
    .auth()
    .signOut()
    .then(() => true)
    .catch(({ code, message }) =>
      console.log(`Error code: ${code}, error message: ${message}`),
    );

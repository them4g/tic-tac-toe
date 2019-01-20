import firebase from 'firebase';

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DB_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE,
  messagingSenderId: process.env.SENDER_ID,
};

export const initFirebase = () => {
  firebase.initializeApp(firebaseConfig);
};

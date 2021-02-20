import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAlSmXB49npkemkCLg3zpwVbwiBG7doIeM',
  authDomain: 'crwn-clothing-db-f8502.firebaseapp.com',
  projectId: 'crwn-clothing-db-f8502',
  storageBucket: 'crwn-clothing-db-f8502.appspot.com',
  messagingSenderId: '880832762765',
  appId: '1:880832762765:web:76d27048df3bbae2dc23c4',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

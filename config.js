// firebase config key setup

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import {
  firebaseApikey,
  firebaseAuthDomain,
  firebaseProjectI,
  firebaseStorageBucket,
  firebaseMessagingSenderId,
  firebaseAppId,
} from '@env';

const firebaseConfig = {
  apiKey: 'AIzaSyD22ofBgkcbLAKTy7dJ8F1Vdw3NLYxWE7w',
  authDomain: 'baik-c576e.firebaseapp.com',
  projectId: 'baik-c576e',
  storageBucket: 'baik-c576e.appspot.com',
  messagingSenderId: '1065140443176',
  appId: '1:1065140443176:web:94f942e16c16834a19bd1d',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };

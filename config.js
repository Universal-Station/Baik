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
  apiKey: firebaseApikey,
  authDomain: firebaseAuthDomain,
  projectId: firebaseProjectI,
  storageBucket: firebaseStorageBucket,
  messagingSenderId: firebaseMessagingSenderId,
  appId: firebaseAppId,
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };

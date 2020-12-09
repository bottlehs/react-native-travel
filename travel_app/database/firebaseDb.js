// database/firebaseDb.js

import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyA_e_9v7U5ADxGVQ6gJEWwirEMaBHrpWeA', // your-api-key
  authDomain: 'travel-app-10ce5.firebaseapp.com', // your-auth-domain
  databaseURL: 'https://travel-app-10ce5-default-rtdb.firebaseio.com', // your-database-url
  projectId: 'travel-app-10ce5', // your-cloud-firestore-project
  storageBucket: 'travel-app-10ce5.appspot.com', // your-storage-bucket
  messagingSenderId: '000000000000000', // your-sender-id
  appId: '1:649634214271:android:4b394a29ae485e812a2a4a',
};

firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;

import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyCkGIdyvaBTCFcNOjwTv9CkCW_gzUQWy-Q',
    authDomain: 'documentaries-b036b.firebaseapp.com',
    projectId: 'documentaries-b036b',
    storageBucket: 'documentaries-b036b.appspot.com',
    messagingSenderId: '426685581746',
    appId: '1:426685581746:web:12993dee1ec71acda13cab',
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

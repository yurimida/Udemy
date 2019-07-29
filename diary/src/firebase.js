import * as firebase from 'firebase'

  var firebaseConfig = {
    apiKey: "AIzaSyDy-muzkShzAXetnvnHtMfxEngBPjjLPsg",
    authDomain: "diary-1f7d6.firebaseapp.com",
    databaseURL: "https://diary-1f7d6.firebaseio.com",
    projectId: "diary-1f7d6",
    storageBucket: "diary-1f7d6.appspot.com",
    messagingSenderId: "155152380669",
    appId: "1:155152380669:web:8cf8f49d5f796a7b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//   export const database = firebase.database().ref('/posts')
  export const database = firebase.firestore().collection('posts')
  
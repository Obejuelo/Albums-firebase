import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDLGRCo3cQdYvM0rLmbrXo7Evfa1Ip0yrg",
    authDomain: "ob-albums-react.firebaseapp.com",
    databaseURL: "https://ob-albums-react.firebaseio.com",
    projectId: "ob-albums-react",
    storageBucket: "ob-albums-react.appspot.com",
    messagingSenderId: "233209921914"
};

firebase.initializeApp(config);

export default firebase;
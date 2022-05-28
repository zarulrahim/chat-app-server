const firebase = require('firebase-admin')

function Firebase() {
  const config = {
    apiKey: "AIzaSyDmHMQQHquFsllME9PllHSa87rSwFtVKnw",
    authDomain: "crud-test-app-20fcd.firebaseapp.com",
    databaseURL: "https://crud-test-app-20fcd-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "crud-test-app-20fcd",
    storageBucket: "crud-test-app-20fcd.appspot.com",
    messagingSenderId: "175108617718",
    appId: "1:175108617718:web:fe438394a2a0cc66be43d7",
    measurementId: "G-YXMLE5C789"
  };
  firebase.initializeApp(config);
}

module.exports = {
  Firebase
}


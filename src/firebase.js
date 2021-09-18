import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAL74HFRUqwAerzByo23HdXNZoDoypDCYw",
  authDomain: "get-productive-app.firebaseapp.com",
  projectId: "get-productive-app",
  storageBucket: "get-productive-app.appspot.com",
  messagingSenderId: "761545074317",
  appId: "1:761545074317:web:0447190d2a7ea8774be4c4",
  measurementId: "G-4D9FN6GERB",
});

const db = firebaseApp.firestore();

export default db;

// import firebase from "firebase/compat/app";
// import "firebase/compat/firestore";

// const firebaseApp = firebase.initializeApp({
//   apiKey: "AIzaSyAL74HFRUqwAerzByo23HdXNZoDoypDCYw",
//   authDomain: "get-productive-app.firebaseapp.com",
//   projectId: "get-productive-app",
//   storageBucket: "get-productive-app.appspot.com",
//   messagingSenderId: "761545074317",
//   appId: "1:761545074317:web:0447190d2a7ea8774be4c4",
//   measurementId: "G-4D9FN6GERB",
// });

// const db = firebaseApp.firestore();

// export default db;

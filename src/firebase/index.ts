import firebase from "firebase";
import configuration from "../configuration";

const {
  apiKey,
  authDomain,
  projectId,
  databaseURL,
  storageBucket,
  messagingSenderId
} = configuration.firebase;

firebase.initializeApp({
  apiKey,
  authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId
});

export default firebase;

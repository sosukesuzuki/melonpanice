import firebase from ".";

const db = firebase.firestore();

export const melonpanice = db.collection("items").doc("melonpanice");

export default db;

import firebase from ".";
import { melonpanice } from "./db";

const increment = firebase.firestore.FieldValue.increment(1);

export default async function incrementSize(): Promise<void> {
  try {
    await melonpanice.update({
      x: increment,
      y: increment
    });
  } catch (error) {
    throw error;
  }
}

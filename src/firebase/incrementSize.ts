import firebase from ".";
import { melonpanice } from "./db";
import debounce from "lodash.debounce";

const increment = firebase.firestore.FieldValue.increment(1);

export default async function incrementSize(): Promise<void> {
  try {
    await melonpanice.update({
      x: increment,
      y: increment
    });

    const doc = await melonpanice.get();
    const { x } = doc.data()!;
    if (x > 100) {
      debounce(async () => {
      await melonpanice.update({
        x: 10,
        explosion_count: increment
      })}, 700)();
    }
  } catch (error) {
    throw error;
  }
}

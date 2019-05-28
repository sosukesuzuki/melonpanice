import firebase from ".";
import { melonpanice } from "./db";

const increment = firebase.firestore.FieldValue.increment(1);

export default async function incrementSize(): Promise<void> {
  try {
    await melonpanice.update({
      x: increment,
      y: increment
    });

    const doc = await melonpanice.get();
    const { x } = doc.data()!;
    if (x > 120) {
      await melonpanice.update({
        x: 10
      });
    }
  } catch (error) {
    throw error;
  }
}

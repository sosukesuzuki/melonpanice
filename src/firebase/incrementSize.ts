import firebase from ".";
import db, { melonpanice } from "./db";
import debounce from "lodash.debounce";

const increment = firebase.firestore.FieldValue.increment(1);

async function incrementExplosionCount(): Promise<void> {
  try {
    await db.runTransaction(async transaction => {
      const melonpaniceDoc = await transaction.get(melonpanice);

      if (!melonpaniceDoc.exists) {
        throw "Document does not exist!";
      }

      const explosion_count = melonpaniceDoc.data()!.explosion_count + 1;
      transaction.update(melonpanice, { explosion_count });
    });
  } catch (error) {
    throw error;
  }
}

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
          x: 10
        });
        await incrementExplosionCount();
      }, 700)();
    }
  } catch (error) {
    throw error;
  }
}

import db, { melonpanice } from "./db";

export default async function incrementSize(): Promise<void> {
  try {
    await db.runTransaction(async transaction => {
      const melonpaniceDoc = await transaction.get(melonpanice);
      if (!melonpaniceDoc.exists) {
        throw "Document does not exist!";
      }

      const newX = melonpaniceDoc.data()!.x + 1;
      const newY = melonpaniceDoc.data()!.y + 1;
      transaction.update(melonpanice, { x: newX, y: newY });
    });
  } catch (error) {
    throw error;
  }
}
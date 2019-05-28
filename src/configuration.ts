export default {
  firebase: {
    apiKey: process.env.FIREBASE_API_KEY || "elided",
    authDomain: process.env.FIREBASE_AUTH_DOMAIN || "elided",
    projectId: process.env.FIREBASE_PROJECT_ID || "elided",
    databaseURL: process.env.FIREBASE_DATABASE_URL || "elided",
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET || "elided",
    messagingSenderId: process.env.FIREBASE_MESSAGE_SENDER_ID || "elided"
  }
};

import { initializeApp, getApps, FirebaseApp } from 'firebase/app';
import { getFirestore, Firestore } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Validate configuration
const isConfigValid = Object.values(firebaseConfig).every(
  (value) => value !== undefined && value !== ''
);

// Initialize Firebase
let app: FirebaseApp | null = null;
let db: Firestore | null = null;

if (isConfigValid) {
  try {
    // Initialize only once
    if (getApps().length === 0) {
      app = initializeApp(firebaseConfig);
    } else {
      app = getApps()[0];
    }
    db = getFirestore(app);
    if (process.env.NODE_ENV === 'development') {
      console.log('✅ Firebase initialized successfully');
    }
  } catch (error) {
    console.error('❌ Firebase initialization error:', error);
    if (error instanceof Error) {
      console.error('Error details:', error.message);
    }
  }
} else {
  const missingVars = Object.entries(firebaseConfig)
    .filter(([_, value]) => !value)
    .map(([key]) => key);
  console.error('❌ Firebase configuration is missing. Missing variables:', missingVars);
}

export { db };
export default app;


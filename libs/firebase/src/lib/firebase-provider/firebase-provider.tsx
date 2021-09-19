import { FirebaseOptions } from 'firebase/app';
import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore';
import { FunctionComponent, memo } from 'react';
import {
  FirebaseAppProvider,
  FirestoreProvider,
  useFirebaseApp,
} from 'reactfire';

const firebaseConfig: FirebaseOptions = {
  apiKey: process.env.NX_FIREBASE_API_KEY,
  authDomain: process.env.NX_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NX_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NX_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NX_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NX_FIREBASE_APP_ID,
  measurementId: process.env.NX_FIREBASE_MEASUREMENT_ID,
};

const FirebaseServicesProvider: FunctionComponent = memo(({ children }) => {
  const firestore = getFirestore(useFirebaseApp());

  if (process.env.NODE_ENV !== 'production') {
    connectFirestoreEmulator(firestore, 'localhost', 8080);
  }

  return <FirestoreProvider sdk={firestore}>{children}</FirestoreProvider>;
});

export const FirebaseProvider: FunctionComponent = memo(({ children }) => {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <FirebaseServicesProvider>{children}</FirebaseServicesProvider>
    </FirebaseAppProvider>
  );
});

export default FirebaseProvider;

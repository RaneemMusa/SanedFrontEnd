// client/src/hooks/useFirebase.js
import { useState, useEffect } from 'react';
import { getFirestore } from 'firebase/firestore';
import {
  getAuth,
  signInAnonymously,
  signInWithCustomToken,
  onAuthStateChanged,
} from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig, initialAuthToken } from '../utils/constants.js';

// --- FIREBASE INITIALIZATION AND AUTHENTICATION HOOK ---
export const useFirebase = () => {
  const [db, setDb] = useState(null);
  const [auth, setAuth] = useState(null);
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let app;
    try {
      if (Object.keys(firebaseConfig).length > 0) {
        app = initializeApp(firebaseConfig);
        const firestore = getFirestore(app);
        const authentication = getAuth(app);

        setDb(firestore);
        setAuth(authentication);

        const unsubscribe = onAuthStateChanged(authentication, async (user) => {
          if (user) {
            setUserId(user.uid);
            setLoading(false);
          } else {
            try {
              if (initialAuthToken) {
                await signInWithCustomToken(authentication, initialAuthToken);
              } else {
                await signInAnonymously(authentication);
              }
            } catch (error) {
              console.error('Firebase Auth Error:', error);
              setLoading(false);
            }
          }
        });

        return () => unsubscribe();
      } else {
        console.error(
          'Firebase Config is missing or empty. Running in mock mode.'
        );
        setLoading(false);
      }
    } catch (e) {
      console.error('Failed to initialize Firebase:', e);
      setLoading(false);
    }
  }, []);

  return { db, auth, userId, loading };
};

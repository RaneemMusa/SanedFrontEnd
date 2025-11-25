// client/src/utils/constants.js

// ---------- COLOR TOKENS ----------
export const COLORS = {
  // used like: `bg-${COLORS.background}`, so NO "bg-" here
  background: 'white',
  text: 'gray-900',
  primary: 'teal-500',
  primaryDark: 'teal-700',
  card: 'white',
  secondary: 'cyan-200',
};

// ---------- APP ID FOR FIRESTORE ----------
export const appId = 'saned-app';

// ---------- VOICES FOR TTS ----------
export const VOICES = [
  { code: 'fi-FI-Standard-A', name: 'Calm Female' },
  { code: 'fi-FI-Standard-B', name: 'Calm Male' },
  { code: 'en-US-Standard-A', name: 'English Female' },
  { code: 'en-US-Standard-B', name: 'English Male' },
];

// ---------- CURRENT USER NAME HELPER ----------
export const getCurrentUserName = (userId) => {
  try {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('sanedUser');
      if (stored) {
        const parsed = JSON.parse(stored);
        return (
          parsed.name ||
          parsed.fullName ||
          parsed.username ||
          parsed.email ||
          'Saned User'
        );
      }
    }
  } catch (e) {
    console.warn('Could not read user from localStorage:', e);
  }

  if (userId) return `User ${userId.slice(0, 6)}…`;
  return 'Saned User';
};

// ---------- FIREBASE CONFIG ----------
const rawFirebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || '',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || '',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || '',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || '',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '',
};

// expose {} if nothing is set → useFirebase will go to mock mode
export const firebaseConfig = (() => {
  const hasAny = Object.values(rawFirebaseConfig).some(Boolean);
  return hasAny ? rawFirebaseConfig : {};
})();

// optional custom auth token (else anonymous)
export const initialAuthToken =
  import.meta.env.VITE_FIREBASE_CUSTOM_TOKEN || '';

import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
import {
  getAuth,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA_2MSdb3AxLJzYq-9sjxaRd6-psjiXtek',
  authDomain: 'tinkoff-fe663.firebaseapp.com',
  projectId: 'tinkoff-fe663',
  storageBucket: 'tinkoff-fe663.appspot.com',
  messagingSenderId: '1060998138595',
  appId: '1:1060998138595:web:ad3edae1757d9c76d4d3d6',
  measurementId: 'G-ZTFYJ8QBWN',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const register = (email: string, password: string) =>
  createUserWithEmailAndPassword(auth, email, password);
export const login = (email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password);
export const logout = () => signOut(auth);

export const db = getFirestore();

// const analytics = getAnalytics(app);

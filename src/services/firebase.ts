// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { getDatabase, ref } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAmQvFR1IOr6HEq7c9b9JWi4eWhLI_0zsk',
  authDomain: 'react-learn-c6b1a.firebaseapp.com',
  projectId: 'react-learn-c6b1a',
  storageBucket: 'react-learn-c6b1a.appspot.com',
  messagingSenderId: '982405885961',
  appId: '1:982405885961:web:dd483887fe93795b7648d8',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);

export const signUp = async (email: string, password: string) =>
  await createUserWithEmailAndPassword(firebaseAuth, email, password);

export const signIn = async (email: string, password: string) =>
  await signInWithEmailAndPassword(firebaseAuth, email, password);

export const logOut = async () => await signOut(firebaseAuth);

const db = getDatabase(app);
export const userRef = ref(db, 'user');
export const messagesRef = ref(db, 'messages');

export const getChatByID = (chatId: string) => ref(db, `messages/${chatId}`);
export const getMessagesByChatID = (chatId: string) =>
  ref(db, `messages/${chatId}/messageList`);

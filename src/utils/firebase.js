// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth, signOut,
  createUserWithEmailAndPassword, signInWithEmailAndPassword,
  onAuthStateChanged
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

// Initialize Firebase
initializeApp(firebaseConfig);
const auth = getAuth();

export const signInUser = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
  .then(() => {
    return null;
  })
  .catch((error) => {
    const message = error.message;
    console.log(message);
    return message;
  });
};

export const signUpUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      // Signed up
      return null;
    })
    .catch((error) => {
      const message = error.message;
      console.log(message);
      return message;
    });
};

export const authStateChangedListener = () => {
  return onAuthStateChanged(auth, (user) => {
    if (user) {
      return user;
      // dispatch(signInUser(user));
      // navigate('/browse');
    } else {
      return null;
      // dispatch(logoutUser());
      // navigate('/');
    }
  });
};

export const logoutUser = () =>{
  signOut(auth).then(() => {
    console.log('Sign-out successful');
  }).catch((error) => {
    const message = error.message;
    console.log(message);
  });
};


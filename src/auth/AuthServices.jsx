import { auth, googleProvider, githubProvider } from "./Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

// Sign up with email and password
export const signUpWithEmail = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const signInWithEmail = (email, password) => {
  try {
    return createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
  }
};

// Google sign-in
export const signInWithGoogle = () => {
  return signInWithPopup(auth, googleProvider);
};

// GitHub sign-in
export const signInWithGithub = () => {
  return signInWithPopup(auth, githubProvider);
};

// Sign out
export const logout = () => {
  return signOut(auth);
};

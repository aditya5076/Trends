import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCu92AGFp9Sjx8BeGjtVQ2-JQOFv62Oc4g",
  authDomain: "trends-db-600f5.firebaseapp.com",
  projectId: "trends-db-600f5",
  storageBucket: "trends-db-600f5.appspot.com",
  messagingSenderId: "1062920952642",
  appId: "1:1062920952642:web:4f3e127cd2a964be55c6db",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// SETUP FOR AUTHENTICATION
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

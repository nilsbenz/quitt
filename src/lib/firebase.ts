import { getApp, getApps, initializeApp } from "firebase/app";
import { GithubAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const githubProvider = new GithubAuthProvider();

const firebaseConfig = {
  apiKey: "[TODO]",
  authDomain: "[TODO]",
  projectId: "[TODO]",
  storageBucket: "[TODO]",
  messagingSenderId: "[TODO]",
  appId: "[TODO]",
};

const firebase = getApps().length ? getApp() : initializeApp(firebaseConfig);

const auth = getAuth(firebase);
const db = getFirestore(firebase);

export { auth, db, githubProvider };
export default firebase;

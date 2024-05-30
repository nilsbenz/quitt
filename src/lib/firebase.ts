import { getApp, getApps, initializeApp } from "firebase/app";
import { GithubAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const githubProvider = new GithubAuthProvider();

const firebaseConfig = {
  apiKey: "AIzaSyBdoR50RycwF1WG6kdDuXvnOs6cTl7z4QI",
  authDomain: "quitt-b461f.firebaseapp.com",
  projectId: "quitt-b461f",
  storageBucket: "quitt-b461f.appspot.com",
  messagingSenderId: "851959884319",
  appId: "1:851959884319:web:f88b2fc8f22b891572032a",
};

const firebase = getApps().length ? getApp() : initializeApp(firebaseConfig);

const auth = getAuth(firebase);
const db = getFirestore(firebase);

export { auth, db, githubProvider };
export default firebase;

import firebase from 'firebase/compat/app'; // Change import statement to 'firebase/compat/app' for Firebase v9 or later
import 'firebase/compat/auth'; // Change import statement to 'firebase/compat/auth' for Firebase v9 or later
import 'firebase/compat/firestore'; // Change import statement to 'firebase/compat/firestore' for Firebase v9 or later
import  { serverTimestamp } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA-gCSPvqhW6P8CZDwHGR8QLw032IPfOlA",
  authDomain: "clone-yt-8bb99.firebaseapp.com",
  projectId: "clone-yt-8bb99",
  storageBucket: "clone-yt-8bb99.appspot.com",
  messagingSenderId: "638060630654",
  appId: "1:638060630654:web:29edf43a99ac870baafe2f",
  measurementId: "G-58BBHB2TVF"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export const auth = firebaseApp.auth();
export const db = firebase.firestore();;
export const provider = new firebase.auth.GoogleAuthProvider();
export const firestore = firebaseApp.firestore();
export { serverTimestamp };
export default firebaseApp;













// import firebase from 'firebase/app';

// const firebaseConfig = {
//     apiKey: "AIzaSyC6OY2TrS3Ww6ccaE1bBKzGZ1zop2nX1sQ",
//     authDomain: "linkedin-clone-91faf.firebaseapp.com",
//     projectId: "linkedin-clone-91faf",
//     storageBucket: "linkedin-clone-91faf.appspot.com",
//     messagingSenderId: "372203515634",
//     appId: "1:372203515634:web:ac90cb06548f894a0e6a6b"
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();

// export { db, auth };


// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDpZ8YdTHXipl726DGpK-mSC5mR0pcDf4M",
//   authDomain: "contractor-to-client.firebaseapp.com",
//   databaseURL: "https://contractor-to-client.firebaseio.com",
//   projectId: "contractor-to-client",
//   storageBucket: "contractor-to-client.appspot.com",
//   messagingSenderId: "391773372101",
//   appId: "1:391773372101:web:cc95be3d956c3595b97aac",
//   measurementId: "G-E9HB3NFD17"
// };

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTHDOMAIN,
  databaseURL: process.env.FIREBASE_DATABASEURL,
  projectId: process.env.FIREBASE_PROJECTID,
  storageBucket: process.env.FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID,
  appId: process.env.FIREBASE_APPID,
  measurementId: process.env.FIREBASE_MEASUREMENTID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);


export { firestore }

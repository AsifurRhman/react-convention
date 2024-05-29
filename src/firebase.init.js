// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCIdegGymisgXFDRkGbst9MX9kOgNUd4Jg",
//   authDomain: "royal-convention-hall.firebaseapp.com",
//   projectId: "royal-convention-hall",
//   storageBucket: "royal-convention-hall.appspot.com",
//   messagingSenderId: "915126498332",
//   appId: "1:915126498332:web:e3cd447bd735bce7851bd9"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app)
//  export default app;
 

 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRt-ps0mxfTMJXVulgc2uo8soitmufCCc",
  authDomain: "royal-convention-hall-57680.firebaseapp.com",
  projectId: "royal-convention-hall-57680",
  storageBucket: "royal-convention-hall-57680.appspot.com",
  messagingSenderId: "766191215545",
  appId: "1:766191215545:web:c0e9e377cc557f30eacc68",
  measurementId: "G-JB3KD0HDEQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
 export default app;
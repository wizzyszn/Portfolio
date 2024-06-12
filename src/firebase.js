// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import  {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "wisdom-porfolio.firebaseapp.com",
  projectId: "wisdom-porfolio",
  storageBucket: "wisdom-porfolio.appspot.com",
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage
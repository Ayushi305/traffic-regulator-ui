import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC0Q4fhbj3zzypEIeFlj5MM8a6mHE3UmPo",
  authDomain: "traffic-regulator.firebaseapp.com",
  projectId: "traffic-regulator",
  storageBucket: "traffic-regulator.appspot.com",
  messagingSenderId: "308567024802",
  appId: "1:308567024802:web:86a6d7c66de07a8381e3fb",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
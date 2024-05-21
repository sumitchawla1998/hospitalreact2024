
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBevwXgV3KuUOksl0B8tO9774g-c-wvUF0",
  authDomain: "hospitalappbyneel.firebaseapp.com",
  projectId: "hospitalappbyneel",
  storageBucket: "hospitalappbyneel.appspot.com",
  messagingSenderId: "795508585935",
  appId: "1:795508585935:web:be38be377d85e71acf8eba"
};

const app = initializeApp(firebaseConfig);

export let auth = getAuth()
export let db = getFirestore()
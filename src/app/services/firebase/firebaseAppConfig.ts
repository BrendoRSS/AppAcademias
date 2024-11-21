import { initializeApp, getApps } from "firebase/app";

const firebaseAppConfig = {
    apiKey: "AIzaSyCSXhALZebrbI_9m98JXGfbwzIOaTBSoJU",
  authDomain: "appacademias.firebaseapp.com",
  projectId: "appacademias",
  storageBucket: "appacademias.firebasestorage.app",
  messagingSenderId: "784401816890",
  appId: "1:784401816890:web:0017a7ea82523e85128403",
  measurementId: "G-6WFCVG5EYS"
};

let firebase_app = getApps().length === 0 ? initializeApp(firebaseAppConfig) : getApps()[0];

export default firebase_app;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtZiiiuFSV_cK0L7PbZ2u1Hqa_99J95vs",
  authDomain: "simetrik-remediation-agent.firebaseapp.com",
  projectId: "simetrik-remediation-agent",
  storageBucket: "simetrik-remediation-agent.firebasestorage.app",
  messagingSenderId: "54550503998",
  appId: "1:54550503998:web:24017b5709c70c9f44e76f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };

// استيراد Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

// إعدادات Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB6bkOQadaycHOUjhgmRBpYzqNQcdWaZco",
  authDomain: "educore-1011e.firebaseapp.com",
  projectId: "educore-1011e",
  storageBucket: "educore-1011e.firebasestorage.app",
  messagingSenderId: "1001216911618",
  appId: "1:1001216911618:web:59720fae4e1829386c7a1b",
  measurementId: "G-BW44QDHZ24"
};

// تهيئة Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

// تصدير auth و db لاستخدامهم في الملفات الأخرى
export { auth, db };

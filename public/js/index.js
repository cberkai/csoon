import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  where,
  serverTimestamp,
  orderBy,
  updateDoc,
} from "firebase/firestore";
// import { getAuth, createUserWithEmail } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAuaqIV73qGpaGvW4m-NxeiZawDWPFXUGw",
  authDomain: "fir-3162c.firebaseapp.com",
  projectId: "fir-3162c",
  storageBucket: "fir-3162c.appspot.com",
  messagingSenderId: "792399299213",
  appId: "1:792399299213:web:bd7a7e2f3069012d0cd8c4",
};

initializeApp(firebaseConfig);

const db = getFirestore();

const colRef = collection(db, "Mail");

const q = query(colRef, orderBy("email", "desc"));

onSnapshot(q, (snapshot) => {
  let Mail = [];
  snapshot.docs.forEach((doc) => {
    Mail.push({ ...doc.data(), id: doc.id });
  });

  window.alert("Başarıyla Gönderildi.");
});

const mailEkleForm = document.querySelector(".signup");

mailEkleForm.addEventListener("submit", (e) => {
  e.preventDefault();

  addDoc(colRef, {
    email: mailEkleForm.signup.value,

    eklenmeTarihi: serverTimestamp(),
  }).then(() => {
    mailEkleForm.reset();
  });
});

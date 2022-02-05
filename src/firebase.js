import React, { useState, useEffect } from "react";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, collection, getDocs } from "firebase/firestore"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCCRlRiAEoEyIvhipzsCO0pEgGHTki_qaU",
    authDomain: "expensetracker-d3d05.firebaseapp.com",
    projectId: "expensetracker-d3d05",
    storageBucket: "expensetracker-d3d05.appspot.com",
    messagingSenderId: "814841758682",
    appId: "1:814841758682:web:3f2be59caa5628878a76e3",
    measurementId: "G-KSL894NY3R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore()
const tCollection = collection(db, 'transactions')

export { db, tCollection }
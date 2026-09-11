/* =========================================================
   CONFIGURACIÓN DE FIREBASE
   Esta información NO es secreta — Firebase está diseñado
   para que esta configuración viva en el navegador del
   usuario. La seguridad real la dan las reglas de Firestore
   y Authentication, no este archivo.
========================================================= */

const firebaseConfig = {
  apiKey: "AIzaSyDKvzBAWmg7aZNr6Zuhxi2ujajcXs7CoyY",
  authDomain: "alberto-garcia-nutricion.firebaseapp.com",
  projectId: "alberto-garcia-nutricion",
  storageBucket: "alberto-garcia-nutricion.firebasestorage.app",
  messagingSenderId: "737964241865",
  appId: "1:737964241865:web:f9d4d47ec451f491c26e18"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
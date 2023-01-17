 importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-app-compat.js');
 importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-messaging-compat.js');

 var config = {
  apiKey: "AIzaSyDegWlDiI18ppb_BXI6HzJm7U9O3zDn0eA",
  authDomain: "notifications-resilia.firebaseapp.com",
  databaseURL: "https://notifications-resilia-default-rtdb.firebaseio.com",
  projectId: "notifications-resilia",
  storageBucket: "notifications-resilia.appspot.com",
  messagingSenderId: "416666028638",
  appId: "1:416666028638:web:ed564e8002d26db968c2cf",
  measurementId: "G-FZ0HXPJG05"
 }

 firebase.initializeApp(config);

 const messaging = firebase.messaging();
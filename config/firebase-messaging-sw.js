importScripts('https://www.gstatic.com/firebasejs/8.2.5/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.5/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
 var firebaseConfig = {
    apiKey: "AIzaSyBdxLQp5bspKC4g-VXYKXayeWGSnWbnhFY",
    authDomain: "get-fitlive.firebaseapp.com",
    databaseURL: "https://get-fitlive.firebaseio.com",
    projectId: "get-fitlive",
    storageBucket: "get-fitlive.appspot.com",
    messagingSenderId: "307800118128",
    appId: "1:307800118128:web:f71b0decd1a93fec1e75b5",
    measurementId: "G-R4P9BPMJY1"
  };
firebase.initializeApp(firebaseConfig);


// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});
// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.6.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.1/firebase-messaging.js');

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDbAjZgyargpqT-f63ggGw7EmSHXe8WYCM",
  authDomain: "logindotema.firebaseapp.com",
  databaseURL: "https://logindotema-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "logindotema",
  storageBucket: "logindotema.appspot.com",
  messagingSenderId: "18917504816",
  appId: "1:18917504816:web:fc830e09e3f1f6decf7af5",
  measurementId: "G-DXHT3Z8HEL"
};





// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'You have new message';
    const notificationOptions = {
        body: payload.data.message,
        icon: payload.data.icon
    };

    return self.registration.showNotification(notificationTitle,
        notificationOptions);
});

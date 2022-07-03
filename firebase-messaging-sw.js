// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.6.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.1/firebase-messaging.js');

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAGqPj6W3HzMPbLL9FwG0YfGgYaFGFdJgg",
    authDomain: "kontek-5f8dd.firebaseapp.com",
    databaseURL: "https://kontek-5f8dd-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "kontek-5f8dd",
    storageBucket: "kontek-5f8dd.appspot.com",
    messagingSenderId: "46182993217",
    appId: "1:46182993217:web:e6828b6d47909cef1ba5c0"
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

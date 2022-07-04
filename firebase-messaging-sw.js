// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.6.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.1/firebase-messaging.js');

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyD49bULz6iShpi8veVEXtfBpR-ufJx0DC8",
    authDomain: "kontek-da223.firebaseapp.com",
    databaseURL: "https://kontek-da223-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "kontek-da223",
    storageBucket: "kontek-da223.appspot.com",
    messagingSenderId: "721799438883",
    appId: "1:721799438883:web:7ac31c8d4a3b107ee98796"
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

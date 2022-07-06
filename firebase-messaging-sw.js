// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.6.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.1/firebase-messaging.js');

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB8-kD50aGCBgHb0W9UU4GNMePQnNT_t48",
    authDomain: "kontek.indotema.com",
    databaseURL: "https://kontekindotema-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "kontekindotema",
    storageBucket: "kontekindotema.appspot.com",
    messagingSenderId: "1042512431058",
    appId: "1:1042512431058:web:6dbf23d000adcd7f33ea0b",
    measurementId: "G-Y4VL9X730V"
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

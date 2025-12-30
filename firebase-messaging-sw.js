importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyBm_1W_5MRFJEOJZ4-6itgacgSon3DG-H0",
  projectId: "supreme-chat-22cf4",
  messagingSenderId: "475930341104",
  appId: "1:475930341104:web:f3ee96117523bb914c5c35"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image || '/icon.png' 
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

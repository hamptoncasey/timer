self.addEventListener('push', function(event) {
  const options = {
    body: event.data ? event.data.text() : 'Timer finished!',
    icon: '/timer/icon-192x192.svg',
    badge: '/timer/icon-192x192.svg',
    vibrate: [200, 100, 200]
  };

  event.waitUntil(
    self.registration.showNotification('Timer Alert', options)
  );
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('/timer/')
  );
});
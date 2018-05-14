
self.postMessage(0);

self.addEventListener('message', function (msg) {
    if (msg.data === 'Hello') {
        self.postMessage(1);
    }
});

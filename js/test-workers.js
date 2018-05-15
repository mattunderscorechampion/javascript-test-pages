
self.postMessage(0);

self.addEventListener('message', function (msg) {
    if (msg.data === 'Hello') {
        self.postMessage(1);
    }
    else if (msg.data instanceof self.ArrayBuffer) {
        var view = new Int32Array(msg.data);
        if (view[0] === 2) {
            self.postMessage(3);
        }
    }
});

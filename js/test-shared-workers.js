
var ports = [];

self.addEventListener('connect', function(e) {
    var port = e.ports[0];
    ports.push(port);

    port.addEventListener('message', function(msg) {
        if (msg.data === 'message') {
            port.postMessage('received-message');
        }
        else if (msg.data instanceof self.ArrayBuffer) {
            var view = new Int32Array(msg.data);
            if (view[0] === 2) {
                port.postMessage('buffer');
            }
        }
        else {
            ports.forEach(function (p) {
                p.postMessage('broadcast');
            });
        }
    });

    port.start();
    port.postMessage('connected');
});

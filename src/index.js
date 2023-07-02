
(async () => {

    const express = require('express');
    const http = require('http');
    const { Server: WebSocketServer } = require('socket.io');

    const PORT = process.env.PORT || 8000;

    const app = express();
    app.use(express.static(__dirname + '/public'));

    const server = http.createServer(app);
    const io = new WebSocketServer(server);
    io.on('connection', (socket) => {

        console.log(`Nueva conexión aceptada del cliente ${socket.id}.`);

        // Each second sends a update-time event to the client.
        setInterval(() => {
            // get new time
            const time = new Date();

            // get h,m,s
            const hours = time.getHours();
            const mins = time.getMinutes();
            const secs = time.getSeconds();

            socket.emit('server:update-time', { hours, mins, secs });

        }, 1000);

    });

    server.listen(PORT, () => {
        console.log(`Servidor escuchando en el puerto ${PORT}.`);
    });

})();
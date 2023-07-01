
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

        socket.emit('ping');

        socket.on('pong', () => {
            console.log('pong recibido del cliente.');
        });

    });

    server.listen(PORT, () => {
        console.log(`Servidor escuchando en el puerto ${PORT}.`);
    });

})();
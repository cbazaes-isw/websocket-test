const socket = io();

socket.on('ping', () => {

    console.log('ping recibido del servidor');

    socket.emit('pong');

});
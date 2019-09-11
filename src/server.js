const express = require('express');
const socket = require('socket.io');
const app = express();
const server = app.listen(3000);
app.use(express.static('public'));
const io = socket(server);

io.sockets.on('connection', onConnection);

function onConnection(socket) {
    socket.on('chat message', newMessage);
    socket.on('disconnect', disconnected);

}

function disconnected() {
}

function newMessage(msg) {
    if (msg.type === "newMessage") {
        io.sockets.emit('chat message', msg);
    }
}
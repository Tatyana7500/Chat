const express = require('express');
const app = express();

const server = app.listen(3000);
app.use(express.static('public'));
console.log('my server is running');

const socket =require('socket.io');
const io=socket(server);

io.sockets.on('connection', newConnection);

function newConnection(socket) {
    console.log(`new connection: `+socket.id);
    socket.on('chat message', message);

    function message(msg) {
        if(msg.type==="newMessage"){
            io.sockets.emit('chat message', msg + 'echo');
        }
    }
    socket.on('disconnect', disconnected);
    function disconnected() {
        console.log('client has disconnected');

    }
}


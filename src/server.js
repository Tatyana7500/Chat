const bodyParser = require("body-parser");
const mongoDB = require('./db/mongoDB');
const socket = require('socket.io');
const express = require('express');
const constants = require('./constants');

const app = express();
app.use(express.static('public'));

const server = app.listen(3000);
const io = socket(server);

io.sockets.on('connection', handleConnection);

function handleConnection(socket) {
    socket.on(constants.MESSAGE, handleMessage);
}

function handleMessage(message) {
    switch (message.type) {
        case constants.MESSAGE:
            io.sockets.emit(constants.MESSAGE, message);
            break;
        default:
            console.log('unknown message type');
    }
}
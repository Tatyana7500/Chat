const socket = require('socket.io');
const express = require('express');
const constants = require('./constants');

const app = express();
app.use(express.static('public'));
app.use(express.json());

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



const User = function (name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
};
let users = [
    { name: 'Vasia', email: 'vasia@gmail.com', password: '123abc'},
    { name: 'Patya', email: 'patya@gmail.com', password: '453'},
    { name: 'Masha', email: 'masha@gmail.com', password: 'ggggg'}
];

let messages=[
    { date: '15.02.2019', email: 'vasia@gmail.com', msg: 'rrr'},
    { date: '19.05.2019', email: 'patya@gmail.com', msg: '555'},
    { date: '23.02.2017', email: 'masha@gmail.com', msg: '6ggdg'},
];

let DB = {
    findByEmail: function (email) {
        return users.find(value => value.email = email)
    }
};


app.post('/auth', function(request, res) {

    if (!request.body.email || !request.body.password) {
        res.status(401).send('Please pass email and password.')
    } else {
        let found = DB.findByEmail(request.body.email);
        if (found != null && found.password === request.body.password) {
            res.status(200).send(request.body);
        } else {
            res.status(400).send("User not exist or password not correct");
        }
    }
});

app.post('/signin', function(request, res) {

    let found = DB.findByEmail(request.body.email);
    if (found===request.body.email) {
        res.status(403).send("User already exists");
    } else if (!request.body.email || !request.body.name || !request.body.password) {
        res.status(401).send("Please fill all fields.");
    } else {
        res.status(201).send( "User added");
        users.push(request.body);
    }
});


app.get('/users', function(request, res) {
    res.status(200).send(users);

});

app.get('/messages', function(request, res) {
    res.status(200).send(messages);
});
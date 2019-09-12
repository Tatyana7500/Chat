const MainModel = function () {
    this._users = [];
    this._messages = [];

    const xhr = new XMLHttpRequest();

    this.getUsers = (onGetMessagesSuccess) => {
        sendGETRequest('/users', data => {
            this._users = JSON.parse(data);
            onGetMessagesSuccess(this._users);
        });
    };

    this.addMessages = (message, onGetSuccess) => {
        this.socket.emit('message', message);
        this.socket.on('message', this.func = (message) => {
            this._messages.push(message);
            onGetSuccess(this._messages);
        });
    };



    this.getMessages = (onGetMessagesSuccess) => {
        sendGETRequest('/messages', data => {
            this._messages = JSON.parse(data);
            onGetMessagesSuccess(this._messages);
        });
    };

    function sendGETRequest(url, callback) {

        xhr.open('GET', url, true);
        xhr.setRequestHeader("Content-type", "application/json");

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                callback(xhr.responseText);
            }
        };

        xhr.send();
    }

    this.socket = io.connect('http://localhost:3001/');
    this.socket.on('connect', function () { console.log("socket connected"); });
};
function DAO() {
}
DAO.prototype.initialize = function() {
    throw new Error('not implemented method');
};
DAO.prototype.readAll = function() {
    throw new Error('not implemented method');
};
DAO.prototype.create = function (object) {
    throw new Error('not implemented method');
};


function ChatDAL() {
    this.messagesDAO = null;
    this.usersDAO = null;
}

ChatDAL.prototype.initialize = function () {
    this.messagesDAO = this.createMessagesDAO();
    this.messagesDAO.initialize();

    this.usersDAO = this.createUsersDAO();
    this.usersDAO.initialize();
};

ChatDAL.prototype.createMessagesDAO = function(databaseType) {
    switch (databaseType) {
        case constants.MONGO:
            return new MongoDBMessagesDAO();
        case constants.POSTGRES:
            return new PostgresMessagesDAO();
        default:
            throw new Error('unknown databaseType');
    }
};
ChatDAL.prototype.createUsersDAO = function(databaseType) {
    switch (databaseType) {
        case constants.MONGO:
            return new MongoDBUsersDAO();
        case constants.POSTGRES:
            return new PostgresUsersDAO();
        default:
            throw new Error('unknown databaseType');
    }
};
ChatDAL.prototype.readAllMessages = function () {
    return this.messagesDAO.readAll();
};
ChatDAL.prototype.createMessage = function (message) {
    this.messageDAO.create(message);
};
ChatDAL.prototype.readAllUsers = function () {
    return this.usersDAO.readAll()
};
ChatDAL.prototype.createUser = function (user) {
    this.usersDAO.create(user);
};
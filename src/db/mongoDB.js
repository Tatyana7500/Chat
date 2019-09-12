const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const messagesSchema = new Schema({
        _id: mongoose.Types.ObjectId,
        content: String,
        sender: Number,
        receiver: Number,
        date: Number
});

const userScshema = new Schema({
        _id: mongoose.Types.ObjectId,
        name: String,
        email: String,
        password: String
});

module.exports = mongoose.model('Product', );

mongoose.connect("mongodb+srv://Kostya:Q1W2E3R4T5@cluster0-9w5kl.mongodb.net/test?retryWrites=true&w=majority",
    {useNewUrlParser: true}, (err) => {
        if (!err) {
            console.log("MongoDB is connected");
        } else {
            console.log("Error in connection : " + err);
        }
    }
);

function MongoDBMessagesDAO() {
}
MongoDBMessagesDAO.prototype = Object.create(DAO.prototype);
MongoDBMessagesDAO.prototype.constructor = MongoDBMessagesDAO;

function MongoDBUsersDAO() {
}
MongoDBUsersDAO.prototype = Object.create(DAO.prototype);
MongoDBUsersDAO.prototype.constructor = MongoDBUsersDAO;

const mongoose = require('mongoose');

mongoose.connect('mongodb://54.160.2.249:27019/vocabularyDB',{
    userNewUrlParser: true,
    userCreateIndex: true
});

const connection= mongoose.connection;

connection.once('open',() => {
    console.log("DB is connected");
});

module.exports = mongoose;

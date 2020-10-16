const mongoose = require('mongoose');

mongoose.connect('mongodb://mongodb/vocabularyDB',{
    userNewUrlParser: true,
    userCreateIndex: true
});

const connection= mongoose.connection;

connection.once('open',() => {
    console.log("DB is connected");
});

module.exports = mongoose;

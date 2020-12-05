const mongoose = require('mongoose');

mongoose.connect('mongodb://52.72.81.222:27019/vocabularyDB',{
    userNewUrlParser: true,
    userCreateIndex: true
});

const connection= mongoose.connection;

connection.once('open',() => {
    console.log("DB is connected");
});

module.exports = mongoose;

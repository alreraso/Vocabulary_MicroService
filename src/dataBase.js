const mongoose = require('mongoose');

mongoose.connect('mongodb://35.170.73.111:27019/vocabularyDB',{
    userNewUrlParser: true,
    userCreateIndex: true
});

const connection= mongoose.connection;

connection.once('open',() => {
    console.log("DB is connected");
});


module.exports = mongoose;

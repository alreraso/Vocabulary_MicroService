const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://mafe:mafe123@vocabularydb.hfggs.mongodb.net/vocabularyDB?retryWrites=true&w=majority',{
    userNewUrlParser: true,
    userCreateIndex: true
});

const connection= mongoose.connection;

connection.once('open',() => {
    console.log("DB is connected");
});


module.exports = mongoose;

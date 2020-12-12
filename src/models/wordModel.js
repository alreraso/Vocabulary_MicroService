const mongoose = require('mongoose');

const Words = new mongoose.Schema({
    name:{
        type: String,
        unique: true,
        required: true
    },
    category: {type: String,
        required: true,
    },
    image:{
        type: String,
        required: true
    },
    linkW:{
        type: String,
        required: true
    },
    meaning:{
        type: String,
        unique: true,
        required: true
    }
});

module.exports= mongoose.model('Words', Words);
const mongoose = require('mongoose');

const Category = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true
    },
    level:{
        type: String,
        required: true,
    }
});

module.exports= mongoose.model('Category', Category);
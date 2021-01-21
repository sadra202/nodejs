const mongoose = require('mongoose');

const todoSchema  = new mongoose.Schema({
    nom:String,
    description:String
});
module.exports=mongoose.model('todo',todoSchema);;

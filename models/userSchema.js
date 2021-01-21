const mongoose = require('mongoose');

const  userSchema  = new mongoose.Schema({
    password:String,
    email:String,
    todos:[]

});
module.exports=mongoose.model('user',userSchema);

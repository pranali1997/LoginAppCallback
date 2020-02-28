const mongoose=require('mongoose');

const LoginSchema= mongoose.Schema({
    email:{
        type: String
    },
    name:{
        type: String
    },
    password : {
        type : String
    }
},{
    timestamp: true
});

module.exports=mongoose.model('login',LoginSchema);
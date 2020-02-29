const mongoose = require('mongoose');

const LoginSchema = mongoose.Schema({
    email: {
        type: String,
    //    match: [/^[0-9a-zA-Z]+([.+_-]?[0-9a-zA-Z]+)*([@][0-9a-zA-Z]+){1}([.][a-zA-Z]{2,3}){1,2}$/, 'is invalid'],
        required: [true, "can't be blank"]
    },
    name: {
        type: String,
    //    match: [/[A-Z]{1}[a-z]{2,}$/,'is invalid'],
        required: [true, "can't be blank"]

    },
    password: {
        type: String,
    //    match:[/((?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{7,})*[+@#$%^&*!.()-]{1}/,'is invalid'],
        required: [true, "can't be blank"]

    },
    present: {
        type: Boolean,
        default:false
    }
}, {
    timestamp: true
});

module.exports = mongoose.model('login', LoginSchema);
const Login = require('../model/login.model')
// const express = require('express');
// const jwt = require('jsonwebtoken');

module.exports = {

    create(login, callback) {
        console.log("body content----------->", login);
        const objLogin = new Login()
        objLogin.name = login.name;
        objLogin.email = login.email;
        objLogin.password = login.password;
        objLogin.present = login.present;
        console.log('object login model-------->', objLogin);

        objLogin.save().then(data => {
            console.log("after save--------->", data);

            return callback(null, data);
        }).catch(err => {
            return callback({ message: "something went wrong" })
        })
    },

    findAll(data, callback) {
        // console.log("content inside body----------->", data.email);

        // console.log("login object model--------->", data);

        Login.find().then(data => {
            return callback(null, data)
        }).catch(err => {
            return callback({ message: "Error while retrieving login id" })
        })
    },

    findOne(data, callback) {
        console.log(data);
        Login.findOne(data)
            .then(data => {
                return callback(null, data)
            }).catch(err => {
                return callback({ message: "Error while retrieving note id" })
            })
    },

    findToken(data, callback) {
        console.log(data);
        Login.find(data)
            .then(data => {
                
                return callback(null, data)
            }).catch(err => {
                return callback({ message: "Error while retrieving login id" })
            })

    },

    findOneId(data, callback) {
        console.log(data);
        Login.findById(data)
            .then(data => {
                return callback(null, data)
            }).catch(err => {
                return callback({ message: "Error while retrieving note id" })
            })
    }
}
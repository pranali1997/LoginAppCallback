const service = require('../services/login.services');
const verify = require('../../verify.Token');
const jwt = require('jsonwebtoken');
const secretKey = "secretKey";
const bcrypt = require('bcryptjs');

module.exports = {

    create(req, res) {

        if (!req.body.email) {
            return res.status(500).send({
                message: "login cannot be empty"
            });
        }
        // console.log("body content------->", req.body.email);
        const login = {
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password),
            isPresent: req.body.isPresent
        };

        service.create(login, ((err, data) => {
            if (err) {
                res.status(500).send({
                    message: err.message || "some error has been occurred"

                })
            }
            // console.log("inside the controller", data);

            res.json(data);
        }))
    },

    findAll(req, res) {
        service.findAll(req, ((err, data) => {
            if (err) {
                res.status(500).send({
                    message: err.message || "some error has been occurred \0o0/"
                })
            }
            res.send(data);
            if (data) {
                this.findToken(data, callback);

            }
        }))

    },

    findOne(req, res) {

        service.findOne({ email: req.body.email }, ((err, data) => {
            if (err) {
                res.send("unsuccessful")
                message: err.message || "some error has been occurred"
            }
            stored_hash = req.body.password;
            verify.decodePassword(stored_hash, data.password, (err, data) => {
                if (err) {
                    res.send("please, enter valid password");
                }
                else {
                    verify.tokenFun(data, (err, data) => {
                        if (err) {
                            res.send("unsuccessful login")
                            console.log("something went wrong");
                        }
                    })
                    res.send("login successful.......");
                }
            })
        }))
    },

    findToken(req, res) {
        jwt.verify(req.headers.token, secretKey, (err, data) => {
            if (err) {
                console.log("something went wrong.....");
            }
            else {
                var tokenValue = req.headers.token;
                var header = jwt.decode(tokenValue);
                // console.log("header userId =============================>",header.userId);

                service.findOne(header.userId, ((err, data) => {
                    if (err) {
                        console.log("something went wrong........");
                    }
                    // console.log("data in findOneId---------------->", data);

                    res.send(data);
                }))
            }
        }
        )
    },

    findOneId(req, res) {
        service.findOneId(req.body._id, ((err, data) => {
            if (err) {
                message: err.message || "some error has been occurred"
            }
            verify.tokenFun(data, (err, data) => {
                if (err) {
                    console.log("something went wrong");
                }
            })
            res.send(data + "valid token.......");
        }))
    }

}
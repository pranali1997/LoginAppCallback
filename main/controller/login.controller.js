const service = require('../services/login.services');

exports.create = (req, res) => {

    if (!req.body.email) {
        return res.status(500).send({
            message: "login cannot be empty"
        });
    }
    console.log("body content------->", req.body.email);

    const login = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        isPresent: req.body.isPresent
    };

    service.create(login, ((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "some error has been occurred"

            })
        }
        console.log("inside the controller",data);

        res.json(data);
    }))
}

exports.findAll = (req, res) => {
    service.findAll(req, ((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "some error has been occurred \0o0/"
            })
        }
        res.send(data);
    }))

}

exports.findOne = (req,res)=>{

    service.findOne({email: req.body.email},((err,data)=>{
        if(err){
            message: err.message || "some error has been occurred"
        }
        res.send(data);
    }))
}
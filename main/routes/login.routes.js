module.exports= (app) =>{
    const login = require('../controller/login.controller');

    //api for loginCallback
    app.post('/login', login.create);

    app.get('/login',login.findAll);

    app.get('/login/:_Id',login.findOne);
}
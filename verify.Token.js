const jwt = require('jsonwebtoken');

exports.tokenFun = (userData, callback) => {

    const secretKey = "secretKey";
    login = {
        userId: userData.id
    };
    console.log('login contains user id ================>',login);
    
    jwt.sign(login, secretKey, (err, token) => {
        if (err) {
            console.log("error has been occurred", err);

        }
        else {
            console.log(token);

            return callback(null, token)
        }
    });
}
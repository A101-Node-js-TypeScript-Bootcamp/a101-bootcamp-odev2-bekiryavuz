const expressJwt = require('express-jwt');
const secret = "4f0934d7f99ddb9a6175d613141e51f02405c1cb";


function jwt(){
    return expressJwt({ secret, algorithms: ['HS256']}).unless({
        path: [
            '/api/user/login'
        ]
    });
}

module.exports = jwt;



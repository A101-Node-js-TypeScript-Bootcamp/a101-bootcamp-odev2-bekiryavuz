const jwt = require('jsonwebtoken');
const joi = require('joi');


exports.login =  (req, res) => {

    const schema = joi.object({
        username: joi.string()
            .alphanum()
            .min(3)
            .max(30)
            .required(),
    
        password: joi.string()
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    });
    


    (async function () {
        try{
          const result = await schema.validateAsync({username: req.body.username})
        }catch(e) {
            console.log(e.message)
            return await e.message;
        }})()
     
  


    if(req.body.username === 'bekiryavuz' && req.body.password === 'bekir123'){
        const secret = "4f0934d7f99ddb9a6175d613141e51f02405c1cb";
        const user = {
            name: 'Bekir',
            lastname: 'Yavuz',
            email: 'contact@bekiryavuz.com',
            age: 32,
            github: 'https://github.com/bekiryavuz',
            linkedin: 'https://www.linkedin.com/in/bekiryavuz/'
        }
        const token = jwt.sign(
            user,
            secret,
            { expiresIn: Math.floor(Date.now() / 1000) + (60 * 60)} // 1 hour
        );
        res.send({
            status : true,
            user,
            jwt: {
                token: token,
                expiresIn: Math.floor(Date.now() / 1000) + (60 * 60)
            }
        })
    }
    else{
        let response = {
            status : false
        }
        res.status(200).send(response)
    }  
}








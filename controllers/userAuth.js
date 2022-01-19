const jwt = require('jsonwebtoken');
const joi = require('joi');



//user auth functions 
exports.login =  (req, res) => {

    //username and password schema
    const schema = joi.object({
        username: joi.string()
            .alphanum()
            .min(3)
            .max(30)
            .required(),
    
        password: joi.string()
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    });
    

    //checking username and password from schema
    const checkEntryData = schema.validate({
        username : req.body.username,
        password : req.body.password
    })

      
    //If there are no errors
    if(!checkEntryData.error){

        //checking if username and password are correct
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

        //if we get invalid username or password
        else{
            let response = {
                status : false,
                message : "invalid username or password"
            }
            res.status(200).send(response)
        } 
    }

    //if username or password are not match with schema
    else{

        //password schema error, to hide the sent password
        if(checkEntryData.error.message.includes("password")){
            let response = {
                status : false,
                message : "Password is not matched with pattern: /^[a-zA-Z0-9]{3,30}$/"
            }
            res.status(401).send(response)
        }

        //username schema error
        else{
            res.status(401).send(checkEntryData.error.message)
        }  
    }     
}








const express = require('express');
let router = express.Router();
let userController = require('../../controllers/userAuth')
const joi = require('joi');

//pages
router.post('/login',  userController.login)







module.exports = router;
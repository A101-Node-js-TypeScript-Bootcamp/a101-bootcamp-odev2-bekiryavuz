const express = require('express');
let router = express.Router();
let userController = require('../../controllers/userAuth')



router.get('/',userController.fetchUser)
router.post('/login', userController.login)








module.exports = router;
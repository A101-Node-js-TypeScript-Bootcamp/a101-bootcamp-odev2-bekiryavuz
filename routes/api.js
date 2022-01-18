const express = require("express");
let router = express.Router();


//directory
const userRouter = require('./user/user')
const brandRouter = require('./brand/brand')


//routes 
router.use('/user', userRouter)
router.use('/brand', brandRouter)




module.exports = router;


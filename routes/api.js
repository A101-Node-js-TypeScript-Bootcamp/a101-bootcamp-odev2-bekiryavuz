var express = require("express");
let router = express.Router();


const apiRouter = require('./user/user')
const brandRouter = require('./brand/brand')



router.use('/user', apiRouter)
router.use('/brand', brandRouter)




module.exports = router;
const express = require('express');
const app = express();
const apiRouter = require("./routes/api");
const jwt = require('./helpers/jwt');
const errorHandler = require('./helpers/errorHandler');
const joi = require('joi');



app.use(express.json());
app.use(jwt());
app.use('/api',apiRouter);
app.use(errorHandler);





app.listen(3000,()=>{
    console.log("Server is running at the moment... ");
})


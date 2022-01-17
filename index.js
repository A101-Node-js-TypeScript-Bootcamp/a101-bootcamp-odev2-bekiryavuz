const express = require('express');
const app = express();
const apiRouter = require("./routes/api");


app.use(express.json());
app.use('/api',apiRouter);


module.exports = app;



app.listen(3000,()=>{
    console.log("Server is running ");
})
const express = require('express');

const routes = require('./Routes/index');

const port = 6589;
const hostname = "localhost";

const app = express();

app.use('/',routes);

app.listen(port,hostname,()=>{
    console.log(`server is running on ${hostname} : ${port}`);
})



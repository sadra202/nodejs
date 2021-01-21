const express = require('express')
//body parser
var bodyParser = require('body-parser');

// connection to database
const connect = require('./datebase/connect')
// routes
const todoApi=require('./route/todoApi');
const userApi=require('./route/userApi');

const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use('/todos', todoApi);
app.use('/users',userApi);

app.listen(8000,()=>console.log('Server listen on the port 6000')) ;



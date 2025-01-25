const express = require('express');
const userRouter = require('./routes/user.routes');
const app = express();
const path = require('path');


app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use('/user', userRouter)

app.listen('5050', () => {
    console.log("Server is running on port 5050");
    
})
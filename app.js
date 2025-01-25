const express = require('express');
const userRouter = require('./routes/user.routes');
const app = express();


app.set('view engin', 'public');

app.use('/user', userRouter)

app.listen('5050', () => {
    console.log("Server is running on port 5050");
    
})
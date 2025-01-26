const express = require('express');
const app = express();
const userRouter = require('./routes/user.routes');

const dotenv = require('dotenv')
dotenv.config();

const connectToDb = require('./config/db')
connectToDb();


app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use('/user', userRouter)

app.listen('5050', () => {
    console.log("Server is running on port 5050");
    
})
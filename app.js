const express = require('express');

const dotenv = require('dotenv')
dotenv.config();

const connectToDb = require('./config/db')
connectToDb();

const cookieParser = require('cookie-parser')

const app = express();
const userRouter = require('./routes/user.routes');
const indexRouter = require('./routes/index.routes');

app.set('view engine', 'ejs');
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use('/', indexRouter)
app.use('/user', userRouter)

app.listen('5050', () => {
    console.log("Server is running on port 5050");
    
})
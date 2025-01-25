const mongoose = require('mongoose')

function connectToDb(){
    mongoose.connect(process.env.MONGO_URI).then(() =>{
        console.log('CONNECTED TO DB');
        
    })
}

module.exports = connectToDb;
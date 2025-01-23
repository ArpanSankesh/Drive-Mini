const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send("Route Creatd")
})

app.listen('5050', () => {
    console.log("Server is running on port 5050");
    
})
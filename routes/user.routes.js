const express = require('express');
const router = express.Router();

const { body, validationResult } = require('express-validator');


router.get('/test', (req, res) =>{
    res.send('TESING THE ROUTES')
})

router.get('/register', (req, res) => {
    res.render('register')
})

router.post('/register',
    body('username').trim().isLength({min : 3}),
    body('email').trim().isEmail(),
    body('password').trim().isLength({min : 5}),
    (req, res) => {

    const errors = validationResult(req);
    console.log(errors);

    if(!errors.isEmpty()){
        return res.status(400).json({
            errors:errors.array(),
            message:"Invalid Data"
        })
    }
    

    // const {username, email, password} = req.body;
    // console.log(username, email, password);
    console.log(req.body);
    res.send("CONGRATS")
    
    
})


module.exports = router;
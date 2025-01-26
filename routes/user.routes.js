const express = require('express');
const router = express.Router();
const userModel = require('../models/user.model')
const bcrypt = require('bcrypt')

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

    async (req, res) => {

    const errors = validationResult(req);
    console.log(errors);

    if(!errors.isEmpty()){
        return res.status(400).json({
            errors:errors.array(),
            message:"Invalid Data"
        })
    }
    

    const {username, email, password} = req.body;

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = await userModel.create({
        username,
        email,
        password: hashPassword
    })

    res.json(newUser)
    
    
    
})

router.get('/login', (req,res) => {
    res.render('login')
})

router.post('/login', (req, res) => {
    body('username').trim().isLength({min : 3}),
    body('password').trim().isLength({min : 5}),

    async (req, res) => {
        
        const errors = validationResult(req);

        if(!errors.isEmpty()){
            return res.status(400).json({
                errors:errors.array(),
                messsage: 'Invalid data'
            }
            )
        }

        const {username, password} = req.body;

        const user = await userModel.findOne({
            username: username
        })
        if (!user) {
            return res.status(400).json({
                message: 'Username Or Password Is Incorrect'
            })
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(400).json({
                message: 'Username Or Password Is Incorrect'
            })
        }

    }
})


module.exports = router;
const express = require('express')
const router = express.Router()
const User = require('../models/User')
const {auth} = require('../middleware/auth')
const generateToken = require('../utils/generateToken')

// post, user login
router.post('/login', async(req, res) => {
    try {
        const {email, password} = req.body;
        //console.log("🚀 ~ file: userRoutes.js ~ line 11 ~ router.post ~ req.body", req.body)

        const user = await User.findOne({ email })

        if(user && (await user.matchPassword(password))) {
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken(user._id)
            })
        } else {
            res.status(404).json('Invalid email or password')
        }
    } catch (error) {
        res.status(500).json('Server error')
    }
})


// register new user
router.post('/register', async(req, res) => {
    try {
        const {name, email, password} = req.body;

        const userExist = await User.findOne({ email })

        if(userExist) {
            res.status(400).json('User with this email already exist')
        }

        const user = await User.create({
            name, email, password
        })
        

        if(user) {
            res.status(200).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken(user._id)
            })
        } else {
            res.status(400).json('Invalid user data')
        }
    } catch (error) {
        res.status(500).json('Server error')
    }
})

module.exports = router;
const express = require('express')
const userRoutes = express.Router()
const  {
    create,
    edit
} = require('../controllers/userControllers')

// const { helloWorld } = require('../controllers/helloWorld')

userRoutes.route('/')
.post(create)
.put(edit)

module.exports = userRoutes
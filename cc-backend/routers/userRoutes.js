const express = require('express')
const userRoutes = express.Router()
const  {
    create,
    edit,
    login
} = require('../controllers/userControllers')
const { auth } = require('../middlewares/userAuth')

// const { helloWorld } = require('../controllers/helloWorld')

userRoutes.route('/').post(create)
userRoutes.route('/:id').put(edit)
userRoutes.route('/login').post(auth, login)

module.exports = userRoutes
const express = require('express')
const userRoutes = express.Router()
const  {
    create,
    edit,
    generateApiKey
} = require('../controllers/userControllers')
// const { auth } = require('../middlewares/loginAuth')

// const { helloWorld } = require('../controllers/helloWorld')

userRoutes.route('/create').post(create)
userRoutes.route('/:id').put(edit)
userRoutes.route('/login').post(generateApiKey)


module.exports = userRoutes
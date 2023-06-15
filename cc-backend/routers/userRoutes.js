const express = require('express')
const userRoutes = express.Router()
const  {
    userLists,
    create,
    edit,
    generateApiLogin
} = require('../controllers/userControllers')
const { userAuth } = require('../middlewares/userAuth')

// const { helloWorld } = require('../controllers/helloWorld')
userRoutes.route('/lists').get(userLists)
userRoutes.route('/create').post(create)
userRoutes.route('/:id').put(userAuth, edit)
userRoutes.route('/login').post(generateApiLogin)


module.exports = userRoutes
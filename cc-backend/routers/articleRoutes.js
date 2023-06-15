const express = require('express')
const articleRoutes = express.Router()

const { 
    listArticles
} = require('../controllers/articleControllers')
// const { userAuth } = require('../middlewares/userAuth')


articleRoutes.route('/search').get(listArticles)

module.exports = articleRoutes
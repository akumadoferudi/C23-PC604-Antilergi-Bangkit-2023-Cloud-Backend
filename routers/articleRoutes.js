const express = require('express')
const articleRoutes = express.Router()

const { 
    listArticles, listAll
} = require('../controllers/articleControllers')
// const { userAuth } = require('../middlewares/userAuth')


articleRoutes.route('/search/:getResults').get(listArticles)
articleRoutes.route('/').get(listAll)

module.exports = articleRoutes
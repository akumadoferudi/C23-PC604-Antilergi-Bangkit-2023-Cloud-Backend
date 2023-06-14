const express = require('express')
const articleRoutes = express.Router()

const { 
    listArticles
} = require('../controllers/articleControllers')


articleRoutes.route('/search').get(listArticles)

module.exports = articleRoutes
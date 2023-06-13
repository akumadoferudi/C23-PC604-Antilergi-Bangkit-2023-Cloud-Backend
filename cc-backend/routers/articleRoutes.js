const express = require('express')
const articleRoutes = express.Router()

const { 
    listArticles
} = require('../controllers/articleControllers')


articleRoutes.route('/').get(listArticles)

module.exports = router
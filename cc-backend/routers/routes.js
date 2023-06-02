const express = require('express')
const router = express.Router()

const { helloWorld } = require('../controllers/helloWorld')


router.route('/').get(helloWorld)

module.exports = router
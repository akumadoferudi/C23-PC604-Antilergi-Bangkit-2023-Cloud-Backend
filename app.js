const express = require('express')
const app = express()
require('dotenv').config()  // for read env file
const router = require('./routers/routes')
const articleRoutes = require('./routers/articleRoutes')
const userRoutes = require('./routers/userRoutes')
PORT = 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/', router)
app.use('/articles/', articleRoutes)
app.use('/user/', userRoutes)

app.listen(PORT, () => { console.log(`listening on PORT:${PORT}`) })
const express = require('express')
const app = express()
require('dotenv').config()  // for read env file
const router = require('./routers/routes')
const articleRoutes = require('./routers/articleRoutes')
const userRoutes = require('./routers/userRoutes')
PORT = 8080
HOST = 'localhost'

// app.use('/', router)
app.use(express.json())
app.use('/articles/', articleRoutes)
app.use('/user/', userRoutes)

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

// const syncModel = async () => {
//   await sequelize.sync({ force: true });
//   console.log("All models were synchronized successfully.");
// }
// syncModel();

app.listen(PORT, () => { console.log(`listening on http://${HOST}:${PORT}`) })
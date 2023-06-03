const express = require('express')
const app = express()
// const { Sequelize } = require('sequelize')
require('dotenv').config()  // for read env file
const router = require('./routers/routes')
const HOST = process.env.HOST || 'localhost'
const PORT = process.env.PORT || 8000

// db env
// const db = process.env.DB || 'antilergi'
// const username = process.env.USERNAME || 'admin'
// const password = process.env.PASSWORD || 'admin123'
// const dbHost = process.env.DBHOST || 'localhost'
// const dbDriver = process.env.DBDRIVER || 'mysql'

// connect to DB orm
// const sequelize = new Sequelize('antilergi', 'user', 'password', {
//     host: 'dbHost',
//     dialect: 'dbDriver',
//   })

//   try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }

app.use('/', router)

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

// const syncModel = async () => {
//   await sequelize.sync({ force: true });
//   console.log("All models were synchronized successfully.");
// }
// syncModel();

app.listen(PORT, () => { console.log(`listening on http://${HOST}:${PORT}`) })
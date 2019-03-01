const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const router = express.Router()

var app = express()

const pagesRouter = require('./pages/pages.router')

mongoose.connect(`mongodb://dontmd-db:27017/dev`)
mongoose.connect(`mongodb://dontmd-db:27017/${process.env.DB_NAME}`)

var dbConnection = mongoose.connection

dbConnection.on('error', console.error.bind(console, 'connection error:'))
dbConnection.once('open', () => console.log('Database is connected'))

// var corsOptions = {
//   origin: 'http://0.0.0.0:8080/',
//   optionsSuccessStatus: 200
// }

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())

router.get('/', (req, res) => {
  res.status(200).json({
    msg: 'hey I am working!'
  })
})

router.use('/pages', pagesRouter)

app.use('/', router)

module.exports = app

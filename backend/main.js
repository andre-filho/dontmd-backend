const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

var app = express()
const router = express.Router()

const pagesRouter = require('./pages/pages.router')

mongoose.connect(`mongodb://db:27017/dev`)
mongoose.connect(`mongodb://db:27017/${process.env.DB_NAME}`)

var dbConnection = mongoose.connection

dbConnection.on('error', console.error.bind(console, 'connection error:'))
dbConnection.once('open', () => console.log('Database is connected'))

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router.get('/', (req, res) => {
  res.status(200).json({
    msg: 'hey I am working!'
  })
})

router.use('/pages', pagesRouter)

app.use('/', router)

module.exports = app

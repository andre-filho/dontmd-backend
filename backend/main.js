const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

var app = express()
const router = express.Router()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 3000
const host = process.env.HOST || 'localhost'
const pagesRouter = require('./pages/pages.router')


router.get('/', (res) => {
  res.json({
    msg: 'hey I am working!'
  })
})

router.use('/pages', pagesRouter)

app.listen(port, host)
console.log(`app is running on host: ${host} port: ${port}`)

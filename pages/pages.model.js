const mongoose = require('mongoose')

const pageSchema = new mongoose.Schema({
  name: {
    type: 'String',
    required: true,
    unique:  true
  },
  content: 'String'
})

const Page = mongoose.model('Page', pageSchema)

module.exports = Page

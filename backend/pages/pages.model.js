const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: {
    type: 'String',
    required: true,
    unique:  true
  },
  content: {
    type: 'String',
    required:true
  }
})

const Page = mongoose.model('Page', schema)

export default Page

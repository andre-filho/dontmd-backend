const express = require('express')
const router = express.Router()
const Page = require('./pages.model')

// get all
router.get('/', (req, res) => {
  Page.find()
    .then(pages => (res.status(200).json(pages)))
    .catch(err => (res.status(500).json({error: err})))
})

// create
router.post('/', (req, res) => {
  const page = new Page({
    name: req.body.name
  })

  page.save()
    .then(() => {
      res.status(201).json({pageName: page.name})
    })
    .catch((err) => {
      // res.status(400).send(err)
      if (err.name === 'MongoError' && err.code === 11000) {
        return res.status(400).send({message: 'Already exists'});
      } if (err.name === 'ValidationError') {
        return res.status(400).send({message: 'Invalid data'});
      }
      // return res.status(400).send('asdojasoijad');
    })
})

// get one
router.get('/:name', (req, res) => {
  Page.findOne({name: req.params.name})
    .then((page) => {
      res.status(200).json(page)
    })
    .catch(err => res.status(500).json({error: err}))
})

// edit
router.patch('/edit/:name', (req, res) => {
  console.log(`RECIEVED: ${req.params.name} ${req.body.content}`)

  const update = {content: req.body.content}

  Page.updateOne({name: req.params.name}, update).then(result => {
    console.log('updated')
    res.status(200).json({message: "Updated"})
  }).catch((err) => {
    console.log(`ERROR: ${err}`)
  })
})

// delete
router.delete('/delete/:name', (req, res) => {
  Page.findOneAndDelete({name: req.params.name})
    .then((success) => {
      res.status(200).json(success)
    })
})

module.exports = router

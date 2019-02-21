const express = require('express')
// const app = express()
// const mongoose = require('mongoose')

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
      if (err.name === 'MongoError' && err.code === 11000) {
        return res.status(400).send({message: 'Already exists'});
      } if (err.name === 'ValidationError') {
        return res.status(400).send({message: 'Invalid data'});
      }
      // Some other error
      return res.status(400).send(err);
    })
})

// get one
router.get('/:name', (req, res) => {
  Page.findOne({name: req.params.name})
    .then((page) => {
      if (!page) {
        return res.status(404)
      }

      res.status(200).json(page)
    })
    .catch(err => res.status(500).json({error: err}))
})

// edit
router.patch('/:name', (req, res) => {
  Page.find({name: req.params.name})
    .then((page) => {
      const p = page
      if (!p) {
        return res.status(404)
      }
      
      p.content = req.body.content
      p.save((err) => {
        if (err) {
          return res.status(500).send(err);
        }
        return res.status(200).send(p);
      })
    })
})

// delete
router.delete('/:name', (req, res) => {
  Page.findOneAndDelete({name: req.params.name})
    .then((success) => {
      res.status(200).json(success)
    })
})

module.exports = router

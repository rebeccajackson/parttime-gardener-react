const express = require('express')
const db = require('../db/db')
const router = express.Router()

router.use(express.json())

router.get('/', (req,res)=>{
  db.getVeges()
  .then(veges => {
    res.json(veges)
  })
})

router.post('/veg', (req,res)=> {
  db.getUserVeges(req.body.username)
  .then(veges =>{
    console.log(veges)
    res.json(veges)
  })
})

module.exports = router
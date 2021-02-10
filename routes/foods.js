const express = require('express')
const bodyParser = require('body-parser')
const Food = require('../models/food')


const foodRouter = express.Router()
foodRouter.use(bodyParser.json())

foodRouter.route('/')
.get((req,res,next) => {
    Food.find({})
    .then(foods => {
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.json(foods)
    }, err => next(err))
    .catch(err => next(err))
})

.post((req,res,next) => {
    Food.create(req.body)
    .then(food => {
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.json(food)
    }, err => next(err))
    .catch(err => next(err))
})

module.exports = foodRouter
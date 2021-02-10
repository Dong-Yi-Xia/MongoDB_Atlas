const mongoose = require('mongoose')

let foodScheme = new mongoose.Schema({
    name: String,
    price: String
})

let food = mongoose.model('Food', foodScheme)
module.exports = food
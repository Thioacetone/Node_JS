const mongoose = require('mongoose')

const { Schema } = mongoose

const userModels = new Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    dateOfBirth: String,
    address: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('User', userModels)
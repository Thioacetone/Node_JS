const mongoose = require('mongoose')

const { Schema } = mongoose

const postModels = new Schema({
    title: {
        type: String,
        required: true,
    },
    content: String,
})

module.exports = mongoose.model('Post', postModels)
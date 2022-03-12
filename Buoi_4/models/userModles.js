const mongoose = require('mongoose')

const { Schema } = mongoose

const userModels = new Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    roles: {
        type: String,
        enum: ['user', 'admin'],
        default: "user",
    },
    posts: {
        type: Schema.Types.ObjectId,
        ref: 'Post',
    }
})

module.exports = mongoose.model('User', userModels)
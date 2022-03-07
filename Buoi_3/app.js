const express = require('express')

const app = express()

app.use(express.json())

const router = require('./routers/userRouter')

app.use('/user', router)

const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/user').then(result => {
    console.log('Successful!')
    app.listen(3000, () => {
        console.log('Server listening on port 3000!')
    })
}).catch(err => {
    console.log('Server error!')
})
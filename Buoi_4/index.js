const express = require('express')

const app = express()

app.use(express.json())

const mongoose = require('mongoose')

const userRouter = require('./routers/userRouter')
const postRouter = require('./routers/postRouter')

mongoose.connect('mongodb://localhost/ivet').then(() => {
    console.log('Connection!')
}).catch((err) => {
    console.log(err)
})

app.use('/api/user', userRouter)
app.use('/api/post', postRouter)

app.listen(3000, () => {
    console.log('Server listening on port 3000')
})
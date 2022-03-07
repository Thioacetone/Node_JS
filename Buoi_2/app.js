const express = require('express')

const app = express()

app.use(express.json())

const data = [{ id: 1, name: "Viet", age: 18 },
    { id: 2, name: "Hoang", age: 19 }
]

app.get('/', (req, res) => {
    res.json(data)
})

app.post('/', (req, res) => {
    let user = req.body
    data.push(user)
    res.send('Success!')
})

app.put('/:id', (req, res) => {
    let user = req.body
    let { id } = req.params
    let index = data.findIndex((user) => id == user.id)
    if (index === -1) {
        res.send('User not found!')
    }

    data[index].name = user.name
    data[index].age = user.age
    res.send('Success!')
})

app.delete('/:id', (req, res) => {
    let { id } = req.params
    let index = data.findIndex((user) => id == user.id)
    if (index === -1)
        res.send('User not found!')
    data.splice(index, 1)
    res.send('Success!')
})

app.listen(3000, () => {
    console.log('Listening port 3000')
})
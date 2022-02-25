const express = require('express')

const app = express()

const port = 3000

app.use(express.json())

app.use('/static', express.static('public'))

data = [{
        id: 1,
        name: "Viet",
        age: 19,
    },
    {
        id: 2,
        name: "ChinSu",
        age: 20,
    },
]

app.get('/users', (req, res) => {
    res.json(data)
})

app.post('/users', (req, res) => {
    let user = req.body;

    data.push(user);

    res.send("Add user seccessful!")
})

app.put('/users/:id', (req, res) => {
    let user = req.body
        // lay du lieu tu body
    let { id } = req.params
        // lay id can sua
    let index = data.findIndex((user) => id == user.id)
        // tra ve index cua id
    if (index === -1) return res.send("User not found!")
    data[index].name = user.name
    data[index].age = user.age

    res.send("Edit user successful!")
})

app.delete('/users/:id', (req, res) => {
    let user = req.body
        // lay user tu body
    let { id } = req.params
        // lay id user can xoa
    let index = data.findIndex((user) => id == user.id)
        // tra ve index cua id
    if (index === -1) return res.send("User not found!")
        // check normal
    data.splice(index, 1)
        // cut ??
    res.send("Delete user successful!")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})
const User = require('../models/userModles')

const asyncHandle = require('../utils/asyncHandle')

const getAllUser = asyncHandle(async(req, res, next) => {
    const users = await User.find().populate('posts')

    res.status(200).json({
        status: 'Success!'
    })
})

const getUser = asyncHandle(async(req, res, next) => {
    let { id } = req.params
    const user = await User.findById(id).populate('posts')
    res.status(200).json({
        data: user,
    })
})

const createUser = asyncHandle(async(req, res, next) => {
    const user = await User.create(req.body)
    res.status(201).json({
        status: 'Success!',
        newUser: user,
    })
})

const updateUser = asyncHandle(async(req, res, next) => {
    let { id } = req.params
    let check = User.findById((user) => id == user.id)
    if (check === -1) {
        res.send('Id not found!')
    } else {
        let users = await User.findByIdAndUpdate(id, req.body)
        res.status(200).json({
            status: 'Success!',
        })
    }
})

const deleteUser = asyncHandle(async(req, res, next) => {
    let { id } = req.params
    let check = User.findById((user) => id == user.id)

    if (check === -1) {
        res.send('Id not found!')
    } else {
        let users = User.findByIdAndDelete(id)
        res.status(204).json({
            status: 'Delete user success!',
        })
    }
})

const getUserByAge = asyncHandle(async(req, res, next) => {
    const users = await User.find({ age: { $gte: 18, $lte: 40 } }).populate('posts')

    res.status(200).json({
        status: 'OK',
        list: users,
    })
})

const getUserName = asyncHandle(async(req, res, next) => {
    const users = await User.find({ name: /^h/ }).populate('posts')
    res.status(200).json({
        status: 'OK',
        list: users,
    })
})

module.exports = { getAllUser, getUser, createUser, updateUser, deleteUser, getUserByAge, getUserName }
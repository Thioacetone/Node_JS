const express = require('express')

const User = require('../models/userModels')

const getAllUser = async(req, res) => {
    try {
        const users = await User.find()
        res.status(201).json({
            status: "Successful!",
            data: users,
        })
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error,
        })
    }
}

const createUser = async(req, res) => {
    try {
        const user = await User.create(req.body)
        res.status(201).json({
            status: "Success",
        })
    } catch (err) {
        res.status(404).json({
            status: "Fail",
            message: err,
        })
    }

}

const updateUser = async(req, res) => {
    try {
        let { id } = req.params
        let user = await User.findByIdAndUpdate(id, req.body)
        res.status(201).json({
            status: 'Success',
            data: user
        })
    } catch (err) {
        res.status(404).json({
            status: "Fail"
        })
    }
}

const deleteUser = async(req, res) => {
    try {
        let { id } = req.params
        let user = await User.findByIdAndDelete(id)
        res.status(201).json({
            status: 'Success',
            data: null
        })
    } catch (err) {
        res.status(404).json({
            status: "Fail"
        })
    }
}

module.exports = { getAllUser, createUser, updateUser, deleteUser }
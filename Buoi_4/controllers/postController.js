const express = require('express')

const Post = require('../models/postModels')

const asyncHandle = require('../utils/asyncHandle')

const getAllPost = asyncHandle(async(req, res, next) => {
    const posts = await Post.find()
    res.status(200).json({
        status: 'Success!',
    })
})

const createPost = asyncHandle(async(req, res, next) => {
    const post = await Post.create(req.body)

    res.status(200).json({
        status: 'Success!',
    })
})

module.exports = { getAllPost, createPost }
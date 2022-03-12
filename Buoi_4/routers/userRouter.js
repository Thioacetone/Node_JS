const express = require('express')

const router = express.Router()

const userController = require('../controllers/userController')
const authMiddleware = require('../middlerware/authMiddleware')

router.route('/')
    .get(authMiddleware, userController.getAllUser)
    .post(userController.createUser)

router.route('/getUserName')
    .get(authMiddleware, userController.getUserName)

router.route('/getUserByAge')
    .get(authMiddleware, userController.getUserByAge)

router.route('/:id')
    .get(userController.getUser)
    .put(userController.updateUser)
    .delete(userController.deleteUser)

module.exports = router
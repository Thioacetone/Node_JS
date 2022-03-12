const User = require('../models/userModles')

module.exports = async(req, res, next) => {
    const { id } = req.query
    const user = await User.findById(id)
    if (!user) {
        res.status(404).json({
            message: 'User does not exist!'
        })
    }
    if (user.roles === 'user') {
        res.status(404).json({
            message: 'Not have asscess!'
        })
    }
    return next()
}
const Users = require('../models/userModel')
const catchAsyncErrors = require('../middlewares/catchAsyncErrors')
const sendToken = require('../utils/jwtToken')

// Register a new user
exports.registerUser = catchAsyncErrors(async (req, res) => {
    const { name, email, password } = req.body

    const user = await Users.create({
        name,
        email,
        password,
        avatar: {
            public_id: 'sample-id',
            url: '/default-profile.jpg'
        }
    })

    sendToken(user, 201, res)
})

// Get all users --> Admin
exports.getAllUsers = catchAsyncErrors(async (_, res) => {
    const users = await Users.find()

    res.status(200).json({
        success: true,
        users
    })
})
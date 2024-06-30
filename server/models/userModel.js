const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter your name.'],
        maxLength: [30, 'Name cannot exceed 30 characters.'],
        minLength: [3, 'Name should be atleast 3 characters long.'],
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'Please enter your email.'],
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: [true, 'Please enter your password.'],
        minLength: [8, 'Password should be atleast 8 characters long.'],
        select: false,
    },
    avatar: {
        public_id: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
    },
    subscriptionType: {
        type: String,
        enum: ['free', 'basic', 'standard', 'premium'],
        default: 'free',
    },
    subscriptionStartDate: {
        type: Date,
        default: Date.now,
    },
    subscriptionEndDate: {
        type: Date,
    },
    role: {
        type: String,
        enum: ['User', 'Admin'],
        default: 'User'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date
})

// JSON Web Token
userSchema.methods.getJWT = function () {
    return jwt.sign({ id: this._id }, process?.env?.JWT_SECRET, {
        expiresIn: process?.env?.JWT_EXPIRE
    })
} 


module.exports = mongoose.model('Users', userSchema)
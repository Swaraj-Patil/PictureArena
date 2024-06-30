const express = require('express')
const {
    registerUser,
    getAllUsers,
} = require('../controllers/userController')

const router = express?.Router()

/**
 * @swagger
 * tags:
 *    name: Users
 *    description: The Users management API
 * /api/v1/users:
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 default: "Mukesh Ambani"
 *               email:
 *                 type: string
 *                 default: "mukesh@reliance.com"
 *               password:
 *                 type: string
 *                 default: "password"
 *               avatar:
 *                 type: object
 *                 properties:
 *                   public_id:
 *                     type: string
 *                     default: "sample_id"
 *                   url:
 *                     type: string
 *                     default: '/default-profile.jpg'
 *               subscriptionType:
 *                 type: string
 *                 enum: [free, basic, standard, premium]
 *                 default: "free"
 *     responses:
 *       201:
 *         description: User created successfully
 */
router?.post('/users', registerUser)

/**
 * @swagger
 * tags:
 *    name: Users
 *    description: The Users management API
 * /api/v1/admin/users:
 *   get:
 *     summary: Get all registered users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Users fetched successfully
 */
router?.get('/admin/users', getAllUsers)


module.exports = router


// $ref: '#/components/schemas/Users'

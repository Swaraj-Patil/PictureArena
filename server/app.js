// Basic Imports
const express = require('express')
const cors = require('cors')
const connectDatabase = require('./config/database')
const setupSwagger = require('./config/swagger')
// Route Imports
const users = require('./routes/userRoutes')

// Handling uncaught exception
process.on('uncaughtException', error => {
    console.log(`Error: ${error?.message}`)
    console.log('Shutting down the server due to uncaught exception.')

    process.exit(1)
})

// Config
if (process?.env?.NODE_ENV !== 'PRODUCTION') {
    require('dotenv').config({ path: './config/.env.local' })
}

const app = express()

// Connect to database
connectDatabase()

// Middlewares
app.use(express.json())             // To parse incoming JSON data from HTTP requests
app.use(cors())                     // Server access by another origins

// Setup Swagger
setupSwagger(app)

// Routes
app.use('/api/v1', users)

// Run the server
const PORT = process?.env?.PORT || 5000
const server = app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))

// Unhandled promise rejection
process.on('unhandledRejection', error => {
    console.log(`Error: ${error?.message}`)
    console.log('Shutting down the server due to unhandled promise rejection.')

    server.close(() => process.exit(1))
})
const mongoose = require('mongoose')

const connectDatabase = async () => {
    try {
        const data = await mongoose.connect(process?.env?.MONGO_URI)
        console.log(`MongoDB is connected with the server ${data?.connection?.host}:${data?.connection?.port} on ${data?.connection?.name}`)

    } catch (error) {
        console.log(`MongoDB connection error`, error?.message)
        process.exit(1)
    }
}

module.exports = connectDatabase
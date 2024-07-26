const swaggerJsdoc = require('swagger-jsdoc')
const swaggerUI = require('swagger-ui-express')

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'PictureArena API',
            version: '1.0.0',
            description: 'API documentation for the PictureArena OTT platform'
        }
    },
    apis: [
        './routes/*.js'
    ]
}

const swaggerSpecs = swaggerJsdoc(options)

const setupSwagger = app => {
    app.use(
        '/docs', 
        swaggerUI.serve,
        swaggerUI.setup(swaggerSpecs, { explorer: true })
    )
}

module.exports = setupSwagger
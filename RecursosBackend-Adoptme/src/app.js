import express from 'express'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'

import usersRouter from './routes/users.router.js'
import petsRouter from './routes/pets.router.js'
import adoptionsRouter from './routes/adoption.router.js'
import sessionsRouter from './routes/sessions.router.js'
import __dirname from './utils/index.js'
import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUiExpress from 'swagger-ui-express'

const app = express()
const PORT = process.env.PORT || 8080
const connection = mongoose.connect(
  `mongodb+srv://admin:admin@coder50000.s8dhnim.mongodb.net/?retryWrites=true&w=majority&appName=Coder50000`
)

const swaggerOptions = {
  definition: {
    openapi: '3.0.3',
    info: {
      title: 'La docu',
      description: 'La docu de la API',
    },
  },
  apis: [`${__dirname}/docs/**/*.yaml`],
}

const specs = swaggerJSDoc(swaggerOptions)
app.use('/docs', swaggerUiExpress.serve, swaggerUiExpress.setup(specs))

app.use(express.json())
app.use(cookieParser())

app.use('/api/users', usersRouter)
app.use('/api/pets', petsRouter)
app.use('/api/adoptions', adoptionsRouter)
app.use('/api/sessions', sessionsRouter)

app.listen(PORT, () => console.log(`Listening on ${PORT}`))

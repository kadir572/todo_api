import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'

import todoRoutes from './routes/todo'

const app = express()
dotenv.config()

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PWD}@kadircluster.k6m3g.mongodb.net/todo_app?retryWrites=true&w=majority`
  )
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.error('Error connecting to MongoDB', error))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const allowedOrigins = [process.env.UI_URL ?? '']
app.use(
  cors({
    origin: allowedOrigins,
  })
)

app.use('/todos', todoRoutes)

const port = process.env.PORT || process.env.SERVER_PORT

app.listen(port, () => console.log(`App running on port ${port}`))

import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import router from './router'

dotenv.config()
const server = express()
server.use(express.json())
server.use(router)

const dbUri = process.env.DB_URI || 'mongodb://localhost:27017/ykron'
mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })

export default server
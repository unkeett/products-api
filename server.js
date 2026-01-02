import express from 'express'
const PORT = 8000
import { appRouter } from './routes/route.js'

const app = express()
app.use('/api',appRouter)

app.listen(PORT,()=> console.log("Server is running"))
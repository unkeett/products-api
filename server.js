import express from 'express'
import { appRouter } from './routes/route.js'
import { authRouter } from './routes/auth.js'
import cors from 'cors'

const PORT = 8000
const app = express()

app.use(cors())
app.use(express.json())

app.use('/api',appRouter)
app.use('/api/auth',authRouter)

app.listen(PORT,()=> console.log("Server is running"))
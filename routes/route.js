import express from 'express'
import { getAll, getAllProducts } from '../controllers/getItem.js'


export const appRouter = express.Router()

appRouter.get('/',getAll)
appRouter.get('/products',getAllProducts)

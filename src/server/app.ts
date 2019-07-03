import express, { Application } from 'express'
import { getBar } from './controllers/getBar'
import { getFoo } from './controllers/getFoo'

const app: Application = express()

app.disable('x-powered-by')

app.get('/foo', getFoo)
app.get('/bar', getBar)
app.use(express.static('build/public'))

export { app }

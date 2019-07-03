import express, { Application } from 'express'
import { getRoot } from './controllers/getRoot'

const app: Application = express()

app.disable('x-powered-by')

app.get('/', getRoot)
app.get('/foo', getRoot)
app.get('/bar', getRoot)
app.use(express.static('build/public'))

export { app }

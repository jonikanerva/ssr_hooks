import express from 'express'
import { getRoot } from './controllers/getRoot'

const app: express.Application = express()

app.disable('x-powered-by')

app.get('/', getRoot)
app.use(express.static('build/public'))

export { app }

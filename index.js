import express from 'express'
import mongoose from 'mongoose'
import 'dotenv/config'
import coinRouter from './Router/routes.js'

import bodyParser from 'body-parser'

const app = express();
app.use(bodyParser.json())
app.use('/coins', coinRouter)

app.get('/', (req, res)=> {
    res.send('we are live on CairoCoding')
})
// COIN ROUTES AND CRUD OPERATION

mongoose.connect(process.env.CAIRO_CONNECTION, {useNewUrlParser: true}, () => console.log('connected to database'))

const port = process.env.port || 4000
app.listen(port, () => console.log('listening on port localhost:4000') )


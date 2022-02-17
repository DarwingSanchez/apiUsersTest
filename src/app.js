require ('./database')
const express = require('express')

const env = require('dotenv')

const Morgan = require('morgan');


env.config()
const app = express();

const PORT = process.env.PORT

app.use(express.json())

app.use(Morgan('dev'))


app.use('/api/users', require('./routes/users.routes'))


app.listen(PORT, () => console.log(`Ejecutando Api ${PORT}`))
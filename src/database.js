const env = require('dotenv')
const mongoose = require('mongoose')

env.config()

const URI = process.env.MONGO_URI

mongoose.connect(URI)
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err))

module.exports = mongoose
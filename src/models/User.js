const mongoose = require('mongoose')
const { Schema } = mongoose

const productSchema = new Schema(
    {
        name: {type: String, required: true},
        lastName: {type: String, required: true},
        email: {type: String, require: true},
        password: {type: String, required: true},
        number: {type: Number, required: false},
        purchasedItems: {type: Array, required: false},
    }, 
    {
        versionKey: false, 
        timestamps: true,
    })

module.exports = mongoose.model("User", productSchema)
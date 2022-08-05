const mongoose = require('mongoose')

const productSchema = new mongoose.Schema(
    {
        productName: {type: String, required: true, unique: true},
        discription: {type: String, required: true},
        image: {type: String, required: true},
        price: {type: Number, required: true}
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Product', productSchema)
//kylexqian@gmail.com
//shimphillip@gmail.com
const Product = require('../models/product')

const getProducts = async (req, res) => {
    try {
    const products = await Product.find({})
    res.send(products)
    } catch (err) {
        console.log(err)
        res.status(500)
    }
}

const getProduct = async (req, res) => {
    try {
    const product = await Product.findById(req.params.id)
    res.send(product)
    } catch (err) {
        console.log(err)
        res.status(500)
    }
}

module.exports = {getProducts, getProduct}
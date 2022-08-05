const express = require('express')
const router = express.Router()
const {getProducts, getProduct} = require('../controllers/productControllers')

//SHOW ALL THE PRODUCTS
router.get('/', getProducts => {
    res.send("Hello from product page")
});

//SHOW ONE SPECIFIC PRODUCT
router.get('/:id', getProduct => {
});

module.exports = router
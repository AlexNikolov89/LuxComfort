const express = require('express')
const router = express.Router()
const Product = require('../models/Product')

// get all products, Public route
router.get('/', async (req, res) => {
    try {
       const products = await Product.find({}) 
       res.status(200).json(products)
    } catch (error) {
        res.status(500).json('Server Error')
    }
})


// get product by id, Public route
router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)

        if(!product) {
            res.status(404).json('Product not found')
        }
        //console.log(product)
        res.json(product)
    } catch (error) {
        res.status(500).json('Server Error')
    }
})

module.exports = router
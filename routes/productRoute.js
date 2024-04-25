const express = require('express');
const Product = require('../models/productModel');

const router = express.Router();

// get data from database
router.get('/products', async(req, res) => {
    try{
        const products = await Product.find({});   //empty bracket is used to get all data
        res.status(200).json(products);
    }catch (error){
        res.status(500).json({message: error.message})
    }
})

// get single product from id
router.get('/products/:id', async(req, res) => {
    try{
        const {id} = req.params;
        const product = await Product.findById(id);   //empty bracket is used to get all data
        res.status(200).json(product);
    }catch (error){
        res.status(500).json({message: error.message})
    }
})

router.post('/product', async(req, res) =>{
    try{
        const product = await Product.create(req.body)
        res.status(200).json(product);
    }catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

// update the product
router.put('/products/:id', async(req, res) => {
    try{
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        // we cannot find any product in database
        if(!product){
            return res.status(404).json({message: `cannot find any product with ID ${id}`})
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({message: error.message})  
    }
})

// delete a product 
router.delete('/products/:id', async(req, res) => {
    try{
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        if(!product){
            return res.status(404).json({message: `cannot find any product with ID ${id}`})
        }
        res.status(200).json(product);
    }catch (error){
        console.log(error); 
        res.status(500).json({message: error.message})  
    }
})

module.exports = router;
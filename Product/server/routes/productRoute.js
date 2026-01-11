const express = require('express');
const router = express.Router();
const Product = require('../models/model.Product');
const productController = require("../controllers/productControllers");


// Route to add a new product
router.post('/add', productController.addProduct);
router.put('/update/:id', productController.updateProduct);
router.delete('/delete/:id', productController.deleteProduct);
router.get('/all',productController.getAllProducts);
router.get('/:id',productController.getProductById);

module.exports = router;


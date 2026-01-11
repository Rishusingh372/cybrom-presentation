const express = require('express');
const Product = require('../models/model.Product');

const addProduct = async (req, res) => {
    try{
        const {
            name,
            price,
            description
        }
        = req.body;

        const product = new Product({
            name,
            price,
            description
        });
        await product.save();
        res.status(201).json({message: "Product added successfully", product});
    }
    catch(error){
        res.status(500).json({message: "Server Error", error: error.message});
    }
}

// update product 

const updateProduct=async(req,res)=>{
    try{
        const { id } = req.params;
        const { name, price, description } = req.body;

        const updatedProduct = await Product.findByIdAndUpdate(
            id,
            {
                name,
                price,
                description
            },
            { new: true, runValidators: true }
        );
        if (!updatedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json({ message: "Product updated successfully", updatedProduct });
    }
    catch(error){
        res.status(500).json({ message: "Server Error", error: error.message });
    }
}

// Delete product
const deleteProduct=async(req,res)=>{
    try{
        const { id } = req.params;
        const deletedProduct = await Product.findByIdAndDelete(id);
        if (!deletedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json({ message: "Product deleted successfully" });
    }
    catch(error){
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};

// Read all product
const getAllProducts=async(req,res)=>{
    try{
        const products = await Product.find();
        res.status(200).json(products);
    }
    catch(error){
        res.status(500).json({ message: "Server Error", error: error.message });
    }
}   ;

// Read product by ID

const getProductById=async(req,res)=>{
    try{
        const { id } = req.params;
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json(product);
    }
    catch(error){
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};



module.exports={
    addProduct,
    updateProduct,
    deleteProduct,
    getAllProducts
}

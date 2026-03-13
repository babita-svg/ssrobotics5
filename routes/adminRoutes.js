const express = require("express")
const router = express.Router()
const Product = require("../models/Product")
const jwt = require("jsonwebtoken")

// Admin middleware
const protect = (req,res,next)=>{
    const token = req.headers.authorization?.split(" ")[1]
    if(!token) return res.status(401).json({message:"Not authorized"})
    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        if(!decoded.isAdmin) return res.status(403).json({message:"Admin only"})
        req.user = decoded
        next()
    }catch(err){
        res.status(401).json({message:"Token invalid"})
    }
}

// Add product
router.post("/add", protect, async(req,res)=>{
    const {name,price,description,image} = req.body
    const product = await Product.create({name,price,description,image})
    res.json(product)
})

// Delete product
router.delete("/:id", protect, async(req,res)=>{
    const product = await Product.findByIdAndDelete(req.params.id)
    if(product) res.json({message:"Deleted"})
    else res.status(404).json({message:"Not found"})
})

module.exports = router

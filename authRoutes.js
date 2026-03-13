const express = require("express")
const router = express.Router()

const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const User = require("../models/User")

router.post("/register", async(req,res)=>{

const hash = await bcrypt.hash(req.body.password,10)

const user = new User({

email:req.body.email,
password:hash

})

await user.save()

res.json({msg:"User registered"})

})

router.post("/login", async(req,res)=>{

const user = await User.findOne({email:req.body.email})

if(!user) return res.json({msg:"User not found"})

const match = await bcrypt.compare(req.body.password,user.password)

if(!match) return res.json({msg:"Wrong password"})

const token = jwt.sign({id:user._id},"ssroboticssecret")

res.json({token})

})

module.exports = router

const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const path = require("path")

const connectDB = require("./config/db")

const productRoutes = require("./routes/productRoutes")
const authRoutes = require("./routes/authRoutes")

const app = express()

connectDB()

app.use(cors())
app.use(bodyParser.json())

app.use(express.static("public"))

app.use("/api/products",productRoutes)
app.use("/api/auth",authRoutes)

app.get("/",(req,res)=>{
res.sendFile(path.join(__dirname,"views","index.html"))
})

app.get("/admin",(req,res)=>{
res.sendFile(path.join(__dirname,"views","admin.html"))
})

app.get("/login",(req,res)=>{
res.sendFile(path.join(__dirname,"views","login.html"))
})

app.listen(3000,()=>{
console.log("SS Robotics Ultimate Server Running")
})

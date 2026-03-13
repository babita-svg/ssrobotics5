const express = require("express")
const path = require("path")

const app = express()

// Serve static files
app.use(express.static(path.join(__dirname, "public")))

// Home route
app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname, "views", "index.html"))
})

// Cart page
app.get("/cart", (req,res)=>{
    res.sendFile(path.join(__dirname, "views", "cart.html"))
})

// Admin page
app.get("/admin", (req,res)=>{
    res.sendFile(path.join(__dirname, "views", "admin.html"))
})

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
    console.log("Server running 🚀")
})

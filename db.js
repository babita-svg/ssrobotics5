const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://username:password@cluster0.mongodb.net/ssrobotics"
        )

        console.log("MongoDB Connected")
    } catch (error) {
        console.log("MongoDB Error:", error)
    }
}

module.exports = connectDB

const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const productRoute = require('./routes/productRoutes')

dotenv.config()

connectDB()

const app = express()

app.use('/api/products', productRoute)

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`))
const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const productRoute = require('./routes/productRoutes')
const userRoute = require('./routes/userRoutes')
const path = require('path');

dotenv.config()

connectDB()

const app = express()
app.use(express.json())

app.use('/api/products', productRoute)
app.use('/api/users', userRoute)

const PORT = process.env.PORT || 6000;

app.listen(PORT, console.log(`Server running on port ${PORT}`))
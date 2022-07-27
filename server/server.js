const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const productRoute = require('./routes/productRoutes')
const userRoute = require('./routes/userRoutes')
const path = require('path');
const cors = require('cors')

dotenv.config()
connectDB()
const app = express()
//app.use(cors(corsOptions))

app.use(
    cors({
      origin: ["https://lux-furniture-shop.herokuapp.com/"],
      methods: ["GET", "POST", "DELETE"],
      credentials: true,
      origin: true,
    })
  );

app.use(express.json())

app.use('/api/products', productRoute)
app.use('/api/users', userRoute)



const PORT = process.env.PORT || 6000;

app.listen(PORT, console.log(`Server running on port ${PORT}`))
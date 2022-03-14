const express = require('express')
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require('mongoose')

const app = express()

//configure database and mongoose
mongoose.connect('mongodb://localhost:27017/authentication', { useNewUrlParser: true})
mongoose.connection
    .once('open', () => console.log('Database connected successfully..!'))
    .on('error', (error) => console.log('Error : ' + error ))
// database connection ends here

//registering cors
app.use(cors({
    origin: 'http://localhost:8080',
    allowedHeaders: ['Content-Type', 'Authorization']
}));

//configure body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//configure body-parser ends here

app.get('/', (req, res) => {
    res.send('Hello from backend')
})

//bring in our user routes
const userRoutes = require("./route/user"); 
app.use("/user", userRoutes);

const cartRoutes = require("./route/cart"); 
app.use("/cart", cartRoutes);

const productRoutes = require('./route/product')
app.use("/product", productRoutes)

const orderRoutes = require('./route/order')
app.use("/order", orderRoutes)


const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server running on PORT : ${ PORT }`)
})
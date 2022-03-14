const Cart = require('../model/cart')
const Product = require('../model/Product')

exports.getAllItems = async (req, res) => {
    try {
        const response = await Cart.find()
        res.send(response)
    } catch (error) {
        console.log(error);
    }
}

exports.getItems = async (req, res) => {
    try {
        const response = await Cart.findOne({user: req.userData._id}).populate('items')
        res.status(201).send(response)
    } catch (error) {
        res.status(400).json( { error })
    }
}

exports.removeItem = async (req, res) => {
    try {
        let product = await Product.findById(req.params.id)
        let userCart = await Cart.findOne({user: req.userData._id}).populate('items')
        userCart.items.pull(product._id)
        userCart.totalPrice = userCart.totalPrice - parseInt(product.price)
        userCart.save()
        res.json(userCart)
    } catch (error) {
        console.log(error)
    }
}
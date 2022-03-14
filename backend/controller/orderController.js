const Cart = require('../model/cart')
const Order = require('../model/order')

exports.placeOrder = async (req, res) => {

    try {
        const cart = await Cart.findOne({ user: req.userData._id })
        console.log(cart)
        let order = new Order({
            items: cart.items,
            totalPrice: cart.totalPrice,
            address: req.body,
            user: req.userData._id
        })

        let newOrder = await Order.create(order)
        await Cart.findOneAndDelete({ user: req.userData._id })
        return res.status(200).send(newOrder)
    } catch (error) {
        console.log(error);
    }
}

exports.getOrders = async (req, res) => {
    try {
        const response = await Order.find({ user: req.userData._id }).populate('items')
        console.log("RESPONSE : ",response);
        res.status(201).send(response)
    } catch (error) {
        res.status(400).json({ error })
    }
}
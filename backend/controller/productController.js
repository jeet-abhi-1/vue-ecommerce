const Product = require('../model/Product');
const Cart = require('../model/cart')

exports.addProduct = async (req, res) => {
    try {
        const product = new Product({
            title: req.body.title,
            description: req.body.description,
            image: req.body.image,
            price: req.body.price,
            owner: req.body.owner
        });

        let data = await product.save();
        res.status(201).json({ data });
    } catch (err) {
        res.status(400).json({ err: err });
    }
}

exports.getProducts = async (req, res) => {
    try {
        const response = await Product.find()
        res.send(response)
    } catch (error) {
        res.status(400).json({ error })
    }
}

exports.getSingleProduct = async (req, res) => {
    try {
        const response = await Product.findById(req.params.id)
        res.send(response)
    } catch (error) {
        res.status(400).json({ error })
    }
}

exports.addToCart = async (req, res) => {
    try {
        let product = await Product.findById(req.params.id)
        console.log("Product : ", product);
        let userCart = await Cart.findOne({ user: req.userData._id })

        if (userCart && !userCart.items.includes(product._id)) {
            userCart.items.push(product._id)
            userCart.totalPrice = (userCart.totalPrice + product.price)
            userCart.save()
            return res.send(userCart)
        } else {
            let cart = new Cart({
                items: [product._id],
                totalPrice: (product.price),
                user: req.userData._id
            })
            let newCart = await Cart.create(cart)
            return res.send(newCart)
        }
    } catch (err) {
        res.status(400).json({ err: err });
    }
}



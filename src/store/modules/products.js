import axios from 'axios'

const state = {
    products: [],
    product: {}
}

const getters = {
    allProducts: (state) => state.products,
    singleProduct: (state) => state.product
}

const actions = {

    async fetchProducts({ commit }) {
        const res = await axios.get('http://localhost:3000/product/products')
        commit('setProducts', res.data)
    },

    async getSingleProduct({ commit }, product_id) {
        console.log(product_id)
        try {
            const res = await axios.get(`http://localhost:3000/product/products/cart/${product_id}`)
            commit('setProduct', res.data)

        } catch (error) {
            console.log(error.message)
        }
        // console.log(res.data)
    }
}

const mutations = {
    setProducts: (state, products) => (state.products = products),

    setProduct: (state, product) => (state.product = product),
}

export default {
    state,
    getters,
    actions,
    mutations
}
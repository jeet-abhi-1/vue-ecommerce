import axios from 'axios'
import swal from "sweetalert"
import router from "../../router/index"

const state = {
    myOrders: [],
    lastOrder: ''
}

const getters = {
    orders: (state) => state.myOrders,

    lastOrder: (state) => state.lastOrder
}

const actions = {

    async placeOrder({ commit }, address) {

        try {
            let token = localStorage.getItem('jwt')
            const order = await axios.post(`http://localhost:3000/order/place-order`, address, {
                headers: {
                    'Authorization': "Bearer " + token,
                }
            })

            if (order) {
                commit('orderPlaced')
                swal({
                    text: "Order successfully placed.",
                    icon: "success"
                })
                router.push('/orderPlaced')
            }
            console.log("Your order : ", order);
        } catch (error) {
            console.log('Error', error.message)
        }
    },


    async fetchOrders({ commit }) {
        let token = localStorage.getItem('jwt')
        const orders = await axios.get('http://localhost:3000/order/all-orders', {
            headers: {
                'Authorization': "Bearer " + token,
            }
        })
        console.log(orders.data)
        commit('storeOrders', orders.data)
    },

    async fetchLastOrders({ commit }) {
        let token = localStorage.getItem('jwt')
        const orders = await axios.get('http://localhost:3000/order/all-orders', {
            headers: {
                'Authorization': "Bearer " + token,
            }
        })
        let data = orders.data
        console.log(data[data.length-1]._id)
        commit('storeLastOrder', data[data.length-1]._id)
    },
}

const mutations = {
    storeOrders: (state, orders) => state.myOrders = orders,

    storeLastOrder: (state, data) => state.lastOrder = data

}



export default {
    state,
    getters,
    actions,
    mutations
}
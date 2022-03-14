
import swal from 'sweetalert'

const state = {
    cartItems: [],
    totalPrice: '',
}

const getters = {
    allItems: (state) => state.cartItems,
    priceTotal: (state) => state.totalPrice,

}

const actions = {
    async addToCart({ commit }, id) {

        let token = localStorage.getItem('jwt')

        try {
            const rawResponse = await fetch(`http://localhost:3000/product/addToCart/${id}`, {
                method: 'POST',
                headers: {
                    'Authorization': "Bearer " + token
                },

            });
            const response = await rawResponse.json();
            console.log("Response : ", response);
            commit('addItemToCart', response)
            swal({
                title: "Added to Cart!",
                icon: "success",
            });
        } catch (error) {
            console.log('Error', error.message)
        }
    },

    async fetchCartItems({ commit }) {

        try {
            let token = localStorage.getItem('jwt')

            const rawResponse = await fetch(`http://localhost:3000/cart/items`, {
                method: 'GET',
                headers: {
                    'Authorization': "Bearer " + token
                },
            });

            const isJson = rawResponse.headers.get('content-type')?.includes('application/json');
            const response = isJson ? await rawResponse.json() : null

            commit('setCartItems', response)
            commit('setTotalPrice', response)
        } catch (error) {
            console.log(error);
        }
    },

    async removeFromCart({ commit }, id) {
        let token = localStorage.getItem('jwt')
        try {
            const rawResponse = await fetch(`http://localhost:3000/cart/delete-item/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': "Bearer " + token
                },
            });
            const response = await rawResponse.json();
            commit('setCartItems', response)
            commit('setTotalPrice', response)
            swal({
                title: "Item removed successfully!",
                icon: "success",
            });
        } catch (error) {
            console.log("Error : ", error.message)
        }
    },
}

const mutations = {
    addItemToCart: (state, id) => state.cartItems.push(id),

    setCartItems: (state, response) => (state.cartItems = response.items),

    setTotalPrice: (state, response) => (state.totalPrice = response.totalPrice),


}

export default {
    state,
    getters,
    actions,
    mutations
}
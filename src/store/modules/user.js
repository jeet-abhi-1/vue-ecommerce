import axios from "axios";
import swal from "sweetalert";
import router from '../../router/index'

const api = "http://localhost:3000/user/"

const state = {
    token: localStorage.getItem('jwt') || '',
    userName: '',
}

const getters = {
    username: (state) => state.userName,

    isLoggedIn: state => !!state.token,
}

const actions = {

    async userLogin({ commit }, user) {
        let response = await axios.post(`${api}login`, user);
        console.log(response);
        try {
            if (response) {
                let token = response.data.token;
                console.log(token)
                localStorage.setItem("jwt", token);
                if (token) {
                    commit('auth_success', token);
                    swal({
                        text: 'Logged In Successfully!',
                        icon: 'success'
                    })
                    router.push('/')
                } else {
                    swal({
                        text: `${response.data.message}`,
                        icon: 'error'
                    })
                }
            } 

        } catch (err) {
            // commit('auth_error', err);
            console.log('Error: ', err);
            swal({
                text: `Something went wrong! Please try again later.`,
                icon: 'error'
            })
        }
    },

    async logOutUser({ commit }) {
        await localStorage.clear();
        commit('logout');
    },

    async getDetails({ commit }) {
        let token = localStorage.getItem('jwt')
        const rawResponse = await fetch(`${api}me`, {
            method: 'GET',
            headers: {
                'Authorization': "Bearer " + token
            },
        });

        const response = await rawResponse.json();
        console.log(response.name)
        commit('setDetails', response.name);
    }
}

const mutations = {
    setDetails: (state, response) => (state.userName = response),

    auth_success(state, token) {
        state.token = token
    },

    logout(state) {
        state.token = ''
        state.userName = ''
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
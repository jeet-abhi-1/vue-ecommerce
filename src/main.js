import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import router from './router'
import store from './store/store'
import VueliDate from 'vuelidate'
import './quasar'
import axios from 'axios'


let instance = axios.create()

instance.defaults.headers['authorization'] = localStorage.getItem('jwt')


Vue.use(VueResource)
Vue.use(VueliDate)
Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

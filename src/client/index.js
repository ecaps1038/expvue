import Vue from 'vue'
import App from './App'
import router from './router/index'
import store from './store/store'

import axios from 'axios'

Vue.config.debug = true
Vue.config.productionTip = false
Vue.prototype.$axios = axios

//axios.defaults.baseURL = '/api'
//axios.defaults.headers.post['Content-Type'] = 'application/json';

//Vue.config.productionTip = false

new Vue({
  el: '#app',
  router: router,
  store: store,
  template: '<App/>',
  components: { App }
})

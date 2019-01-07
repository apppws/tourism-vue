import Vue from 'vue'
import App from './App.vue'
import WeVue from 'we-vue'
import 'we-vue/lib/style.css'
import VueResource from 'vue-resource'
import router from './router'
import store from './store'
import axios from 'axios'
Vue.use(VueResource)
Vue.use(WeVue)
Vue.prototype.axios = axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
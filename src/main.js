import Vue from 'vue'
import App from './App.vue'
import WeVue from 'we-vue'
import 'we-vue/lib/style.css'
import VueResource from 'vue-resource'
import router from './router'
import store from './store'
import axios from 'axios'
import Vuex from 'vuex'
import VueSocketIO from 'vue-socket.io'

Vue.use(VueResource)
Vue.use(WeVue)
Vue.use(Vuex)
Vue.prototype.axios = axios
// 连接服务器 启动脚本

Vue.use(new VueSocketIO({
  debug: true,
  connection: 'http://localhost:9999',
  vuex: {
      actionPrefix: 'SOCKET_',
      mutationPrefix: 'SOCKET_'
  }
}))

// 导航守卫
router.beforeEach((to, from, next) => {
  if (to.meta.isLogin) {
    if (localStorage.getItem('username'))
      next()
    else
      next('/')
  } else {
    next()
  }
})




Vue.config.productionTip = false

new Vue({
  router,
  store,
  Vuex,
  render: h => h(App)
}).$mount('#app')
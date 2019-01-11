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
// import VueSocketio from 'vue-socket.io';
// import socketio from 'socket.io-client';
// Vue.use(VueSocketio, socketio('xxx:80'));        //xxx填后台给的socket地址，端口号根据实际后台端口写

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
  render: h => h(App)
}).$mount('#app')
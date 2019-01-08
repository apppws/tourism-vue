import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/index.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '',
      name: 'index',
      component: Index,
      children: [
        // 首页
        {
          path: '/',
          name: 'index',
          component: () => import('./views/Index/index.vue'),
        },
        // 旅行
        {
          path:'/orders',
          name:'orders',
          component:() =>import('./views/Index/orders.vue')
        },
        // 聊天
        {
          path:'/chatroom',
          name:'chatroom',
          component:() =>import('./views/Index/chatroom.vue')
        },
        // 主页
        {
          path:'/home',
          name:'home',
          component:() =>import('./views/Index/home.vue')
        }
      ]
    },
    // 登录
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/login.vue'),
    },
    // 注册
    {
      path:'/register',
      name:'register',
      component:() => import('./views/register.vue'),
    },
    // 搜索页面
    {
      path:'/seach',
      name:'/seach',
      component:() =>import('./views/seach.vue'),
    },
    // 注册协议
    {
      path:'/userAgreement',
      name:'userAgreement',
      component:() => import('./views/userAgreement.vue'),
    },
    // 详情页
    {
      path:'/source',
      name:'source',
      component:() =>import('./views/sourcelist.vue'), 
    },
    // 选择导游
    {
      path:'/guide',
      name:'guide',
      component:() =>import('./views/guide.vue'),
    },
    // 游记日志详情页
    {
      path:'/tourlist',
      name:'tourlist',
      component:() =>import('./views/tourlist.vue'),
    },
    // 导游信息
    {
      path:'/guideinfo',
      name:'guideinfo',
      component:() =>import('./views/guideinfo.vue'),
    },
    // 确认订单
    {
      path:'/order',
      name:'order',
      component:()=>import('./views/order.vue'),
    },
    // 支付
    {
      path:'/pay',
      name:'pay',
      component:()=>import('./views/pay.vue'),
    },
    //支付成功
    {
      path:'/paySuccess',
      name:'paySuccess',
      component:()=>import('./views/paySuccess.vue'),
    },
    // 联系
    {
      path:'/chat',
      name:'chat',
      component:()=>import('./views/chat.vue'),
    },
    // 基本信息
    {
      path:'/info',
      name:'info',
      component:()=>import('./views/info.vue'),
    },
    // 我的行程
    {
      path:'/mytrip',
      name:'mytrip',
      component:()=>import('./views/mytrip.vue'),
    },
    // 我的优惠券
    {
      path:'/ticket',
      name:'ticket',
      component:()=>import('./views/ticket.vue'),
    },
    // 设置
    {
      path:'/set',
      name:'name',
      component:()=>import('./views/set.vue'),
    }
    
  ]
})

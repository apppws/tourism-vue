<template>
  <div>
    <!--头部-->
    <header class="page-header">
      <router-link to="guide" class="page-return">
        <img src="../assets/img/return.png" alt class="return">
      </router-link>
      <span class="page-name">确认订单</span>
    </header>
    <div class="wrap">
      <!--订单基本信息-->
      <section class="order-info mb-10">
        <div class="container">
          <div class="order-title">基础信息</div>
          <div class="order-content">
            <span>城市：{{userInfo.city}}</span>
            <span>时间：2018.01.01</span>
            <span>人数：{{userInfo.userNum}}人</span>
          </div>
          <div class="order-remark">备注：{{userInfo.content}}</div>
        </div>
      </section>
      <!--导游信息-->
      <section class="order-guide mb-10">
        <div class="container">
          <div class="order-title">向导信息</div>
          <div class="guide-info-wrap">
            <div class="guide-pic">
              <img :src="info.headImg" alt>
            </div>
            <div class="guide-info">
              <div class="guide-name">{{info.username}}</div>
              <div class="guide-job">
                <span>已接单：{{info.yijiedan}}</span>
                <span>主要接单地：兰州</span>
              </div>
              <div class="guide-intro">{{info.jieshao}}</div>
            </div>
          </div>
        </div>
      </section>
      <!--行程费用-->
      <section class="order-pay mb-10">
        <div class="container">
          <div class="order-title">行程费用</div>
          <div class="float-right">{{money}}元</div>
        </div>
      </section>
      <!--支付方式-->
      <section class="order-pay-way">
        <div class="container">
          <div class="order-title">支付方式</div>
          <div class="float-right">在线支付</div>
        </div>
      </section>
    </div>
    <router-link :to="{path:'pay',query:{money:money}}">
      <section class="bottom-btn">确认订单</section>
    </router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id:this.$route.query.id,
      userInfo:{
        content:'',
        userNum:'',
        city:''
      },
      info:"",
      money:300,
    }
  },
  created() {
    // 取出localStorage 中保存的基本信息
    this.userInfo.city = localStorage.getItem('city');
    this.userInfo.userNum = localStorage.getItem('userNum');
    this.userInfo.content = localStorage.getItem('content');
    // 向导信息  如果有后台直接就用id获取  
    /**
     * 暂时模拟
     *  */ 
    this.axios.get("https://www.easy-mock.com/mock/5c3305b6c0a7f916f9116d93/tour/guideInfo").then((res)=>{
        this.info = res.data.data
    })  
    
  },
}
</script>
<style scoped>
.page-header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 2.95rem;
  line-height: 2.95rem;
  background-color: #fff;
  border-bottom: 1px solid #f0ebeb;
  z-index: 999;
}
</style>
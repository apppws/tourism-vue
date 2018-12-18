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
            <span>城市：兰州</span>
            <span>时间：2018.01.01</span>
            <span>人数：2人</span>
          </div>
          <div class="order-wish">旅行愿景:</div>
          <div class="order-remark">备注：</div>
        </div>
      </section>
      <!--导游信息-->
      <section class="order-guide mb-10">
        <div class="container">
          <div class="order-title">向导信息</div>
          <div class="guide-info-wrap">
            <div class="guide-pic">
              <img src="../assets/img/avatar.jpg" alt>
            </div>
            <div class="guide-info">
              <div class="guide-name">飞奔的蜗牛</div>
              <div class="guide-job">
                <span>已接单：30</span>
                <span>主要接单地：兰州</span>
              </div>
              <div class="guide-intro">从事导游行业xx年，简介导游简介导游简介导游简介导游</div>
            </div>
          </div>
        </div>
      </section>
      <!--行程费用-->
      <section class="order-pay mb-10">
        <div class="container">
          <div class="order-title">行程费用</div>
          <div class="float-right">200元</div>
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
    <router-link to="/pay">
      <section class="bottom-btn">确认订单</section>
    </router-link>
  </div>
</template>

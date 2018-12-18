<template>
  <div>
    <header class="page-header">
      <router-link to="/order" class="page-return">
        <img src="../assets/img/return.png" alt class="return">
      </router-link>
      <span class="page-name">支付订单</span>
    </header>
    <section class="pay-header">
      <div class="pay-time">支付剩余时间 &nbsp;12:00</div>
      <div class="pay-price">￥200.00</div>
      <div class="pay-num">订单编号：1991239391</div>
    </section>
    <div class="mb-bg"></div>
    <section class="pay-way">
      <div class="pay-way-sub">
        <div class="pay-way-pic">
          <img src="../assets/img//pay_wechat.png" alt>
        </div>
        <div class="pay-content">
          <div class="pay-content-title">微信支付</div>
          <div class="pay-content-text">推荐安装微信5.0及以上版本</div>
        </div>
        <div class="float-right pay-right">
          <img src="../assets/img//pay_chk.png" alt>
        </div>
      </div>
      <div class="pay-way-sub">
        <div class="pay-way-pic">
          <img src="../assets/img//pay_2.png" alt>
        </div>
        <div class="pay-content">
          <div class="pay-title">银行卡支付</div>
        </div>
        <div class="float-right pay-right">
          <img src="../assets/img//pay_chk.png" alt>
        </div>
      </div>
      <div class="pay-way-sub">
        <div class="pay-way-pic">
          <img src="../assets/img//pay_3.png" alt>
        </div>
        <div class="pay-content">
          <div class="pay-title">支付宝</div>
        </div>
        <div class="float-right pay-right">
          <img src="../assets/img//pay_chk.png" alt>
        </div>
      </div>
    </section>
    <router-link to="/paySuccess">
      <section class="bottom-btn">确认支付&nbsp;&nbsp;&nbsp;￥200.00</section>
    </router-link>
  </div>
</template>

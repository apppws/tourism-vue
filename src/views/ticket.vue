<template>
  <div>
    <header class="page-header">
      <router-link to="/home" class="page-return">
        <img src="../assets/img/return.png" alt class="return">
      </router-link>
      <span class="page-name">优惠券</span>
    </header>
    <section class="ticket-nav">
      <!-- <span class="trip_nav_active ticket-nav-sub" data-toggle="ticketNew">未使用</span>
      <span class="ticket-nav-sub" data-toggle="ticketLog">使用记录（6）</span>
      <span class="ticket-nav-sub" data-toggle="ticketUsed">已过期（15）</span>-->
      <span
        :class="{trip_nav_active:active[key]}"
        v-for="(item,key) in tab"
        @click="change(key)"
        :key="key"
      >{{item.content}}</span>
    </section>
    <div class="mb-bg"></div>
    <section v-show="is_show==1" class="ticket-box" id="ticketNew">
      <div class="ticket">
        <div class="ticket-price">
          ￥
          <span>20</span>
        </div>
        <div class="ticket-info">优惠券信息</div>
        <div class="ticket-btn">
          <button>立即使用</button>
        </div>
      </div>
    </section>
    <section v-show="is_show==2" class="ticket-box" id="ticketLog">
      <div class="ticket">
        <div class="ticket-price">
          ￥
          <span>20</span>
        </div>
        <div class="ticket-info">优惠券信息</div>
        <div class="ticket-btn"></div>
      </div>
    </section>
    <section v-show="is_show==3" class="ticket-box" id="ticketUsed">
      <div class="ticket">
        <div class="ticket-price">
          ￥
          <span>250</span>
        </div>
        <div class="ticket-info">满250减250</div>
        <div class="ticket-btn"></div>
      </div>
      &nbsp;
      <div class="ticket">
        <div class="ticket-price">
          ￥
          <span>30</span>
        </div>
        <div class="ticket-info">满5000减30</div>
        <div class="ticket-btn"></div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      //默认第一次显示;
      is_show: 1,
      active: [true, false, false, false], //统一管理状态;
      tab: [
        {
          content: "未使用" //tab-span
        },
        {
          content: "使用记录"
        },
        {
          content: "已过期"
        }
      ]
    };
  },
  methods: {
    change: function(x) {
      for (var i = 0; i < this.active.length; i++) {
        this.active[i] = false;
        this.active[x] = true;
        // 如果相等就改变样式
        this.is_show = x + 1;
        //  console.log(this.is_show);
      }
      this.$set(this.active, 3, 0);
    }
  }
};
</script>


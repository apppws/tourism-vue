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
      <div v-if="jilu==1">
        <div class="ticket" v-for="(v,k) in ticket" :key="k">
          <div class="ticket-price">
            ￥
            <span>{{v.price}}</span>
          </div>
          <div class="ticket-info">{{v.content}}</div>
          <div class="ticket-btn">
            <button>立即使用</button>
          </div>
        </div>
      </div>
      <div v-else>
        <span>暂无数据...</span>
      </div>
    </section>
    <section v-show="is_show==2" class="ticket-box" id="ticketLog">
      <div v-if="jilu==2">
        <div class="ticket" v-for="(v,k) in ticket" :key="k">
          <div class="ticket-price">
            ￥
            <span>{{v.price}}</span>
          </div>
          <div class="ticket-info">优惠券信息</div>
          <div class="ticket-btn"></div>
        </div>
      </div>
      <div v-else>
        <span>暂无数据...</span>
      </div>
    </section>
    <section v-show="is_show==3" class="ticket-box" id="ticketUsed">
      <div v-if="jilu==3">
        <div class="ticket" v-for="(v,k) in ticket" :key="k">
          <div class="ticket-price">
            ￥
            <span>{{v.price}}</span>
          </div>
          <div class="ticket-info">{{v.content}}</div>
          <div class="ticket-btn"></div>
        </div>&nbsp;
      </div>
      <div v-else>
        <span>暂无数据...</span>
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
      ],
      ticket: [],
      jilu: ""
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
  },
  created() {
    this.axios
      .get(
        "https://www.easy-mock.com/mock/5c3305b6c0a7f916f9116d93/tour/ticket"
      )
      .then(res => {
        this.ticket = res.data.data;
        for (let i = 0; i < this.ticket.length; i++) {
          this.jilu = this.ticket[i].jilu;
        }
      });
  }
};
</script>


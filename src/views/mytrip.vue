<template>
  <div>
    <header class="page-header">
      <router-link to="/home" class="page-return">
        <img src="../assets/img/return.png" alt class="return">
      </router-link>
      <span class="page-name">我的行程</span>
    </header>
    <!-- 选项卡 -->
    <section class="trip-nav">
      <span
        :class="{trip_nav_active:active[key]}"
        v-for="(item,key) in tab"
        @click="change(key)"
        :key="key"
      >{{item.content}}</span>
    </section>
    <div class="mb-bg"></div>
    <section v-show="is_show==1"  class="trip_box" id="tripAll">
      <div class="trip-sub">
        <div class="trip-title-box">
          <div class="trip-title">
            <span>订单编号</span>
            2018010110021
          </div>
          <div class="trip-state">待评价</div>
        </div>
        <a href="order-comment.html">
          <div class="trip-content-box">
            <div class="trip-avatar">
              <img src="../assets/img/avatar.jpg" alt>
            </div>
            <div class="trip-content">
              <div class="trip-text">城市：兰州</div>
              <div class="trip-text">时间：2018.01.01</div>
              <div class="trip-text">人数：2人</div>
            </div>
            <div class="float-right trip-right">
              <img src="../assets/img/select.png" alt>
            </div>
          </div>
        </a>
        <div class="trip-btn-box">
          <button class="btn-delete">删除订单</button>
          <a href="comment.html">
            <button class="btn-comment">评价</button>
          </a>
        </div>
      </div>
      <div class="trip-sub">
        <div class="trip-title-box">
          <div class="trip-title">
            <span>订单编号</span>
            2018010110021
          </div>
          <div class="trip-state">已结束</div>
        </div>
        <a href="order-finish.html">
          <div class="trip-content-box">
            <div class="trip-avatar">
              <img src="../assets/img/avatar.jpg" alt>
            </div>
            <div class="trip-content">
              <div class="trip-text">城市：兰州</div>
              <div class="trip-text">时间：2018.01.01</div>
              <div class="trip-text">人数：2人</div>
            </div>
            <div class="float-right trip-right">
              <img src="../assets/img/select.png" alt>
            </div>
          </div>
        </a>
        <div class="trip-btn-box">
          <button class="btn-delete">删除订单</button>
        </div>
      </div>
      <div class="trip-sub">
        <div class="trip-title-box">
          <div class="trip-title">
            <span>订单编号</span>
            2018010110021
          </div>
          <div class="trip-state">即将开始</div>
        </div>
        <a href="order-begin.html">
          <div class="trip-content-box">
            <div class="trip-avatar">
              <img src="../assets/img/avatar.jpg" alt>
            </div>
            <div class="trip-content">
              <div class="trip-text">城市：兰州</div>
              <div class="trip-text">时间：2018.01.01</div>
              <div class="trip-text">人数：2人</div>
            </div>
            <div class="float-right trip-right">
              <img src="../assets/img/select.png" alt>
            </div>
          </div>
        </a>
        <div class="trip-btn-box">
          <button class="btn-delete">删除订单</button>
        </div>
      </div>
    </section>
    <section v-show="is_show==2" class="trip_box" id="tripBegin">
      <div class="trip-sub">
        <div class="trip-title-box">
          <div class="trip-title">
            <span>订单编号</span>
            2018010110021
          </div>
          <div class="trip-state">即将开始</div>
        </div>
        <a href="order-begin.html">
          <div class="trip-content-box">
            <div class="trip-avatar">
              <img src="../assets/img/avatar.jpg" alt>
            </div>
            <div class="trip-content">
              <div class="trip-text">城市：兰州</div>
              <div class="trip-text">时间：2018.01.01</div>
              <div class="trip-text">人数：2人</div>
            </div>
            <div class="float-right trip-right">
              <img src="../assets/img/select.png" alt>
            </div>
          </div>
        </a>
        <div class="trip-btn-box">
          <button class="btn-delete">删除订单</button>
        </div>
      </div>
    </section>
    <section v-show="is_show==3" class="trip_box" id="tripFinish">
      <div class="trip-sub">
        <div class="trip-title-box">
          <div class="trip-title">
            <span>订单编号</span>
            2018010110021
          </div>
          <div class="trip-state">已结束</div>
        </div>
        <a href="order-finish.html">
          <div class="trip-content-box">
            <div class="trip-avatar">
              <img src="../assets/img/avatar.jpg" alt>
            </div>
            <div class="trip-content">
              <div class="trip-text">城市：兰州</div>
              <div class="trip-text">时间：2018.01.01</div>
              <div class="trip-text">人数：2人</div>
            </div>
            <div class="float-right trip-right">
              <img src="../assets/img/select.png" alt>
            </div>
          </div>
        </a>
        <div class="trip-btn-box">
          <button class="btn-delete">删除订单</button>
        </div>
      </div>
    </section>
    <section v-show="is_show==4" class="trip_box" id="tripComment">
      <div class="trip-sub">
        <div class="trip-title-box">
          <div class="trip-title">
            <span>订单编号</span>
            2018010110021
          </div>
          <div class="trip-state">待评价</div>
        </div>
        <a href="order-comment.html">
          <div class="trip-content-box">
            <div class="trip-avatar">
              <img src="../assets/img/avatar.jpg" alt>
            </div>
            <div class="trip-content">
              <div class="trip-text">城市：兰州</div>
              <div class="trip-text">时间：2018.01.01</div>
              <div class="trip-text">人数：2人</div>
            </div>
            <div class="float-right trip-right">
              <img src="../assets/img/select.png" alt>
            </div>
          </div>
        </a>
        <div class="trip-btn-box">
          <button class="btn-delete">删除订单</button>
          <a href="comment.html">
            <button class="btn-comment">评价</button>
          </a>
        </div>
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
          content: "全部" //tab-span
        },
        {
          content: "即将开始"
        },
        {
          content: "已结束"
        },
        {
          content: "待评价"
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
        this.is_show = x+1;
        //  console.log(this.is_show);
      }
      this.$set(this.active, 4, 0);
    }
  }
};
</script>


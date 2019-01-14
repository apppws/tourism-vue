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
    <section v-show="is_show==1" class="trip_box" id="tripAll">
      <div v-if="pinjia==2">
        <div class="trip-sub" v-for="(v,k) in list" :key="k">
          <div v-if="v.pinjia==2">
            <div class="trip-title-box">
              <div class="trip-title">
                <span>订单编号</span>
                {{v.orderId}}
              </div>
              <div class="trip-state">待评价</div>
            </div>
            <a href="order-comment.html">
              <div class="trip-content-box">
                <div class="trip-avatar">
                  <img :src="v.img" alt>
                </div>
                <div class="trip-content">
                  <div class="trip-text">城市:{{v.city}}</div>
                  <div class="trip-text">时间：{{v.timer}}</div>
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
        </div>
      </div>
      <div v-else-if="pinjia==1">
        <div class="trip-sub" v-for="(v1,k) in list" :key="k">
          <div v-if="v1.pinjia==1">
            <div class="trip-title-box">
              <div class="trip-title">
                <span>订单编号</span>
                {{v1.orderId}}
              </div>
              <div class="trip-state">已结束</div>
            </div>
            <a href="order-finish.html">
              <div class="trip-content-box">
                <div class="trip-avatar">
                  <img :src="v1.img" alt>
                </div>
                <div class="trip-content">
                  <div class="trip-text">城市：{{v1.city}}</div>
                  <div class="trip-text">时间：{{v1.timer}}</div>
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
        </div>
      </div>
      <div v-else-if="pinjia==0">
        <div class="trip-sub" v-for="(v2,k) in list" :key="k">
          <div v-if="v2.pinjia==0">
            <div class="trip-title-box">
              <div class="trip-title">
                <span>订单编号</span>
                {{v2.orderId}}
              </div>
              <div class="trip-state">即将开始</div>
            </div>
            <a href="order-begin.html">
              <div class="trip-content-box">
                <div class="trip-avatar">
                  <img :src="v2.img" alt>
                </div>
                <div class="trip-content">
                  <div class="trip-text">城市：{{v2.city}}</div>
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
        </div>
      </div>
    </section>
    <section v-show="is_show==2" class="trip_box" id="tripBegin">
      <div v-if="pinjia==0">
        <div class="trip-sub" v-for="(v,k2) in list" :key="k2">
          <div class="trip-title-box">
            <div class="trip-title">
              <span>订单编号</span>
              {{v.orderId}}
            </div>
            <div class="trip-state">即将开始</div>
          </div>
          <a href="order-begin.html">
            <div class="trip-content-box">
              <div class="trip-avatar">
                <img :src="v.img" alt>
              </div>
              <div class="trip-content">
                <div class="trip-text">城市：{{v.city}}</div>
                <div class="trip-text">时间：{{v.timer}}</div>
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
      </div>
      <div v-else>
        <span class="nones">暂时没有哦！....</span>
      </div>
    </section>
    <section v-show="is_show==3" class="trip_box" id="tripFinish">
      <div v-if="pinjia==1">
        <div class="trip-sub" v-for="(v,k2) in list" :key="k2">
          <div v-if="v.pinjia==1">
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
                  <img :src="v.img" alt>
                </div>
                <div class="trip-content">
                  <div class="trip-text">城市：{{v.city}}</div>
                  <div class="trip-text">时间：{{v.timer}}</div>
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
        </div>
      </div>
      <div v-else>
        <span class="nones">暂时没有哦！....</span>
      </div>
    </section>
    <section v-show="is_show==4" class="trip_box" id="tripComment">
      <div v-if="pinjia==2">
        <div class="trip-sub" v-for="(v,k2) in list" :key="k2">
          <div v-if="v.pinjia==2">
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
                  <img :src="v.img" alt>
                </div>
                <div class="trip-content">
                  <div class="trip-text">城市：{{v.city}}</div>
                  <div class="trip-text">时间：{{v.timer}}</div>
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
        </div>
      </div>
      <div v-else>
        <span class="nones">暂时没有哦！....</span>
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
      ],
      list: [],
      pinjia: ""
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
      this.$set(this.active, 4, 0);
    }
  },
  created() {
    this.axios
      .get(
        "https://www.easy-mock.com/mock/5c3305b6c0a7f916f9116d93/tour/xingcheng"
      )
      .then(res => {
        this.list = res.data.data;
        // 取出 pinjia 的号进行判断
        for (let i = 0; i < this.list.length; i++) {
          this.pinjia = this.list[i].pinjia;
        }
        // console.log(this.pinjia);
      });
  }
};
</script>
<style scoped>
.nones {
  text-align: center;
  font-size: 1.5rem;
}
</style>



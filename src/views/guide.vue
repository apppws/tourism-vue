<template>
  <div>
    <header class="page-header">
      <router-link to="orders" class="page-return">
        <img src="../assets/img/return.png" alt class="return">
      </router-link>
      <span class="page-name">选择向导</span>
    </header>
    <section class="guide-box">
      <div class="guide-sub" v-for="(v,k) in guide" :key="k">
        <router-link :to="{path:'guideinfo',query:{id:v.id}}">
          <div class="guide-info-wrap">
            <div class="guide-pic">
              <img :src="v.hadeImg" alt>
            </div>
            <div class="guide-info">
              <div class="guide-name">{{v.username}}</div>
              <div class="guide-job">
                <span>已接单：{{v.yijiedan}}</span>
                <span>主要接单地：兰州</span>
              </div>
              <div class="guide-intro">{{v.jieshao}}</div>
            </div>
            <div class="float-right guide-select-img">
              <img src="../assets/img/select.png" alt>
            </div>
          </div>
        </router-link>
      </div>
      <!-- <div class="guide-sub">
        <router-link to="guideinfo">
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
            <div class="float-right guide-select-img">
              <img src="../assets/img/select.png" alt>
            </div>
          </div>
        </router-link>
      </div>
      <div class="guide-sub">
        <router-link to="guideinfo">
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
            <div class="float-right guide-select-img">
              <img src="../assets/img/select.png" alt>
            </div>
          </div>
        </router-link>
      </div> -->
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      guide:[]
    }
  },
  created() {
    this.axios.get("https://www.easy-mock.com/mock/5c3305b6c0a7f916f9116d93/tour/guide",this.guide).then((res)=>{
      this.guide = res.data.data
    })
  },
}
</script>

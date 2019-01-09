<template>
  <div>
    <div class="body">
      <header class="m-header">
        <div class="logo">
          <img src="../../assets/img/tubiao.png">
          <p>去旅行</p>
        </div>
        <div class="user-info">
          <router-link to="login">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAyMiAyMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+dXNlcjwvdGl0bGU+PHBhdGggZD0iTTEwLjkzNSA0LjcwMWEzLjA5NSAzLjA5NSAwIDEgMCAwIDYuMTkgMy4wOTUgMy4wOTUgMCAwIDAgMC02LjE5ek0xMC45MzMuMzE5Yy01Ljc5OSAwLTEwLjUgNC43MDEtMTAuNSAxMC41czQuNzAxIDEwLjUgMTAuNSAxMC41IDEwLjUtNC43MDEgMTAuNS0xMC41YzAtNS43OTgtNC43MDEtMTAuNS0xMC41LTEwLjV6bTUuNDE4IDE2Ljc2M2MtLjIyNi0uMDI2LS40NjctLjM4Ny0uNDY3LS4zODctLjQxMi0yLjYzNy0yLjQ2OC00LjY0My00Ljk1LTQuNjQzcy00LjUzOSAyLjAwNi00Ljk1IDQuNjQzYzAgMC0uMDk1LjM1Ni0uNDY3LjM4Ny0uODY4LjA3Mi0uNzYzLS4zODctLjc2My0uMzg3LjA4LTIuNDIgMS42MzYtNC40NzkgMy44MjctNS4zNTRhNC4yNTUgNC4yNTUgMCAxIDEgNC43MDcgMGMyLjE5MS44NzQgMy43NDcgMi45MzQgMy44MjcgNS4zNTQgMCAwLS4wNTQuNDY4LS43NjQuMzg3eiIgZmlsbC1ydWxlPSJub256ZXJvIiBmaWxsPSIjRkZGIi8+PC9zdmc+"
            >
            <span>我的</span>
          </router-link>
        </div>
      </header>
      <!-- 搜索 S -->
      <section class="search-wrapper" data-v-0ae9634c>
        <input
          id="search"
          type="search"
          v-model="search"
          @click="dosearch"
          placeholder="搜索目的地／游记攻略／问答"
          ref="input1"
        >
        <!---->
      </section>
      <!-- 搜索 E -->
      <!-- 推荐 S -->
      <section class="index-choiceProduct">
        <h2 class="index-choiceProduct-title">精选折扣 每日更新</h2>
        <ul class="index-choiceProduct-list">
          <li v-for="(v,k) in tourlist" :key="k">
            <router-link to="/source">
              <div class="pic">
                <img width="100%" :data-src="v.logo" :src="v.logo" lazy="loaded">
              </div>
              <h3>{{v.list_name}}</h3>
              <p class="price">
                <em>{{ v.price }}</em>元起
              </p>
            </router-link>
          </li>
          <!-- <li>
            <router-link to="/source">
              <div class="pic">
                <img
                  width="100%"
                  data-src="../../assets/img/lv2.jpg"
                  src="../../assets/img/lv2.jpg"
                  lazy="loaded"
                >
              </div>
              <h3>[寒假][春节]上海直飞日本大阪/大阪+茨城5-7天往返含税机票(可选含西瓜卡/首晚市区酒店+优质白航班套餐，可预约茨城机场-东京站巴士)</h3>
              <p class="price">
                <em>999</em>元起
              </p>
            </router-link>
          </li>
          <li>
            <router-link to="/source">
              <div class="pic">
                <img
                  width="100%"
                  data-src="../../assets/img/lv3.jpg"
                  src="../../assets/img/lv3.jpg"
                  lazy="loaded"
                >
              </div>
              <h3>广州直飞东京6/7天往返含税机票（优质航空，赠全程WIFI）</h3>
              <p class="price">
                <em>2399</em>元起
              </p>
            </router-link>
          </li>
          <li>
            <router-link to="/source">
              <div class="pic">
                <img
                  width="100%"
                  data-src="../../assets/img/lv4.jpg"
                  src="../../assets/img/lv4.jpg"
                  lazy="loaded"
                >
              </div>
              <h3>[预售至19年6月]北京往返格鲁吉亚第比利斯7-30天自由行（全国联运/赠接机+2晚酒店/乌鲁木齐可停留/代办签证）</h3>
              <p class="price">
                <em>3799</em>元起
              </p>
            </router-link>
          </li>-->
        </ul>
      </section>
      <!-- 推荐 E -->
      <section class="raider-wrap">
        <div class="ui-section-head">
          <span class="ui-section-title">游记与话题</span>
          <a href="//m.qyer.com/bbs/" data-bn-igp="mindex-thread_group-all" class="ui-section-more">
            <span>更多</span>
          </a>
        </div>
        <div class="raider-box">
          <router-link to="tourlist">
            <div
              class="raider-sub"
              v-for="(v,k) in tourblogs"
              :key="k"
              v-infinite-scroll="loadMore"
              infinite-scroll-disabled="disableLoad"
              infinite-scroll-distance="50"
            >
              <div class="raider-left">
                <div class="raider-title">{{ v.title }}</div>
                <div class="raider-text">{{v.content}}</div>
                <div class="raider-bottom">
                  <span class="raider-bottom-sub">
                    <img src="../../assets/img/index_like.png" alt>
                    {{v.zan}}万
                  </span>
                  <span class="raider-bottom-sub">
                    <img src="../../assets/img/index_dislike.png" alt>
                    {{v.cai}}
                  </span>
                  <span class="raider-bottom-sub">
                    <img src="../../assets/img/index_love.png" alt>
                    {{v.shoucang}}
                  </span>
                </div>
              </div>
              <div class="raider-right">
                <img :src="v.img" alt>
              </div>
            </div>
          </router-link>
          <!-- <a href="guide.html">
            <div class="raider-sub">
              <div class="raider-left">
                <div class="raider-title">她们被称为“台湾的万青”，不到20岁她们被称为“台湾的万青”，不到20岁</div>
                <div class="raider-text">抓住一个地区的时候，这和涅槃的时候同样珍贵。</div>
                <div class="raider-bottom">
                  <span class="raider-bottom-sub">
                    <img src="../../assets/img/index_like.png" alt>
                    2.9万
                  </span>
                  <span class="raider-bottom-sub">
                    <img src="../../assets/img/index_dislike.png" alt>
                    1200
                  </span>
                  <span class="raider-bottom-sub">
                    <img src="../../assets/img/index_love.png" alt>
                    2200
                  </span>
                </div>
              </div>
              <div class="raider-right">
                <img src="../../assets/img/guide_pic.png" alt>
              </div>
            </div>
          </a>-->
          <wv-loadmore v-if="islastPage" id="stopLoad" type="lineDot" text="loading"></wv-loadmore>
          <wv-loadmore v-else></wv-loadmore>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 搜索
      search: "",
      // 推荐数据
      tourlist: {
        logo: "",
        price: "",
        list_name: "",
        category: {
          logo: "",
          title: "",
          price: "",
          traffic: "",
          wangfeiji: "",
          fanfeiji: "",
          wang: "",
          fan: "",
          jiudian: "",
          dizhi: "",
          jdjieshao: ""
        }
      },
      // 游记日志
      tourblogs: [],
      listsearch: {
        page: 4,
        per_page: 3,
        sortby: "id",
        order: "desc"
      },
      // 是否禁止滚动
      disableLoad: false,
      //是否到最后一页
      islastPage: false
    };
  },
  mounted() {},
  created() {
    // 推荐
    this.axios
      .get(
        "https://easy-mock.com/mock/5c3305b6c0a7f916f9116d93/tour/tourlist",
        this.tourlist
      )
      .then(res => {
        this.tourlist = res.data.data;
      });
    // 游记日志
    this.axios
      .get(
        "https://easy-mock.com/mock/5c3305b6c0a7f916f9116d93/tour/tourblogs",
        this.tourblogs
      )
      .then(res => {
        this.tourblogs = res.data.data;
        // console.log(this.tourblogs);
      });
  },
  methods: {
    dosearch() {
      // 去掉左右空格
      this.search = this.search.trim();
      // 调转到搜索页面
      this.$router.push("/seach");
    },
    // 当滚动条到 50 触发的函数
    loadMore() {
      // 1 先禁止滚动条的滚动
      this.disableLoad = true;
      this.listsearch.page++
      // 3 
      this.axios.get(
          "https://www.easy-mock.com/mock/5c3305b6c0a7f916f9116d93/tour/tourblogs",
          { params: this.listsearch }
        )
        .then(res => {
          console.log(res.data.data)
          // 合并到原来数组
          this.tourblogs = this.tourblogs.concat(res.data.data);
          // 在判断这个数据有几条记录  
          // console.log(Math.floor(Object.keys(this.tourblogs).length / this.listsearch.page));
          if ( Math.floor(Object.keys(this.tourblogs).length / this.listsearch.per_page) > 5) {
          //   // 设置允许访问
            this.disableLoad = false;
          } else {
            // 已经到最后一页了
            this.islastPage = true;
          }
        });
    }
  }
};
</script>
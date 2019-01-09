<template>
  <div>
    <!--头部-->
    <header class="guide-header">
      <div class="page-header clear-header">
        <router-link to="/" class="page-return">
          <img src="../assets/img/return_white.png" alt class="return">
        </router-link>
        <span class="page-name">{{ list.title }}-{{list.id}}</span>
      </div>
      <div class="writer">
        <div class="writer-name">
          <img src="../assets/img/guide_icon.png" alt>
          <span>向导：飞奔的蜗牛</span>
        </div>
        <div class="writer-time">
          <img src="../assets/img/time.png" alt>
          <span>发布时间：2018.01.01</span>
        </div>
      </div>
    </header>
    <!--攻略内容-->
    <div class="wrap">
      <section class="mb-10">
        <div class="guide-content-box">
          <div class="guide-content">{{ list.content }}</div>
          <div class="guide-content-pic">
            <img :src="list.img" alt>
          </div>
          <div class="guide-content">{{ list.content }}</div>
        </div>
        <div class="guide-info-wrap container">
          <div class="guide-pic-sm">
            <img src="../assets/img/avatar.jpg" alt>
          </div>
          <div class="guide-info-sm">
            <div class="guide-name-sm">飞奔的蜗牛</div>
            <div class="guide-job-sm">
              <span>已接单：30</span>
              <span>主要接单地：兰州</span>
            </div>
          </div>
          <div class="guide-contact">
            <router-link to="guideinfo">联系他</router-link>
          </div>
        </div>
      </section>
      <!--评论-->
      <section class="guide-comment">
        <div class="comment-box">
          <div class="comment-num container">评论（2200）</div>
          <div class="container">
            <input type="text" class="comment-input" placeholder="写评论">
          </div>
        </div>
        <div class="comment-list" v-for="(v,k) in pinlun" :key="k">
          <div class="comment-sub">
            <div class="comment-sub-title">
              <div class="comment-pic" id="comment-pic">
                <img :src="v.headImg" alt>
              </div>
              <div class="comment-info">
                <div class="comment-name">{{ v.user }}</div>
                <div class="comment-time">{{ v.created_at }}</div>
              </div>
            </div>
            <div class="comment-content">{{v.content }}</div>
          </div>
        </div>
        <div v-show="isShow" @click="All" class="comment-more">加载全部评论</div>
        <div v-show="!isShow" @click="All" class="comment-more">已经加载最新的了</div>
        <div class="comment-state">
          <div class="comment-like">
            <img src="../assets/img/like.png" alt>
            <span>{{list.zan}}个</span>
          </div>
          <div class="comment-dislike">
            <img src="../assets/img/dislike.png" alt>
            <span>{{list.cai}}</span>
          </div>
          <div class="comment-love">
            <img src="../assets/img/love.png" alt>
            <span>{{list.shoucang}}</span>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ids: this.$route.query.id,
      list: {
        id: this.$route.query.id,
        title: "",
        content: "",
        zan: "",
        cai: "",
        shoucang: "",
        img: ""
      },
      pinlun: [],
      isShow: true
    };
  },
  // "https://www.easy-mock.com/mock/5c3305b6c0a7f916f9116d93/tour/content?id="+this.ids
  // 因是模拟数据  不能查找传id  如果有后端 传入上面id即可
  created() {
    // 列表
    this.axios
      .get(
        "https://www.easy-mock.com/mock/5c3305b6c0a7f916f9116d93/tour/content",
        this.list
      )
      .then(res => {
        this.list.title = res.data.data.title;
        this.list.content = res.data.data.content;
        this.list.zan = res.data.data.zan;
        this.list.cai = res.data.data.cai;
        this.list.shoucang = res.data.data.shoucang;
        this.list.img = res.data.data.img;
      });

    // 评论
    this.axios
      .get(
        "https://www.easy-mock.com/mock/5c3305b6c0a7f916f9116d93/tour/pinlun",
        this.pinlun
      )
      .then(res => {
        this.pinlun = res.data.data;
        // console.log(this.pinlun)
      });
  },
  methods: {
    // 获取最新数据
    All() {
      if (this.pinlun.length > 1) {
        this.isShow = false;
      }else{
        this.isShow = true
      }
    }
  }
};
</script>
<style scoped>
.page-header {
    position: fixed;
    top: 0;
    width: 100%;
    height: 2.95rem;
    line-height: 2.95rem;
    background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0, transparent);
    border-bottom: 1px solid #f0ebeb;
    z-index: 999;
}
</style>



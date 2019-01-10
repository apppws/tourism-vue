<template>
  <div>
    <header class="page-header">
      <router-link to="guide" class="page-return">
        <img src="../assets/img/return.png" alt class="return">
      </router-link>
      <span class="page-name">向导信息</span>
    </header>
    <section class="guide-verify-box">
      <div class="guide-verify-pic">
        <img :src="info.headImg" alt>
      </div>
      <div class="guide-verify-name">{{info.username}}-{{id}}</div>
      <div class="guide-verify-info font-28">
        <span>主要接单地：兰州</span>
        <span>已接单：{{info.yijiedan}}</span>
      </div>
      <div class="guide-verify-text">
        {{info.jieshao}}
      </div>
    </section>
    <router-link :to="{path:'order',query:{id:id}}">
      <section class="bottom-btn">就选ta</section>
    </router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: this.$route.query.id,
      info:'',
    };
  },
  created() {
    this.axios.get("https://www.easy-mock.com/mock/5c3305b6c0a7f916f9116d93/tour/guideInfo").then((res)=>{
        this.info = res.data.data
        // console.log(this.info);
    })  
  },
};
</script>


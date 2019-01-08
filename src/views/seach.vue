<template>
  <div>
    <header class="search-header">
      <div class="search-container">
        <img src="../assets/img/search_blank.png" alt>
        <input type="search" v-model="search" @keyup.enter="besearch" class="search-input" placeholder="搜索目的地/向导号">
      </div>
      <router-link to="/">取消</router-link>
    </header>
    <section>
      <div class="search-title">
        <span>搜索历史</span>
        <img src="../assets/img/recycle.png" @click="del" alt>
      </div>
      <div class="search-wrap">
        <span v-show="!isshow" v-for="(v,k) in lists" :key="k">{{v.txt}}</span>
        <span v-show="isshow">暂时没有历史记录.....</span>
      </div>
    </section>
    <section>
      <div class="search-title">
        <span>热门城市</span>
      </div>
      <div class="search-wrap">
        <span>香港</span>
        <span>香港</span>
        <span>哈尔滨</span>
        <span>香格里拉</span>
        <span>香港</span>
        <span>香港</span>
        <span>哈尔滨</span>
        <span>香格里拉</span>
        <span>香港</span>
        <span>香港</span>
        <span>哈尔滨</span>
        <span>香格里拉</span>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      search: this.$route.query.search,
      lists: [],
      isshow:true,
    };
  },
  created() {
    // 从浏览器中获取数据
    let t = localStorage.getItem("searchlist");
    // 设置到 vue 的数据中
    this.lists = t ? JSON.parse(t) : [];
    // console.log(this.lists);
  },
  methods: {
    besearch() {
      if (this.$route.query.search != "") {
        // 加入数组最后
        this.lists.push({
          txt: this.search
        });
        // 写到浏览器中
        localStorage.setItem("searchlist", JSON.stringify(this.lists));
        this.isshow = false;
        // 清空输入框中的内容
        this.search = "";
      } else {
        alert("不能为空");
      }
    },
    // 删除
    del() {
      if (confirm("确定要删除吗？")) {
        // 从数组中删除第k个元素，删除一个
        this.lists.splice(1, this.lists.length);
        localStorage.removeItem("searchlist");
        this.isshow = true;
      }
    }
  }
};
</script>

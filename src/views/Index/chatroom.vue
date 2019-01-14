<template>
  <div>
    <header class="page-header">
      <span class="page-name">聊天</span>
    </header>
    <section class="min-height chat-list">
      <div v-for="(v,k) in userList" :key="k">
        <router-link :to="{path:'chat',query:{username:v.name}}">
          <div class="chat-list-sub">
            <div class="guide-pic-sm">
              <img :src="v.headImg" alt>
            </div>
            <div class="chat-content">
              <div class="chat-name">{{v.name}}</div>
            </div>
            <div class="float-right chat-right">{{v.times}}</div>
          </div>
        </router-link>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userList: []
    };
  },
  created() {
    this.axios
      .get(
        "https://www.easy-mock.com/mock/5c3305b6c0a7f916f9116d93/tour/chatroomUser"
      )
      .then(res => {
        this.userList = res.data.data;
      });
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
  background-color: #fff;
  border-bottom: 1px solid #f0ebeb;
  z-index: 999;
}
</style>


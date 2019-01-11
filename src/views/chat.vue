<template>
  <div>
    <div class="wrap">
      <header class="page-header">
        <router-link to="/chatroom" class="page-return">
          <img src="../assets/img/return.png" alt class="return">
        </router-link>
        <span class="page-name">奔跑的蜗牛</span>
      </header>
      <div class="chat-wrap">
        <div class="chat-time">2月24日 20:50</div>
        <div class="chat-other chat-sub">
          <div class="guide-pic-sm">
            <img src="../assets/img/avatar.jpg" alt>
          </div>
          <div class="chat-other-content">
            <div class="triangle"></div>
            <div class="chat-content-div">你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好</div>
            <div class="chat-content-div">你好你好你好你好</div>
            <div class="chat-content-div">你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好</div>
          </div>
        </div>
        <div class="chat-me chat-sub">
          <div class="chat-me-content">
            <div class="triangle"></div>
            <div class="chat-content-div">你好你好你好你好</div>
          </div>
          <div class="guide-pic-sm">
            <img src="../assets/img/avatar.jpg" alt>
          </div>
        </div>
      </div>
    </div>

    <section class="chat-input-box">
      <div class="chat-voice">
        <img src="../assets/img/chat_voice.png" alt>
      </div>
      <input type="text" class="chat-input">
      <div class="chat-icon">
        <a v-show="send" @click.prevent="send">发送</a>
        <img v-show="!send" src="../assets/img/chat_icon.png" alt>
      </div>
      <div class="chat-add">
        <img src="../assets/img/chat_add.png" alt>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  // this.socketApi.sendSock(agentData,this.getConfigResult);   【agentData：发送的参数；this.getConfigResult：回调方法】
  data() {
    return {
      id: this.$route.query.id,
      send: true,
      datas: "你好啊",
      getConfigResult: "好的"
    };
  },
  methods: {
    send() {
      this.socketApi.sendSock(this.datas, this.getConfigResult);
      console.log(this.datas, this.getConfigResult);
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
  background-color: #fff;
  border-bottom: 1px solid #f0ebeb;
  z-index: 999;
}
</style>
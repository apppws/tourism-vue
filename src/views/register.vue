<template>
  <div>
    <header class="page-header">
      <router-link to="/" class="page-return">
        <img src="../assets/img/return.png" alt class="return">
      </router-link>
      <span class="page-name">注册</span>
      <router-link to="login" class="page-right">已有账号</router-link>
    </header>
    <section class="logon-box">
      <input type="text" v-model="username" placeholder="手机号/用户名">
      <input type="text" v-model="send" placeholder="验证码">
      <input type="password" v-model="password" placeholder="密码">
      <span v-show="sendAuthCode" class="send-code" @click="getAuthCode">获取验证码</span>
      <span v-show="!sendAuthCode" class="send-code">
        <span class="auth_text_blue">{{auth_time}}</span> 秒之重新发送验证码
      </span>
      <div class="btn-box">
        <button @click="doRegister">注册</button>
      </div>
      <div class="user-agreement">点击注册表示同意
        <router-link to="/userAgreement" class="xieyi">用户协议</router-link>
      </div>
    </section>
  </div>
</template>
<script>
import { Dialog, Toast } from "we-vue";
export default {
  data() {
    return {
      username: "",
      password: "",
      send: "", //验证码
      // 时间倒计时
      sendAuthCode: true,
      /*倒计时 计数器*/
      auth_time: 0
    };
  },
  methods: {
    // 60秒
    getAuthCode: function() {
      this.sendAuthCode = false;
      this.auth_time = 60;
      var auth_timetimer = setInterval(() => {
        this.auth_time--;
        if (this.auth_time <= 0) {
          this.sendAuthCode = true;
          clearInterval(auth_timetimer);
        }
      }, 1000);
    },
    //注册操作
    doRegister() {
      let options = {
        username: this.username,
        password: this.password
      };
      this.axios
        .post(
          "https://easy-mock.com/mock/5c3305b6c0a7f916f9116d93/tour/members",
          options
        )
        .then(res => {
          // console.log(res);
          if (res.status == "200") {
            localStorage.setItem('username',this.username)
            localStorage.setItem('password',this.password)   //暂时模拟  
            Dialog({
              message: "注册成功",
              skin: "android"
            }).then(res => {
              this.$router.push("login");
            });
          } else {
            Toast.fail({
              duration: 1000,
              message: "注册账号或者密码不正确"
            });
          }
        });
    }
  }
};
</script>

<style socped>
.user-agreement .xieyi {
  font-size: 16px;
  color: brown;
}
</style>
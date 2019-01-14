<template>
  <div>
    <header class="logon-header">
      <img src="../assets/img/tubiao.png" alt>
      <span>去旅行</span>
    </header>
    <section class="logon-box">
      <input type="text" v-model="username" placeholder="手机号/用户名">
      <input type="password" v-model="password" placeholder="密码">
      <a href class="forget">忘记密码？</a>
      <div class="btn-box">
        <button @click="doLogin">登录</button>
      </div>
      <div class="register-box">没有账号？
        <router-link to="register">去注册</router-link>
      </div>
    </section>

    <section class="logon-link">
      <div class="logon-link-text">使用其他账号登录</div>
      <div class="logon-link-list">
        <a href>
          <img src="../assets/img/wechat.png" alt>
        </a>
        <a href>
          <img src="../assets/img/weibo.png" alt>
        </a>
        <a href>
          <img src="../assets/img/qq.png" alt>
        </a>
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
      password: ""
    };
  },
  methods: {
    doLogin() {
      // console.log(res);
      //    判断是否登录成功
      var name = localStorage.getItem('username');
      var password = localStorage.getItem('password');

      if (name == this.username || password == this.password ) {
        Dialog({
          message: "注册成功",
          skin: "android"
        }).then(res => {
          this.$router.push("/");
        });
      } else {
        Toast.fail({
          duration: 1000,
          message: "注册账号或者密码不正确"
        });
      }
    }
  }
};
</script>
<style scoped>
  .logon-header img {
    width: 80px;
    height: 80px;
    position: fixed;
    left: 33%;
    top: 6%;
}
</style>


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
      <input type="text" placeholder="手机号">
      <input type="text" placeholder="验证码">
      <input type="password" placeholder="密码">
      <a href class="send-code">发送验证码</a>
      <div class="btn-box">
        <button>注册</button>
      </div>
      <div class="user-agreement">
        点击注册表示同意
        <router-link to="/userAgreement" class="xieyi">用户协议</router-link>
      </div>
    </section>
  </div>
</template>
<style>
    .user-agreement .xieyi{
        font-size: 16px;
        color: brown;
    }
</style>


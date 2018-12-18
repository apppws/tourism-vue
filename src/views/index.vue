<template>
  <div>
    <!-- 子视图 -->
		<router-view/>
    <section class="comm-nav">
      <div  :class="{'nav-index':$route.name=='index'}">
        <router-link to="/">
          <div class="nav-img-box">
            <img  v-if="$route.name=='index'" src="../assets/img/nav_index_chk.png" alt>
            <img v-else src="../assets/img/nav_index.png" alt>
          </div>
          <div :class="{'nav-active':$route.name=='index'}">首页</div>
        </router-link>
      </div>
      <div :class="{'nav-travel':$route.name=='orders'}">
        <router-link to="/orders">
          <div class="nav-img-box">
            <img v-if="$route.name=='orders'" src="../assets/img/nav_travel_chk.png" alt>
            <img v-else src="../assets/img/nav_travel.png" alt>
          </div>
          <div :class="{'nav-active':$route.name=='orders'}">旅行</div>
        </router-link>
      </div>
      <div :class="{'nav-chat':$route.name=='chatroom'}">
        <router-link to="/chatroom">
          <div class="nav-img-box">
            <img v-if="$route.name=='chatroom'" src="../assets/img/nav_chat_chk.png" alt>
            <img v-else src="../assets/img/nav_chat.png" alt>
          </div>
          <div :class="{'nav-active':$route.name=='chatroom'}">聊天</div>
        </router-link>
      </div>
      <div :class="{'nav-user':$route.name=='home'}">
        <router-link to="/home">
          <div class="nav-img-box">
            <img v-if="$route.name=='home'" src="../assets/img/nav_user_chk.png" alt>
            <img v-else src="../assets/img/nav_user.png" alt>
          </div>
          <div :class="{'nav-active':$route.name=='home'}">主页</div>
        </router-link>
      </div>
    </section>
  </div>
</template>


<template>
  <div>
    <!--头部-->
    <header class="guide-header">
      <div class="page-header clear-header">
        <router-link to="/" class="page-return">
          <img src="../assets/img/return_white.png" alt class="return">
        </router-link>
        <span class="page-name">迷人的兰州</span>
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
          <div
            class="guide-content"
          >我们这次住的是海景房（Ocean View Room），在携程上订的，2000左右一个晚上，不含早餐。预定的时候可以跟他们说自己有什么需求，我就写了想要高一点的楼层</div>
          <div class="guide-content-pic">
            <img src="../assets/img/guide_pic.png" alt>
          </div>
          <div
            class="guide-content"
          >我们这次住的是海景房（Ocean View Room），在携程上订的，2000左右一个晚上，不含早餐。预定的时候可以跟他们说自己有什么需求，我就写了想要高一点的楼层</div>
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
        <div class="comment-list">
          <div class="comment-sub">
            <div class="comment-sub-title">
              <div class="comment-pic" id="comment-pic">
                <img src="../assets/img/avatar.jpg" alt>
              </div>
              <div class="comment-info">
                <div class="comment-name">飞奔的蜗牛</div>
                <div class="comment-time">2018.01.01</div>
              </div>
            </div>
            <div class="comment-content">好地方。晚上更漂亮的地方。晚上更漂亮的地方。晚上更漂亮的地方。晚上更漂亮的地方。晚上更漂亮的地方。</div>
          </div>
        </div>
        <div class="comment-more">加载全部评论</div>
        <div class="comment-state">
          <div class="comment-like">
            <img src="../assets/img/like.png" alt>
            <span>2.9万</span>
          </div>
          <div class="comment-dislike">
            <img src="../assets/img/dislike.png" alt>
            <span>1200</span>
          </div>
          <div class="comment-love">
            <img src="../assets/img/love.png" alt>
            <span>2200</span>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<template>
  <div>
    <div class="body">
      <header class="m-header">
        <div class="logo">
          <img src="../../assets/img/tubiao.png">
          <p>去旅行</p>
        </div>
        <div class="user-info">
          <router-link to="login">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAyMiAyMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+dXNlcjwvdGl0bGU+PHBhdGggZD0iTTEwLjkzNSA0LjcwMWEzLjA5NSAzLjA5NSAwIDEgMCAwIDYuMTkgMy4wOTUgMy4wOTUgMCAwIDAgMC02LjE5ek0xMC45MzMuMzE5Yy01Ljc5OSAwLTEwLjUgNC43MDEtMTAuNSAxMC41czQuNzAxIDEwLjUgMTAuNSAxMC41IDEwLjUtNC43MDEgMTAuNS0xMC41YzAtNS43OTgtNC43MDEtMTAuNS0xMC41LTEwLjV6bTUuNDE4IDE2Ljc2M2MtLjIyNi0uMDI2LS40NjctLjM4Ny0uNDY3LS4zODctLjQxMi0yLjYzNy0yLjQ2OC00LjY0My00Ljk1LTQuNjQzcy00LjUzOSAyLjAwNi00Ljk1IDQuNjQzYzAgMC0uMDk1LjM1Ni0uNDY3LjM4Ny0uODY4LjA3Mi0uNzYzLS4zODctLjc2My0uMzg3LjA4LTIuNDIgMS42MzYtNC40NzkgMy44MjctNS4zNTRhNC4yNTUgNC4yNTUgMCAxIDEgNC43MDcgMGMyLjE5MS44NzQgMy43NDcgMi45MzQgMy44MjcgNS4zNTQgMCAwLS4wNTQuNDY4LS43NjQuMzg3eiIgZmlsbC1ydWxlPSJub256ZXJvIiBmaWxsPSIjRkZGIi8+PC9zdmc+"
            >
            <span>我的</span>
          </router-link>
        </div>
      </header>
      <!-- 搜索 S -->
      <section class="search-wrapper" data-v-0ae9634c>
        <input id="search" type="text" placeholder="搜索目的地／游记攻略／问答">
        <!---->
      </section>
      <!-- 搜索 E -->
      <!-- 推荐 S -->
      <section class="index-choiceProduct">
        <h2 class="index-choiceProduct-title">精选折扣 每日更新</h2>
        <ul class="index-choiceProduct-list">
          <li>
            <router-link to="/source">
              <div class="pic">
                <img
                  width="100%"
                  data-src="../../assets/img/lv1.jpg"
                  src="../../assets/img/lv1.jpg"
                  lazy="loaded"
                >
              </div>
              <h3>[圣诞][元旦][春节]上海/南京/杭州直飞东京/大阪/名古屋/冲绳/札幌/福冈2-30天往返含税机票</h3>
              <p class="price">
                <em>3499</em>元起
              </p>
            </router-link>
          </li>
          <li>
            <router-link to="/source">
              <div class="pic">
                <img
                  width="100%"
                  data-src="../../assets/img/lv2.jpg"
                  src="../../assets/img/lv2.jpg"
                  lazy="loaded"
                >
              </div>
              <h3>[寒假][春节]上海直飞日本大阪/大阪+茨城5-7天往返含税机票(可选含西瓜卡/首晚市区酒店+优质白航班套餐，可预约茨城机场-东京站巴士)</h3>
              <p class="price">
                <em>999</em>元起
              </p>
            </router-link>
          </li>
          <li>
            <router-link to="/source">
              <div class="pic">
                <img
                  width="100%"
                  data-src="../../assets/img/lv3.jpg"
                  src="../../assets/img/lv3.jpg"
                  lazy="loaded"
                >
              </div>
              <h3>广州直飞东京6/7天往返含税机票（优质航空，赠全程WIFI）</h3>
              <p class="price">
                <em>2399</em>元起
              </p>
            </router-link>
          </li>
          <li>
            <router-link to="/source">
              <div class="pic">
                <img
                  width="100%"
                  data-src="../../assets/img/lv4.jpg"
                  src="../../assets/img/lv4.jpg"
                  lazy="loaded"
                >
              </div>
              <h3>[预售至19年6月]北京往返格鲁吉亚第比利斯7-30天自由行（全国联运/赠接机+2晚酒店/乌鲁木齐可停留/代办签证）</h3>
              <p class="price">
                <em>3799</em>元起
              </p>
            </router-link>
          </li>
        </ul>
      </section>
      <!-- 推荐 E -->
      <section class="raider-wrap">
        <div class="ui-section-head">
          <span class="ui-section-title">游记与话题</span>
          <a href="//m.qyer.com/bbs/" data-bn-igp="mindex-thread_group-all" class="ui-section-more">
            <span>更多</span>
          </a>
        </div>
        <div class="raider-box">
          <a href="guide.html">
            <div class="raider-sub">
              <div class="raider-left">
                <div class="raider-title">她们被称为“台湾的万青”，不到20岁她们被称为“台湾的万青”，不到20岁</div>
                <div class="raider-text">抓住一个地区的时候，这和涅槃的时候同样珍贵。</div>
                <div class="raider-bottom">
                  <span class="raider-bottom-sub">
                    <img src="../../assets/img/index_like.png" alt>
                    2.9万
                  </span>
                  <span class="raider-bottom-sub">
                    <img src="../../assets/img/index_dislike.png" alt>
                    1200
                  </span>
                  <span class="raider-bottom-sub">
                    <img src="../../assets/img/index_love.png" alt>
                    2200
                  </span>
                </div>
              </div>
              <div class="raider-right">
                <img src="../../assets/img/guide_pic.png" alt>
              </div>
            </div>
          </a>
          <a href="guide.html">
            <div class="raider-sub">
              <div class="raider-left">
                <div class="raider-title">她们被称为“台湾的万青”，不到20岁她们被称为“台湾的万青”，不到20岁</div>
                <div class="raider-text">抓住一个地区的时候，这和涅槃的时候同样珍贵。</div>
                <div class="raider-bottom">
                  <span class="raider-bottom-sub">
                    <img src="../../assets/img/index_like.png" alt>
                    2.9万
                  </span>
                  <span class="raider-bottom-sub">
                    <img src="../../assets/img/index_dislike.png" alt>
                    1200
                  </span>
                  <span class="raider-bottom-sub">
                    <img src="../../assets/img/index_love.png" alt>
                    2200
                  </span>
                </div>
              </div>
              <div class="raider-right">
                <img src="../../assets/img/guide_pic.png" alt>
              </div>
            </div>
          </a>
          <a href="guide.html">
            <div class="raider-sub">
              <div class="raider-left">
                <div class="raider-title">她们被称为“台湾的万青”，不到20岁她们被称为“台湾的万青”，不到20岁</div>
                <div class="raider-text">抓住一个地区的时候，这和涅槃的时候同样珍贵。</div>
                <div class="raider-bottom">
                  <span class="raider-bottom-sub">
                    <img src="../../assets/img/index_like.png" alt>
                    2.9万
                  </span>
                  <span class="raider-bottom-sub">
                    <img src="../../assets/img/index_dislike.png" alt>
                    1200
                  </span>
                  <span class="raider-bottom-sub">
                    <img src="../../assets/img/index_love.png" alt>
                    2200
                  </span>
                </div>
              </div>
              <div class="raider-right">
                <img src="../../assets/img/guide_pic.png" alt>
              </div>
            </div>
          </a>
          <a href="guide.html">
            <div class="raider-sub">
              <div class="raider-left">
                <div class="raider-title">她们被称为“台湾的万青”，不到20岁她们被称为“台湾的万青”，不到20岁</div>
                <div class="raider-text">抓住一个地区的时候，这和涅槃的时候同样珍贵。</div>
                <div class="raider-bottom">
                  <span class="raider-bottom-sub">
                    <img src="../../assets/img/index_like.png" alt>
                    2.9万
                  </span>
                  <span class="raider-bottom-sub">
                    <img src="../../assets/img/index_dislike.png" alt>
                    1200
                  </span>
                  <span class="raider-bottom-sub">
                    <img src="../../assets/img/index_love.png" alt>
                    2200
                  </span>
                </div>
              </div>
              <div class="raider-right">
                <img src="../../assets/img/guide_pic.png" alt>
              </div>
            </div>
          </a>

          <wv-loadmore></wv-loadmore>
          <wv-loadmore type="lineDot" text="loading"></wv-loadmore>
        </div>
      </section>
    </div>
  </div>
</template>

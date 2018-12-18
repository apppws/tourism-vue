<template>
  <div>
    <!-- 标题 S -->
    <section class="commodityBar clearfix">
      <div class="commodityImgBar clearfix">
        <img
          src="../assets/img/jindian1.jpg"
          width="100%"
          height="auto"
          title="[元旦]天津往返东京/大阪/名古屋/冲绳/札幌4-7天含税机票（天津航空/日本航空/两点进出）"
          alt="[元旦]天津往返东京/大阪/名古屋/冲绳/札幌4-7天含税机票（天津航空/日本航空/两点进出）"
          class="commodityImg"
        >
        <!-- 左边图标 -->
        <div class="mask">
          <div class="left">
            <router-link to="/">
              <img src="../assets/img/jt.png" alt>
            </router-link>
          </div>
        </div>
        <!-- 搜索 -->
        <div class="zw-share sharebtn">
          <a data-bn-ipg="details-share-click" class="zw-share-button zw-share-button-white"></a>
          <div class="zw-share-mask" style="display:none;">
            <!-- 图片 -->
            <img
              src="//fes.qyerstatic.com/Fj0cF4rvFON-kXOxqwFUmmdk43E-?imageslim"
              class="zw-share-in-safari"
            >
          </div>
        </div>
        <p>产品编号&nbsp;82013</p>
      </div>
      <div id="toProduct"></div>
      <h1 id="product_title" class="tit">
        <a name="product">[元旦]天津往返东京/大阪/名古屋/冲绳/札幌4-7天含税机票（天津航空/日本航空/两点进出）</a>
      </h1>
      <div class="info">
        <div class="price">
          <em>1499</em>元起
        </div>
        <div class="floorGuide">
          <a href="#this">底价指南</a>
        </div>
        <div class="sold">已售&nbsp;1260份</div>
        <div class="browse">浏览&nbsp;7644145</div>
        <!---->
      </div>
      <!-- 标题 E -->
    </section>
    <!-- app专享 S-->
    <section class="commodityBar clearfix">
      <input type="hidden" id="lid" value="82013">
      <!---->
      <div class="appAttentiveBox">
        <a
          href="javascript: void(0)"
          id="detailAppAttentive"
          data-bn-ipg="bookenAPP-click"
          data-download="https://dpl.qyer.com/app/guide/applinks.html?@=deal/detail/82013&amp;campaign=z_pt&amp;category="
          data-app="qyer://deal/detail/82013/"
          data-app-dpl="https://dpl.qyer.com/app/guide/applinks.html?@=deal/detail/82013&amp;campaign=z_pt&amp;category="
        >
          <em class="tag">APP专享</em>
          <span class="text">用去旅行App预订, 更快更方便</span>
          <p class="buy">
            <span class="zwui-iconfont icon-arrow-right"></span>
          </p>
        </a>
      </div>
    </section>
    <!-- app专享 E -->
    <!-- 二次确认 S -->
    <section class="commodityBar clearfix">
      <div class="confirm">
        <i class="zwui-iconfont zworld-icon-right">
          <img src="../assets/img/queren.png" alt>
        </i>
        <div class="secondConfirm">二次确认</div>
        <div class="confirmText">二次确认商品，需要卖家确认后出行 &nbsp;请至少提前2天预订</div>
      </div>
    </section>

    <!-- 二次确认 E -->
    <!-- 产品介绍 S-->
    <section id="product_detail" class="wrap" style="margin-bottom:200px">
      <!-- 需要固定的导航栏 -->
      <div id="topBar">
        <div class="titleWrap">
          <div id="titleWr" :class="[{'isFixed':isfixed},'titleWr clearfix']">
            <div class="title">
              <div class="show">产品介绍</div>
              <div class="noshow">购买须知</div>
              <div class="clear"></div>
            </div>
          </div>
        </div>
      </div>
      <section id="introduce">
        <!-- 交通信息 S -->
        <section class="commodityBar clearfix introduce">
          <div class="fieldBar">
            <h2 class="infoTitle">交通信息</h2>
            <p class="warmTips">交通信息仅供参考，最终以供应商确认为准</p>
            <ul class="airTagBar">
              <li class="place cur">成都</li>
              <div class="clear"></div>
            </ul>
            <div class="airConBar">
              <div class="airConBox">
                <div style="padding-bottom: 1.5rem;">
                  <div class="caseTitle">
                    <table>
                      <tbody>
                        <tr>
                          <td class="left">
                            <p>交通1</p>
                          </td>
                          <td class="right">
                            <!---->
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="airTicketInfo">
                    <div class="goInfo">
                      <!---->
                      <span class="direction">往</span>
                      <div class="titleBar">
                        <span class="date">DAY1</span>
                        <span class="til">春秋航空9C8663</span>
                      </div>
                      <!---->
                      <div class="timeBar">
                        <div class="left">
                          <a href="javascript:void(0)" class="time">10:50</a>
                          <span class="text">成都</span>
                        </div>
                        <div class="right">
                          <a href="javascript:void(0)" class="time">14:00
                            <!---->
                            <!---->
                          </a>
                          <span class="text">甲米</span>
                        </div>
                        <div class="mid">
                          <i class="zwui-iconfont zworld-icon-traffic-line"></i>
                        </div>
                        <div class="clear"></div>
                      </div>
                    </div>
                    <div class="backInfo">
                      <!---->
                      <span class="direction">返</span>
                      <div class="titleBar">
                        <span class="date">DAY5/6</span>
                        <span class="til">春秋航空9C8664</span>
                      </div>
                      <!---->
                      <div class="timeBar">
                        <div class="left">
                          <a href="javascript:void(0)" class="time">15:00</a>
                          <span class="text">甲米</span>
                        </div>
                        <div class="right">
                          <a href="javascript:void(0)" class="time">19:45
                            <!---->
                            <!---->
                          </a>
                          <span class="text">成都</span>
                        </div>
                        <div class="mid">
                          <i class="zwui-iconfont zworld-icon-traffic-line"></i>
                        </div>
                        <div class="clear"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div style="padding-bottom: 1.5rem;">
                  <div class="caseTitle">
                    <table>
                      <tbody>
                        <tr>
                          <td class="left">
                            <p>交通2</p>
                          </td>
                          <td class="right">
                            <!---->
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="airTicketInfo">
                    <div class="goInfo">
                      <!---->
                      <span class="direction">往</span>
                      <div class="titleBar">
                        <span class="date">DAY1</span>
                        <span class="til">四川航空3U8079</span>
                      </div>
                      <!---->
                      <div class="timeBar">
                        <div class="left">
                          <a href="javascript:void(0)" class="time">17:45</a>
                          <span class="text">成都</span>
                        </div>
                        <div class="right">
                          <a href="javascript:void(0)" class="time">21:00
                            <!---->
                            <!---->
                          </a>
                          <span class="text">甲米</span>
                        </div>
                        <div class="mid"></div>
                        <div class="clear"></div>
                      </div>
                    </div>
                    <div class="backInfo">
                      <!---->
                      <span class="direction">返</span>
                      <div class="titleBar">
                        <span class="date">DAY6/7</span>
                        <span class="til">四川航空3U8080</span>
                      </div>
                      <!---->
                      <div class="timeBar">
                        <div class="left">
                          <a href="javascript:void(0)" class="time">22:10</a>
                          <span class="text">甲米</span>
                        </div>
                        <div class="right">
                          <a href="javascript:void(0)" class="time">02:35
                            <!---->
                            <!---->
                          </a>
                          <span class="text">成都</span>
                        </div>
                        <div class="mid"></div>
                        <div class="clear"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!---->
          <!---->
          <!---->
          <!---->
          <!---->
          <!---->
        </section>
        <!-- 交通信息 E -->
        <!-- 酒店 S -->
        <section class="commodityBar clearfix introduce">
          <!---->
          <!---->
          <h2 class="infoTitle">酒店信息</h2>
          <!---->
          <!---->
          <!---->
          <!---->
          <!---->
          <!---->
          <!---->
          <div class="hotelList">
            <p class="warmTips">酒店信息仅供参考，最终以供应商确认为准</p>
            <div class="hotelInfo">
              <!-- 轮播图 S -->
              <div class="hotelBanner">
                <div id="page-swipe" class="mint-swipe pageSwipe">
                  <img src="../assets/img/jiudian.jpg" alt>
                </div>
              </div>
              <!-- 轮播图 E -->
              <!-- 酒店介绍信息 S -->
              <div class="hotel">
                <div class="hotelHead">
                  <div class="hotelName">厦门京闽中心酒店</div>
                  <div class="hotelEName">Jingmin Central Hotel Xiamen</div>
                  <div class="hotelStar">
                    <div class="startList">
                      <li class="zworld-icon-star-reverse">★</li>
                      <li class="zworld-icon-star-reverse">★</li>
                      <li class="zworld-icon-star-reverse">★</li>
                      <li class="zworld-icon-star-reverse">★</li>
                      <li class="zworld-icon-star-reverse">★</li>
                      <li class="liFont">或同级别酒店</li>
                    </div>
                  </div>
                </div>
                <div class="hotelDescList">
                  <div class="hotelDesc">
                    <div class="icon">
                      <img src="../assets/img/S1.png"> 地址
                    </div>
                    <div class="iconDesc">No.158 Yuhou Nan Li</div>
                  </div>
                  <div class="hotelDesc">
                    <div class="hotelType floatLeft">
                      <div class="icon">
                        <img src="../assets/img/S2.png">床型
                      </div>
                      <!---->
                      <!---->
                      <div class="iconDesc">大／双床</div>
                      <!---->
                      <!---->
                    </div>
                    <div class="hotelType floatLeft">
                      <div class="icon">
                        <img src="../assets/img/S4.png">房型
                      </div>
                      <!---->
                      <!---->
                      <div class="iconDesc">双人间</div>
                      <!---->
                      <!---->
                      <!---->
                      <!---->
                    </div>
                    <div class="hotelType floatLeft">
                      <div class="icon">
                        <img src="../assets/img/S5.png">入住
                      </div>
                      <div class="iconDesc">2/3晚</div>
                    </div>
                    <div class="clear"></div>
                  </div>
                  <div class="hotelDesc">
                    <div class="icon">
                      <img src="../assets/img/S3.png">简介
                    </div>
                    <div
                      class="iconDesc"
                    >五星级厦门京闽中心酒店位于厦门的经济和娱乐中心，设有5间餐厅、1个Spa中心和1座室内温水游泳池。酒店距离高崎国际机场、鼓浪屿轮渡码头和中山路步行街有18分钟车程，距离厦门国际会议展览中心有20分钟车程，距离厦门北火车站有40分钟车程。
                      <br>厦门京闽中心酒店典雅的客房拥有现代化的装饰和平面有线电视/卫星电视。所有客房都设有自动冲洗马桶座、迷你吧、私人保险箱和洗浴用品。
                      <br>沧浪台提供传统的中式按摩和足部反射按摩理疗。客人可以在健身中心锻炼身体、打台球和乒乓或在桑拿设施内放松身心。酒店提供外币兑换服务。
                      <br>雅博园西餐厅供应各种各样的西式菜肴和每日早餐。闽海阁中餐厅供应美的粤菜和闽菜。港湾吧美式酒吧、逸思轩大堂吧和樱花俱乐部供应饮品。
                    </div>
                  </div>
                </div>
              </div>
              <!-- 酒店介绍信息 E -->
            </div>
            <div class="more moreHotel">
              <a href="#this">查看全部酒店</a>
            </div>
          </div>
          <!---->
          <!---->
          <!---->
          <!---->
          <!---->
        </section>
        <!-- 酒店 E -->
      </section>
    </section>
    <!-- 产品介绍 E -->
    <!-- 预定信息 S -->
    <div class="bookBar">
      <div class="consultCollection">
        <span data-bn-ipg="contact-supplier-click">
          <img src="../assets/img/S6.png">咨询
        </span>
        <span data-bn-ipg="favor-click">
          <img src="../assets/img/S7.png">收藏
        </span>
      </div>
      <div data-bn-ipg="book-click" class="book">
        <router-link to="/orders">立即预订</router-link>
      </div>
    </div>
    <!-- 预定信息 E -->
    <div @click="gotop" class="topButton" style></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isfixed: false
    };
  },
  
  methods: {
    // 点击回顶按钮 返回顶部
     gotop: function () {  
     setTimeout(()=>{
       document.body.scrollTop = 0
       document.documentElement.scrollTop = 0
     },1000)
    },
     // 添加一个方法兼容
    handleScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      // console.log(scrollTop);
      // top盒子
      let topBar = document.querySelector("#topBar");
      // console.log(topBar);
      // 固定盒子
      let navBar = document.querySelector("#titleWr");
      // console.log(navBar);
      // 内容盒子
      let mainPart = document.querySelector("#introduce");
      // 进行判断
      if (scrollTop > topBar.offsetHeight) {
        this.isfixed = true;
        mainPart.style.paddingTop = navBar.offsetHeight + "px";
        // console.log(mainPart.style.paddingTop);
      } else {
        this.isfixed = false;
        mainPart.style.paddingTop = "0px";
      }
    }
  },
  // 滚动的监听事件
  mounted() {
    window.addEventListener("scroll", this.handleScroll); // Dom树加载完毕
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll); // 销毁页面时清除
  },
  }
  // 点击回顶按钮 返回顶部
  window.onscroll = function() {
  const scrollTop =  document.documentElement.scrollTop || document.body.scrollTop
    const goTop= document.querySelector('.topButton')
          if (scrollTop >200) {
              goTop.style.display = 'block'
          } else {
              goTop.style.display = 'none'
          }
  };
</script>


<style lang="less">
body {
  background-color: #cdcdcd40;
}
.commodityBar {
  margin-bottom: 1.25rem;
  background: #fff;

  .commodityImgBar {
    width: 100%;
    position: relative;
    display: block;
    font-size: 4rem;
    margin-bottom: 1rem;

    .mask {
      width: 100%;
      height: 6rem;
      position: absolute;
      left: 0;
      top: 0;
      background-image: -webkit-gradient(
        linear,
        left top,
        left bottom,
        from(rgba(0, 0, 0, 0.4)),
        to(transparent)
      );
      background-image: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.4) 0,
        transparent
      );

      .left {
        float: left;
        position: fixed;
        top: -30px;
        left: 20px;
      }
    }

    p {
      margin: 0;
      width: 100%;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      position: absolute;
      padding: 1rem 0 0 0.8rem;
      line-height: 2.4rem;
      font-size: 0.65rem;
      color: #fff;
      left: 0;
      bottom: 0;
      background-image: -webkit-gradient(
        linear,
        left top,
        left bottom,
        from(transparent),
        to(rgba(0, 0, 0, 0.3))
      );
      background-image: linear-gradient(
        180deg,
        transparent 0,
        rgba(0, 0, 0, 0.3)
      );
    }
  }
}
.clearfix {
  zoom: 1;
}
/* 图标 */
.back {
  width: 100%;
  height: 4.5rem;
  z-index: 2;
}
.sharebtn {
  position: absolute;
  top: 13px;
  right: 12px;
  z-index: 9;
}

.zw-share {
  display: inline-block;
  z-index: 100;
}
.zw-share-button-white {
  background-image: url("../assets/img/search.png");
}

.zw-share-button {
  display: block;
  width: 22px;
  height: 22px;
  background-size: 23px;
  background-position: 50%;
  background-repeat: no-repeat;
}

.info,
.tit {
  width: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  line-height: 2rem;
}

.tit {
  background: #fff;
  padding: 0 1.5rem 0 1rem;
  color: #000;
  font-size: 0.88rem;
  font-weight: 400;
  word-break: break-all;
}
.info {
  padding: 0 1rem;
  font-size: 0.68rem;
  color: rgba(31, 32, 35, 0.4);
  background-color: #fff;
  overflow: hidden;
  .price {
    float: left;

    em {
      font-size: 1.2rem;
      padding-right: 0.3rem;
      color: #ff7467;
      font-style: normal;
    }
  }
  .floorGuide {
    float: left;
    padding-left: 1rem;
    margin-top: 0.1rem;
    a {
      color: #40c895;
      text-decoration: underline;
    }
  }

  .sold {
    padding-left: 1.3rem;
  }

  .info .browse,
  .info .sold {
    padding-top: 0.1rem;
    float: right;
    text-align: right;
  }
  .info .browse,
  .info .sold {
    padding-top: 0.1rem;
    float: right;
    text-align: right;
  }
}

/*app专享*/
.appAttentiveBox {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin: 0.2rem 0.8rem 0.2rem 1rem;
  background-color: #fff;
  font-size: 0.88rem;
  line-height: 3rem;
  position: relative;
  cursor: pointer;
}
.appAttentiveBox a {
  width: 95%;
  height: 45px;
  overflow: hidden;
  line-height: 45px;
}
.clearfix:after {
  display: block;
  height: 0;
  font-size: 0;
  content: " ";
  visibility: hidden;
  clear: both;
}
.appAttentiveBox .tag {
  display: inline-block;
  height: 1.5rem;
  width: 3.5rem;
  line-height: 1.5rem;
  text-align: center;
  vertical-align: middle;
  border-radius: 0.3rem;
  padding: 0 0.4rem;
  background-color: #ff7467;
  font-size: 0.78rem;
  font-style: normal;
  font-weight: 700;
  color: #fff;
  margin-right: 0.7rem;
  -ms-flex-negative: 0;
  flex-shrink: 0;
}
/*二次确认*/
.confirm {
  height: 2rem;
  padding: 1rem 0;
  background: url("../assets/img/bj2.png") no-repeat;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.confirm .immediatelyConfirm,
.confirm .secondConfirm {
  width: 2rem;
  font-weight: 700;
  font-size: 0.78rem;
  line-height: 0.78rem;
  color: #ff7467;
  padding: 0 1rem 0 0.4rem;
}
/* 产品介绍 S*/
.wrap .titleWrap {
  width: 100%;
  height: 6rem;
  background-color: #fff;
  padding-top: 1rem;
  .titleWr {
    width: 100%;
    background-color: #fff;
    .title {
      width: 92%;
      height: 29px;
      border: 1px solid #4c4d4f;
      margin: 1rem auto;
      border-radius: 3px;
      text-align: center;
      color: #fcfcfc;
      font-size: 1rem;
      background: #fff;
      .show {
        width: 50%;
        line-height: 30px;
        font-weight: 700;
        background: #4c4d4f;
        color: #fff;
        float: left;
      }
      .noshow {
        width: 50%;
        line-height: 30px;
        font-weight: 700;
        background: #fff;
        color: rgb(32, 31, 31);
        float: left;
      }
    }
  }
  // 固定导航栏
  .isFixed {
    position: fixed;
    top: 0rem;
    z-index: 999;
    width: 100%;
  }
}

/*产品介绍 E*/
/* 交通信息 S*/

.wrap .introduce {
  display: block;
}
.wrap .commodityBar {
  width: 100%;
  background-color: #fff;
  margin-bottom: 1.2rem;
  .infoTitle {
    width: 100%;
    font-size: 1.3rem;
    font-weight: 600;
    text-align: center;
    color: #000;
    padding: 1rem 0 0.8rem;
  }
  .warmTips {
    line-height: 1.3rem;
    font-size: 0.78rem;
    color: #ff7467;
    text-align: center;
  }
}

.fieldBar {
  display: block;
  padding: 0 0.35rem 0 1.5rem;
  background-color: #fff;
  margin: 0px;
  padding-bottom: 1.2rem;
  .airTagBar {
    display: block;
    padding: 0 0.35rem 0 1.5rem;
    background-color: #fff;
    margin: 0px;
    padding-bottom: 1.2rem;
    li {
      float: left;
      max-width: 8.1rem;
      height: 1.6rem;
      line-height: 1.8rem;
      font-size: 0.9rem;
      font-weight: 400;
      padding: 0 0.8rem;
      border-radius: 1.4rem;
      background-color: #fff;
      color: rgba(31, 32, 35, 0.8);
      border: 1px solid rgba(31, 32, 35, 0.1);
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin: 0.5rem 0.6rem 0.5rem 0;
    }
    .cur {
      box-shadow: 0 0.15rem 0.9rem 0 rgba(121, 208, 176, 0.4);
      border: 1px solid #40c895;
      color: #40c895;
    }
  }

  .airConBar {
    width: 100%;
    .airConBox {
      margin-top: 1.5rem;
      padding: 1rem 1rem 2rem 0;
      width: 100%;
      box-sizing: border-box;
      background-color: #fff;

      // 上盒子
      .caseTitle {
        width: 100%;
        height: 2.8rem;
        border-radius: 0.4rem;
        background-image: linear-gradient(90deg, #4ccf9e, #61d97e);
        color: #fff;
        position: relative;
        table {
          width: 100%;
          text-align: left;
          overflow: hidden;
        }
        tr {
          // height: 4.5rem;
          align-items: center;
          .left {
            font-size: 1.5rem;
            width: 4.4rem;
            padding: 0 0 0.2rem 0.5rem;
            font-weight: 600;
            overflow: hidden;
            p {
              margin: 0;
              line-height: 2.5rem;
              border-right: 1px solid hsla(0, 0%, 100%, 0.2);
              font-size: 1rem;
              font-weight: 700;
              overflow: hidden;
            }
          }
          .right {
            width: calc(100% - 4rem);
            overflow: hidden;
          }
        }

        &:after {
          border-top: 1px solid hsla(0, 0%, 100%, 0);
          border-right: 1px solid hsla(0, 0%, 100%, 0);
          border-bottom: 1px solid rgba(31, 32, 35, 0.1);
          border-left: 1px solid #61d97e;
          right: -0.1rem;
          content: "";
          width: 0.5rem;
          height: 0.5rem;
          background-color: #fff;
          border-top: 1px solid #4ccf9e;
          border-right: 1px solid rgba(31, 32, 35, 0.1);
          border-bottom: 1px solid hsla(0, 0%, 100%, 0);
          border-left: 1px solid hsla(0, 0%, 100%, 0);
          position: absolute;
          bottom: -0.3rem;
          border-radius: 50%;
        }
        &:before {
          left: -0.1rem;
          content: "";
          width: 0.5rem;
          height: 0.5rem;
          background-color: #fff;
          border-top: 1px solid #4ccf9e;
          border-right: 1px solid rgba(31, 32, 35, 0.1);
          border-bottom: 1px solid hsla(0, 0%, 100%, 0);
          border-left: 1px solid hsla(0, 0%, 100%, 0);
          position: absolute;
          bottom: -0.3rem;
          border-radius: 50%;
        }
      }
      // 下盒子内容
      .airTicketInfo {
        width: 100%;
        box-sizing: border-box;
        border: 1px solid rgba(31, 32, 35, 0.1);
        font-size: 0.88rem;
        font-weight: 700;
        overflow: hidden;
        .goInfo {
          position: relative;
          padding-top: 1.23rem;
          padding-left: 2rem;
          .direction {
            position: absolute;
            top: 1rem;
            left: 0rem;
            width: 1.3rem;
            height: 1.3rem;
            background-color: #32ca7e;
            color: #fff;
            line-height: 1.3rem;
            text-align: center;
            font-weight: normal;
          }
          .titleBar {
            width: 100%;
            display: block;
            height: 2.7rem;
            line-height: 1rem;
            font-size: 1rem;
            background-color: #fff;
            color: #79797b;
            font-weight: 450;
            .date {
              padding-right: 0.5rem;
            }
          }
          .timeBar {
            width: 100%;
            position: relative;
            .left {
              padding-right: 1rem;
              width: 50%;
              box-sizing: border-box;
              text-align: center;
              float: left;
              overflow: hidden;
              .time {
                line-height: 1.5rem;
                font-size: 1.2rem;
                color: rgba(31, 32, 35, 0.8);
                white-space: nowrap;
                font-weight: 700;
                text-decoration: none;
                display: block;
              }
              .text {
                line-height: 1rem;
                font-size: 0.88rem;
                color: rgba(31, 32, 35, 0.8);
                display: block;
                font-weight: normal;
              }
            }
            .right {
              padding-left: 12rem;
              .time {
                line-height: 1.5rem;
                font-size: 1.2rem;
                color: rgba(31, 32, 35, 0.8);
                white-space: nowrap;
                font-weight: 700;
                text-decoration: none;
                display: block;
              }
              .text {
                line-height: 1rem;
                font-size: 0.88rem;
                color: rgba(31, 32, 35, 0.8);
                display: block;
                font-weight: normal;
              }
            }
            .mid {
              position: absolute;
              top: 25%;
              left: 50%;
              margin-left: -1.5rem;
              font-size: 3rem;
              color: #e8e8e8;
              width: 20px;
              height: 2px;
              background-color: black;
            }
          }
        }
        .backInfo {
          position: relative;
          padding-top: 1.23rem;
          padding-left: 2rem;
          .direction {
            position: absolute;
            top: 1rem;
            left: 0rem;
            width: 1.3rem;
            height: 1.3rem;
            background-color: #32ca7e;
            color: #fff;
            line-height: 1.3rem;
            text-align: center;
            font-weight: normal;
          }
          .titleBar {
            width: 100%;
            display: block;
            height: 2.7rem;
            line-height: 1rem;
            font-size: 1rem;
            background-color: #fff;
            color: #79797b;
            font-weight: 450;
            .date {
              padding-right: 0.5rem;
            }
          }
          .timeBar {
            width: 100%;
            position: relative;
            .left {
              padding-right: 1rem;
              width: 50%;
              box-sizing: border-box;
              text-align: center;
              float: left;
              overflow: hidden;
              .time {
                line-height: 1.5rem;
                font-size: 1.2rem;
                color: rgba(31, 32, 35, 0.8);
                white-space: nowrap;
                font-weight: 700;
                text-decoration: none;
                display: block;
              }
              .text {
                line-height: 1rem;
                font-size: 0.88rem;
                color: rgba(31, 32, 35, 0.8);
                display: block;
                font-weight: normal;
              }
            }
            .right {
              padding-left: 12rem;
              .time {
                line-height: 1.5rem;
                font-size: 1.2rem;
                color: rgba(31, 32, 35, 0.8);
                white-space: nowrap;
                font-weight: 700;
                text-decoration: none;
                display: block;
              }
              .text {
                line-height: 1rem;
                font-size: 0.88rem;
                color: rgba(31, 32, 35, 0.8);
                display: block;
                font-weight: normal;
              }
            }
            .mid {
              position: absolute;
              top: 25%;
              left: 50%;
              margin-left: -1.5rem;
              font-size: 3rem;
              color: #e8e8e8;
              width: 20px;
              height: 2px;
              background-color: black;
            }
          }
        }
      }
    }
  }
}
/* 交通信息 E*/

// 酒店信息 S
.hotelList {
  width: 100%;
  padding-bottom: 1rem;
  // 酒店轮播图 S
  .hotelInfo {
    width: 100%;
    .hotelBanner {
      width: 100%;
      height: 9rem;
      padding-bottom: 1rem;
      position: relative;
      #page-swipe {
        overflow: hidden;
        position: relative;
        height: 100%;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    // 酒店轮播图  E
  }

  //酒店介绍信息 S
  .hotel {
    padding: 0 1.6rem 1.6rem;
    .hotelHead {
      padding-bottom: 1.7rem;
      border-bottom: 0.1rem solid #d2d2d3;
      .hotelName {
        padding-bottom: 0.2rem;
        font-size: 1rem;
        font-weight: 600;
        color: #000;
      }
      .hotelEName {
        padding-bottom: 0.6rem;
        font-size: 0.7rem;
        color: #6d6d67;
      }
      .hotelStar {
        .startList {
          margin: 0;
          padding: 0;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          li {
            list-style: none;
            width: 1rem;
            height: 1rem;
            margin-right: 0.4rem;
            color: #ffc800;
            font-size: 16px;
          }
          li.liFont {
            width: 12.5rem;
            height: 1.1rem;
            line-height: 1.6rem;
            font-size: 0.7rem;
            color: rgba(31, 32, 35, 0.4);
            background: none;
          }
          .zwui-iconfont {
            font-family: zworld !important;
            // speak: none;
            font-style: normal;
            font-weight: 400;
            font-variant: normal;
            text-transform: none;
            line-height: 1;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          .zworld-icon-star-reverse:before {
            width: 20px;
            height: 20px;
          }
        }
      }
    }

    .hotelDescList {
      margin-top: 1.3rem;
      .hotelDesc {
        margin-top: 1.5rem;
        .icon {
          font-size: 0.8rem;
          line-height: 1.3rem;
          color: rgba(31, 32, 35, 0.671);
        }
        .iconDesc {
          font-size: 0.9rem;
          padding: 0.7rem 0 0 0.1rem;
          color: rgba(31, 32, 35, 0.8);
          line-height: 2rem;
          font-weight: normal;
        }
        .floatLeft {
          float: left;
          width: 33.3%;
        }
      }
    }
  }
  .more {
    display: block;
    width: 100%;
    height: 4rem;
    font-size: 1rem;
    font-weight: 600;
    line-height: 11rem;
    text-align: center;
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(hsla(0, 0%, 100%, 0.3)),
      color-stop(47%, #fff)
    );
    background: linear-gradient(180deg, hsla(0, 0%, 100%, 0.3) 0, #fff 47%);
    position: relative;
    margin-top: -5.6rem;
    padding-bottom: 2rem;
    a {
      text-decoration: none;
      color: #40c895;
      padding-right: 1.5rem;
    }
  }
  .moreHotel {
    margin-top: -4.3rem;
  }

  //酒店介绍信息 E
}

// 酒店信息 E

// 预定信息
.bookBar {
  width: 100%;
  height: 3rem;
  position: fixed;
  bottom: -1px;
  z-index: 12;
  cursor: pointer;
  .consultCollection {
    width: 70%;
    height: 100%;
    background: #737373;
    color: #fff;
    float: left;
    span {
      font-size: 14px;
      margin-left: 1.5rem;
      line-height: 3rem;
    }
  }
  .book {
    float: right;
    width: 30%;
    height: 100%;
    background: #ff7467;
    font-size: 1.2rem;
    text-align: center;
    line-height: 3rem;
    font-weight: 700;
    a {
      color: #fff;
    }
  }
}

.topButton {
  position: fixed;
  right: 15px;
  bottom: 150px;
  width: 41px;
  height: 41px;
  border-radius: 41px;
  background-color: rgba(0, 0, 0, 0.4);
  background-image: url("../assets/img/S8.png");
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: 30px;
}
</style>



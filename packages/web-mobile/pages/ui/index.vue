<template>
  <div class="index">
    <div
      class="swiper-container swiper homeBanner swiper-container-initialized swiper-container-horizontal"
    >
      <div class="swiper-wrapper">
        <div class="swiper-slide swiper-slide-duplicate">
          <img src="@tg/web-mobile/pages/ui/assets/images/banner01.png" />
        </div>
      </div>
      <div class="swiper-pagination swiper-pagination-bullets">
        <span class="swiper-pagination-bullet"></span
        ><span
          class="swiper-pagination-bullet swiper-pagination-bullet-active"
        ></span
        ><span class="swiper-pagination-bullet"></span
        ><span class="swiper-pagination-bullet"></span
        ><span class="swiper-pagination-bullet"></span
        ><span class="swiper-pagination-bullet"></span
        ><span class="swiper-pagination-bullet"></span>
      </div>
      <span
        class="swiper-notification"
        aria-live="assertive"
        aria-atomic="true"
      ></span>
    </div>

    <div class="index_header">
      <div class="announcement">
        <marquee>跑马灯文字内容跑马灯文字内容跑马灯文字内容跑马灯内容!</marquee>
      </div>
      <button class="menu" @click="navswitch = true"></button>
    </div>

    <div class="index_box">
      <div class="index_row">
        <button class="recharge">充值</button>
        <button class="withdrawal">提领</button>
        <button class="transfer">转账</button>
      </div>
    </div>

    <div class="sub_title">
      <b class="game mr-a">热门赛事</b>
      <button class="more_btn"></button>
    </div>
    <div class="index_box">
      <div class="swiper-container game-swiper swiper-container-initialized swiper-container-horizontal">
        <div class="swiper-wrapper" style="transition-duration: 0ms; transform: translate3d(0px, 0px, 0px);">
          <div class="swiper-slide">
            <div class="hotmatch">
              <div class="game_date">
                <b>10-15 22:30</b>
                <div class="guaranteed">保本</div>
              </div>
              <div class="live">欧洲冠军联赛</div>
              <div class="team">华沙普洛克U19(主)</div>
              <div class="team">洛兹U19</div>
              <div class="game_info">
                <div class="score">
                  <b>3-3</b>
                  <span>1.91</span>
                </div>
                <div class="amount">
                  <b>总成交量 920K</b>
                  <span>开赛剩 23:05:16</span>
                </div>
              </div>
            </div>
          </div>
		      <div class="swiper-slide">
            <div class="hotmatch">
              <div class="game_date">
                <b>10-15 22:30</b>
                <div class="guaranteed">保本</div>
              </div>
              <div class="live">欧洲冠军联赛</div>
              <div class="team">华沙普洛克U19(主)</div>
              <div class="team">洛兹U19</div>
              <div class="game_info">
                <div class="score">
                  <b>3-3</b>
                  <span>1.91</span>
                </div>
                <div class="amount">
                  <b>总成交量 920K</b>
                  <span>开赛剩 23:05:16</span>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="hotmatch">
              <div class="game_date">
                <b>10-15 22:30</b>
                <div class="guaranteed">保本</div>
              </div>
              <div class="live">欧洲冠军联赛</div>
              <div class="team">华沙普洛克U19(主)</div>
              <div class="team">洛兹U19</div>
              <div class="game_info">
                <div class="score">
                  <b>3-3</b>
                  <span>1.91</span>
                </div>
                <div class="amount">
                  <b>总成交量 920K</b>
                  <span>开赛剩 23:05:16</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="sub_title">
      <b class="event">优惠活动</b>
      <button class="filter_btn mr-a">全部</button>
      <button class="more_btn"></button>
    </div>
	  <div class="index_box">
      <div class="swiper-container event-swiper swiper-container-initialized swiper-container-horizontal">
        <div class="swiper-wrapper" style="transition-duration: 0ms; transform: translate3d(0px, 0px, 0px);">
          <div class="swiper-slide">
			      <img src="@tg/web-mobile/pages/ui/assets/images/banner02.png" />
          </div>
          <div class="swiper-slide">
            <img src="@tg/web-mobile/pages/ui/assets/images/banner02.png" />
          </div>
        </div>
      </div>
    </div>

	  <div class="sub_title">
      <b class="live mr-a">赛事直播</b>
      <button class="more_btn"></button>
    </div>
	  <div class="index_box">
      <div class="swiper-container live-swiper swiper-container-initialized swiper-container-horizontal">
        <div class="swiper-wrapper" style="transition-duration: 0ms; transform: translate3d(0px, 0px, 0px);">
          <div class="swiper-slide">
			      <div class="game_live">
              <div class="video">
                <iframe src="https://www.youtube.com/embed/ZEQdAVoh_ww" frameborder="0"></iframe>
              </div>
              <div class="team">华沙普洛克U19(主)</div>
              <div class="team">洛兹U19</div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="game_live">
              <div class="video">
                <iframe src="https://www.youtube.com/embed/ZEQdAVoh_ww" frameborder="0"></iframe>
              </div>
              <div class="team">华沙普洛克U19(主)</div>
              <div class="team">洛兹U19</div>
            </div>
          </div>
        </div>
      </div>
    </div>

	  <div class="sub_title">
      <b class="sports mr-a">体育</b>
      <button class="more_btn"></button>
    </div>
	  <div class="index_box">
      <div class="swiper-container platform-swiper swiper-container-initialized swiper-container-horizontal">
        <div class="swiper-wrapper" style="transition-duration: 0ms; transform: translate3d(0px, 0px, 0px);">
          <div class="swiper-slide">
            <div class="platform_content">
              <div class="platform_pic"><img src="@tg/web-mobile/pages/ui/assets/images/platform/banner-sports-0.png" /></div>
              <span>沙巴体育</span>
            </div>
          </div>
		      <div class="swiper-slide">
            <div class="platform_content">
              <div class="platform_pic"><img src="@tg/web-mobile/pages/ui/assets/images/platform/banner-sports-1.png" /></div>
              <span>OB体育</span>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="platform_content">
              <div class="platform_pic"><img src="@tg/web-mobile/pages/ui/assets/images/platform/banner-sports-2.png" /></div>
              <span>IM体育</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="sub_title">
      <b class="casino mr-a">真人</b>
      <button class="more_btn"></button>
    </div>
	  <div class="index_box">
      <div class="swiper-container platform-swiper swiper-container-initialized swiper-container-horizontal">
        <div class="swiper-wrapper" style="transition-duration: 0ms; transform: translate3d(0px, 0px, 0px);">
          <div class="swiper-slide">
            <div class="platform_content">
              <div class="platform_pic"><img src="@tg/web-mobile/pages/ui/assets/images/platform/banner-casinos-0.png" /></div>
              <span>WM真人</span>
            </div>
          </div>
		      <div class="swiper-slide">
            <div class="platform_content">
              <div class="platform_pic"><img src="@tg/web-mobile/pages/ui/assets/images/platform/banner-casinos-1.png" /></div>
              <span>OB真人</span>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="platform_content">
              <div class="platform_pic"><img src="@tg/web-mobile/pages/ui/assets/images/platform/banner-casinos-2.png" /></div>
              <span>AG真人</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="sub_title">
      <b class="pokers mr-a">棋牌</b>
      <button class="more_btn"></button>
    </div>
	  <div class="index_box">
      <div class="swiper-container platform-swiper swiper-container-initialized swiper-container-horizontal">
        <div class="swiper-wrapper" style="transition-duration: 0ms; transform: translate3d(0px, 0px, 0px);">
          <div class="swiper-slide">
            <div class="platform_content">
              <div class="platform_pic"><img src="@tg/web-mobile/pages/ui/assets/images/platform/banner-pokers-0.png" /></div>
              <span>OB棋牌</span>
            </div>
          </div>
		      <div class="swiper-slide">
            <div class="platform_content">
              <div class="platform_pic"><img src="@tg/web-mobile/pages/ui/assets/images/platform/banner-pokers-1.png" /></div>
              <span>开元棋牌</span>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="platform_content">
              <div class="platform_pic"><img src="@tg/web-mobile/pages/ui/assets/images/platform/banner-pokers-2.png" /></div>
              <span>乐游棋牌</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="sub_title">
      <b class="gaming mr-a">电子</b>
      <button class="more_btn"></button>
    </div>
	  <div class="index_box">
      <div class="swiper-container platform-swiper swiper-container-initialized swiper-container-horizontal">
        <div class="swiper-wrapper" style="transition-duration: 0ms; transform: translate3d(0px, 0px, 0px);">
          <div class="swiper-slide">
            <div class="platform_content">
              <div class="platform_pic"><img src="@tg/web-mobile/pages/ui/assets/images/platform/banner-gaming-0.png" /></div>
              <span>CQ9电子</span>
            </div>
          </div>
		      <div class="swiper-slide">
            <div class="platform_content">
              <div class="platform_pic"><img src="@tg/web-mobile/pages/ui/assets/images/platform/banner-gaming-1.png" /></div>
              <span>JDB电子</span>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="platform_content">
              <div class="platform_pic"><img src="@tg/web-mobile/pages/ui/assets/images/platform/banner-gaming-2.png" /></div>
              <span>PG电子</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="sub_title">
      <b class="lotteries mr-a">彩票</b>
      <button class="more_btn"></button>
    </div>
	  <div class="index_box">
      <div class="swiper-container platform-swiper swiper-container-initialized swiper-container-horizontal">
        <div class="swiper-wrapper" style="transition-duration: 0ms; transform: translate3d(0px, 0px, 0px);">
          <div class="swiper-slide">
            <div class="platform_content">
              <div class="platform_pic"><img src="@tg/web-mobile/pages/ui/assets/images/platform/banner-lotteries-0.png" /></div>
              <span>OB彩票</span>
            </div>
          </div>
		      <div class="swiper-slide">
            <div class="platform_content">
              <div class="platform_pic"><img src="@tg/web-mobile/pages/ui/assets/images/platform/banner-lotteries-1.png" /></div>
              <span>双赢彩票</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="sub_title">
      <b class="esports mr-a">电竞</b>
      <button class="more_btn"></button>
    </div>
	  <div class="index_box">
      <div class="swiper-container platform-swiper swiper-container-initialized swiper-container-horizontal">
        <div class="swiper-wrapper" style="transition-duration: 0ms; transform: translate3d(0px, 0px, 0px);">
          <div class="swiper-slide">
            <div class="platform_content">
              <div class="platform_pic"><img src="@tg/web-mobile/pages/ui/assets/images/platform/banner-esports-0.png" /></div>
              <span>xx电竞</span>
            </div>
          </div>
		      <div class="swiper-slide">
            <div class="platform_content">
              <div class="platform_pic"><img src="@tg/web-mobile/pages/ui/assets/images/platform/banner-esports-1.png" /></div>
              <span>xx电竞</span>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="platform_content">
              <div class="platform_pic"><img src="@tg/web-mobile/pages/ui/assets/images/platform/banner-esports-2.png" /></div>
              <span>xx电竞</span>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>

  <footer>
    <button class="home_btn active">首页</button>
    <button class="market_btn">市场列表</button>
    <button class="category_btn">分类</button>
    <button class="history_btn">历史帐务</button>
    <button class="my_btn">我的</button>
  </footer>

  <nav :class="{ active: navswitch }">
    <div class="nav_menu">
      <div class="nav_logo"></div>
      <ul>
        <li><button class="icon01">充值</button></li>
        <li><button class="icon02">提领</button></li>
        <li><button class="icon03">转账</button></li>
        <li><button class="icon04">活动大厅</button></li>
        <li><button class="icon05 new">娱乐</button></li>
        <li><button class="icon06 new">TG微商</button></li>
        <li><button class="icon07">智能下單</button></li>
        <li :class="{ active: Nav_market }">
          <span class="sub-item" @click="Nav_market = !Nav_market">TG市场</span>
          <ul>
            <li><button class="icon08">市场列表</button></li>
            <li><button class="icon09">赛事直播</button></li>
            <li><button class="icon10">赛事结果</button></li>
            <li><button class="icon11">历年赛事统计</button></li>
            <li><button class="icon12">即时比分</button></li>
          </ul>
        </li>
        <li :class="{ active: Nav_service }">
          <span class="sub-item" @click="Nav_service = !Nav_service">会员服务</span>
          <ul>
            <li><button class="icon13">联络客服</button></li>
            <li><button class="icon14">公告</button></li>
            <li><button class="icon15">上级协助</button></li>
            <li><button class="icon16">VIP规则</button></li>
            <li><button class="icon17">规则说明</button></li>
            <li><button class="icon18">讨论区</button></li>
            <li><button class="icon19">帮助中心</button></li>
            <li><button class="icon20">关于TG</button></li>
            <li><button class="icon21">与我们合作</button></li>
          </ul>
        </li>
        <li :class="{ active: Nav_accounts }">
          <span class="sub-item" @click="Nav_accounts = !Nav_accounts">交易帐务</span>
          <ul>
            <li><button class="icon22">下单明细</button></li>
            <li><button class="icon23">历史帐务</button></li>
            <li><button class="icon24">总帐表</button></li>
            <li><button class="icon25">交易记录</button></li>
          </ul>
        </li>
        <li :class="{ active: Nav_my }">
          <span class="sub-item" @click="Nav_my = !Nav_my">我的权益</span>
          <ul>
            <li><button class="icon26">我的</button></li>
            <li><button class="icon27">个人资料</button></li>
            <li><button class="icon28">设置</button></li>
          </ul>
        </li>
        
      </ul>
      <div class="nav_row">
        <button class="logout_btn">登出</button>
        <button class="download_btn">APP下载</button>
      </div>
    </div>
    
    <button class="close_nav" @click="navswitch = false"></button>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      navswitch: false,
      Nav_market: false,
      Nav_service: false,
      Nav_accounts: false,
      Nav_my: false,
    }
  },
}
</script>
<style lang="scss">
@import "@tg/web-mobile/pages/ui/assets/scss/style.scss";
</style>

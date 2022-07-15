<template>
  <header>
    <!-- 返回按鈕 -->
    <!-- <button class="back_btn"></button> -->
    <span>市场列表</span>
    <button class="third_party"></button>
    <button class="header_menu" @click="navswitch = true"></button>
  </header>

  <div class="tabs">
    <button class="tab active">全部(70)</button>
    <button class="tab">今日(32)</button>
    <button class="tab">明日(40)</button>
    <button class="filter_btn"></button>
  </div>

  <div class="announcement">
    <marquee>跑马灯文字内容跑马灯文字内容跑马灯文字内容跑马灯内容!</marquee>
  </div>

  <main>
    <ul class="game_list">
      <li>
        <div class="game_title">
          <b>欧洲冠军联赛</b>
          <span>2020-10-15 23:30</span>
        </div>
        <div class="team_row">
          <div class="team_name">
            <b>华沙普洛克U19(主)</b>
            <b>洛兹U19</b>
          </div>
          <div class="guaranteed">保本</div>
        </div>
        <div class="score">
          <span>
            <b>3-3</b>
            <b>1.91</b>
          </span>
        </div>
      </li>
      <li>
        <div class="game_title">
          <b>欧洲冠军联赛</b>
          <span>2020-10-15 23:30</span>
        </div>
        <div class="team_row">
          <div class="team_name">
            <b>华沙普洛克U19(主)</b>
            <b>洛兹U19</b>
          </div>
          <div class="guaranteed">保本</div>
        </div>
        <div class="score">
          <span>
            <b>3-3</b>
            <b>1.91</b>
          </span>
        </div>
      </li>
      <li>
        <div class="game_title">
          <b>欧洲冠军联赛</b>
          <span>2020-10-15 23:30</span>
        </div>
        <div class="team_row">
          <div class="team_name">
            <b>华沙普洛克U19(主)</b>
            <b>洛兹U19</b>
          </div>
          <div class="guaranteed">保本</div>
        </div>
        <div class="score">
          <span>
            <b>3-3</b>
            <b>1.91</b>
          </span>
        </div>
      </li>
    </ul>
  </main>

  <footer>
    <button class="home_btn">首页</button>
    <button class="market_btn active">市场列表</button>
    <button class="category_btn">分类</button>
    <button class="history_btn">历史帐务</button>
    <button class="my_btn">我的</button>
  </footer>
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
    };
  },
};
</script>
<style lang="scss" scoped></style>

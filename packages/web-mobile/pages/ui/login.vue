<template>
  <div class="login">
    <div class="login_head">
      <div class="logo"></div>
      <div class="select_language">
        <div class="Language_select zh-cn" @click="languageList = true">
        </div>
        <div class="Language_list" v-if="languageList">
          <ul>
            <li class="lang-menu-item zh-cn">
              <div class="Language_select"></div>
            </li>
			<li class="lang-menu-item en-us">
              <div class="Language_select"></div>
            </li>
			<li class="lang-menu-item zh-hk">
              <div class="Language_select"></div>
            </li>
          </ul>
          <div class="close_list" @click="languageList = false"></div>
        </div>
      </div>
    </div>
    <div class="tab_row">
      <button class="active">登入</button>
      <button>註冊</button>
    </div>
    <form>
      <div class="input_row account">
        <input type="text" placeholder="帳號" />
      </div>
      <div class="input_row password">
        <input type="text" placeholder="密碼" />
      </div>
    </form>
    <div class="remember_row">
      <input type="checkbox" id="remember" />
      <label for="remember">記住帳密</label>
    </div>

    <div class="verify">
      <div id="verify_box" ref="box">
        <div id="verifyText">请滑动验证</div>
        <div id="verify_xbox" ref="xbox">
          <div id="btn" ref="btn" draggable="true"></div>
        </div>
      </div>
    </div>

    <div class="btn_row">
      <button class="service">24H客服</button>
      <button class="download">APP下载</button>
      <button class="video">官方视频</button>
    </div>
    <div class="btn_row">
      <button class="forget">忘記密码 ?</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      languageList: false,
    }
  },
}
</script>

<style lang="scss">
</style>

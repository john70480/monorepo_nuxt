<template>
  <div class="login">
    <div class="login_head">
      <div class="logo"></div>
      <div class="select_language">
        <div :class="['Language_select', language]" @click="languageFlag = true">
        </div>
        <div class="Language_list" v-if="languageFlag && LanguageList.length > 0">
          <ul>
            <li v-for="(item, index) in LanguageList" :key="index" :class="['lang-menu-item', item]"
              @click="chooseLang(item)">
              <div class="Language_select"></div>
            </li>
          </ul>
          <div class="close_list" @click="languageFlag = false"></div>
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
<script setup lang="ts">
definePageMeta({
  layout: "none"
});
const languageFlag = ref(false);
const language = ref('zh-cn');
const LanguageList = ref(['zh-cn', 'en-us', 'zh-hk'])
function chooseLang(lang: string) {
  language.value = lang;
  languageFlag.value = false;
}
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  min-height: 100%;
  padding: 25vh 40px 20px;
  background: url('@tg/web-mobile/assets/images/login_bg.jpg') center no-repeat;
  background-size: 100% 100%;

  .login_head {
    margin-bottom: 20px;
    display: flex;
    align-items: flex-end;

    .logo {
      width: 80px;
      height: 65px;
      margin-right: auto;
      background: url('@tg/web-mobile/assets/images/tg_logo.png') center no-repeat;
      background-size: contain;
    }

    .select_language {
      position: relative;

      .Language_select {
        padding: 10px 5px;
        display: flex;
        align-items: center;
        cursor: pointer;

        &::before {
          content: '';
          width: 30px;
          height: 20px;
          box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
          display: inline-block;
        }

        &::after {
          content: '';
          width: 25px;
          height: 7px;
          background: url('@tg/web-mobile/assets/images/select_arrow.png') center no-repeat;
          background-size: contain;
          display: inline-block;
        }

        &.zh-cn::before {
          background: url('@tg/web-mobile/assets/images/flag_cn.jpg') center no-repeat;
          background-size: cover;
        }

        &.zh-hk::before {
          background: url('@tg/web-mobile/assets/images/flag_zh.jpg') center no-repeat;
          background-size: cover;
        }

        &.en-us::before {
          background: url('@tg/web-mobile/assets/images/flag_en.jpg') center no-repeat;
          background-size: cover;
        }

        &.ja-jp::before {
          background: url('@tg/web-mobile/assets/images/flag_jp.jpg') center no-repeat;
          background-size: cover;
        }

        &.vi-vn::before {
          background: url('@tg/web-mobile/assets/images/flag_vi.jpg') center no-repeat;
          background-size: cover;
        }

        &.th-th::before {
          background: url('@tg/web-mobile/assets/images/flag_th.jpg') center no-repeat;
          background-size: cover;
        }

        &.ko-kr::before {
          background: url('@tg/web-mobile/assets/images/flag_ko.jpg') center no-repeat;
          background-size: cover;
        }
      }

      .Language_list {
        position: absolute;
        bottom: 100%;
        left: 0;
        width: 100%;
        z-index: 500;

        ul {
          position: absolute;
          bottom: 5px;
          width: 100%;
          padding: 5px 0;
          margin: 0;
          border-radius: 10px;
          background-color: #fdfdfd;
          overflow: hidden;
          box-shadow: 0 1px 5px 0 rgba(120, 68, 215, 0.1);
          z-index: 10;

          .lang-menu-item {
            .Language_select {
              min-height: 40px;
              display: flex;
              justify-content: center;

              &:hover {
                background: #f1edf7;
              }

              &::after {
                content: none;
              }
            }

            &.zh-cn .Language_select::before {
              background: url('@tg/web-mobile/assets/images/flag_cn.jpg') center no-repeat;
              background-size: cover;
            }

            &.zh-hk .Language_select::before {
              background: url('@tg/web-mobile/assets/images/flag_zh.jpg') center no-repeat;
              background-size: cover;
            }

            &.en-us .Language_select::before {
              background: url('@tg/web-mobile/assets/images/flag_en.jpg') center no-repeat;
              background-size: cover;
            }

            &.ja-jp .Language_select::before {
              background: url('@tg/web-mobile/assets/images/flag_jp.jpg') center no-repeat;
              background-size: cover;
            }

            &.vi-vn .Language_select::before {
              background: url('@tg/web-mobile/assets/images/flag_vi.jpg') center no-repeat;
              background-size: cover;
            }

            &.th-th .Language_select::before {
              background: url('@tg/web-mobile/assets/images/flag_th.jpg') center no-repeat;
              background-size: cover;
            }

            &.ko-kr .Language_select::before {
              background: url('@tg/web-mobile/assets/images/flag_ko.jpg') center no-repeat;
              background-size: cover;
            }
          }
        }

        .close_list {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.3);
        }
      }
    }
  }

  .tab_row {
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    overflow: hidden;

    button {
      flex: 1;
      height: 40px;
      font-size: 1rem;
      color: #c3c3c3;
      border: 1px solid #cccccc;
      background: transparent;

      &.active {
        color: #fff;
        border: 1px solid #36567f;
        background: #36567f;
      }

      &:first-child {
        border-right: none;
        border-radius: 5px 0 0 5px;
      }

      &:last-child {
        border-left: none;
        border-radius: 0 5px 5px 0;
      }
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 30px;

    .input_row {
      border-bottom: 1px solid #8eaace;
      padding-left: 35px;
      display: flex;
      align-items: center;

      input {
        flex: 1;
        height: 40px;
        color: #8eaace;
        font-size: 1rem;
        border: none;
        background: transparent;
        outline: none;

        &::placeholder {
          color: #8eaace;
          font-size: 1rem;
        }
      }

      &.account {
        background: url('@tg/web-mobile/assets/images/login_account.png') 0 center no-repeat;
        background-size: auto 60%;
      }

      &.password {
        background: url('@tg/web-mobile/assets/images/login_password.png') 0 center no-repeat;
        background-size: auto 60%;
      }
    }
  }

  .remember_row {
    margin-top: 20px;

    input {
      display: none;
    }

    label {
      color: #8eaace;
      font-size: 0.8rem;
      display: inline-flex;
      align-items: center;
    }

    label::before {
      content: '';
      width: 20px;
      height: 20px;
      margin-right: 5px;
      background: url('@tg/web-mobile/assets/images/unchecked.png') center no-repeat;
      background-size: contain;
    }

    input:checked+label::before {
      background: url('@tg/web-mobile/assets/images/checked.png') center no-repeat;
      background-size: contain;
    }
  }

  .verify {
    margin-top: 10%;
    border-radius: 5px;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);
    overflow: hidden;

    #verify_box {
      height: 50px;
      text-align: center;
      line-height: 50px;
      font-size: 0.9rem;
      color: #c3c3c3;
      position: relative;
      background: #394c65;
    }

    #verify_xbox {
      width: 50px;
      height: 50px;
      text-align: center;
      font-size: 14px;
      color: #fff;
      position: absolute;
      top: 0px;
      border-radius: 8px;
      background: linear-gradient(to left, #426796, #6c8cbd);
    }

    #btn {
      cursor: pointer;
      width: 50px;
      height: 50px;
      border-radius: 5px;
      border: 1px solid #8eaace;
      background: url('@tg/web-mobile/assets/images/verify_arrow.png') center no-repeat, #fff;
      background-size: 40%;
      float: right;
      top: 0px;
      left: 0px;
      overflow: hidden;
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.8);

      &::before {
        content: '';
        width: 36px;
        height: 36px;
        background: url(~assets/image/com_body_slip_btn.png) center no-repeat;
        background-size: contain;
        display: block;
      }
    }

    .continue {
      width: 120px;
      height: 50px;
      background-color: rgba(212, 212, 212, 1);
      margin: 0 70px;
      border: none;
      color: #302f41;
      font-size: 16px;

      &:hover {
        background-color: rgba(235, 54, 38, 1);
        color: #ffffff;
      }
    }

    #verifyText {
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 100%;
    }
  }

  .btn_row {
    margin-top: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    button {
      color: #8eaace;
      padding-top: 50px;
      border: none;

      &.service {
        background: url('@tg/web-mobile/assets/images/24servise_btn.png') center 0 no-repeat;
        background-size: auto 40px;
      }

      &.download {
        background: url('@tg/web-mobile/assets/images/appdownload_btn.png') center 0 no-repeat;
        background-size: auto 40px;
      }

      &.video {
        background: url('@tg/web-mobile/assets/images/video_btn.png') center 0 no-repeat;
        background-size: auto 40px;
      }

      &.forget {
        padding-top: 0px;
        background: transparent;
        border-bottom: 1px solid #8eaace;
      }
    }
  }
}
</style>

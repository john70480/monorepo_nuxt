<template>
    <div class="language-selector">
        <div class="icon icon-language--current d-flex my-auto py-2 px-1" :class="language" @click="handleLangFlagChange(true)">
        </div>
        <div class="content" v-if="langFlag && langList.length > 0">
            <ul>
                <li v-for="(item, index) in langList" :key="index" :class="['lang-menu-item', item]"
                    @click="handleLanguageChange(item)">
                    <div class="icon icon-language"></div>
                </li>
            </ul>
            <div class="icon icon-close" @click="handleLangFlagChange(false)"></div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { Ref } from 'vue';
const language: Ref<string> = ref('zh-cn');
const langList: Ref<Array<string>> = ref(['zh-cn', 'en-us', 'zh-hk']);
const langFlag: Ref<boolean> = ref(false);

function handleLanguageChange(newVal: string): void {
    if (newVal === '') return;
    language.value = newVal;
    langFlag.value = false;
}

function handleLangFlagChange(newValue = !langFlag.value): void {
    langFlag.value = newValue;
}
</script>
<style lang="scss" scoped>
$lang-list: ("zh-cn": "cn", "zh-hk": "zh", "en-us": "en", "ja-jp": "jp", "vi-vn": "vi", "th-th": "th", "ko-kr": "ko");
 .language-selector {
      position: relative;

      .icon-language--current {
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
        @each $key, $lang in $lang-list {
            &.#{$key}::before{
                background: url('@tg/web-mobile/assets/images/flag_#{$lang}.jpg') center no-repeat;
                background-size: cover;
            }
        }
      }

      .content {
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
</style>
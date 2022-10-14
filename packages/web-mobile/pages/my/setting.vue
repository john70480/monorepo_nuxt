<template>
    <div class="fill-height">
        <div class="content d-flex flex-column">
            <MyItemSetting @click="isNotify = !isNotify" switch :switch-bind="{modelValue: isNotify}">
                接收推播通知
                <template v-slot:rightLabel></template>
            </MyItemSetting>
            <v-divider></v-divider>
            <MyItemSetting @click="isVoiceOn = !isVoiceOn" switch :switch-bind="{modelValue: isVoiceOn}">
                提示音效
                <template v-slot:rightLabel></template>
            </MyItemSetting>
            <v-divider></v-divider>
            <MyItemSetting open>
                登入验证设定
                <template v-slot:rightLabel></template>
            </MyItemSetting>
            <v-divider></v-divider>
            <MyItemSetting open>
                <span class="icon icon-flag icon-zh-cn d-flex pr-2 mt-auto mb-auto">简体中文</span>
                <template v-slot:rightLabel></template>
            </MyItemSetting>
            <v-divider></v-divider>
            <MyItemSetting>
                清理缓存
                <template v-slot:rightLabel></template>
            </MyItemSetting>
            <v-divider></v-divider>
            <MyItemSetting>
                版本 : v1.0
                <template v-slot:rightLabel>
                    <p class="text-right text-grey--light">最新版本为v2.0建议更新</p>
                </template>
            </MyItemSetting>
        </div>
    </div>
</template>
<script lang="ts" setup>import { Ref } from 'vue';

definePageMeta({
    title: "設置"
});
const isNotify: Ref<boolean> = ref(false);
const isVoiceOn: Ref<boolean> = ref(false);
</script>
<style lang="scss" scoped>
.fill-height {
    background-image: linear-gradient(45deg, #718db7, #527299);
}

$icon-list: (
    "open": "my/icon_open.svg",
    "zh-cn": "flag_cn.jpg",
    "zh-hk": "flag_zh.jpg",
    "en-us": "flag_en.jpg",
    "ja-jp": "flag_jp.jpg",
    "vi-vn": "flag_vi.jpg",
    "th-th": "flag_th.jpg",
    "ko-kr": "flag_ko.jpg"
);

@each $key,
$val in $icon-list {
    .icon-#{$key} {
        &::before {
            background: url('@tg/web-mobile/assets/images/#{$val}') center no-repeat;
            background-size: cover;
            content: ' ';
            display: block;
        }
    }
}

.icon-flag {
    &::before {
        width: 30px;
        height: 20px;
        margin-right: 8px;
    }
}

.text-grey--light {
    color: #c3c3c3
}
</style>
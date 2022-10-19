<template>
    <div class="fill-height">
        <div class="content d-flex flex-column">
            <MyItemSetting row-title="接收推播通知">
                <TgSwitchs :switchBind="{hideDetails: true}" :modelValue="isNotify" @click="isNotify != isNotify"
                    floatRight></TgSwitchs>
            </MyItemSetting>
            <v-divider></v-divider>
            <MyItemSetting row-title="提示音效">
                <TgSwitchs :switchBind="{hideDetails: true}" :modelValue="isVoiceOn" floatRight></TgSwitchs>
            </MyItemSetting>
            <v-divider></v-divider>
            <MyItemSetting row-title="登入验证设定">

                <span class="icon icon-open mt-auto mb-auto"></span>
            </MyItemSetting>
            <v-divider></v-divider>
            <MyItemSetting>
                <template v-slot:rowTitleLabel>
                    <span class="icon icon-flag icon-zh-cn d-flex pr-2 mt-auto mb-auto">简体中文</span>
                </template>
                <span class="icon icon-open mt-auto mb-auto"></span>
            </MyItemSetting>
            <v-divider></v-divider>
            <MyItemSetting row-title="清理缓存">

                <template v-slot:rightLabel></template>
            </MyItemSetting>
            <v-divider></v-divider>
            <MyItemSetting row-title="版本 : v1.0">
                <p class="text-right text-grey--light">最新版本为v2.0建议更新</p>
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

.icon-open {
    display: flex;
    flex-direction: row-reverse;

    &::before {
        background: url('@tg/web-mobile/assets/images/my/icon_open.svg') center no-repeat;
        background-size: cover;
        content: ' ';
        display: block;
        width: 6px;
        height: 12px;
        margin-left: 8px;
    }
}
</style>
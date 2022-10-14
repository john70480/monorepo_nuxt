<template>
    <div class="fill-height">
        <div class="content d-flex flex-column">
            <MyItemSetting>
                可用额度
                <template v-slot:rightLabel></template>
            </MyItemSetting>
            <v-divider></v-divider>
            <MyItemSetting open>
                密码
                <template v-slot:rightLabel>
                    a*****4
                </template>
            </MyItemSetting>
            <v-divider></v-divider>
            <MyItemSetting open>
                提款密码
                <template v-slot:rightLabel>
                    f******2
                </template>
            </MyItemSetting>
            <v-divider></v-divider>
            <MyItemSetting>
                绑定手机
                <template v-slot:rightLabel>
                    +86-********41
                </template>
            </MyItemSetting>
            <v-divider></v-divider>
            <MyItemSetting>
                QQ帐号
                <template v-slot:rightLabel></template>
            </MyItemSetting>
            <v-divider></v-divider>
            <MyItemSetting>
                微信帐号
                <template v-slot:rightLabel>
                </template>
            </MyItemSetting>
            <v-divider></v-divider>
            <MyItemSetting open>
                快捷金额
                <template v-slot:rightLabel>
                    100,200,300
                </template>
            </MyItemSetting>
        </div>
    </div>
</template>
<script lang="ts" setup>import { Ref } from 'vue';

definePageMeta({
    title: "个人资料"
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
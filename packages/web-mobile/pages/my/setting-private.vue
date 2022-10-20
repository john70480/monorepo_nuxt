<template>
    <div class="fill-height tg-bg-primary">
        <div class="content d-flex flex-column">
            <MyItemSetting row-title="可用额度">
                401,948.04
            </MyItemSetting>
            <v-divider></v-divider>
            <MyItemSetting row-title="密码" @click="PasswordModifyOpen = true">
                a*****4
                <span class="icon icon-open mt-auto mb-auto"></span>
            </MyItemSetting>
            <v-divider></v-divider>
            <MyItemSetting row-title="提款密码" @click="WithdrawPasswordOpen = true">
                f******2
                <span class="icon icon-open mt-auto mb-auto"></span>
            </MyItemSetting>
            <v-divider></v-divider>
            <MyItemSetting row-title="绑定手机">
                +86-********41
            </MyItemSetting>
            <v-divider></v-divider>
            <MyItemSetting row-title="QQ帐号">
            </MyItemSetting>
            <v-divider></v-divider>
            <MyItemSetting row-title="微信帐号">
            </MyItemSetting>
            <v-divider></v-divider>
            <MyItemSetting row-title="快捷金额">
                100,200,300
                <span class="icon icon-open mt-auto mb-auto"></span>
            </MyItemSetting>
        </div>
        <MyPasswordModify v-model:open="PasswordModifyOpen"></MyPasswordModify>
        <MyWithdrawPassword v-model:open="WithdrawPasswordOpen"></MyWithdrawPassword>
    </div>
</template>
<script lang="ts" setup>import { Ref } from 'vue';

definePageMeta({
    title: "个人资料"
});
const PasswordModifyOpen: Ref<boolean> = ref<boolean>(false);
const WithdrawPasswordOpen: Ref<boolean> = ref<boolean>(false);
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
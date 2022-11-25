<template>
    <div class="fill-height">
        <div class="content d-flex flex-column">
            <MyItemSetting row-title="指纹验证 登入">
                <TgSwitchs v-model="isLogin" type="tg-right"></TgSwitchs>
            </MyItemSetting>
            <v-divider></v-divider>
            <MyItemSetting row-title="指纹验证 提款">
                <TgSwitchs v-model="isWithdraw" type="tg-right"></TgSwitchs>
            </MyItemSetting>
        </div>
        <div class="d-flex footer">
            <v-row class="row-info">
                <v-col class="px-3">
                    ※为手机内部资料，本公司不会存取用户个资
                </v-col>

            </v-row>

        </div>
    </div>
</template>
<script lang="ts" setup>import { Ref } from 'vue';

definePageMeta({
    title: "登入验证设定"
});
const isLogin: Ref<boolean> = ref(false);
const isWithdraw: Ref<boolean> = ref(false);
</script>
<style lang="scss" scoped>
.fill-height {
    background-image: linear-gradient(45deg, #718db7, #527299);
}

.text-grey--light {
    color: #c3c3c3
}

.footer {
    font-size: 0.75rem !important;
    font-weight: 400;
    line-height: 1.25rem;
    letter-spacing: 0.0333333333em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
    color: #FFF;
    padding-top: 12px;
    margin-left: 12px;
    ;
}
</style>
<template>
    <div class="fill-height">
        <div class="content d-flex flex-column">
            <MyItemSetting @click="isLogin = !isLogin" switch :switch-bind="{modelValue: isLogin}">
                指纹验证 登入
                <template v-slot:rightLabel></template>
            </MyItemSetting>
            <v-divider></v-divider>
            <MyItemSetting @click="isWithdraw = !isWithdraw" switch :switch-bind="{modelValue: isWithdraw}">
                指纹验证 提款
                <template v-slot:rightLabel>
                </template>
            </MyItemSetting>
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
</style>
<template>

    <v-card class="rechargeProp">
        <v-card-title>微信支付</v-card-title>
        <v-card-text class="px-2">
            <v-col cols="12" class="px-0 pt-0 text-center">
                汇款资讯-请完整填写以下资讯，以利完整充值申请
            </v-col>
            <v-col cols="12" class="px-0 pt-0">
                <tg-text-field v-model="account" :label="'您的微信帐户'" :textBind="{ placeholder: '请输入您充值用的支付帐号' }">
                </tg-text-field>
            </v-col>
            <v-col cols="12" class="px-0 pt-0">
                <tg-text-field v-model="pushMoney" :label="'充值金额'" :textBind="{ placeholder: '充值金额:100~49,999' }">
                </tg-text-field>
            </v-col>


        </v-card-text>
        <v-card-actions class="pb-8">
            <v-btn block class="btn-submit bg-primary">送出</v-btn>
        </v-card-actions>
    </v-card>

</template>
<script lang="ts" setup>import { Ref } from 'vue';


const account: Ref<string> = ref('');
const pushMoney: Ref<string> = ref('');

</script>

<style lang="scss" scoped>

</style>

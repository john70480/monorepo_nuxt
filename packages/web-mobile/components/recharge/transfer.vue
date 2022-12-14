<template>

    <v-card class="rechargeProp">
        <v-card-title>临柜汇款</v-card-title>
        <v-card-text class="px-2">
            <v-col cols="12" class="px-0 pt-0 text-center">
                请选择欲存款的银行
            </v-col>
            <v-col cols="12" class="px-0 pt-0">

                <tg-select v-model="account" :label="'您的微信帐户'" :items="accountList" :selectBind="{
                    placeholder: '请选择银行'
                }">
                </tg-select>
            </v-col>
            <v-col cols="12" class="px-0 pt-0">
                <tg-text-field v-model="pushMoney" :label="'充值金额'" :textBind="{ placeholder: '请输入本次欲充值之金额' }">
                </tg-text-field>
            </v-col>
            <v-col cols="12" class="px-0 pt-0">
                <tg-text-field v-model="accountName" :label="'打款人户名'" :textBind="{ placeholder: '如为代充，务必填写' }">
                </tg-text-field>
            </v-col>
            <v-col cols="12" class="px-0 pt-0 text-red warn-text">
                提醒:请严格依指定帐号汇款，否则会造成您充值掉单，本公司恕不负责。
            </v-col>

        </v-card-text>
        <v-card-actions class="pb-8">
            <v-btn block class="btn-submit bg-primary" @click="dialogsStore.openRechargeDialog('Transfer2')">下一步</v-btn>
        </v-card-actions>
    </v-card>

</template>
<script lang="ts" setup>import { Ref } from 'vue';

const dialogsStore = useDialogs();
const account = ref<number>();
const pushMoney: Ref<string> = ref('');
const accountName: Ref<string> = ref('');
const accountList = ref([
    {
        text: '银行1',
        value: 0
    },
    {
        text: '银行2',
        value: 1
    }
]);
</script>

<style lang="scss" scoped>

</style>

<template>

    <v-card class="rechargeProp">
        <v-card-title>网上银行</v-card-title>
        <v-card-text class="px-2">
            <v-col cols="12" class="px-0 pt-0 text-center">
                汇款资讯-请完整填写以下资讯，以利完整充值申请
            </v-col>

            <v-col cols="12" class="px-0 pt-0">
                <tg-text-field v-model="pushMoney" :label="'充值金额'" :textBind="{ placeholder: '充值限额:100~10,000,000' }">
                </tg-text-field>
            </v-col>
            <v-col cols="12" class="px-0 pt-0">
                <tg-text-field v-model="accountName" :label="'打款人户名'" :textBind="{ placeholder: '请填入打款人姓名' }">
                </tg-text-field>
            </v-col>
            <v-col cols="12" class="px-0 pt-0">

                <tg-select v-model="account" :label="'请选择支付帐户'" :items="accountList" :selectBind="{
                    placeholder: '请选择'
                }">
                </tg-select>
            </v-col>
            <v-col cols="12" class="px-0 pt-0 text-red warn-text">
                提醒您：为保障双方帐户安全，请务必使用注册帐号时登记的真实户名进行打款，如使用注册帐号登记以外之姓名打款，将无法上分，且由此造成的损失，平台概不负责。
            </v-col>

        </v-card-text>
        <v-card-actions class="pb-8">
            <v-btn block class="btn-submit bg-primary">下一步</v-btn>
        </v-card-actions>
    </v-card>

</template>
<script lang="ts" setup>import { Ref } from 'vue';

const account = ref<number>();
const pushMoney: Ref<string> = ref('');
const accountName: Ref<string> = ref('');
const accountList = ref([
    {
        text: 'A123456789',
        value: 0
    },
    {
        text: 'B987654321',
        value: 1
    }
]);
</script>

<style lang="scss" scoped>

</style>

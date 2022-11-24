<template>

    <v-card class="rechargeProp">
        <v-card-title>支付宝</v-card-title>
        <v-card-text class="px-2">


            <v-col cols="12" class="px-0 pt-0">
                <tg-text-field v-model="accountEmail" :label="'您的支付宝帐户'" :textBind="{ placeholder: '请填入您的支付宝帐户' }">
                </tg-text-field>
            </v-col>

            <v-col cols="12" class="px-0 pt-0">
                <tg-text-field v-model="pushMoney" :label="'充值金额'" :textBind="{ placeholder: '充值限额:100~10,000,000' }">
                </tg-text-field>
            </v-col>

            <v-col cols="12" class="px-0 pt-0">

                <tg-select v-model="account" :label="'请选择支付帐户'" :items="accountList" :selectBind="{
                    placeholder: '请选择'
                }">
                </tg-select>
            </v-col>
            <v-col cols="12" class="px-0 pt-0 mt-2">
                <v-row no-gutters>
                    <v-col cols="12">
                        请汇款至下方银行帐户</v-col>
                    <v-divider class="mt-1 mb-2"></v-divider>
                    <v-col cols="12" class="text-red warn-text">
                        提醒:请严格依指定帐号汇款，否则会造成您充值掉单，本公司恕不负责。</v-col>
                </v-row>
                <v-row no-gutters class="mt-4">
                    <v-col cols="auto">
                        <div class="qrDiv">
                            <div class="qrImg"></div>
                            <div class="qrhelp warn-text text-center">(请长压)</div>
                        </div>
                    </v-col>
                    <v-col cols="auto" class="ml-2 qrInfor">
                        <p class="font-weight-bold">支付寶帳戶</p>
                        <p>185755815654</p>
                        <p class="font-weight-bold">戶名</p>
                        <p>myAccount</p>
                    </v-col>
                    <v-col cols="12" class="text-red warn-text mt-4">

                        提醒:<br>
                        <ul>
                            <li>此为后台上稿的扫码提示文案，如无提供则下排移至第一排。</li>
                            <li>如利用本平台进行任何洗钱诈骗行为，本公司将保留全力终止会员服务及冻结其帐户。</li>

                        </ul>
                    </v-col>

                    <v-row no-gutters class="align-center ext-red warn-text mt-4 text-red">

                        <v-col cols="auto"><img src="~/assets/images/recharge/warn.png" class="warnimg" /></v-col>
                        <v-col cols="auto" class="pl-4">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx<br>
                            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx<br>
                            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                        </v-col>
                    </v-row>

                </v-row>

            </v-col>

        </v-card-text>
        <v-card-actions class="pb-8">
            <v-btn block class="btn-submit bg-primary">充值完成-送出申请</v-btn>
        </v-card-actions>
    </v-card>

</template>
<script lang="ts" setup>import { Ref } from 'vue';

const account = ref<number>();
const pushMoney: Ref<string> = ref('');
const accountEmail: Ref<string> = ref('');
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

.qrDiv {
    width: 150px;
}

.qrImg {
    width: 100%;
    height: 150px;
    border: 1px solid rgba(0, 0, 0, 0.1);
}

.qrInfor {
    font-size: 0.8rem;

    p:not(.font-weight-bold) {
        color: #707070;
        margin-bottom: 1rem;
    }
}


</style>

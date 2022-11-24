<template>

    <v-card class="rechargeProp">
        <v-card-title>网上银行</v-card-title>
        <v-card-text class="px-2">

            <v-col cols="12" class="px-0 pt-0">

                <tg-select v-model="account" :items="accountList" :selectBind="{
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

                <v-row no-gutters class="justify-space-between warn-text mt-2 align-center">
                    <v-col cols="auto" class="messageStyle">
                        <div>银行</div>
                        <div>招商银行</div>
                    </v-col>
                    <v-col cols="auto"><img src="~/assets/images/icon/icon_copy.png" class="copyimg" /></v-col>
                </v-row>
                <v-row no-gutters class="justify-space-between warn-text mt-2 align-center">
                    <v-col cols="auto" class="messageStyle">
                        <div>户名</div>
                        <div>王晓明</div>
                    </v-col>
                    <v-col cols="auto"><img src="~/assets/images/icon/icon_copy.png" class="copyimg" /></v-col>
                </v-row>
                <v-row no-gutters class="justify-space-between warn-text mt-2 align-center">
                    <v-col cols="auto" class="messageStyle">
                        <div>分行</div>
                        <div>成都分行西安北路支行</div>
                    </v-col>
                    <v-col cols="auto"><img src="~/assets/images/icon/icon_copy.png" class="copyimg" /></v-col>
                </v-row>
                <v-row no-gutters class="justify-space-between warn-text mt-2 align-center">
                    <v-col cols="auto" class="messageStyle">
                        <div>帐号</div>
                        <div>1235468789</div>
                    </v-col>
                    <v-col cols="auto"><img src="~/assets/images/icon/icon_copy.png" class="copyimg" /></v-col>
                </v-row>
                <v-row no-gutters class="justify-space-between warn-text mt-2 align-center">
                    <v-col cols="auto" class="messageStyle">
                        <div>充值金额</div>
                        <div>100</div>
                    </v-col>
                    <v-col cols="auto"><img src="~/assets/images/icon/icon_copy.png" class="copyimg" /></v-col>
                </v-row>
                <v-row no-gutters class="mt-4">

                    <v-col cols="12" class="warn-text mt-4">
                        提醒:<br>
                        <ul>
                            <li>小额收款帐户仅供支付100~9999。</li>
                            <li>如利用本平台进行任何洗钱诈骗行为，本公司将保留全力终止会员服务及冻结其帐户。</li>
                            <li class="text-red">请先完成汇款手续，再进行提出充值申请，方便系统加快充值速度。</li>
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

.copyimg {
    width: 17px;
}

.messageStyle {
    div:first-child {
        font-weight: bold;
    }

    div:last-child {
        color: #707070;
    }
}

</style>

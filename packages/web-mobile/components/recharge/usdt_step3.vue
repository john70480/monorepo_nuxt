<template>

    <v-card class="rechargeProp">
        <v-card-title>泰达币(usdt)</v-card-title>
        <v-card-text class="px-2">
            <v-col cols="12" class="px-0 pt-0">
                <div class="tg-txt">
                    <label>链名称</label>
                    <div>ERC20</div>
                </div>
            </v-col>
            <v-col cols="12" class="px-0 pt-0">
                <div class="tg-txt">
                    <label>输入金额</label>
                    <div><span class="highColor">1,000</span> (USDT)</div>
                </div>
            </v-col>
            <v-col cols="12" class="px-0 pt-0">
                <div class="qrDiv">
                    <div class="qrImg"></div>
                    <div class="qrhelp warn-text text-center">收款二维码(请长压)</div>
                </div>
            </v-col>

            <v-col cols="12" class="px-0 pt-0">
                <div class="text-red warn-text">提醒：此二维码为一次性使用，请勿保存重复扫码支付。</div>
            </v-col>


            <v-col cols="12" class="px-0 pt-0">
                <tg-text-field v-model="collection" :label="'收款地址'">
                    <template v-slot:append>
                        <v-btn class="mt-n2" variant="text">
                            <img src="~/assets/images/icon/icon_copy.png" class="copyimg" />
                        </v-btn>

                    </template>
                </tg-text-field>
            </v-col>

            <v-col cols="12" class="px-0 pt-0">
                <tg-text-field v-model="fiveWord" :label="'TXID后五码'" :textBind="{ placeholder: '请填入TXID后五码' }">
                </tg-text-field>
            </v-col>

            <v-col cols="12" class="px-0 pt-0  warn-text">
                <ul>
                    <li>如未依照填入金额数量打款充值导致造成损失，平台一慨不予负责，请务必依照填入的金额数量打款。</li>
                    <li>请勿向上述地址充值任何非USDT的货币，如充值「USDT」货币将无法找回，一概自行负责。</li>
                </ul>
            </v-col>

        </v-card-text>
        <v-card-actions class="pb-8">
            <v-btn block class="btn-submit bg-primary">充值完成-送出申请</v-btn>
        </v-card-actions>
    </v-card>

</template>
<script lang="ts" setup>import { Ref } from 'vue';

const collection: Ref<string> = ref('d795d4cs4vs6dhn5f3d4cs4vs6dbwxh5t');
const fiveWord: Ref<string> = ref('');

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

.copyimg {
    width: 17px;
}
</style>

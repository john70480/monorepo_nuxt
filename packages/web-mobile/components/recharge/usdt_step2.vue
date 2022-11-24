<template>

    <v-card class="rechargeProp">
        <v-card-title>泰达币(usdt)</v-card-title>
        <v-card-text class="px-2">
            <v-col cols="12" class="px-0 pt-0">
                <tg-text-field v-model="num" :label="'USDT数量'" :textBind="{ placeholder: '请输入充值区间「13~1580」' }">
                    <template v-slot:append-inner>
                        USDT
                    </template>
                </tg-text-field>
            </v-col>
            <v-col cols="12" class="px-0 pt-0">
                <tg-text-field v-model="rate" :label="'当前汇率'" :textBind="{
                    disabled: true
                }">
                </tg-text-field>
            </v-col>
            <v-col cols="12" class="px-0 pt-0">
                <tg-text-field v-model="convert" :label="'转换金额'" :textBind="{ disabled: true }">
                </tg-text-field>
            </v-col>
            <v-col cols="12" class="px-0 pt-0  warn-text">
                <ul>
                    <li>如未依照填入金额数量打款充值导致造成损失，平台一慨不予负责，请务必依照填入的金额数量打款。</li>
                    <li>请勿向上述地址充值任何非USDT的货币，如充值「USDT」货币将无法找回，一概自行负责。</li>
                    <li>ERC20，TRC20，OMNI 三种USDT地址不互通，转账务必鉴别，充币等操作应注意严格充入对应地址。</li>
                    <li>TRC20转帐手续费更低，更快速到帐。</li>
                    <li class="text-red">如利用本平台进行任何洗钱诈骗行为，本公司将保留权力终止会员服务及冻结其帐户。</li>
                </ul>
            </v-col>

        </v-card-text>
        <v-card-actions class="pb-8">
            <v-btn block class="btn-submit bg-primary">下一步</v-btn>
        </v-card-actions>
    </v-card>

</template>
<script lang="ts" setup>import { Ref } from 'vue';
const num = ref<number>()
const rate = ref<string>('1(USDT) : 7.21(CNY)')
const convert = computed(() => num.value != null ? num.value! * 1.26 + ' CNY' : null)

</script>

<style lang="scss" scoped>


</style>

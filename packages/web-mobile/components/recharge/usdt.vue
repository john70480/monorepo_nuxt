<template>

    <v-card class="rechargeProp">
        <v-card-title>泰达币(usdt)</v-card-title>
        <v-card-text class="px-2">
            <v-col cols="12" class="px-0 pt-0">
                <div class="tg-btn">
                    <label>链名称</label>

                    <v-row class="justify-center">
                        <v-col cols="4" class="text-center" v-for="(item, index) in btnArray">
                            <v-btn variant="outlined" :class="index == btnTarget ? 'target' : ''"
                                @click="btnTarget = index">
                                {{ item }}</v-btn>
                        </v-col>
                    </v-row>
                </div>
            </v-col>

            <v-col cols="12" class="px-0 pt-0">

                <tg-select v-model="account" :label="'收款地址'" :items="accountList" :selectBind="{
                    placeholder: '请选择'
                }">
                </tg-select>
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

const btnTarget = ref<number>(0)
const btnArray: Ref<Array<string>> = ref(['ERC20', 'TC20', 'OMNI']);
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

.tg-btn {
    display: flex;
    flex-direction: column;

    label {
        font-size: 0.8rem;
        font-weight: bold;
        color: #283763;
        margin-bottom: 8px;
    }
}

.v-btn {
    border-color: #b8b8b8;
}

.v-btn.target {
    background-color: #a0c3e5;
}
</style>

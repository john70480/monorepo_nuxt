<template>

    <v-card class="rechargeProp">
        <v-card-title>添加收款地址</v-card-title>
        <v-card-text class="px-2">

            <v-col cols="12" class="px-0 pt-0">

                <tg-select v-model="line" :label="'链名称'" :items="lineList" :selectBind="{
                    placeholder: '请选择'
                }">
                </tg-select>
            </v-col>
            <v-col cols="12" class="px-0 pt-0">
                <tg-text-field v-model="address" :label="'收款地址'" :textBind="{ placeholder: '请输入收款地址' }">
                </tg-text-field>
            </v-col>
            <v-col cols="12" class="px-0 pt-0">

                <tg-select v-model="verify" :label="'选择验证'" :items="verifyList" :selectBind="{
                    placeholder: '请选择'
                }">
                </tg-select>
            </v-col>
            <v-col cols="12" class="px-0 pt-0">
                <tg-text-field v-model="phone" :label="'手机号码'" :textBind="{ placeholder: '请输入您的手机号末四码' }">
                </tg-text-field>
            </v-col>

            <v-col cols="12" class="px-0 pt-0">
                <tg-text-field v-model="code" :label="'手机验证'" :textBind="{ placeholder: '请输验证码' }">
                    <template v-slot:append>

                        <v-btn class="mt-n2" variant="text">
                            <div class="tg-text-field-rightBotton">传送验证码</div>
                        </v-btn>
                    </template>
                </tg-text-field>
            </v-col>

            <v-col cols="12" class="px-0 pt-0 warn-text">
                请认真校对钱包地址，地址错误资金将无法到帐。<br>
                基于分布式云加密的钱包系统，全面保障您的资产安全。
            </v-col>


        </v-card-text>
        <v-card-actions class="pb-8">
            <v-btn block class="btn-submit bg-primary">确定</v-btn>
        </v-card-actions>
    </v-card>

</template>
<script lang="ts" setup>import { Ref } from 'vue';

const line = ref<number>();
const verify = ref<number>();
const address: Ref<string> = ref('');
const phone = ref<number>();
const code: Ref<string> = ref('');


const lineList = ref([
    {
        text: '邮箱验证',
        value: 0
    },
    {
        text: '邮箱验证2',
        value: 1
    }
]);
const verifyList = ref([
    {
        text: '邮箱验证',
        value: 0
    },
    {
        text: '邮箱验证2',
        value: 1
    }
]);
</script>

<style lang="scss" scoped>

</style>

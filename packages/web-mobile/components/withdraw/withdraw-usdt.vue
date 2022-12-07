<template>

    <v-card class="rechargeProp">
        <v-card-title>
            <img src="~/assets/images/pay/ustd0.png" class="titleimg" />
            <div class="tg-txt">**********562</div>
        </v-card-title>
        <v-card-text class="px-2">


            <v-col cols="12" class="px-0 pt-0">
                <tg-text-field v-model="usdtNum" :label="'USDT数量'" :textBind="{ placeholder: '请输入USDT数量' }">
                </tg-text-field>
            </v-col>
            <v-col cols="12" class="px-0 pt-0">
                <tg-text-field v-model="rateNow" :label="'当前汇率'" :textBind="{ placeholder: '请输入当前汇率' }">
                </tg-text-field>
            </v-col>
            <v-col cols="12" class="px-0 pt-0">
                <tg-text-field v-model="convertMoney" :label="'转换金额'" :textBind="{ placeholder: '请输入转换金额' }">
                </tg-text-field>
            </v-col>
            <v-col cols="12" class="px-0 pt-0">
                <tg-text-field v-model="code" :label="'图形验证'" :textBind="{ placeholder: '请输入图形验证码' }">
                    <template v-slot:append>

                        <v-btn class="mt-n2" variant="text">
                            <img src="~/assets/images/withdraw/code.png" class="codeimg" />
                        </v-btn>
                    </template>
                </tg-text-field>
            </v-col>

            <v-col cols="12" class="px-0 pt-0">
                <tg-text-field v-model="emailCode" :label="'邮箱验证'" :textBind="{ placeholder: '请输验证码' }">
                    <template v-slot:append>

                        <v-btn class="mt-n2" variant="text">
                            <div class="tg-text-field-rightBotton">传送验证码</div>
                        </v-btn>
                    </template>
                </tg-text-field>
            </v-col>


        </v-card-text>
        <v-card-actions class="pb-8">
            <v-btn block class="btn-submit bg-primary">送出提领申请</v-btn>
        </v-card-actions>
    </v-card>

</template>
<script lang="ts" setup>import { Ref } from 'vue';

const usdtNum = ref<number>();
const rateNow = ref<number>();
const convertMoney = ref<number>();
const code: Ref<string> = ref('');
const emailCode: Ref<string> = ref('');

</script>

<style lang="scss" scoped>
.codeimg {
    height: 25px;
}

.titleimg {
    width: 80px;
}
</style>

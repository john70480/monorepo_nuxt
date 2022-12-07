<template>

    <v-card class="rechargeProp">
        <v-card-title>
            <img src="~/assets/images/pay/pay2.png" class="titleimg" />
            <div class="tg-txt">**********562</div>
        </v-card-title>
        <v-card-text class="px-2">

            <v-col cols="12" class="px-0 pt-0">

                <tg-select v-model="bankName" :label="'银行名称'" :items="bankList" :selectBind="{
                    placeholder: '请选择银行名称'
                }">
                </tg-select>
            </v-col>
            <v-col cols="12" class="px-0 pt-0">
                <tg-text-field v-model="account" :label="'提款帐号'" :textBind="{ placeholder: '请输入提款帐号' }">
                </tg-text-field>
            </v-col>
            <v-col cols="12" class="px-0 pt-0">
                <tg-text-field v-model="username" :label="'提款户名'" :textBind="{ placeholder: '请输入提款户名' }">
                </tg-text-field>
            </v-col>
            <v-col cols="12" class="px-0 pt-0">
                <tg-text-field v-model="withdrawMoney" :label="'提款金额'" :textBind="{ placeholder: '请输入提款金额' }">
                </tg-text-field>
            </v-col>
            <v-col cols="12" class="px-0 pt-0">
                <tg-text-field v-model="emailCode" :label="'提款密码'" :textBind="{ placeholder: '请输入提款密码' }">
                    <template v-slot:append>

                        <v-btn class="mt-n2" variant="text">
                            <div class="tg-text-field-rightBotton-text">忘記密碼</div>
                        </v-btn>
                    </template>
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

        </v-card-text>
        <v-card-actions class="pb-8">
            <v-btn block class="btn-submit bg-primary">送出提领申请</v-btn>
        </v-card-actions>
    </v-card>

</template>
<script lang="ts" setup>import { Ref } from 'vue';
const bankName = ref<number>();
const account = ref<number>();
const withdrawMoney = ref<number>();
const username: Ref<string> = ref('');
const convertMoney = ref<number>();
const code: Ref<string> = ref('');
const emailCode: Ref<string> = ref('');
const bankList = ref([
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
.codeimg {
    height: 25px;
}

.titleimg {
    width: 80px;
}
</style>

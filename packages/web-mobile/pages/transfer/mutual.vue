<template>

    <v-card class="rechargeProp" variant="text">
        <v-card-title></v-card-title>
        <v-card-text class="px-2">


            <v-col cols="12" class="px-0 pt-0">
                <tg-text-field v-model="account" :label="'转入帐号'" :textBind="{ placeholder: '请输入欲转入的会员帐号' }">
                </tg-text-field>
            </v-col>
            <v-col cols="12" class="px-0 pt-0">
                <tg-text-field v-model="transferMoney" :label="'转入金额'" :textBind="{ placeholder: '请输入欲转入的金额' }">
                </tg-text-field>
            </v-col>
            <v-col cols="12" class="px-0 pt-0">
                <tg-text-field v-model="withdrawMoney" :label="'提款密码'" :textBind="{ placeholder: '请输入提款密码' }">
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
                <div class="tg-btn">
                    <label>验证开关</label>

                    <TgSwitchs v-model="verifySwitch" type="inBar" :switchBind="{
                        inset: true
                    }"></TgSwitchs>
                </div>
            </v-col>

            <div v-if="verifySwitch">
                <v-col cols="12" class="px-0 pt-0">

                    <tg-select v-model="verify" :label="'选择验证'" :items="verifyList" :selectBind="{
                        placeholder: '请选择'
                    }">
                    </tg-select>
                </v-col>

                <v-col cols="12" class="px-0 pt-0">
                    <tg-text-field v-model="phone" :label="'提款密码'" :textBind="{ placeholder: '请输入提款密码' }">
                    </tg-text-field>
                </v-col>
                <v-col cols="12" class="px-0 pt-0">
                    <tg-text-field v-model="phoneVerify" :label="'手机验证'" :textBind="{ placeholder: '请输入验证码' }">
                        <template v-slot:append>

                            <v-btn class="mt-n2" variant="text">
                                <div class="tg-text-field-rightBotton">获取验证码</div>
                            </v-btn>
                        </template>
                    </tg-text-field>
                </v-col>
            </div>





        </v-card-text>
        <v-card-actions class="pb-8">
            <v-btn block class="btn-submit bg-primary">下一步</v-btn>
        </v-card-actions>
    </v-card>

</template>
<script lang="ts" setup>import { Ref } from 'vue';


const account = ref<number>();
const transferMoney = ref<number>();
const withdrawMoney = ref<number>();
const phoneVerify = ref<number>();
const verify = ref<number>();
const phone = ref<number>();
const code: Ref<string> = ref('');
const verifySwitch = ref(false)

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
.tg-btn {
    display: flex;
    flex-direction: column;

    label {
        font-size: 0.8rem;
        font-weight: bold;
        color: #283763;

    }
}

.codeimg {
    height: 25px;
}
</style>

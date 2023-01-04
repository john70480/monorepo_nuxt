<template>

    <v-card class="rechargeProp">
        <v-card-title>忘记密码</v-card-title>
        <v-card-text class="px-2">

            <v-col cols="12" class="px-0 pt-0">

                <tg-select v-model="account" :label="'选择验证'" :items="accountList" :selectBind="{
                    placeholder: '请选择验证'
                }">
                </tg-select>
            </v-col>
            <v-col cols="12" class="px-0 pt-0">
                <tg-text-field v-model="pushMoney" :label="'邮箱'" :textBind="{ placeholder: '请输入您的邮箱' }">
                </tg-text-field>
            </v-col>
            <v-col cols="12" class="px-0 pt-0">
                <tg-text-field v-model="accountName" :label="'图形验证'" :textBind="{ placeholder: '请输入图形验证码' }">
                    <template v-slot:append>

                        <v-btn class="mt-n2" variant="text">
                            <img src="~/assets/images/withdraw/code.png" class="codeimg" />
                        </v-btn>
                    </template>
                </tg-text-field>
            </v-col>

            <v-col cols="12" class="px-0 pt-0">
                <tg-text-field v-model="accountName" :label="'邮箱验证'" :textBind="{ placeholder: '请输验证码' }">
                    <template v-slot:append>

                        <v-btn class="mt-n2" variant="text">
                            <div class="tg-text-field-rightBotton">传送验证码</div>
                        </v-btn>
                    </template>
                </tg-text-field>
            </v-col>


        </v-card-text>
        <v-card-actions class="pb-8">
            <v-btn block class="btn-submit bg-primary">确定</v-btn>
        </v-card-actions>
    </v-card>

</template>
<script lang="ts" setup>import { Ref } from 'vue';

const account = ref<number>();
const pushMoney: Ref<string> = ref('');
const accountName: Ref<string> = ref('');
const accountList = ref([
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

</style>

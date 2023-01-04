<template>

    <v-card class="rechargeProp">
        <v-card-title>绑定银行卡</v-card-title>
        <v-card-text class="px-2">

            <v-col cols="12" class="px-0 pt-0">

                <tg-select v-model="account" :label="'银行名称'" :items="accountList" :selectBind="{
                    placeholder: '请选择银行'
                }">
                </tg-select>
            </v-col>
            <v-col cols="12" class="px-0 pt-0">
                <tg-text-field v-model="bankAccount" :label="'银行帐号'" :textBind="{ placeholder: '请输入银行帐号' }">
                </tg-text-field>
            </v-col>
            <v-col cols="12" class="px-0 pt-0">
                <tg-text-field v-model="bankName" :label="'银行户名'" :textBind="{ placeholder: '请输入银行户名' }">
                </tg-text-field>
            </v-col>
            <v-col cols="12" class="px-0 pt-0">
                <tg-text-field v-model="password" :label="'提领密码'"
                    :textBind="{ placeholder: '请输入提款密码', type: toggleType ? 'text' : 'password' }">
                    <template v-slot:append-inner>
                        <img :src="statusImg" class="codeimg" @click="toggleType = !toggleType" />
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
const bankAccount: Ref<string> = ref('');
const bankName: Ref<string> = ref('');
const password: Ref<string> = ref('');
const toggleType = ref(true)
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
const statusImg = computed(() => {
    let img = ''
    switch (toggleType.value) {
        case true:
            img = 'openeyes_btn.png'
            break;
        case false:
            img = 'closeeyes_btn.png'
            break;
        default:
            img = 'openeyes_btn.png'
            break;
    }
    return new URL('../../assets/images/icon/' + img, import.meta.url).href
})
</script>

<style lang="scss" scoped>
.codeimg {
    height: 15px;
    margin-top: 3px;
}
</style>

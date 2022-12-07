<template>

    <v-card class="rechargeProp">
        <v-card-title>重设密码</v-card-title>
        <v-card-text class="px-2">

            <v-col cols="12" class="px-0 pt-0">
                <tg-text-field v-model="pushMoney" :label="'新密码'" :textBind="{ placeholder: '确认新密码' }">
                </tg-text-field>
            </v-col>
            <v-col cols="12" class="px-0 pt-0">
                <tg-text-field v-model="accountName" :label="'请输入新密码'" :textBind="{ placeholder: '请再次输入新密码' }">
                </tg-text-field>
            </v-col>


        </v-card-text>
        <v-card-actions class="pb-8">
            <v-btn block class="btn-submit bg-primary">确定重设密码</v-btn>
        </v-card-actions>
    </v-card>

</template>
<script lang="ts" setup>import { Ref } from 'vue';
const pushMoney: Ref<string> = ref('');
const accountName: Ref<string> = ref('');

</script>

<style lang="scss" scoped>

</style>

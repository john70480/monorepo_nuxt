<template>

    <v-card class="rechargeProp">
        <v-card-title>尚未完成实名认证</v-card-title>
        <v-card-text class="px-2">

            <v-col cols="12" class="px-0 pt-0">
                <tg-text-field v-model="username" :label="'姓名'"
                    :textBind="{ placeholder: '请填写真实姓名', disabled: ifBind }">
                </tg-text-field>
            </v-col>

            <v-col cols="12" class="px-0 pt-0 warn-text">
                请先绑定您的户名，再联系线上客服申请实名认证。<br>

                <span class="text-red">
                    <div v-if="ifBind">您的资料已绑定，请待客服协助开通充值功能。 如等候许久仍未开通，请联系线上客服。</div>
                    <div v-else>
                        提醒您:真实姓名即为您未来充值打款及提领的银行卡姓名。
                    </div>

                </span>
            </v-col>

        </v-card-text>
        <v-card-actions class="pb-8">
            <v-btn block class="btn-submit bg-primary">送出</v-btn>
        </v-card-actions>
    </v-card>

</template>
<script lang="ts" setup>import { Ref } from 'vue';


const username: Ref<string> = ref('');
const ifBind = ref(true);

</script>

<style lang="scss" scoped>

</style>

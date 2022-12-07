<template>

    <v-card class="rechargeProp">
        <v-card-title>提领设定</v-card-title>
        <v-card-text class="px-2">

            <v-col cols="12" class="px-0 pt-0">
                <tg-text-field v-model="password" :label="'提领密码'" :textBind="{ placeholder: '请英数混合，至少6个字元' }">
                </tg-text-field>
            </v-col>
            <v-col cols="12" class="px-0 pt-0">
                <tg-text-field v-model="password_confirm" :label="'确认提领密码'" :textBind="{ placeholder: '请英数混合，至少6个字元' }">
                </tg-text-field>
            </v-col>
            <v-col cols="12" class="px-0 pt-0">
                <tg-text-field v-model="nickname" :label="'昵称'" :textBind="{ placeholder: '请输入昵称' }">
                </tg-text-field>
            </v-col>
            <v-col cols="12" class="px-0 pt-0">

                <tg-select v-model="question" :label="'安全性问题'" :items="questionList" :selectBind="{
                    placeholder: '请选择问题'
                }">
                </tg-select>
            </v-col>
            <v-col cols="12" class="px-0 pt-0">
                <tg-text-field v-model="answer" :label="'安全性答案'" :textBind="{ placeholder: '请输入答案' }">
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
            <v-btn block class="btn-submit bg-primary">确定</v-btn>
        </v-card-actions>
    </v-card>

</template>
<script lang="ts" setup>import { Ref } from 'vue';

const password = ref<number>();
const password_confirm = ref<number>();
const question = ref<number>();
const nickname: Ref<string> = ref('');
const answer: Ref<string> = ref('');
const code: Ref<string> = ref('');

const questionList = ref([
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

<template>
    <TgDialog v-model="openProxy" type="fullscreen80">
        <v-card class="rechargeProp">
            <v-card-title>确认户转内容</v-card-title>
            <v-card-text class="px-2">

                <v-col cols="12" class="px-0 pt-0">
                    <tg-text-field v-model="account" :label="'转入帐号'" :textBind="{ placeholder: '请填入转入帐号' }">
                    </tg-text-field>
                </v-col>
                <v-col cols="12" class="px-0 pt-0">
                    <tg-text-field v-model="traneferMoney" :label="'转出金额'" :textBind="{ placeholder: '请填入转出金额' }">
                    </tg-text-field>
                </v-col>

                <v-col cols="12" class="px-0 pt-0 warn-text">
                    请严格确认接收会员帐号，<span class="text-red">一旦转出公司恕不负责</span>。<br>
                    转出金额，将即时生效，于您的帐户扣除。<br>
                    接收会员将于<span class="text-red">24小时后</span>，方可进行提领动作。<br>
                </v-col>

            </v-card-text>
            <v-card-actions class="pb-8">
                <v-btn block class="btn-submit bg-primary">确定</v-btn>
            </v-card-actions>
        </v-card>
    </TgDialog>
</template>
<script lang="ts" setup>import { Ref } from 'vue';
const traneferMoney = ref<number>();
const account: Ref<string> = ref('');
const props = defineProps<{
    open: boolean,
}>();
const emit = defineEmits<{
    (event: 'update:open', payload: boolean): void
}>();
const enum textAlign {
    LEFT = 'left',
    CENTER = 'center',
    RIGHT = 'right'
};

const openProxy = computed({
    get: () => props.open,
    set: (val) => emit("update:open", val)
});
const oldPwd: Ref<string> = ref('');
</script>

<style lang="scss" scoped>
.btn-submit {
    height: 48px;
}

.transaction {
    .info {
        background: #eef4f8;
    }
}

.okimg {
    width: 40px;
}

.tableDev {
    background-color: #eef4f8;

    .transTable {
        font-size: 0.8rem;
        width: 100%;

        td {
            padding-top: 5px;
            padding-bottom: 5px;
        }

        tr td:last-child {
            text-align: right;
        }
    }
}
</style>

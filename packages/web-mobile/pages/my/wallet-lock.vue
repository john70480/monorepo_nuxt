<template>
    <div class="lock-wallet">
        <div class="content">
            <template v-for="item in res">
                <MyTransaction v-bind:data="item">
                    <template class="font-weight-black" v-slot v-if="!!item.title">{{item.title}}</template>
                    <template v-slot:footer>
                        <v-col cols="4" class="text-caption font-weight-black text-blue--deep">{{item.summary}}
                        </v-col>
                        <v-col cols="8" class="text-caption font-weight-black text-caption text-right text-blue--deep">
                            {{item.total}}
                        </v-col>
                    </template>
                </MyTransaction>
            </template>
        </div>
        <v-footer class="py-2 px-4 flex-column">
            <v-row class="py-1">
                <v-col cols="4" class="text-caption font-weight-black px-0 text-blue--deep">笔数</v-col>
                <v-col cols="8" class="text-caption text-right  font-weight-black px-0 text-blue--deep">25
                </v-col>
            </v-row>
            <v-row class="py-1">
                <v-col cols="4" class="text-caption font-weight-black px-0 text-blue--deep">总金额</v-col>
                <v-col cols="8" class="text-caption text-right  font-weight-black px-0  text-green">
                    999,992,222.00
                </v-col>
            </v-row>

        </v-footer>

    </div>
</template>
<script lang="ts">
export type Detail = {
    text: string,
    modelClass?: string
};
export type WalletTransaction = {
    title?: string;
    titleClass: string;
    detailList: Array<Detail>,
    summary: string,
    total: string
};
</script>
<script lang="ts" setup>
definePageMeta({
    title: "锁定钱包"
});
const res: WalletTransaction[] = [
    {
        title: 'TG平台.足球',
        titleClass: 'font-weight-black',
        detailList: [{
            text: '交易时间 : 2017-02-19 12:23:33',
        },
        {
            text: '狀態 : 2017-02-19 12:23:33',
        }],
        summary: '直推奖金',
        total: '4,000'
    },
    {
        titleClass: '',
        detailList: [{
            text: '交易时间 : 2017-02-19 12:23:33',
        },
        {
            text: '狀態 : 2017-02-19 12:23:33',
        }],
        summary: '贡献回馈金(已发)',
        total: '4,000'
    },
    {
        title: '沙巴体育(足球)',
        titleClass: 'text-purple--light',
        detailList: [{
            text: '交易时间 : 2018-04-19 12:23:33',
        },
        {
            text: '狀態 : 2017-02-19 12:23:33',
        }],
        summary: '直推奖金',
        total: '4,000'
    },
    {
        title: 'TWM真人 (XXX)',
        titleClass: 'font-weight-black text-red',
        detailList: [{
            text: '交易时间 : 2017-02-19 12:23:33',
        },
        {
            text: '狀態 : 2017-02-19 12:23:33',
        }],
        summary: '直推奖金',
        total: '4,000'
    }

]
</script>
<style lang="scss" scoped>
.text-blue--deep {
    color: #283763;
}

.v-footer {
    background-color: #eef4f8;
    width: 100vw;
    position: fixed;
    bottom: 0;

    .v-row {
        width: 100%;
    }
}
</style>
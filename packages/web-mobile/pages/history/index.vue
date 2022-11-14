<template>
    <div class="market">
        <div class="tabs">
            <TgTabs v-model="tab">
                <v-tab v-for="item in items" :key="item.key" hide-slider>
                    {{ item.display }}
                </v-tab>
            </TgTabs>
            <div class="filter d-flex align-center justify-center">
                <img src="@tg/web-mobile/assets/images/filter_btn.png" @click="chooseLeagueOpen = true">
            </div>
        </div>
        <v-container class="content">
            <v-row class="table-header">
                <v-col cols="3" class="text-center">日期</v-col>
                <v-col cols="3" class="text-center">累计流水</v-col>
                <v-col cols="3" class="text-center">实货量</v-col>
                <v-col cols="3" class="text-center">总收益</v-col>
            </v-row>
            <v-row v-for="(data, index) in list" :class="{ 'table-body': true, '--even': index % 2 > 0 }">
                <v-col cols="3">{{ data.date }}<span class="icon icon-open mt-auto mb-auto"></span></v-col>
                <v-col cols="3" :class="{ 'text-green': data.grandTotal > 0, 'text-red': data.grandTotal < 0 }">{{
                        currency.addComma(data.grandTotal).value
                }}</v-col>
                <v-col cols="3">{{ currency.addComma(data.actual).value }}</v-col>
                <v-col cols="3" :class="{ 'text-green': data.income > 0, 'text-red': data.income < 0 }">{{
                        currency.addComma(data.income).value
                }}</v-col>
            </v-row>
            <v-row class="table-body --sumary">
                <v-col cols="3">合計</v-col>
                <v-col cols="3" :class="{ 'text-red': sumary.grandTotal < 0 }">{{
                        currency.addComma(sumary.grandTotal).value
                }}</v-col>
                <v-col cols="3">{{ currency.addComma(sumary.actual).value }}</v-col>
                <v-col cols="3" :class="{ 'text-red': sumary.income < 0 }">{{
                        currency.addComma(sumary.income).value
                }}</v-col>
            </v-row>
        </v-container>
        <HistoryFilter :assets-open="chooseLeagueOpen"></HistoryFilter>
    </div>
</template>
<script setup lang="ts">
import { useDialogs } from '@tg/web-mobile/stores/dialogs';
import { HistoryModel } from 'packages/web-mobile/core/models/HistoryModel';
import { TabsModel } from 'packages/web-mobile/core/models/TabsModel';
import { mockHistory } from './mock';
import { Currency } from '@tg/web-mobile/core/classes/Currenct'
import { ICurrency } from 'packages/web-mobile/core/interfaces/ICurrency';
definePageMeta({
    title: "历史帐务",
    isMainPage: true
});
const dialogs = useDialogs()
const router = useRouter()
const tab = ref(0);
const chooseLeagueOpen = ref(false);
const items: Array<TabsModel> = [{
    key: 'thisWeek',
    display: '本週'
}, {
    key: 'lastWeek',
    display: '上週'
}, {
    key: 'twoWeek',
    display: '前兩周'
}, {
    key: 'thisYear',
    display: '近一年'
}]
const list: Array<HistoryModel> = mockHistory;
const sumary: HistoryModel = {
    grandTotal: 108057185,
    actual: 120000111,
    income: -99251291.56
}
const currency: ICurrency = new Currency(2);
</script>
<style lang="scss" scoped>
.v-container {
    padding-left: 0px;
    padding-right: 0px;
}

.table-header {
    background-color: #f4f5f9;
    margin: -12px;
    margin-bottom: 4px;

    .v-col {
        padding-top: 8px;
        padding-bottom: 8px;
        font-size: 14px;
        color: #283763;
        font-weight: bold;

    }
}

.table-body {
    margin: -4px;

    &.--even {
        background-color: #f4f5f9;
    }

    &.--sumary {
        background-color: #e0f0ff;
    }

    .v-col {
        font-size: 12px;
        padding: 12px;
        text-align: center;
        color: #283763;
        display: flex;
        width: 100%;
        justify-content: center;
        border-right: #c3c3c3 solid 1px;
    }
}

.tabs {
    background: #36567f;
    display: grid;
    grid-template-columns: 1fr auto;

    .filter {
        width: 40px;

        img {
            height: 25px;
            width: 25px;
        }
    }
}

.icon-open {
    display: flex;
    flex-direction: row-reverse;

    &::before {
        background: url('@tg/web-mobile/assets/images/my/icon_open.svg') center no-repeat;
        background-size: cover;
        content: ' ';
        display: block;
        width: 6px;
        height: 12px;
        margin-left: 8px;
    }
}
</style>

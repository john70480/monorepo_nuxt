<template>
    <div class="history-detail">
        <div class="tabs">
            <TgTabs v-model="tab">
                <v-tab v-for="item in items" :key="item.key" hide-slider>
                    {{ item.display }}
                </v-tab>
            </TgTabs>
        </div>
        <v-container class="content">
            <HistoryCard v-for="item in list" :info="item"></HistoryCard>
        </v-container>
        <div class="footer pa-2">
            <div class="detail-row pb-1">
                <div class="detail-col">累计流水</div>
                <div class="detail-col">118,417,165.00</div>
            </div>
            <div class="detail-row pb-1">
                <div class="detail-col">总收益</div>
                <div class="detail-col">118,417,165.00</div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { HistoryCardModel } from '@tg/web-mobile/core/models/HistoryModel';
import { TabsModel } from '@tg//web-mobile/core/models/TabsModel';
import { Ref } from 'vue';
import { mockHistoryDetail } from '@tg/web-mobile/core/mock';
definePageMeta({
    title: "历史帐务 05-21",
    isMainPage: false
});
const tab: Ref<number> = ref<number>(0);
const items: Array<TabsModel> = [{
    key: 'orderlist',
    display: '一般下單'
}, {
    key: 'reserveList',
    display: '預約下單'
}]
const list: Array<HistoryCardModel> = mockHistoryDetail;
</script>
<style lang="scss" scoped>
.v-container {
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 0px;
    padding-bottom: 0;
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


.footer {
    background-color: #e0f0ff;
}

.detail-row {
    display: flex;
    justify-content: space-between;

    .detail-col {
        font-size: 14px;
        color: #283763;
    }
}
</style>

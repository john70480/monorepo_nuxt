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
    </div>
</template>
<script setup lang="ts">
import Announcement from '@tg/web-mobile/pages/home/announcement.vue';
import { useDialogs } from '@tg/web-mobile/stores/dialogs';
import { HistoryCardModel, HistoryModel } from 'packages/web-mobile/core/models/HistoryModel';
import { TabsModel } from 'packages/web-mobile/core/models/TabsModel';
import { Ref } from 'vue';
import { mockHistoryDetail } from './mock';
import { Currency } from '@tg/web-mobile/core/classes/Currenct'
import { ICurrency } from 'packages/web-mobile/core/interfaces/ICurrency';
definePageMeta({
    title: "历史帐务 05-21",
    isMainPage: true
});
const dialogs = useDialogs()
const router = useRouter()
const tab: Ref<number> = ref<number>(0);
const chooseLeagueOpen: Ref<boolean> = ref<boolean>(false);
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

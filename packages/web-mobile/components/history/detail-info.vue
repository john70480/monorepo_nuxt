
<template>
    <div class="detail-content px-2 py-2">

        <div class="detail-row pb-1">
            <div class="detail-col" :style="props.detail.style">{{ props.detail.title }}</div>
            <div class="detail-col">{{ props.detail.time }}</div>
        </div>
        <div class="detail-row pb-1">
            <div class="detail-col">单号:</div>
            <div class="detail-col">{{ props.detail.orderNum }}</div>
        </div>
        <div class="detail-row pb-1">
            <div class="detail-col">盘口:</div>
            <div class="detail-col">{{ props.detail.handicap }}</div>
        </div>
        <div class="detail-row pb-1">
            <div class="detail-col">赔率:</div>
            <div class="detail-col">{{ props.detail.handicap }}</div>
        </div>
        <div class="detail-row pb-1">
            <div class="detail-col">备注:</div>
            <div class="detail-col">{{ props.detail.memo }}</div>
        </div>
        <div class="detail-row pb-1">
            <div class="detail-col">金额:</div>
            <div class="detail-col font-bloder">{{ currency.addComma(props.detail.price).value }}</div>
        </div>
        <div class="detail-row pb-1">
            <div class="detail-col font-bloder">结算:</div>
            <div class="detail-col text-green font-bloder">{{ currency.addComma(props.detail.summary).value }}</div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { HistoryDetailInfoModel } from 'packages/web-mobile/core/models/HistoryModel';
import { Currency } from '@tg/web-mobile/core/classes/Currenct'
import { ICurrency } from 'packages/web-mobile/core/interfaces/ICurrency';

const props = defineProps<{ detail: HistoryDetailInfoModel }>();
const currency: ICurrency = new Currency(2);
</script>
<script lang="ts">

</script>
<style lang="scss" scoped>
.detail-row {
    display: flex;
    justify-content: space-between;
}

.btn-info {
    width: fit-content;
}

.icon {
    &::before {
        display: block;
        content: ' ';
        width: 15px;
        height: 15px;
    }

    &.icon-trash {
        &::before {
            background: url('@tg/web-mobile/assets/images/icon-trash.svg') center no-repeat;

            background-size: cover;
        }

    }

    &.icon-copy {
        &::before {

            background: url('@tg/web-mobile/assets/images/icon-copy.png') center no-repeat;

            background-size: cover;
        }

    }
}

.detail-col--top {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.detail-col--bottom {
    color: #F00;
    text-align: right;
}

.v-btn.v-btn--density-default {
    &.btn-save {
        padding-top: 0;
        padding-bottom: 0;
        padding-left: 2px;
        padding-right: 2px;
        border-radius: 0px;
        font-size: 8px;
        height: 16px;
    }

    &.btn-info {
        padding-left: 8px;
        padding-right: 8px;
        height: 30px;
        font-size: 10px;
    }
}

.font-bloder {
    font-weight: 700;
}
</style>
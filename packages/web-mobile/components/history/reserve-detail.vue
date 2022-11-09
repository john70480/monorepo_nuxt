<template>
    <div class="detail-content px-2 py-2">
        <div class="detail-row pb-1">
            <div class="detail-col">单号:</div>
            <div class="detail-col">
                <div class="detail-col--top">
                    <v-btn elevation="0" class="btn-save bg-primary">保本</v-btn>
                    <div class="px-2">12345671234567123</div>
                    <span class="icon icon-copy"></span>
                </div>
                <div class="detail-col--bottom">
                    (待確認)
                </div>
            </div>
        </div>
        <div class="detail-row pb-1">
            <div class="detail-col">交易时间:</div>
            <div class="detail-col">2022-05-21 14:00</div>
        </div>
        <div class="detail-row pb-1">
            <div class="detail-col">市场</div>
            <div class="detail-col">半场波胆1-1</div>
        </div>
        <div class="detail-row pb-1">
            <div class="detail-col">备注:</div>
            <div class="detail-col">预约77115533</div>
        </div>
        <div class="detail-row pb-1">
            <div class="detail-col">金额:</div>
            <div class="detail-col">1,000</div>
        </div>
        <div class="detail-row pb-1">
            <div class="detail-col">结算:</div>
            <div class="detail-col text-green font-bloder">0</div>
        </div>
        <div class="detail-footer pb-1">
            <v-btn elevation="0" class="btn-info bg-primary">预约详情</v-btn>
            <span class="icon icon-trash"></span>
        </div>
    </div>
</template>
<script setup lang="ts">import { HistoryCardModel, PlayerInfo } from 'packages/web-mobile/core/models/HistoryModel';

// const props = defineProps<HistoryCardModel>();
</script>
<script lang="ts">

</script>
<style lang="scss" scoped>
.detail-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

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

.btn-save {
    padding-top: 0;
    padding-bottom: 0;
    padding-left: 4px;
    padding-right: 4px;
    border-radius: 0px;
    font-size: 8px;
    height: 16px;
}
</style>
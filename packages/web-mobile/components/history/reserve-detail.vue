<template>
    <div class="detail-content px-2 py-2">
        <div class="detail-row pb-1">
            <div class="detail-col">预约编号</div>
            <div class="detail-col">12345671234567123</div>
        </div>
        <div class="detail-row pb-1">
            <div class="detail-col">预约时间</div>
            <div class="detail-col">2022-05-21 14:00</div>
        </div>
        <div class="detail-row pb-1">
            <div class="detail-col">市场</div>
            <div class="detail-col">半场波胆1-1</div>
        </div>
        <div class="detail-row pb-1">
            <div class="detail-col">获利区间</div>
            <div class="detail-col">11.07%~12.07%</div>
        </div>
        <div class="detail-row pb-1">
            <div class="detail-col">金额</div>
            <div class="detail-col">1,000</div>
        </div>
        <div class="detail-row pb-1">
            <div class="detail-col">预估获利</div>
            <div class="detail-col text-green">77.77~831.42</div>
        </div>
    </div>
    <div class="card-footer">
        <div><button class="transfer">预约详情</button></div>
        <div>0</div>
    </div>
</template>
<script setup lang="ts">import { HistoryCardModel, PlayerInfo } from 'packages/web-mobile/core/models/HistoryModel';

// const props = defineProps<HistoryCardModel>();
</script>
<script lang="ts">

</script>
<style lang="scss" scoped>
.detail-row {
    display: flex;
    justify-content: space-between;
}
</style>
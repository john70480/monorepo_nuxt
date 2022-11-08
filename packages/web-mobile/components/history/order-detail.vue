<template>
    <v-card class="history-card">
        <div class="card-content">
            <div class="card-subtitle">
                {{ }}</div>
        </div>
        <div class="card-footer">
            <div>结算:</div>
            <div>{{ }}</div>
        </div>
    </v-card>
</template>
<script setup lang="ts">import { HistoryCardModel, PlayerInfo } from 'packages/web-mobile/core/models/HistoryModel';

// const props = defineProps<HistoryCardModel>();
</script>
<script lang="ts">

</script>
<style lang="scss" scoped>
.market-card {
    color: #283763;

    .card-title {
        background: #eef4f8;

        &::after {
            content: '';
            width: 12px;
            height: 12px;
            margin-left: 5px;
            background: url('@tg/web-mobile/assets/images/icon_arrow.png') center no-repeat;
            background-size: contain;
        }
    }

    .score {
        font-size: 0.8rem;
        padding: 0 10px 10px;

        span {
            min-width: 120px;
            border-radius: 5px;
            background: #eef4f8;
            display: inline-flex;

            b {
                flex: 1;
                padding: 5px;
                text-align: center;

                &:last-child {
                    color: #fff;
                    border-radius: 5px;
                    background: #8eaace;
                }
            }
        }
    }
}
</style>
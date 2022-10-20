<template>
    <div class="experience-wallet fill-height tg-bg-primary">
        <div class="content d-flex flex-column">
            <template v-for="item in res">
                <v-row class="row-info">
                    <v-col cols="6" class="font-weight-black py-2 pr-0">{{item.text}}</v-col>
                    <v-col cols="6" class="text-right py-2 pl-0">{{item.time}}</v-col>
                </v-row>
                <v-row class="row-amount">
                    <v-col cols="12" class="text-right py-2"
                        :class="{'text-green': item.amount > 0, 'text-red': item.amount < 0}">{{item.amount}}</v-col>
                </v-row>
            </template>

        </div>
    </div>
</template>
<script lang="ts">
export type ExperienceInfo = {
    text: string,
    time: string,
    type: AmountType,
    amount: number
};

export const enum AmountType {
    withdrawal = 'WITHDRAWAL',
    profit = 'PROFIT'
}
</script>
<script lang="ts" setup>
definePageMeta({
    title: "体验钱包"
});
const res: ExperienceInfo[] = [
    {
        text: '体验金回收',
        time: '2017-02-19 12:23:33',
        type: AmountType.withdrawal,
        amount: -1000
    },
    {
        text: '体验金获利',
        time: '2017-02-22 22:23:11',
        type: AmountType.withdrawal,
        amount: 3000
    },
    {
        text: '体验金回收',
        time: '2017-02-22 22:23:11',
        type: AmountType.withdrawal,
        amount: -1000
    },
    {
        text: '体验金获利',
        time: '2017-02-22 22:23:11',
        type: AmountType.withdrawal,
        amount: 0
    },
    {
        text: '体验金获利',
        time: '2017-02-22 22:23:11',
        type: AmountType.withdrawal,
        amount: 1000
    }

]
</script>
<style lang="scss" scoped>
.experience-wallet {
    background-image: linear-gradient(45deg, #718db7, #527299);
}

.v-row {
    margin: 0;
}

.v-col {
    font-size: 0.75rem !important;
    font-weight: 400;
    line-height: 1.25rem;
    letter-spacing: 0.0333333333em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
}

.row-info {
    margin: 0;
    background-color: #eef4f8;

    .v-col {
        color: #283763;
    }
}

.row-amount {
    background-color: #FFF;

    .v-col {
        font-weight: 900;
        line-height: 1.5rem;
    }
}
</style>
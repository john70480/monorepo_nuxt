<template>
    <div>

        <v-row class="helpHeader py-2" no-gutters>
            <v-col cols="12" class="d-flex align-center px-0 pt-0">

                <TgItemBtn v-model="target" :list="transMoneyList"></TgItemBtn>

            </v-col>
        </v-row>

        <AnnouncementDetail v-for="(item, index) in list" :index="index" :list="item" type="left-right-detail-arrow">
            公告标题<br>公告点击可直接展开全文，公告点击可直接展开全文，公告点击可直接展开全文，公告点击可直接展开全文，公告点击可直接展开全文，公告点击可直接展开全文，公告点击可直接展开全文，公告点击可直接展开全文。
            公告点击可直接展开全文，公告点击可直接展开全文，公告点击可直接展开全文，公告点击可直接展开全文，公告点击可直接展开全文，公告点击可直接展开全文，公告点击可直接展开全文，公告点击可直接展开全文。
            <hr>
            <span
                class="answer">公告点击可直接展开全文，公告点击可直接展开全文，公告点击可直接展开全文，公告点击可直接展开全文，公告点击可直接展开全文，公告点击可直接展开全文，公告点击可直接展开全文，公告点击可直接展开全文。
                公告点击可直接展开全文，公告点击可直接展开全文，公告点击可直接展开全文，公告点击可直接展开全文，公告点击可直接展开全文，公告点击可直接展开全文，公告点击可直接展开全文，公告点击可直接展开全文。</span>
        </AnnouncementDetail>


    </div>

</template>
<script setup lang="ts">
const target = ref(0)
const transMoneyList = ['微商审核', '上级回復']
const list = [{ title: '微商审核', date: '2022-10-15 23:30' }, { title: '微商审核', date: '2022-10-15 23:30' }, { title: '微商审核', date: '2022-10-15 23:30' }, { title: '微商审核', date: '2022-10-15 23:30' }]

</script>
<style lang="scss" scoped>
hr {
    border-top: 1px solid #c3c3c3;
    margin-top: 12px;
    margin-bottom: 12px;
}

.answer {
    color: #a0c3e5
}
</style>

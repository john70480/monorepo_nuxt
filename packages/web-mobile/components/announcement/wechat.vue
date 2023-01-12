<template>
    <div>

        <v-row class="helpHeader py-2" no-gutters>
            <v-col cols="12" class="d-flex align-center px-0 pt-0">

                <TgItemBtn v-model="target" :list="transMoneyList"></TgItemBtn>

            </v-col>
        </v-row>

        <v-row class="remind py-4 justify-center" no-gutters>
            <v-col cols="auto">
                <v-row no-gutters class="align-center">
                    <v-col cols="auto"><span class="material-icons-outlined">
                            north
                        </span></v-col>
                    <v-col>下拉萤幕已更新。<br>最后更新时间:2020/07/06 14:10</v-col>
                </v-row>

            </v-col>
        </v-row>

        <AnnouncementDetail v-for="(item, index) in list" :index="index" :title="item.title" :date="item.date"
            type="left-right-detail110-arrow">

            <v-row no-gutters>
                <v-col cols="12">
                    <v-row class="justify-space-between teamDetail">
                        <v-col>联盟名称</v-col>
                        <v-col class="text-right" cols="auto">
                            <div class="rightNum">2</div>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="12">
                    <div class="teamName">华沙普洛克U19(主)</div>
                    <div class="teamName">洛兹U19</div>
                    <div>总金额:3,512.22</div>
                </v-col>

                <v-col cols="12">
                    <hr>
                    <div>发放时间 2022-10-15 23:30</div>
                    <div>订单编号:21ATG224220836FTY</div>
                    <div>获得直推奖金:152.00</div>
                </v-col>
                <v-col cols="12">
                    <hr>
                    <div>发放时间 2022-10-15 23:30</div>
                    <div>订单编号:21ATG224220836FTY</div>
                    <div>获得直推奖金:152.00</div>
                </v-col>
            </v-row>
        </AnnouncementDetail>

    </div>

</template>
<script setup lang="ts">
const target = ref(0)
const transMoneyList = ['直推/团队奖金', '贡献反馈金']
const list = [{ title: '微商审核', date: '2022-10-15 23:31' }, { title: '微商审核', date: '2022-10-15 23:30' }, { title: '微商审核', date: '2022-10-15 23:30' }, { title: '微商审核', date: '2022-10-15 23:30' }]

</script>
<style lang="scss" scoped>
hr {
    border-top: 1px solid #c3c3c3;
    margin-top: 12px;
    margin-bottom: 12px;
}

.teamDetail {
    color: #283763;
}

.answer {
    color: #a0c3e5
}

.game_title {
    font-size: 0.8rem;
}

.remind {
    font-size: 0.8rem;
    color: #fff;
    background-image: linear-gradient(45deg, #718db7, #527299);

    span {
        font-size: 30px;
    }
}

.rightNum {
    font-size: 10px;
    color: #fff;
    background-color: #ff305a;
    width: 15px;
    height: 15px;
    border-radius: 50px;
    text-align: center;
    line-height: 15px;
    display: inline-block;
}

.teamName {
    &::before {
        content: "";
        width: 8px;
        height: 8px;
        margin-right: 5px;
        border-radius: 50%;
        background: linear-gradient(to bottom, #eaf5fb, #b2c9d5);
        display: inline-block;
    }
}
</style>

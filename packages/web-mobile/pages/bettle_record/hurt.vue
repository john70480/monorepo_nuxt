<template>
    <div>

        <div class="team">
            <v-row no-gutters class="justify-space-between teamHeader align-center">
                <v-col cols="auto">
                    <v-row class="align-center" no-gutters>
                        <v-col cols="auto" class="logoImg"><img src="~/assets/images/bettle_record/logo.png" /></v-col>
                        <v-col cols="auto" class="ml-2">名称名称名称</v-col>
                    </v-row>
                </v-col>
                <v-col cols="auto">伤停情况</v-col>
            </v-row>
            <div class="teamDiv">

                <div class="teamBody">
                    <div class="teamPlayerImg">
                        <div>前锋</div>
                        <div><img src="~/assets/images/bettle_record/people.png" /></div>
                    </div>
                    <div class="teamPlayeDetail">
                        <div>球员名字球员名字球员名字球员名字</div>
                        <div>原因内容原因内容原因内容原因内容原因内
                            容原因内容原因内容原因内容原因内容原因
                            内容原因内容</div>
                    </div>
                    <div class="teamPlayerIcon">
                        <div><img src="~/assets/images/bettle_record/injury.svg" /></div>
                    </div>
                </div>
                <div class="teamBody">
                    <div class="teamPlayerImg">
                        <div>前锋</div>
                        <div><img src="~/assets/images/bettle_record/people.png" /></div>
                    </div>
                    <div class="teamPlayeDetail">
                        <div>球员名字球员名字球员名字球员名字</div>
                        <div>原因内容原因内容原因内容原因内容原因内
                            容原因内容原因内容原因内容原因内容原因
                            内容原因内容</div>
                    </div>
                    <div class="teamPlayerIcon">
                        <div><img src="~/assets/images/bettle_record/injury.svg" /></div>
                    </div>
                </div>


            </div>
        </div>
        <div class="team">
            <v-row no-gutters class="justify-space-between teamHeader align-center">
                <v-col cols="auto">
                    <v-row class="align-center" no-gutters>
                        <v-col cols="auto" class="logoImg"><img src="~/assets/images/bettle_record/logo.png" /></v-col>
                        <v-col cols="auto" class="ml-2">名称名称名称</v-col>
                    </v-row>
                </v-col>
                <v-col cols="auto">伤停情况</v-col>
            </v-row>
            <div class="teamDiv">

                <div class="teamBody">
                    <div class="empty">暂无资料</div>
                </div>

            </div>
        </div>


    </div>

</template>
<script setup lang="ts">
const target = ref(0)
const transMoneyList = ['同主客', '同赛事']
const list = [
    { name: '名称名称名称名称', t1: 32, t2: 13, t3: 7, t4: 12, t5: 6 / 3, t6: 0, t7: 46, t8: 10 },
    { name: '名称名称名称名称', t1: 32, t2: 13, t3: 7, t4: 12, t5: 6 / 3, t6: 0, t7: 46, t8: 10 }
]
</script>
<style lang="scss" scoped>
.teamHeader {
    background-color: #eef4f8;
    font-size: 14px;
    color: #283763;
    padding: 10px;
}

.logoImg {

    height: 25px;

    img {
        width: 25px;
        height: 25px;
    }
}

.teamDiv {
    background-color: #fff;
    width: 100%;

    .teamBody {


        padding: 10px;
        margin-left: 10px;
        margin-right: 10px;
        font-size: 0.8rem;
        color: #283763;

        &:not(:last-child) {
            border-bottom: 1px solid #ccc;
        }

        .teamPlayerImg {
            width: 50px;
            text-align: center;
            font-weight: bold;

            img {
                width: 30px;
            }
        }

        .teamPlayeDetail {
            width: calc(100% - 80px);
            box-sizing: border-box;
            padding-left: 20px;
        }

        .teamPlayerIcon {
            width: 30px;
            text-align: center;

            img {
                width: 15px;
            }
        }

        .empty {
            width: 100%;
            text-align: center;
        }

        &>div {
            display: inline-table;
        }

        &>div div:last-child {
            margin-top: 5px;
        }
    }
}
</style>

<template>

    <v-card class="rechargeProp">
        <v-card-title>临柜汇款</v-card-title>
        <v-card-text class="px-2">
            <v-col cols="12" class="px-0 pt-0 text-center">
                请先完成汇款手续，再进行提出充值申请，方便系统加快充值速度。
            </v-col>
            <v-col cols="12" class="px-0 pt-0">
                <div class="tg-txt">
                    <label>银行</label>
                    <div>招商银行</div>
                </div>
            </v-col>
            <v-col cols="12" class="px-0 pt-0">
                <div class="tg-txt">
                    <label>户名</label>
                    <div>王晓明</div>
                </div>
            </v-col>
            <v-col cols="12" class="px-0 pt-0">
                <div class="tg-txt">
                    <label>分行</label>
                    <div>成都分行西安北路支行</div>
                </div>
            </v-col>
            <v-col cols="12" class="px-0 pt-0">
                <div class="tg-txt">
                    <label>帐号</label>
                    <div>1235468789</div>
                </div>
            </v-col>
            <v-col cols="12" class="px-0 pt-0">
                <div class="tg-txt">
                    <label>充值金额</label>
                    <div><span class="highColor">1,000</span> </div>
                </div>
            </v-col>




            <v-col cols="12" class="px-0 pt-0 text-red warn-text">
                提醒:如利用本平台进行任何洗钱诈骗行为，本公司将保留全力终止会员服务及冻结其帐户。
            </v-col>

        </v-card-text>
        <v-card-actions class="pb-8">
            <v-row>
                <v-col cols="6">
                    <v-btn block class="btn-submit" variant="outlined" color="#b8b8b8"
                        @click="dialogsStore.openRechargeDialog('Transfer')">上一步</v-btn>
                </v-col>
                <v-col cols="6">
                    <v-btn block class="btn-submit bg-primary">充值完成-送出申请</v-btn>
                </v-col>
            </v-row>


        </v-card-actions>
    </v-card>

</template>
<script lang="ts" setup>

const dialogsStore = useDialogs();

</script>

<style lang="scss" scoped>

</style>

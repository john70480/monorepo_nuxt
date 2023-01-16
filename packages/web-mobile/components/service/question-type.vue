<template>
  <v-card>
    <v-card-title>问题选择</v-card-title>
    <v-card-text class="mx-1 px-1">
      <v-list-item v-for="item in questionList" class="question_item">
        <template v-slot:prepend="{ isActive }">
          <v-list-item-action start>
            <v-checkbox-btn :model-value="isActive"></v-checkbox-btn>
          </v-list-item-action>
        </template>
        <v-list-item-title>{{ item.text }}</v-list-item-title>
      </v-list-item>
    </v-card-text>
    <v-card-actions class="pb-8">
      <v-btn block class="btn-submit bg-primary">確認</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script lang="ts" setup>
import { Ref } from "vue";

const questionList = ref([
  {
    text: "实名/资料变更",
    value: 0,
  },
  {
    text: "充值/提领/余额",
    value: 1,
  },
  {
    text: "体育赛事/娱乐游戏",
    value: 2,
  },
  {
    text: "VIP等级/微商等级",
    value: 3,
  },
  {
    text: "平台优惠活动",
    value: 4,
  },
  {
    text: "其它问题",
    value: 99,
  },
]);
</script>

<style lang="scss" scoped>
.question_item{
    border-bottom: solid 1px #c3c3c3;
    padding: 4px;
    margin: 0px;
}
</style>

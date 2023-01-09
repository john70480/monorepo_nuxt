<template>
  <EventHeader />
  <TgTabs v-model="tab">
    <v-tab v-for="(item, index) in tabList" hide-slider>
      {{ item }}
    </v-tab>
  </TgTabs>

  <v-window v-model="tab"  class="grid_view">
      <v-row>
        <v-col v-for="(list, i) in typeList?.[tab]" :key="i" cols="12">
          <EventCard
            :id="list"
            :image-src="evnetList?.[list].imgsrc"
            :title="evnetList?.[list].title"
            @click="router.push('/event-hall/1')"
          />
        </v-col>
      </v-row>
  </v-window>
</template>
<script setup lang="ts">
import { ref } from "vue";
const router = useRouter();
definePageMeta({
  hiddenHeader: true,
  title: "活動大廳",
});
const tab = ref(0);
const tabList = ["全部", "TG", "體育", "娛樂"];

const typeList: any = {
  0: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10","11","12","13","14","15"],
  1: ["2", "3", "5","6","12","13","15"],
  2: ["4","7","8","14"],
  3: ["9","10"]
};

const evnetList: {
  [key: string]: {
    imgsrc: string;
    title: string;
  };
} = {
  1:{
    title: "王者荣耀",
    imgsrc:
      "https://banner.clswjk.top/k7/product/banner_image/zAZhhQpgff733ZnRnCuBA2OC0Ho96EaEcp3U8uxX.jpg",
  },
  2:{
    title: "2023跨年充值加码送",
    imgsrc:
      "https://banner.clswjk.top/k7/product/banner_image/al9FaeOWZKgtdQqOLiHhNuA8s27qUnwj4fQbJzj4.jpg",
  },
  3:{
    title: "首充满千送百",
    imgsrc:
      "https://banner.clswjk.top/k7/product/banner_image/26C0D6511648179694.jpg",
  },
  4:{
    title: "USDT充值日日加码送",
    imgsrc:
      "https://banner.clswjk.top/k7/product/banner_image/74033FBD1658807651.jpg",
  },
  5:{
    title: "体验金活动",
    imgsrc:
      "https://banner.clswjk.top/k7/product/banner_image/777955A31641880171.jpg",
  },
  6:{
    title: "TG制度等級介紹",
    imgsrc:
      "https://banner.clswjk.top/k7/product/banner_image/UIZpkDJXNDf7Zkl16IK9i8cNdVxmySdhAB7TbLtp.jpg",
  },
  7:{
    title: "微商时代",
    imgsrc:
      "https://banner.clswjk.top/k7/product/banner_image/bgTkE6ctGbyAl7rehpXX3YJRulM2AdJ20zPlguzY.jpg",
  },
  8:{
    title: "贡献反馈金",
    imgsrc:
      "https://banner.clswjk.top/k7/product/banner_image/BzQj7mkNK9JvYpRG1cGAOOImY0Bkc2iyTNhryepq.jpg",
  },
  9:{
    title: "棋牌游戏救援金",
    imgsrc:
      "https://banner.clswjk.top/k7/product/banner_image/VuNn5jmGQICSr6G9L88sUMJMJ1L2x22ljlTkYtIO.jpg",
  },
  10:{
    title: "电子游艺救援金",
    imgsrc:
      "https://banner.clswjk.top/k7/product/banner_image/IE5dqRBB4DBYq6qQyR7DYhEusZHipii9VfOUZMjf.jpg",
  },
  11:{
    title: "棋牌游戏投注周周送",
    imgsrc:
      "https://banner.clswjk.top/k7/product/banner_image/MNERT96eFEVHMbUDH3rN06yCmZjnoOatzsRH6Xim.jpg",
  },
  12:{
    title: "电子游艺投注周周送",
    imgsrc:
      "https://banner.clswjk.top/k7/product/banner_image/HRORtmKVM14uMFBtR34rXL7qLJUCJTkfLGkNPcUo.jpg",
  },
  13:{
    title: "绒雪圣诞‧暖冬陪伴",
    imgsrc:
      "https://banner.clswjk.top/k7/product/banner_image/EYc89vEPzRdU7i4gmll8nLGjdhBIxplOk1CntuKl.jpg",
  },
  14:{
    title: "VIP限定保本",
    imgsrc:
      "https://banner.clswjk.top/k7/product/banner_image/AB326BC41653667119.jpg",
  },
  15:{
    title: "一般保本活动",
    imgsrc:
      "https://banner.clswjk.top/k7/product/banner_image/A425D7AB1658806056.jpg",
  },
};
</script>
<style lang="scss" scoped>
.grid_view {
    padding: 0 16px;
    min-height: 100vh;
    background-image: linear-gradient(to left, #426796, #6c8cbd);
  }
</style>

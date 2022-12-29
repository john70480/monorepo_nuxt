<template>
  <Header></Header>
  <div class="favorite">
    <template v-for="(item, index) in type" :key="index">
      <SubTitle :title="item"></SubTitle>
      <div class="grid_view">
        <v-row >
          <v-col v-for="(list, i) in typeList?.[item]" :key="i" cols="6">
            <FavoriteCard
              :id="list"
              :image-src="gameList?.[list].imgsrc"
              :title="gameList?.[list].title"
              :is-select="gameList?.[list].isFavorite"
              @toggle="toggleFavorite"
            />
          </v-col>
        </v-row>
      </div>
    </template>
  </div>
</template>
<script setup lang="ts">
import { reactive } from "vue";
import Header from './header.vue';
import SubTitle from "./sub-ttitle.vue";
import FavoriteCard from "./favorite-card.vue";

definePageMeta({
	hiddenHeader: true,
	title: "娛樂收藏",
})

const type: any = ["MG", "PG", "PT"];

const typeList: any = {
  MG: ["739", "748", "750"],
  PG: ["699", "700", "701"],
  PT: ["676","677","678","679"],
};
const gameList: {
  [key: string]: {
    imgsrc: string;
    title: string;
    type: string;
    isFavorite: boolean;
  };
} = reactive({
  739: {
    imgsrc: "https://banner.clswjk.top/tg/third-party-gaming/zh-cn/739.jpg",
    title: "麻将胡了2",
    type: "MG",
    isFavorite: true,
  },
  748: {
    imgsrc: "https://banner.clswjk.top/tg/third-party-gaming/zh-cn/748.jpg",
    title: "寻宝黄金城",
    type: "MG",
    isFavorite: true,
  },
  750: {
    imgsrc: "https://banner.clswjk.top/tg/third-party-gaming/zh-cn/750.jpg",
    title: "招财喵",
    type: "MG",
    isFavorite: true,
  },

  699: {
    imgsrc: "https://banner.clswjk.top/tg/third-party-gaming/zh-cn/699.jpg?v=3",
    title: "旺旺旺",
    type: "PG",
    isFavorite: true,
  },
  700: {
    imgsrc: "https://banner.clswjk.top/tg/third-party-gaming/zh-cn/700.jpg?v=3",
    title: "抓抓乐",
    type: "PG",
    isFavorite: true,
  },
  701: {
    imgsrc: "https://banner.clswjk.top/tg/third-party-gaming/zh-cn/701.jpg?v=3",
    title: "摇钱树",
    type: "PG",
    isFavorite: true,
  },
  676: {
    imgsrc: "https://banner.clswjk.top/tg/third-party-gaming/zh-cn/676.jpg?v=3",
    title: "恐龙帝国",
    type: "PT",
    isFavorite: true,
  },
  677: {
    imgsrc: "https://banner.clswjk.top/tg/third-party-gaming/zh-cn/677.jpg?v=3",
    title: "地鼠总动员",
    type: "PT",
    isFavorite: true,
  },
  678: {
    imgsrc: "https://banner.clswjk.top/tg/third-party-gaming/zh-cn/678.jpg?v=3",
    title: "江山美景图",
    type: "PT",
    isFavorite: true,
  },
  679: {
    imgsrc: "https://banner.clswjk.top/tg/third-party-gaming/zh-cn/679.jpg?v=3",
    title: "丽影奇兵之探秘埃及",
    type: "PT",
    isFavorite: true,
  },
});

const toggleFavorite = (id: any) => {
  console.log("toggleFavorite:", gameList?.[id].title);
  gameList[id].isFavorite = !gameList[id].isFavorite;
};
</script>
<style lang="scss" scoped>
.favorite {
  background: #36567f;
  .grid_view {
    padding: 16px;
    background-image: linear-gradient(to left, #426796, #6c8cbd);
  }
}
</style>

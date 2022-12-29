<template>
    <Header></Header>
    <Swiper class="swiper-container" slides-per-view="auto">
					<SwiperSlide v-for="(list, index) in popGameList"
						:key="index">
						<PopCard :title="list.title" :image-src="list.imgsrc" :times="list.times" :id="list.id"/>
					</SwiperSlide>
        
				</Swiper>
    <TgTabs v-model="tab">
				<v-tab v-for="(item, index) in tabList" hide-slider>
					{{ item }}
				</v-tab>
			</TgTabs>
			<v-window v-model="tab" class="fill-height">
        <div class="grid_view">
        <v-row >
          <v-col v-for="(list, i) in typeList?.[tab]" :key="i" cols="6">
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
      </v-window>
</template>
<script setup lang="ts">
import Header from './header.vue';
import { ref,reactive } from "vue";
import FavoriteCard from "./favorite-card.vue";
import PopCard from "./pop-card.vue";
import { Swiper, SwiperSlide } from 'swiper/vue';

definePageMeta({
	hiddenHeader: true,
	title: "PG電子",
})
const tab = ref(0)
const tabList = ['全部','使用記錄']



const typeList: any = {
  0:["739", "748", "750","699", "700", "701","676","677","678","679"],
  1:["699", "700", "701"],
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


const popGameList:any = [
    {id:'690',
     times: 14,
     imgsrc:
       "https://banner.clswjk.top/tg/third-party-gaming/zh-cn/690.jpg?v=3",
     title: "绝地大逃杀",
   },
   {id:'691',
    times: 29,
     imgsrc:
       "https://banner.clswjk.top/tg/third-party-gaming/zh-cn/691.jpg?v=3",
     title: "蝶恋花",
   },
   {id:'692',
    times: 50,
     imgsrc:
       "https://banner.clswjk.top/tg/third-party-gaming/zh-cn/692.jpg?v=3",
     title: "虎虎生财",
   },
   {id:'693',
    times: 73,
     imgsrc:
       "https://banner.clswjk.top/tg/third-party-gaming/zh-cn/693.jpg?v=3",
     title: "发财鱼虾蟹",
   },
   {id:'695',
    times: 35,
     imgsrc:
       "https://banner.clswjk.top/tg/third-party-gaming/zh-cn/695.jpg?v=3",
     title: "巫师之书",
   },
  ]
</script>
<style lang="scss" scoped>
  
  .grid_view {
    padding: 16px;
    background-image: linear-gradient(to left, #426796, #6c8cbd);
    min-height: 100vh;
  }
  .swiper-container {
    background: var(--tg-bg-primary);
			position: relative;
			overflow: hidden;
			list-style: none;
			padding: 15px 10px;
			z-index: 1;

			.swiper-wrapper {
				position: relative;
				width: 100%;
				height: 100%;
				z-index: 1;
				display: flex;
				transition-property: transform;
				box-sizing: content-box;

				.swiper-slide {
					width: 150px;
					margin: 0 5px;
					flex-shrink: 0;
					position: relative;
					transition-property: transform;
				}
			}
		}


</style>

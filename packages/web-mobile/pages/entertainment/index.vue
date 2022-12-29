<template>
	<div class="entertainment">
		<Header></Header>
		<template v-for="(item, index) in siteList?.categories" :key="index">
			<SubTitle :type="item.thirdPartyCategory" :title="item.thirdPartyCategory"></SubTitle>
			<div class="index_box">
				<Swiper class="swiper-container platform-swiper" :slides-per-view="2" :pagination="{ clickable: true }" :space-between="10">
					<SwiperSlide v-for="(list, index) in siteList?.platform?.[item.thirdPartyType]?.[item.thirdPartyCategory]"
						:key="index">
						<div v-on:click="()=>router.push('/gaming')">
						<PlatformCard :title="list.thirdPartyName" :ImageSrc="platformMap?.[list.thirdPartyCode]?.banner">
						</PlatformCard>
					</div>
					</SwiperSlide>
				</Swiper>
			</div>
			<!-- <div class="grid_view">
					<v-row>
						<v-col v-for="(list, index) in siteList?.platform?.[item.thirdPartyType]?.[item.thirdPartyCategory]"
						:key="index" cols="6">
						<PlatformCard :title="list.thirdPartyName" :ImageSrc="platformMap?.[list.thirdPartyCode]?.banner">
						</PlatformCard>
						</v-col>
					</v-row>
			</div> -->
		</template>
	</div>
</template>
<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Pagination } from "swiper";
import Header from './header.vue';
import SubTitle from './sub-ttitle.vue';
import PlatformCard from './platform-card.vue';
import { useHome, getSiteListMap } from '@tg/web-mobile/stores/home';
import "swiper/scss";
import 'swiper/scss/pagination';
SwiperCore.use([Pagination]);
const homeStore = useHome();

definePageMeta({
	hiddenHeader: true,
	title: "娛樂",
})

const router = useRouter();
const { platformMap } = getSiteListMap();
const siteList = await homeStore.getSiteList();

</script>
<style lang="scss" scoped>
.entertainment {
	flex: 1;
	background: #36567f;
	overflow-y: auto;

	.index_box {
		background: var(--tg-bg-primary);

		.swiper-container {
			padding: 16px;
			
			 
			.sliderWrapper {
				position: relative;
				width: 100%;
				height: 100%;
				z-index: 1;
				display: flex;
				transition-property: transform;
				box-sizing: content-box;

				:global(.swiper-slide) {
					border-radius: .5rem;
					position: relative;
					transition-property: transform;
						img {
							width: 100%;
							display: block;
						}
					}
				:global(.swiper-pagination){
					bottom:0 !important;
				}
				:global(.swiper-pagination-bullet) {
					background: white;
					border-radius: .5rem;
					opacity: 1;
				}
				
				:global(.swiper-pagination-bullet-active) {
					background-color: #283763;
					border-radius: .5rem;
				}
				}
		}
	}
	.grid_view {
		padding: 16px;
		background-image: linear-gradient(to bottom, #426796, #6c8cbd);
	}
}
</style>
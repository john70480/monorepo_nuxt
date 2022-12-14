<template>
	<div class="index">
		<Banner></Banner>
		<div class="index_header">
			<Announcement></Announcement>
			<button class="menu" @click="app.navSwitch = true"></button>
		</div>

		<div class="index_box">
			<div class="index_row">
				<button class="recharge" @click="dialogsStore.openRechargeDialog('Transfer')">充值</button>
				<button class="withdrawal">提领</button>
				<button class="transfer">转账</button>
			</div>
		</div>

		<SubTitle type="game" title="热门赛事" @more="router.push({ path: 'market' })"></SubTitle>
		<div class="index_box">
			<Swiper class="swiper-container game-swiper " slides-per-view="auto">
				<SwiperSlide v-for="n in 5" :key="n">
					<MatchCard></MatchCard>
				</SwiperSlide>
			</Swiper>
		</div>

		<SubTitle type="event" title="优惠活动" :showFilter="true"></SubTitle>
		<div class="index_box">
			<Swiper class="swiper-container event-swiper " slides-per-view="auto">
				<SwiperSlide v-for="n in 5" :key="n">
					<img src="@tg/web-mobile/assets/images/banner02.png" />
				</SwiperSlide>
			</Swiper>
		</div>

		<SubTitle type="live" title="赛事直播"></SubTitle>
		<div class="index_box">
			<Swiper class="swiper-container live-swiper " slides-per-view="auto">
				<SwiperSlide v-for="n in 5" :key="n">
					<VideoCard></VideoCard>
				</SwiperSlide>
			</Swiper>
		</div>

		<template v-for="(item, index) in siteList?.categories" :key="index">
			<SubTitle :type="item.thirdPartyCategory" :title="item.thirdPartyCategory"></SubTitle>
			<div class="index_box">
				<Swiper class="swiper-container platform-swiper " slides-per-view="auto">
					<SwiperSlide v-for="(list, index) in siteList?.platform?.[item.thirdPartyType]?.[item.thirdPartyCategory]"
						:key="index">
						<PlatformCard :title="list.thirdPartyName" :ImageSrc="platformMap?.[list.thirdPartyCode]?.banner">
						</PlatformCard>
					</SwiperSlide>
				</Swiper>
			</div>
		</template>
		<LazyRecharge></LazyRecharge>
	</div>
</template>
<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import Banner from "./banner.vue";
import Announcement from './announcement.vue';
import SubTitle from './sub-ttitle.vue';
import PlatformCard from './platform-card.vue';
import MatchCard from './match-card.vue';
import VideoCard from './video-card.vue';
import { useHome, getSiteListMap } from '@tg/web-mobile/stores/home';

const homeStore = useHome();
definePageMeta({
	hiddenHeader: true,
	isMainPage: true
});

const app = useApp()
const router = useRouter();
const dialogsStore = useDialogs();
const { platformMap } = getSiteListMap();
const siteList = await homeStore.getSiteList();
</script>
<script  lang="ts">
export const platformList = {
	sports: {
		title: '体育',
		list: [
			{ title: "沙巴体育", imageSrc: new URL('../../assets/images/platform/banner-sports-0.png', import.meta.url).href },
			{ title: "OB体育", imageSrc: new URL('../../assets/images/platform/banner-sports-1.png', import.meta.url).href },
			{ title: "IM体育", imageSrc: new URL('../../assets/images/platform/banner-sports-2.png', import.meta.url).href }
		]
	},
	casino: {
		title: '真人',
		list: [
			{ title: "WM真人", imageSrc: new URL('../../assets/images/platform/banner-casinos-0.png', import.meta.url).href },
			{ title: "OB真人", imageSrc: new URL('../../assets/images/platform/banner-casinos-1.png', import.meta.url).href },
			{ title: "AG真人", imageSrc: new URL('../../assets/images/platform/banner-casinos-2.png', import.meta.url).href }
		]
	},
	pokers: {
		title: '棋牌',
		list: [
			{ title: "OB棋牌", imageSrc: new URL('../../assets/images/platform/banner-pokers-0.png', import.meta.url).href },
			{ title: "开元棋牌", imageSrc: new URL('../../assets/images/platform/banner-pokers-1.png', import.meta.url).href },
			{ title: "乐游棋牌", imageSrc: new URL('../../assets/images/platform/banner-pokers-2.png', import.meta.url).href }
		]
	},
	gaming: {
		title: '电子',
		list: [
			{ title: "CQ9电子", imageSrc: new URL('../../assets/images/platform/banner-gaming-0.png', import.meta.url).href },
			{ title: "JDB电子", imageSrc: new URL('../../assets/images/platform/banner-gaming-1.png', import.meta.url).href },
			{ title: "PG电子", imageSrc: new URL('../../assets/images/platform/banner-gaming-2.png', import.meta.url).href }
		]
	},
	lotteries: {
		title: '彩票',
		list: [
			{ title: "OB彩票", imageSrc: new URL('../../assets/images/platform/banner-lotteries-0.png', import.meta.url).href },
			{ title: "双赢彩票", imageSrc: new URL('../../assets/images/platform/banner-lotteries-1.png', import.meta.url).href },
		]
	},
	esports: {
		title: '电竞',
		list: [
			{ title: "xx电竞", imageSrc: new URL('../../assets/images/platform/banner-esports-0.png', import.meta.url).href },
			{ title: "xx电竞", imageSrc: new URL('../../assets/images/platform/banner-esports-1.png', import.meta.url).href },
		]
	},
}
</script>
<style lang="scss" scoped>
.index {
	flex: 1;
	background: #36567f;
	overflow-y: auto;



	.index_header {
		padding: 0 10px;
		display: flex;
		align-items: center;



		.menu {
			width: 40px;
			height: 40px;
			padding: 0;
			border: none;
			background: url('@tg/web-mobile/assets/images/menu_btn.png') center no-repeat;
			background-size: auto 16px;
		}
	}

	.index_box {
		background: var(--tg-bg-primary);

		.index_row {
			padding: 5px 10px;
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 10px;

			button {
				flex: 1;
				border: none;
				color: #a0c3e5;
				background: transparent;
				display: flex;
				align-items: center;
				justify-content: center;

				&::before {
					content: '';
					width: 30px;
					height: 30px;
					margin-right: 10px;
				}

				&.recharge::before {
					background: url('@tg/web-mobile/assets/images/recharge_btn.png') center no-repeat;
					background-size: contain;
				}

				&.withdrawal::before {
					background: url('@tg/web-mobile/assets/images/withdrawal_btn.png') center no-repeat;
					background-size: contain;
				}

				&.transfer::before {
					background: url('@tg/web-mobile/assets/images/transfer_btn.png') center no-repeat;
					background-size: contain;
				}
			}
		}
	}



	.swiper-container {
		&.game-swiper {
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
					width: 180px;
					border-radius: 5px;
					margin: 0 5px;
					padding: 10px;
					background: #fff;
					flex-shrink: 0;
					position: relative;
					transition-property: transform;
				}
			}
		}

		&.event-swiper {
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
					width: 300px;
					border-radius: 5px;
					margin: 0 5px;
					flex-shrink: 0;
					position: relative;
					transition-property: transform;

					img {
						width: 100%;
						display: block;
					}
				}
			}
		}

		&.live-swiper {
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
					width: 180px;
					margin: 0 5px;
					flex-shrink: 0;
					position: relative;
					transition-property: transform;
				}
			}
		}

		&.platform-swiper {
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
	}

}
</style>
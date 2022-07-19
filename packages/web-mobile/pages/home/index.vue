<template>
	<div class="index">
		<Banner></Banner>
		<div class="index_header">
			<Announcement></Announcement>
			<button class="menu" @click="app.navSwitch = true"></button>
		</div>

		<div class="index_box">
			<div class="index_row">
				<button class="recharge">充值</button>
				<button class="withdrawal">提领</button>
				<button class="transfer">转账</button>
			</div>
		</div>

		<SubTitle type="game" title="热门赛事"></SubTitle>
		<div class="index_box">
			<div class="swiper-container game-swiper swiper-container-initialized swiper-container-horizontal">
				<div class="swiper-wrapper" style="transition-duration: 0ms; transform: translate3d(0px, 0px, 0px);">
					<div class="swiper-slide">
						<div class="hotmatch">
							<div class="game_date">
								<b>10-15 22:30</b>
								<div class="guaranteed">保本</div>
							</div>
							<div class="live">欧洲冠军联赛</div>
							<div class="team">华沙普洛克U19(主)</div>
							<div class="team">洛兹U19</div>
							<div class="game_info">
								<div class="score">
									<b>3-3</b>
									<span>1.91</span>
								</div>
								<div class="amount">
									<b>总成交量 920K</b>
									<span>开赛剩 23:05:16</span>
								</div>
							</div>
						</div>
					</div>
					<div class="swiper-slide">
						<div class="hotmatch">
							<div class="game_date">
								<b>10-15 22:30</b>
								<div class="guaranteed">保本</div>
							</div>
							<div class="live">欧洲冠军联赛</div>
							<div class="team">华沙普洛克U19(主)</div>
							<div class="team">洛兹U19</div>
							<div class="game_info">
								<div class="score">
									<b>3-3</b>
									<span>1.91</span>
								</div>
								<div class="amount">
									<b>总成交量 920K</b>
									<span>开赛剩 23:05:16</span>
								</div>
							</div>
						</div>
					</div>
					<div class="swiper-slide">
						<div class="hotmatch">
							<div class="game_date">
								<b>10-15 22:30</b>
								<div class="guaranteed">保本</div>
							</div>
							<div class="live">欧洲冠军联赛</div>
							<div class="team">华沙普洛克U19(主)</div>
							<div class="team">洛兹U19</div>
							<div class="game_info">
								<div class="score">
									<b>3-3</b>
									<span>1.91</span>
								</div>
								<div class="amount">
									<b>总成交量 920K</b>
									<span>开赛剩 23:05:16</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<SubTitle type="event" title="优惠活动" :showFilter="true"></SubTitle>
		<div class="index_box">
			<div class="swiper-container event-swiper swiper-container-initialized swiper-container-horizontal">
				<div class="swiper-wrapper" style="transition-duration: 0ms; transform: translate3d(0px, 0px, 0px);">
					<div class="swiper-slide">
						<img src="@tg/web-mobile/assets/images/banner02.png" />
					</div>
					<div class="swiper-slide">
						<img src="@tg/web-mobile/assets/images/banner02.png" />
					</div>
				</div>
			</div>
		</div>

		<SubTitle type="live" title="赛事直播"></SubTitle>
		<div class="index_box">
			<div class="swiper-container live-swiper swiper-container-initialized swiper-container-horizontal">
				<div class="swiper-wrapper" style="transition-duration: 0ms; transform: translate3d(0px, 0px, 0px);">
					<div class="swiper-slide">
						<div class="game_live">
							<div class="video">
								<iframe src="https://www.youtube.com/embed/ZEQdAVoh_ww" frameborder="0"></iframe>
							</div>
							<div class="team">华沙普洛克U19(主)</div>
							<div class="team">洛兹U19</div>
						</div>
					</div>
					<div class="swiper-slide">
						<div class="game_live">
							<div class="video">
								<iframe src="https://www.youtube.com/embed/ZEQdAVoh_ww" frameborder="0"></iframe>
							</div>
							<div class="team">华沙普洛克U19(主)</div>
							<div class="team">洛兹U19</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<template v-for="(item, index) in platformList" :key="index">
			<SubTitle :type="index" :title="item.title"></SubTitle>
			<div class="index_box">
				<div class="swiper-container platform-swiper swiper-container-initialized swiper-container-horizontal">
					<div class="swiper-wrapper" style="transition-duration: 0ms; transform: translate3d(0px, 0px, 0px);">
						<div v-for="(list, index) in item.list" :key="index" class="swiper-slide">
							<PlatformCard :title="list.title" :ImageSrc="list.imageSrc"></PlatformCard>
						</div>
					</div>
				</div>
			</div>
		</template>

	</div>
</template>
<script setup lang="ts">
import { useApp } from '@tg/web-mobile/stores/app';
import Banner from "./banner.vue";
import Announcement from './announcement.vue';
import SubTitle from './sub-ttitle.vue';
import PlatformCard from './platform-card.vue';

definePageMeta({
	hiddenHeader: true
});
const app = useApp()
const platformList = {
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
		background: linear-gradient(to left, #426796, #6c8cbd);

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

	.hotmatch {
		color: #283763;
		font-size: 0.8rem;
		display: flex;
		flex-direction: column;
		gap: 3px;

		.game_date {
			display: flex;
			align-items: center;

			b {
				flex: 1;
				font-weight: normal;
			}
		}

		.live {
			font-weight: bold;
			padding-left: 20px;
			background: url('@tg/web-mobile/assets/images/live_gray.png') 0 center no-repeat;
			background-size: auto 12px;
		}

		.team {
			display: flex;
			align-items: center;

			&::before {
				content: '';
				width: 8px;
				height: 8px;
				margin-right: 5px;
				border-radius: 50%;
				background: linear-gradient(to bottom, #eaf5fb, #b2c9d5);
			}
		}

		.game_info {
			display: flex;

			.score {
				flex: 1;
				display: flex;
				flex-direction: column;
				margin-right: 5px;

				b {
					font-weight: normal;
					padding: 2px;
					background: #eef4f8;
					display: flex;
					justify-content: center;
					border-radius: 3px 3px 0 0;
				}

				span {
					color: #fff;
					padding: 2px;
					background: #8eaace;
					display: flex;
					justify-content: center;
					border-radius: 0 0 3px 3px;
				}
			}

			.amount {
				flex: 1.5;
				color: #8eaace;
				display: flex;
				flex-direction: column;

				b {
					font-weight: normal;
				}

				span {}
			}
		}
	}

	.game_live {
		width: 100%;

		.video {
			width: 100%;
			height: 100px;
			border-radius: 5px;
			margin-bottom: 10px;
			background: url('@tg/web-mobile/assets/images/live_stadium_img.png') center no-repeat, #b0d8ff;
			background-size: cover;
			overflow: hidden;

			iframe {
				width: 100%;
				height: 100%;
			}
		}

		.team {
			color: #ffffff;
			font-size: 0.7rem;
			margin-bottom: 3px;
			display: flex;
			align-items: center;

			&::before {
				content: '';
				width: 8px;
				height: 8px;
				margin-right: 5px;
				border-radius: 50%;
				background: linear-gradient(to bottom, #eaf5fb, #b2c9d5);
			}
		}
	}

}
</style>
<template>
	<nav :class="{ active: app.navSwitch }">
		<div class="nav_menu">
			<div class="nav_logo"></div>
			<ul>
				<li v-for="(item, index) in navList" :key="index" :class="{ active: item.active }">
					<template v-if="item.sub?.length">
						<span class="sub-item" @click="item.active = !item.active">{{ item.text }}</span>
						<ul>
							<li v-for="(subItem, index) in item.sub" :key="index">
								<button :class="subItem.class">{{ subItem.text }}</button>
							</li>
						</ul>
					</template>
					<button v-else :class="item.class">{{ item.text }}</button>
				</li>
			</ul>
			<div class="nav_row">
				<button class="logout_btn">登出</button>
				<button class="download_btn">APP下载</button>
			</div>
		</div>

		<button class="close_nav" @click="app.navSwitch = false"></button>
	</nav>
</template>
<script setup lang="ts">
const app = useApp()

const navList = ref<{ text: string, class: string, active?: boolean, sub?: { text: string, class: string }[] }[]>([
	{ text: "充值", class: "icon01" },
	{ text: "提领", class: "icon02" },
	{ text: "转账", class: "icon03" },
	{ text: "活动大厅", class: "icon04" },
	{ text: "娱乐", class: "icon05 new" },
	{ text: "TG微商", class: "icon06 new" },
	{ text: "智能下單", class: "icon07" },
	{
		text: "TG市场", class: "", active: false,
		sub: [
			{ text: "市场列表", class: "icon08" },
			{ text: "赛事直播", class: "icon09" },
			{ text: "赛事结果", class: "icon10" },
			{ text: "历年赛事统计", class: "icon11" },
			{ text: "即时比分", class: "icon12" },
		]
	},
	{
		text: "会员服务", class: "", active: false,
		sub: [
			{ text: "联络客服", class: "icon13" },
			{ text: "公告", class: "icon14" },
			{ text: "上级协助", class: "icon15" },
			{ text: "VIP规则", class: "icon16" },
			{ text: "规则说明", class: "icon17" },
			{ text: "讨论区", class: "icon18" },
			{ text: "帮助中心", class: "icon19" },
			{ text: "关于TG", class: "icon20" },
			{ text: "与我们合作", class: "icon21" },
		]
	},
	{
		text: "交易帐务", class: "", active: false,
		sub: [
			{ text: "下单明细", class: "icon22" },
			{ text: "历史帐务", class: "icon23" },
			{ text: "总帐表", class: "icon24" },
			{ text: "交易记录", class: "icon25" },
		]
	},
	{
		text: "我的权益", class: "", active: false,
		sub: [
			{ text: "我的", class: "icon26" },
			{ text: "个人资料", class: "icon27" },
			{ text: "设置", class: "icon28" },
		]
	},
])
</script>
<style lang="scss" scoped>
nav {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: -1;
	display: none;

	&.active {
		z-index: 1005;
		display: block;
	}

	.nav_menu {
		position: absolute;
		top: 0;
		right: 0;
		width: 80%;
		height: 100%;
		background: var(--tg-bg-primary);
		z-index: 10;
		display: flex;
		flex-direction: column;

		.nav_logo {
			width: 60px;
			height: 49px;
			margin: 10px auto 5px 10px;
			background: url('@tg/web-mobile/assets/images/tg_logo.png') center no-repeat;
			background-size: contain;
		}

		>ul {
			flex: 1;
			padding: 0 0 40px 20px;
			margin: 0;
			list-style: none;
			overflow-y: auto;

			li {
				button {
					position: relative;
					width: 100%;
					color: #fff;
					font-size: 0.9rem;
					padding: 9px 10px 9px 0;
					border: none;
					border-bottom: 1px solid #89a5bb;
					background: transparent;
					display: flex;
					align-items: center;

					&::before {
						content: '';
						width: 26px;
						height: 26px;
						margin-right: 10px;
					}

					&.new::after {
						content: '';
						position: absolute;
						top: 5px;
						left: -8px;
						width: 22px;
						height: 9px;
						background: url('@tg/web-mobile/assets/images/nav/navicon_new.png') center no-repeat;
						background-size: contain;
					}

					&.icon01::before {
						background: url('@tg/web-mobile/assets/images/nav/navicon_01.png') center no-repeat;
						background-size: contain;
					}

					&.icon02::before {
						background: url('@tg/web-mobile/assets/images/nav/navicon_02.png') center no-repeat;
						background-size: contain;
					}

					&.icon03::before {
						background: url('@tg/web-mobile/assets/images/nav/navicon_03.png') center no-repeat;
						background-size: contain;
					}

					&.icon04::before {
						background: url('@tg/web-mobile/assets/images/nav/navicon_04.png') center no-repeat;
						background-size: contain;
					}

					&.icon05::before {
						background: url('@tg/web-mobile/assets/images/nav/navicon_05.png') center no-repeat;
						background-size: contain;
					}

					&.icon06::before {
						background: url('@tg/web-mobile/assets/images/nav/navicon_06.png') center no-repeat;
						background-size: contain;
					}

					&.icon07::before {
						background: url('@tg/web-mobile/assets/images/nav/navicon_07.png') center no-repeat;
						background-size: contain;
					}

					&.icon08::before {
						background: url('@tg/web-mobile/assets/images/nav/navicon_08.png') center no-repeat;
						background-size: contain;
					}

					&.icon09::before {
						background: url('@tg/web-mobile/assets/images/nav/navicon_09.png') center no-repeat;
						background-size: contain;
					}

					&.icon10::before {
						background: url('@tg/web-mobile/assets/images/nav/navicon_10.png') center no-repeat;
						background-size: contain;
					}

					&.icon11::before {
						background: url('@tg/web-mobile/assets/images/nav/navicon_11.png') center no-repeat;
						background-size: contain;
					}

					&.icon12::before {
						background: url('@tg/web-mobile/assets/images/nav/navicon_12.png') center no-repeat;
						background-size: contain;
					}

					&.icon13::before {
						background: url('@tg/web-mobile/assets/images/nav/navicon_13.png') center no-repeat;
						background-size: contain;
					}

					&.icon14::before {
						background: url('@tg/web-mobile/assets/images/nav/navicon_14.png') center no-repeat;
						background-size: contain;
					}

					&.icon15::before {
						background: url('@tg/web-mobile/assets/images/nav/navicon_15.png') center no-repeat;
						background-size: contain;
					}

					&.icon16::before {
						background: url('@tg/web-mobile/assets/images/nav/navicon_16.png') center no-repeat;
						background-size: contain;
					}

					&.icon17::before {
						background: url('@tg/web-mobile/assets/images/nav/navicon_17.png') center no-repeat;
						background-size: contain;
					}

					&.icon18::before {
						background: url('@tg/web-mobile/assets/images/nav/navicon_18.png') center no-repeat;
						background-size: contain;
					}

					&.icon19::before {
						background: url('@tg/web-mobile/assets/images/nav/navicon_19.png') center no-repeat;
						background-size: contain;
					}

					&.icon20::before {
						background: url('@tg/web-mobile/assets/images/nav/navicon_20.png') center no-repeat;
						background-size: contain;
					}

					&.icon21::before {
						background: url('@tg/web-mobile/assets/images/nav/navicon_21.png') center no-repeat;
						background-size: contain;
					}

					&.icon22::before {
						background: url('@tg/web-mobile/assets/images/nav/navicon_22.png') center no-repeat;
						background-size: contain;
					}

					&.icon23::before {
						background: url('@tg/web-mobile/assets/images/nav/navicon_23.png') center no-repeat;
						background-size: contain;
					}

					&.icon24::before {
						background: url('@tg/web-mobile/assets/images/nav/navicon_24.png') center no-repeat;
						background-size: contain;
					}

					&.icon25::before {
						background: url('@tg/web-mobile/assets/images/nav/navicon_25.png') center no-repeat;
						background-size: contain;
					}

					&.icon26::before {
						background: url('@tg/web-mobile/assets/images/nav/navicon_26.png') center no-repeat;
						background-size: contain;
					}

					&.icon27::before {
						background: url('@tg/web-mobile/assets/images/nav/navicon_27.png') center no-repeat;
						background-size: contain;
					}

					&.icon28::before {
						background: url('@tg/web-mobile/assets/images/nav/navicon_28.png') center no-repeat;
						background-size: contain;
					}
				}

				.sub-item {
					position: relative;
					width: 100%;
					height: 45px;
					color: #fff;
					font-size: 1rem;
					font-weight: bold;
					border-bottom: 1px solid #89a5bb;
					display: flex;
					align-items: center;

					&::after {
						content: '';
						position: absolute;
						top: 50%;
						right: 20px;
						width: 13px;
						height: 7px;
						background: url('@tg/web-mobile/assets/images/nav/submenu_arrow.png') center no-repeat;
						background-size: contain;
						transform: translateY(-50%) scaleY(1);
					}
				}

				>ul {
					padding: 0;
					margin: 0;
					list-style: none;
					display: none;
				}

				&.active {
					>ul {
						display: block;
					}

					.sub-item {
						border-bottom: none;

						&::after {
							transform: translateY(-50%) scaleY(-1);
						}
					}
				}
			}
		}

		.nav_row {
			border-top: 1px solid #fff;
			display: flex;
			align-items: center;

			button {
				flex: 1;
				height: 40px;
				color: #fff;
				font-size: 0.8rem;
				border: none;
				background: transparent;
				display: flex;
				align-items: center;
				justify-content: center;

				&::before {
					content: '';
					width: 20px;
					height: 20px;
					margin-right: 10px;
				}

				&.logout_btn {
					border-right: 1px solid #fff;

					&::before {
						background: url('@tg/web-mobile/assets/images/nav/navicon_29.png') center no-repeat;
						background-size: contain;
					}
				}

				&.download_btn::before {
					background: url('@tg/web-mobile/assets/images/nav/navicon_30.png') center no-repeat;
					background-size: contain;
				}
			}
		}
	}

	.close_nav {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);
		z-index: 1;
	}
}
</style>
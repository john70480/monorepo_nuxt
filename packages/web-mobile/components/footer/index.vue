<template>
	<footer>
		<button class="home_btn active">首页</button>
		<button class="market_btn">市场列表</button>
		<button class="category_btn">分类</button>
		<button class="history_btn">历史帐务</button>
		<button class="my_btn">我的</button>
	</footer>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
footer {
	background: linear-gradient(to bottom, #fff, #fff 40%, #eff4fd 90%, #eff4fd);
	box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.16);
	display: flex;
	align-items: center;
	justify-content: space-evenly;

	button {
		color: #707070;
		font-size: 0.8rem;
		border: none;
		background: transparent;
		padding: 10px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;

		&::before {
			content: "";
			width: 26px;
			height: 26px;
			margin-bottom: 8px;
		}

		&.home_btn::before {
			background: url("@tg/web-mobile/assets/images/theme/basic/icon_home_off.png") center no-repeat;
			background-size: contain;
		}

		&.market_btn::before {
			background: url("@tg/web-mobile/assets/images/theme/basic/icon_market_off.png") center no-repeat;
			background-size: contain;
		}

		&.category_btn::before {
			background: url("@tg/web-mobile/assets/images/icon_logo.png") center no-repeat;
			background-size: contain;
		}

		&.history_btn::before {
			background: url("@tg/web-mobile/assets/images/theme/basic/icon_history_off.png") center no-repeat;
			background-size: contain;
		}

		&.my_btn::before {
			background: url("@tg/web-mobile/assets/images/theme/basic/icon_my_off.png") center no-repeat;
			background-size: contain;
		}

		&.active {
			color: #3d5de2;

			&.home_btn::before {
				background: url("@tg/web-mobile/assets/images/theme/basic/icon_home_on.png") center no-repeat;
				background-size: contain;
			}

			&.market_btn::before {
				background: url("@tg/web-mobile/assets/images/theme/basic/icon_market_on.png") center no-repeat;
				background-size: contain;
			}

			&.history_btn::before {
				background: url("@tg/web-mobile/assets/images/theme/basic/icon_history_on.png") center no-repeat;
				background-size: contain;
			}

			&.my_btn::before {
				background: url("@tg/web-mobile/assets/images/theme/basic/icon_my_on.png") center no-repeat;
				background-size: contain;
			}
		}
	}
}
</style>
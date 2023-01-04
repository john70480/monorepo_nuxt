<template>
	<footer>
		<button v-for="(item, index) in footerList" :key="index" :class="item.class" @click="item.link()">
			{{ item.title }}
		</button>
	</footer>
</template>
<script setup lang="ts">
const route = useRoute();
const router = useRouter();
const dialog = useDialogs();
const footerList = computed(() => {
	return [
		{ title: "首页", class: ["home_btn", { "active": ["index", "home"].includes(route.name as string) }], link: () => router.push('/home') },
		{ title: "市场列表", class: ["market_btn", { "active": route.name === "market" }], link: () => router.push('/market') },
		{ title: "分类", class: ["category_btn", { "active": route.name === "classification" }], link: () => dialog.open.classification = !dialog.open.classification },
		{ title: "历史帐务", class: ["history_btn", { "active": route.name === "history" }], link: () => router.push('/history') },
		{ title: "我的", class: ["my_btn", { "active": route.name === "my" }], link: () => router.push('/my') },
	]
})
</script>
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
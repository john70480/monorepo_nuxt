<template>
	<header>
		<!-- 返回按鈕 -->
		<!-- <button class="back_btn"></button> -->
		<span>{{ route.meta.title }}</span>
		<button class="third_party"></button>
		<button class="header_menu" @click="app.navSwitch = true"></button>
	</header>
</template>
<script setup lang="ts">
import { useApp } from '@tg/web-mobile/stores/app';

const app = useApp()
const route = useRoute();
</script>

<style lang="scss" scoped>
header {
	background: linear-gradient(to bottom, #fff, #fff 40%, #e2e8f2 90%, #c5d0e4);
	display: flex;
	align-items: center;

	span {
		flex: 1;
		color: #283763;
		font-size: 1.1rem;
		font-weight: bold;
		padding: 0 10px;
	}

	button {
		width: 40px;
		height: 40px;
		padding: 0;
		border: none;

		&.back_btn {
			background: url('@tg/web-mobile/assets/images/back_btn.png') center no-repeat;
			background-size: auto 16px;
		}

		&.third_party {
			background: url('@tg/web-mobile/assets/images/head_entertainment_btn.png') center no-repeat;
			background-size: auto 16px;
		}

		&.header_menu {
			background: url('@tg/web-mobile/assets/images/head_menu_btn.png') center no-repeat;
			background-size: auto 16px;
		}
	}
}
</style>
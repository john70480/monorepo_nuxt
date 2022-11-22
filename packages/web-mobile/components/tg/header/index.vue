<template>
	<v-app-bar density="compact" class="tg-header">
		<template v-slot:prepend>
			<div class="d-flex align-center">
				<template v-if="goBackFlag">
					<span class="icon-goback" @click="goBack()"></span>
				</template>
				<span class="mt-auto mb-auto d-flex">{{ route.meta.title }}</span>
			</div>

		</template>

		<template v-slot:append>
			<button class="third_party"></button>
			<button class="header_menu" @click="app.navSwitch = !app.navSwitch"></button>
		</template>
	</v-app-bar>
</template>
<script setup lang="ts">
import { useApp } from '@tg/web-mobile/stores/app';

const app = useApp()
const route = useRoute();
const router = useRouter();
const goBackFlag = computed(() => {
	return !route.meta.isMainPage
})
function goBack() {
	router.back();
}
</script>

<style lang="scss" scoped>
header.tg-header {
	background: linear-gradient(to bottom, #fff, #fff 40%, #e2e8f2 90%, #c5d0e4);
	display: flex;
	align-items: center;
	z-index: 991;

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

header.tg-header .icon-goback {
	flex: 0;

	&::before {
		height: 20px;
		width: 12px;
	}
}
</style>
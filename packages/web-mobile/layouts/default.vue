<template>
	<div class="app">
		<Header v-if="!route.meta.hiddenHeader"></Header>
		<main>
			<slot />

		</main>
		<Footer></Footer>
		<SideNav></SideNav>
	</div>
</template>
<script setup lang="ts">
import Header from "@tg/web-mobile/components/header/index.vue";
import Footer from "@tg/web-mobile/components/footer/index.vue";
import SideNav from "@tg/web-mobile/components/side-navigation/index.vue";
const route = useRoute();
</script>
<style lang="scss" scoped>
.app {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
}

main {
	flex: 1;
	overflow-y: auto;
}
</style>
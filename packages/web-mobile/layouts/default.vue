<template>
	<div class="app">
		<TgHeader v-if="!route.meta.hiddenHeader"></TgHeader>
		<main>
			<slot />

		</main>
		<TgFooter></TgFooter>
		<TgSideNavigation>
		</TgSideNavigation>
	</div>
</template>
<script setup lang="ts">
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
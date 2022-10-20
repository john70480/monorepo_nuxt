<template>
	<v-app>
		<TgDialogMessage />
		<TgClassification />
		<TgHeader v-if="!route.meta.hiddenHeader"></TgHeader>
		<v-main>
			<slot />
		</v-main>
		<TgFooter v-if="route.meta.isMainPage"></TgFooter>
		<TgSideNavigation>
		</TgSideNavigation>
	</v-app>
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
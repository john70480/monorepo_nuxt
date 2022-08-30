<template>
	<v-app>
		<TgDialog></TgDialog>
		<TgClassification>
		</TgClassification>
		<TgHeader v-if="!route.meta.hiddenHeader"></TgHeader>
		<v-main>
			<slot />
		</v-main>
		<TgFooter></TgFooter>
		<TgSideNavigation>
		</TgSideNavigation>
	</v-app>
</template>
<script setup lang="ts">
import Classification from '../components/tg/dialog/classification.vue';
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
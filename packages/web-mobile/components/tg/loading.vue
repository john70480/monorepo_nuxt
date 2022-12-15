<template>
	<div :class="$style.container" v-if="type === 'default'">
		<img src="@tg/web-mobile/assets/images/load.gif" />
		<span>loading</span>
	</div>

</template>
<script lang="ts" setup>
const props = withDefaults(defineProps<{
	type?: 'default'
}>(), {
	type: 'default'
});
</script>

<style module lang="scss">
.container {
	position: absolute;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	opacity: 0.8;
	background-color: #000;

	img {
		height: 40px;
		width: 40px;
	}

	span {
		color: white;
	}
}
</style>

<template>
	<div class="platform_content">
		<div class="platform_pic">
			<img :src="ImageSrc" />
			<span>{{ title }}</span>
		</div>
	</div>
</template>
<script setup lang="ts">
defineProps({
	ImageSrc: String,
	title: String,
});
</script>
<style lang="scss" scoped>
.platform_content {
	width: 100%;

	.platform_pic {
		width: 100%;
		border-radius: 0px;
		margin-bottom: 10px;
		overflow: hidden;
		position: relative;
		img {
			height: 90px;
			display: block;
		}
		span {
		position: absolute;
		top: calc(50% - 0.7rem);
		right: 12px;
		color: #283763;
		font-size: 0.7rem;
		}
	}

	
}
</style>
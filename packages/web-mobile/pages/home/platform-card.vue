<template>
	<div class="platform_content">
		<div class="platform_pic">
			<img :src="ImageSrc" />
			<!-- <img src="@tg/web-mobile/assets/images/platform/banner-casinos-0.png" /> -->
		</div>
		<span>{{ title }}</span>
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
		border-radius: 3px;
		margin-bottom: 10px;
		overflow: hidden;

		img {
			height: 90px;
			display: block;
		}
	}

	span {
		color: #eef4f8;
		font-size: 0.7rem;
	}
}
</style>
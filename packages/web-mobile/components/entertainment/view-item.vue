<template>
	<div class="index_box">
				<Swiper class="swiper-container platform-swiper" :slides-per-view="2" :pagination="{ clickable: true }" :space-between="10">
					<SwiperSlide v-for="(list, index) in siteList?.platform?.[item.thirdPartyType]?.[item.thirdPartyCategory]"
						:key="index">
						<PlatformCard :title="list.thirdPartyName" :ImageSrc="platformMap?.[list.thirdPartyCode]?.banner">
						</PlatformCard>
					</SwiperSlide>
				</Swiper>
	</div>
	<div class="grid_view">
					<v-row>
						<v-col v-for="(list, index) in siteList?.platform?.[item.thirdPartyType]?.[item.thirdPartyCategory]"
						:key="index" cols="6">
						<PlatformCard :title="list.thirdPartyName" :ImageSrc="platformMap?.[list.thirdPartyCode]?.banner">
						</PlatformCard>
						</v-col>
					</v-row>
			</div>
</template>
<script setup lang="ts">
defineProps({
	ImageSrc: String,
	title: String,
});
</script>
<style lang="scss" scoped>
</style>
<template>
	<Swiper class="homeBanner " :pagination="{ clickable: true }" :autoplay="true" :loop="true" slides-per-view="auto">
		<SwiperSlide v-for="n in 5" :key="n">
			<img src="@tg/web-mobile/assets/images/banner01.png" />
		</SwiperSlide>
	</Swiper>

</template>
<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Autoplay, Pagination } from "swiper";
import "swiper/scss";
import 'swiper/scss/pagination';
SwiperCore.use([Pagination, Autoplay]);

</script>
<style lang="scss" >
.homeBanner {

	.swiper-wrapper {
		width: 100%;

		.swiper-slide {
			text-align: center;

			video {
				width: 100%;
				display: block;
			}

			img {
				width: 100%;
				display: block;
			}
		}
	}

	.swiper-pagination-bullets {
		// position: absolute;
		// bottom: 10px;
		// width: 100%;
		// padding: 5px 10px;
		// display: flex;
		// align-items: center;
		// justify-content: center;
		// gap: 5px;
		// z-index: 10;

		.swiper-pagination-bullet {
			// width: 8px;
			// height: 8px;
			// display: inline-block;
			// border-radius: 100%;
			background: #fff;
			border: 1px solid #707070;
			opacity: 1;

			&.swiper-pagination-bullet-active {
				background: #707070;
			}
		}
	}
}
</style>
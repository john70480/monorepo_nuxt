<template>
	<div class="swiper-container swiper homeBanner swiper-container-initialized swiper-container-horizontal">
		<div class="swiper-wrapper">
			<div class="swiper-slide swiper-slide-duplicate">
				<img src="@tg/web-mobile/assets/images/banner01.png" />
			</div>
		</div>
		<div class="swiper-pagination swiper-pagination-bullets">
			<span class="swiper-pagination-bullet"></span><span
				class="swiper-pagination-bullet swiper-pagination-bullet-active"></span><span
				class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span
				class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span
				class="swiper-pagination-bullet"></span>
		</div>
		<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
	</div>

</template>
<style lang="scss" scoped>
.homeBanner {
	position: relative;
	width: 100%;
	display: flex;

	.swiper-wrapper {
		width: 100%;
		display: inline-block;

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
		position: absolute;
		bottom: 10px;
		width: 100%;
		padding: 5px 10px;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 5px;
		z-index: 10;

		.swiper-pagination-bullet {
			width: 8px;
			height: 8px;
			display: inline-block;
			border-radius: 100%;
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
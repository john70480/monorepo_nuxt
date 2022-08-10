<template>
	<div class="game_live">
		<div class="video">
			<iframe src="https://www.youtube.com/embed/ZEQdAVoh_ww" frameborder="0"></iframe>
		</div>
		<div class="team">华沙普洛克U19(主)</div>
		<div class="team">洛兹U19</div>
	</div>

</template>

<style lang="scss" scoped>
.game_live {
	width: 100%;

	.video {
		width: 100%;
		height: 100px;
		border-radius: 5px;
		margin-bottom: 10px;
		background: url('@tg/web-mobile/assets/images/live_stadium_img.png') center no-repeat, #b0d8ff;
		background-size: cover;
		overflow: hidden;

		iframe {
			width: 100%;
			height: 100%;
		}
	}

	.team {
		color: #ffffff;
		font-size: 0.7rem;
		margin-bottom: 3px;
		display: flex;
		align-items: center;

		&::before {
			content: '';
			width: 8px;
			height: 8px;
			margin-right: 5px;
			border-radius: 50%;
			background: linear-gradient(to bottom, #eaf5fb, #b2c9d5);
		}
	}
}
</style>

<template>
	<div class="tabs">
		<button class="tab active">全部(70)</button>
		<button class="tab">今日(32)</button>
		<button class="tab">明日(40)</button>
		<button class="filter_btn"></button>
	</div>
</template>
<script setup lang="ts">

</script>
<style lang="scss" scoped>
.tabs {
	background: #36567f;
	display: flex;
	align-items: center;

	button {
		height: 40px;
		color: #c3c3c3;
		font-size: 0.8rem;
		line-height: 1;
		border: none;
		border-right: 1px solid #c3c3c3;
		background: transparent;

		&.tab {
			flex: 1;
		}

		&.active {
			color: #fff;
			display: flex;
			align-items: center;
			justify-content: center;

			&::before {
				content: '';
				width: 6px;
				height: 6px;
				margin-right: 10px;
				border-radius: 50%;
				background: linear-gradient(to bottom, #ffae5c, #f5720d);
			}
		}

		&.filter_btn {
			width: 40px;
			background: url('@tg/web-mobile/assets/images/filter_btn.png') center no-repeat;
			background-size: 20px auto;
		}

		&:last-child {
			border-right: none;
		}
	}
}
</style>
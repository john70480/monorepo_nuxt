<template>
	<div class="announcement">
		<marquee>
			<slot>跑马灯文字内容跑马灯文字内容跑马灯文字内容跑马灯内容!</slot>
		</marquee>
	</div>
</template>

<style lang="scss" scoped>
.announcement {
	flex: 1;
	width: auto;
	height: 30px;
	padding-left: 30px;
	line-height: 30px;
	// margin-right: 10px;
	color: #fff;
	font-size: 0.8rem;
	background: url("@tg/web-mobile/assets/images/announcement.png") 10px center no-repeat, #587eb0;
	background-size: auto 20px;
}
</style>
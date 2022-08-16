<template>
	<div id="box" ref="box">
		<div class="bgColor" ref="bgColor"></div>
		<div class="txt">{{ txt }}</div>
		<!--給i標簽添加上相應字體圖標的類名即可-->
		<div class="slider" ref="slider" @mousedown="mousedownHandler" @touchstart="mousedownHandler">
			<i v-show="!isSuccess" class="el-icon-d-arrow-right"></i>
			<i v-show="isSuccess" class="el-icon-check"></i>
		</div>
	</div>
</template>
<script setup lang="ts">

const isSuccess = ref(false)
//二、獲取到需要用到的DOM元素
const box = ref<HTMLElement>(); //容器
const bgColor = ref<HTMLElement>(); //背景色
const txt = ref('请滑动验证'); //文本
const slider = ref<HTMLElement>(); //滑塊
const successMoveDistance = computed(() => (box.value && slider.value) ? box.value.offsetWidth - slider.value.offsetWidth : 0); //解鎖需要滑動的距離
let downX: number; //用於存放鼠標按下時的位置
//三、給滑塊添加鼠標按下事件
//3.1鼠標按下事件的方法實現
function mousedownHandler(e: MouseEvent | TouchEvent) {
	if (bgColor.value && slider.value) {
		bgColor.value.style.transition = "";
		slider.value.style.transition = "";
	}
	var e = e || window.event || e.which;
	// debugger
	downX = e.clientX ? e.clientX : e.changedTouches[0].clientX;
	if (!isSuccess.value) {
		//在鼠標按下時，分別給鼠標添加移動和松開事件
		document.onmousemove = mousemoveHandler;
		document.onmouseup = mouseupHandler;
		//添加移動端對應事件
		document.ontouchmove = mousemoveHandler;
		document.ontouchend = mouseupHandler;
	}
}
//3.1.1鼠標移動事件的方法實現
function mousemoveHandler(e: MouseEvent | TouchEvent) {
	var e = e || window.event || e.which;
	var moveX = e.clientX ? e.clientX : e.changedTouches[0].clientX;
	console.log(moveX);
	var offsetX = getOffsetX(moveX - downX, 0, successMoveDistance.value);
	if (bgColor.value && slider.value) {
		bgColor.value.style.width = offsetX + "px";
		slider.value.style.left = offsetX + "px";
	}

	if (offsetX == successMoveDistance.value) {
		success();
	}
	//如果不設置滑塊滑動時會出現問題（目前還不知道為什麼）
	e.preventDefault();
}

//3.1.2鼠標松開事件的方法實現
function mouseupHandler(e: MouseEvent | TouchEvent) {
	if (!isSuccess.value && bgColor.value && slider.value) {
		bgColor.value.style.width = 0 + "px";
		slider.value.style.left = 0 + "px";
		bgColor.value.style.transition = "width 0.5s linear";
		slider.value.style.transition = "left 0.5s linear";
	}
	document.onmousemove = null;
	document.onmouseup = null;
	//移除移動端事件
	document.ontouchmove = null;
	document.ontouchend = null;
}
//四、定義一個獲取鼠標當前需要移動多少距離的方法
function getOffsetX(offset: number, min: number, max: number) {
	if (offset < min) {
		offset = min;
	} else if (offset > max) {
		offset = max;
	}
	return offset;
}
//五、定義一個滑塊解鎖成功的方法
function success() {
	isSuccess.value = true;
	txt.value = "解鎖成功";
	if (bgColor.value && slider.value) {
		bgColor.value.style.backgroundColor = "lightgreen";
		//滑動成功時，移除鼠標按下事件和鼠標移動事件
		slider.value.onmousedown = null;
	}
	document.onmousemove = null;
	//移除移動端事件
	document.ontouchstart = null;
	document.ontouchmove = null;
}
</script>
<style >
/*  使用全局樣式樣式去掉 */
* {
	touch-action: pan-y;
}
</style >
<style lang="scss" scoped>
#box {
	margin-top: 10%;
	position: relative;
	height: 50px;
	text-align: center;
	line-height: 50px;
	font-size: 0.9rem;
	color: #c3c3c3;
	background: #394c65;
	box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);
	border-radius: 5px;
}

.bgColor {
	position: absolute;
	left: 0;
	top: 0;
	width: 50px;
	height: 50px;
	border-radius: 5px;
	background-image: linear-gradient(to right, #b9c4cd, #939aa1);
}

.txt {
	position: absolute;
	width: 100%;
	height: 50px;
	line-height: 50px;
	font-size: 14px;
	text-align: center;
}

.slider {
	position: absolute;
	cursor: move;

	width: 50px;
	height: 50px;
	border-radius: 5px;
	border: 1px solid #8eaace;
	background: url('@tg/web-mobile/assets/images/verify_arrow.png') center no-repeat, #fff;
	background-size: 40%;
	float: right;
	top: 0px;
	left: 0px;
	overflow: hidden;
	box-shadow: 0 0 3px rgba(0, 0, 0, 0.8);
}

.slider>i {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
</style>
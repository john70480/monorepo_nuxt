<template>
	<TgDialog v-model="openProxy" type="default">
		<v-card class="transaction">
			<v-card-title>交易提醒</v-card-title>
			<v-card-text class="px-2 py-0">
				<v-col cols="12" class="px-0 text-center py-0 textSize">
					<div class="fill-height tg-bg-primary helpTxxt">
						<div class="pt-4">提醒您!截至目前为止免手续费优惠</div>
						<div class="overMask mt-2">
							<div class="mask">
								<img :style="[style]" src="~/assets/images/withdraw/toMask.svg" class="animate" />
							</div>
						</div>
						<div>剩余次数</div>
						<div><span class="bigText">2</span>次</div>
					</div>
					<div class="mt-2">起讫时间:06/01 00:00:00~06/30 23:59:59</div>

				</v-col>
			</v-card-text>
			<v-card-actions class="pb-8">
				<v-btn block class="btn-submit bg-primary py-4">确定</v-btn>
			</v-card-actions>
		</v-card>
	</TgDialog>
</template>
<script lang="ts" setup>import { Ref } from 'vue';

let style = ref({
	'-webkit-transform': 'rotate(-180deg)',
});
const props = defineProps<{
	open: boolean,
}>();
const emit = defineEmits<{
	(event: 'update:open', payload: boolean): void
}>();
const openProxy = computed({
	get: () => props.open,
	set: (val) => emit("update:open", val)
});
watch(props, (nv, ov) => {
	if (nv.open) {
		setTimeout(() => {
			style.value = { '-webkit-transform': 'rotate(-90deg)' }
		}, 300)
	} else {
		style.value = { '-webkit-transform': 'rotate(-180deg)' }
	}
})
</script>

<style lang="scss" scoped>
.btn-submit {
	height: 48px;
}

.transaction {
	.info {
		background: #eef4f8;
	}
}

.overMask {
	height: 135px;
}

.mask {
	width: 300px;
	height: 300px;
	-webkit-mask-image: url('@tg/web-mobile/assets/images/withdraw/mask.svg');
	mask-image: url('@tg/web-mobile/assets/images/withdraw/mask.svg');
	-webkit-mask-repeat: no-repeat;
	mask-repeat: no-repeat;
	background-image: url('@tg/web-mobile/assets/images/withdraw/mask.svg');


	img {
		width: 100%;
		height: 100%;

	}

	display: inline-block;
}

.animate {
	-webkit-transition: all 0.5s ease;
	-moz-transition: all 0.5s ease;
	transition: all 0.5s ease;
}

.helpTxxt {
	color: #fff;
}

.textSize {
	font-size: 0.9rem;
}

.bigText {
	font-size: 50px;
	font-weight: bold;
}
</style>

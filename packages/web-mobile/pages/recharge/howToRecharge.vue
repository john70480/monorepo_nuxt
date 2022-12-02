<template>
	<TgDialog v-model="openProxy" type="default">
		<v-card class="transaction">
			<v-card-title>充值教学</v-card-title>
			<div class="px-2">
				<v-col cols="12" class="px-0">
					<v-row no-gutters class="rechargeRow text-center">
						<v-col cols="3"><img src="~/assets/images/recharge/com_body_buyvirtual_money_ic.png" />数字货币<br>
							购买流程</v-col>
						<v-col cols="3"><img src="~/assets/images/recharge/com_body_savevirtual_money_ic.png" />数字货币<br>
							充值流程</v-col>
						<v-col cols="3"><img
								src="~/assets/images/recharge/com_body_officialvirtual_money_ic.png" />官方推荐<br>
							交易所</v-col>
						<v-col cols="3"><img src="~/assets/images/recharge/com_body_realtime_money_ic.png" />数字货币<br>
							实时汇率
							查询</v-col>
					</v-row>
				</v-col>
			</div>

		</v-card>
	</TgDialog>
</template>
<script lang="ts" setup>import { Ref } from 'vue';

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

</script>

<style lang="scss" scoped>
.rechargeRow {
	font-size: 0.8rem;

	img {
		width: 100%;
	}
}
</style>

<template>
	<div class="fill-height">
		<div class="rechargePage">
			<TgTabs v-model="tab">
				<v-tab v-for="(item, index) in items" :key="item" hide-slider>
					{{ item }}
				</v-tab>
			</TgTabs>
			<v-window v-model="tab">
				<v-window-item>
					<LazyTransferGameTransfer></LazyTransferGameTransfer>
				</v-window-item>
				<v-window-item>
					<LazyTransferMutual></LazyTransferMutual>
				</v-window-item>
			</v-window>
		</div>
		<TransferConfirmTransfer v-model:open="confirmTransfer"></TransferConfirmTransfer>
		<TransferComplete v-model:open="complete"></TransferComplete>
		<TransferConfirmContent v-model:open="confirmContent"></TransferConfirmContent>
	</div>

</template>
<script setup lang="ts">
const confirmTransfer = ref(false)//交易頁面
const complete = ref(false)//交易完成
const confirmContent = ref(false)//确认户转内容

definePageMeta({
	title: "转帐",
});
const tab = ref(0);
const items = ['游戏转帐', '会员互转']

</script>


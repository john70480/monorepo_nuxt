<template>
	<MyDialog v-model="dialogsStore.assetsOpen" type="classification" :dialogBind="{fullscreen:true}">
		<v-card class="container">
			<div class="content px-2">
				<div class="d-flex justify-space-between">
					<div class="d-flex mt-auto mb-auto">
						<span class="icon icon-wallet pr-2 mt-auto mb-auto"></span>
						<div class="text-body-2 text-blue--deep">總資產</div>
					</div>
				</div>
			</div>
			<div class="footer"></div>
		</v-card>
	</MyDialog>

</template>
<script lang="ts" setup>
import { ref, Ref } from 'vue';
import { useDialogs } from '@tg/web-mobile/stores/dialogs';
const dialogsStore = useDialogs();
type TotalWallet = {}


</script>
<style lang="scss" scoped>
$icon-list: (
	"wallet": "wallet.svg",
	"tgwallet": "tgwallet.svg",
	"lockwallet": "lockwallet.svg",
	"experiencewallet": "experiencewallet.svg",
);

@each $key,
$val in $icon-list {
	.icon-#{$key} {
		&::before {
			background: url('@tg/web-mobile/assets/images/my/icon_#{$val}') center no-repeat;
			background-size: cover;
		}
	}
}

.text-blue--deep {
	color: #283763;
}
</style>
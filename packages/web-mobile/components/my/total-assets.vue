<template>
	<TgDialog v-model="dialogsStore.assetsOpen" type="classification">
		<v-card class="container">
			<div class="content">
				<div class="block">
					<div class="d-flex px-2 justify-space-between">
						<div class="d-flex my-3">
							<span class="icon-my-size icon-wallet pr-2 mt-auto mb-auto"></span>
							<div class="text-body-2 text-blue--deep font-weight-black">总资产</div>
						</div>
						<div class="d-flex text-body-2 text-blue--deep my-2 font-weight-black align-center">
							888,888,888.00</div>
					</div>
					<v-divider class="mx-2"></v-divider>
				</div>
				<div class="block">
					<div class="d-flex px-2 justify-space-between">
						<div class="d-flex my-3">
							<span class="icon-my-size icon-tgwallet pr-2 mt-auto mb-auto"></span>
							<div class="text-body-2 text-blue--deep font-weight-black">TG钱包</div>
						</div>
						<div class="d-flex text-body-2 text-blue--deep my-2 font-weight-black align-center">
							888,888,888.00</div>
					</div>
					<v-divider class="mx-2"></v-divider>
				</div>
				<div class="block">
					<div class="d-flex px-2 justify-space-between">
						<div class="d-flex my-3" @click="handleDirection('/my/wallet-lock')">
							<span class="icon-my-size icon-lockwallet pr-2 mt-auto mb-auto"></span>
							<div class="text-body-2 text-blue--deep font-weight-black">锁定钱包</div>
						</div>
						<div class="d-flex text-body-2 text-blue--deep my-2 font-weight-black align-center">
							888,888,888.00</div>
					</div>
					<v-divider class="mx-2"></v-divider>
				</div>
				<div class="block">
					<div class="d-flex px-2 justify-space-between">
						<div class="d-flex my-3" @click="handleDirection('/my/wallet-experience')">
							<span class="icon-my-size icon-experiencewallet pr-2 mt-auto mb-auto"></span>
							<div class="text-body-2 text-blue--deep font-weight-black">体验金钱包</div>
						</div>
						<div class="d-flex text-body-2 text-blue--deep my-2 font-weight-black align-center">
							888,888,888.00</div>
					</div>
				</div>
			</div>

			<v-row class="footer py-2 mt-2 px-4">
				<TgItemImage :imgBind="{ src: sabaSportsLogo }" v-for="item  in 12">
					888,888,888.00
				</TgItemImage>
			</v-row>
		</v-card>
	</TgDialog>

</template>
<script lang="ts" setup>
import { ref, Ref } from 'vue';
import { useDialogs } from '@tg/web-mobile/stores/dialogs';
const router = useRouter();
const dialogsStore = useDialogs();
const footerClass: Ref<string> = ref('text-center text-white text-body-1 py-1');

function handleDirection(url: string): void {
	router.push(url);
}

const sabaSportsLogo = new URL('../../assets/images/my/icon_sabasports_logo.png', import.meta.url).href

</script>
<style lang="scss" scoped>
.container {
	background-color: #eef4f8;
}

.text-blue--deep {
	color: #283763;
}

.block {
	background-color: #FFF;

	:last-of-type {
		border-bottom: none;
	}

	:hover {
		width: 100vw;
		background-color: unset;
	}
}

.footer {
	background-color: #FFF;
	align-content: flex-start;
}
</style>
<template>
	<TgDialog v-model="dialogsStore.classificationOpen" type="classification">
		<div class="fill-height d-flex flex-column">
			<TgTabs v-model="platformTab">
				<v-tab v-for="(item, index) in platformList" :key="index" hide-slider :value="index">
					{{ item.title }}
				</v-tab>
			</TgTabs>
			<v-container class="px-0 pt-0 overflow-y-auto flex-1 classification-wrap">
				<TgCard v-for=" (item, index) in siteList?.categories" :key="index" :title="item.thirdPartyCategory || ''"
					class="classification-content">
					<v-row>
						<TgItemImage v-for="(list, index) in siteList?.platform?.[item.thirdPartyType]?.[item.thirdPartyCategory]"
							:key="index" :imgBind="{ src: platformMap?.[list.thirdPartyCode]?.banner }" contentClass="mx-1 pa-2"
							class="px-2 py-2">
							{{ list.thirdPartyName }}
						</TgItemImage>
					</v-row>
				</TgCard>
			</v-container>
		</div>
	</TgDialog>
</template>
<script lang="ts" setup>
import { platformList } from '@tg/web-mobile/pages/home/index.vue';
import { useHome, getSiteListMap } from '@tg/web-mobile/stores/home';

const dialogsStore = useDialogs();
const homeStore = useHome();
const platformTab = ref<keyof typeof platformList>('sports')
const siteList = await homeStore.getSiteList();
const { platformMap } = getSiteListMap();
</script>
<style lang="scss" scoped>
.classification-wrap {

	.classification-content:nth-child(odd) {
		background-color: #a0c3e5;
	}

	.classification-content:nth-child(even) {
		background-color: #ffffff;
	}

}
</style>
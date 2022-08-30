<template>
	<v-dialog v-model="dialogsStore.classificationOpen">
		<v-card>
			<slot name="header">
				<v-btn :block="true" color="green darken-1" text @click="dialogsStore.classificationOpen = false">
					{{ close }}
				</v-btn>
				<v-tabs v-model="platformTab">
					<v-tab v-for="(item, index) in platformList" :key="index" color="deep-orange">
						{{ item.title }}
					</v-tab>
				</v-tabs>
			</slot>

			<slot>
				<v-container>
					<v-card v-for="(item, index) in platformList" :key="index">
						<v-card-title>{{ item.title }}</v-card-title>
						<v-row>
							<v-col v-for="(list, index) in item.list" :key="index" :cols="6">
								<PlatformCard :title="list.title" :ImageSrc="list.imageSrc">
								</PlatformCard>
							</v-col>
						</v-row>
					</v-card>
				</v-container>
			</slot>
		</v-card>
	</v-dialog>
</template>
<script lang="ts" setup>
import { useDialogs } from '@tg/web-mobile/stores/dialogs';
import { platformList } from '@tg/web-mobile/pages/home/index.vue';
import SubTitle from '@tg/web-mobile/pages/home/sub-ttitle.vue';
import PlatformCard from './platform-card.vue';

const dialogsStore = useDialogs();
const platformTab = ref<keyof typeof platformList>('sports')
const close = dialogsStore.current?.closeText || "關閉"
</script>

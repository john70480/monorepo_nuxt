<template>
	<div class="fill-height">
		<div class="rechargeProp">
			<TgTabs v-model="showTab">
				<v-tab v-for="(item, index) in items" :key="item" hide-slider>
					{{ item }}
				</v-tab>

			</TgTabs>

			<v-window v-model="showTab">
				<!-- 九宮格 -->
				<v-window-item>
					<AnnouncementSystem />
				</v-window-item>
				<v-window-item>
					<AnnouncementPersonal />
				</v-window-item>
				<v-window-item>
					<AnnouncementWechat />
				</v-window-item>
			</v-window>
		</div>


	</div>

</template>
<script setup lang="ts">
definePageMeta({
	title: "公告",
});

const items = ['系统', '个人', '微商']

const showTab = ref(0)

</script>
<style lang="scss" scoped>
.rechargeProp {
	min-height: 100%;
	background-image: linear-gradient(45deg, #718db7, #527299);
	padding-bottom: 24px;
	box-sizing: border-box;
}
</style>

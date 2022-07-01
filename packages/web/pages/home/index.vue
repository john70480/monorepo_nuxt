<template>
	<div class="wrap">
		<label>
			user
			<input v-model="username" />
		</label>
		<label>
			password
			<input v-model="password" />
		</label>
		<label>
			lastFour
			<input v-model="lastFour" />
		</label>
		<button @click="submit()">送出</button>
		<button @click="getSiteList()">getSiteList</button>
	</div>
	<pre>
		<code>		
			{{ data }}
			{{ session }}
      {{ siteList }}
		</code>
	</pre>

</template>
<script setup lang="ts">
import { usePlatform } from '@tg/stores/src/platform';
import { useSession } from '@tg/stores/src/session';
import { useNuxtApp } from '#app'
import { definePageMeta, ref } from '#imports';

const api = useNuxtApp().$api()
const platform = usePlatform();
const session = useSession();
definePageMeta({
	layout: "custom",
});
const data = ref<ReturnType<typeof api.tg.postApiMembersLogin>>();
const username = ref<string>();
const password = ref<string>();
const lastFour = ref<string>();
const count = ref(0);
const siteList = ref<ReturnType<typeof api.tg.getApiIntegrationNoticeSiteList>>()

async function submit() {
	count.value++;
	const formData = {
		username: username.value,
		password: password.value,
		lastFour: lastFour.value,
	};
	await platform.getIp();

	data.value = await api.tg.postApiMembersLogin({
		// platform: 'Web_1.0',
		// uuid: platform.uuid,
		// deviceInfo: platform.deviceInfo,
		// vga: platform.vga,
		// ...api.headers,
		ip: platform.ip,
		formData,
	});

	const { Message, StatusCode, Payload } = data.value;

	session.login(Payload.token);
	console.log('postApiMembersLogin', data.value, Message, StatusCode, Payload);
}
async function getSiteList() {

	siteList.value = await api.tg.getApiIntegrationNoticeSiteList({
		// ...api.headers
	})
	console.log('getApiIntegrationNoticeSiteList', siteList.value);
}
</script>
<style>
.wrap {
	display: flex;
	flex-direction: column;
	gap: 10px;
}

button {
	width: 80px;
}
</style>

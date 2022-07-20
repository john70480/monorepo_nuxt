<template>
	<div class="wrap">
		<label>
			user
			<input v-model="userName" />
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
		<pre>
		<code>	
			{{ data }}
			{{ session.user }}
		</code>
	</pre>
	</div>
</template>
<script setup lang="ts">
import { Base64 } from 'js-base64';
import { usePlatform } from '@tg/stores/platform';
import { useSession } from '@tg/stores/session';
import { useNuxtApp } from '#app'
import { definePageMeta, ref } from '#imports';

const api = useNuxtApp().$api()
const platform = usePlatform();
const session = useSession();
definePageMeta({
	layout: "custom",
});
const data = ref<ReturnType<typeof api.tg.postApiMembersLogin>>();
const userName = ref<string>();
const password = ref<string>();
const lastFour = ref<string>();

async function submit() {
	const formData = {
		username: userName.value,
		password: password.value,
		lastFour: lastFour.value,
	};

	data.value = await api.tg.postApiMembersLogin({
		ip: platform.ip,
		formData,
	});

	const { Message, StatusCode, Payload } = data.value;
	const { id, username, userid, token } = Payload
	const json = JSON.stringify({
		ticket: id,
		username,
		userid,
		token,
	})
	const userInfo = Base64.encode(json)
	session.login(userInfo);
	console.log('postApiMembersLogin', data.value, Message, StatusCode, Payload);
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

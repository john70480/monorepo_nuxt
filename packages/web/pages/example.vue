<template>
	<h5>useAsyncData使用</h5>
	<button @click="count++">
		{{ pending ? "loading" : "刷新" }}
	</button>
	<span> </span>
	<pre>
		<code>	
			{{ pending }}
      {{ siteList }}
		</code>
	</pre>

</template>
<script setup lang="ts">
const api = useNuxtApp().$api()

definePageMeta({
	layout: "custom",
});
const count = ref(0);
// useAsyncData 使用範例
const { data: siteList, pending } = await useAsyncData('siteList',
	() => api.tg.getApiIntegrationNoticeSiteList({}),
	{
		transform: (data) => {
			console.log('input', data);
			data.payload
			return data;
		},
		watch: [count]
	}
);
</script>

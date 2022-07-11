<template>
	<div>
		<Header></Header>
		<slot />
		<Footer></Footer>
	</div>
</template>
<script setup lang="ts">
import Header from "@tg/web-mobile/components/header/index.vue";
import Footer from "@tg/web-mobile/components/footer/index.vue";
</script>
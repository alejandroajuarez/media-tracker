<script>
	import axios from "axios";
	import Header from "./components/Header.vue";
	import Content from "./components/Content.vue";
	import Footer from "./components/Footer.vue";

	axios.defaults.baseURL = "http://localhost:5000";
	axios.defaults.withCredentials = true;

	export default {
		name: "app",
		components: {
			Header,
			Content,
			Footer,
		},
	};
</script>

<template>
	<div class="min-h-screen bg-gray-900 text-gray-100 flex flex-col">
		<Header />
		<main class="flex-grow px-4 sm:px-8 lg:px-40">
			<RouterView />
		</main>
		<Footer />
	</div>
</template>

<style></style>

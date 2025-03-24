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
	<div class="min-h-screen flex flex-col">
		<Header />

		<!-- Main content should grow to fill remaining space -->
		<main class="flex-grow">
			<RouterView />
		</main>

		<Footer />
	</div>
</template>

<style></style>

<script>
	import axios from "axios";
	import MediaIndex from "./MediaIndex.vue";

	export default {
		components: {
			MediaIndex,
		},
		data: function () {
			return {
				media: [],
			};
		},
		created: function () {
			this.handleIndexMedia();
		},
		methods: {
			handleIndexMedia: function () {
				axios.get("http://localhost:5000/media.json").then((response) => {
					console.log("Media index", response);
					this.media = response.data;
				});
			},
		},
	};
</script>

<template>
	<main>
		<MediaIndex v-bind:media="media" />
	</main>
</template>

<style></style>

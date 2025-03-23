<script>
	import axios from "axios";
	import MediaIndex from "./MediaIndex.vue";
	import MediaNew from "./MediaNew.vue";

	export default {
		components: {
			MediaIndex,
			MediaNew,
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
			handleCreateMedia: function (params) {
				axios
					.post("http://localhost:5000/media.json", params)
					.then((response) => {
						console.log("Media create", response);
						this.media.push(response.data);
					});
			},
			handleUpdateMedia: function (params) {
				axios
					.put("http://localhost:5000/media/" + params.id + ".json", params)
					.then((response) => {
						console.log("Media updated", response);
						this.handleIndexMedia();
					});
			},
		},
	};
</script>

<template>
	<main>
		<MediaNew v-on:createMedia="handleCreateMedia" />
		<MediaIndex v-bind:media="media" />
	</main>
</template>

<style></style>

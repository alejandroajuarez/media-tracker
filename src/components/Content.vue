<script>
	import axios from "axios";
	import MediaIndex from "./MediaIndex.vue";
	import MediaNew from "./MediaNew.vue";
	import MediaShow from "./MediaShow.vue";
	import Modal from "./Modal.vue";

	export default {
		components: {
			MediaIndex,
			MediaNew,
			MediaShow,
			Modal,
		},
		data: function () {
			return {
				media: [],
				currentMedia: {},
				isMediaShowVisible: false,
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
			handleShowMedia: function (media) {
				console.log("handleShowMedia", media);
				this.currentMedia = media;
				this.isMediaShowVisible = true;
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
			handleClose: function () {
				this.isMediaShowVisible = false;
			},
		},
	};
</script>

<template>
	<main>
		<MediaNew v-on:createMedia="handleCreateMedia" />
		<MediaIndex v-bind:media="media" v-on:showMedia="handleShowMedia" />
		<Modal v-bind:show="isMediaShowVisible" v-on:close="handleClose">
			<MediaShow v-bind:media="currentMedia" />
		</Modal>
	</main>
</template>

<style></style>

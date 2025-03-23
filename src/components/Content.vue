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
			handleUpdateMedia: function (id, params) {
				console.log("handleUpdateMedia", id, params);
				axios
					.patch(`/media/${id}.json`, params)
					.then((response) => {
						console.log("Media updated", response);
						this.media = this.media.map((m) => {
							if (m.id === response.data.id) {
								return response.data;
							} else {
								return m;
							}
						});
						this.handleClose();
					})
					.catch((error) => {
						console.log(
							"There was an error updating the media!",
							error.response
						);
					});
			},
			handleDestroyMedia: function (media) {
				axios.delete(`/media/${media.id}.json`).then((response) => {
					console.log("Vault Entry was Destroyed", response);
					var index = this.media.indexOf(media);
					this.media.splice(index, 1);
					this.handleClose();
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
			<MediaShow
				v-bind:media="currentMedia"
				v-on:updateMedia="handleUpdateMedia"
				v-on:destroyMedia="handleDestroyMedia"
			/>
		</Modal>
	</main>
</template>

<style></style>

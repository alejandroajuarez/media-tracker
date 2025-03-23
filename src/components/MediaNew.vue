<script>
	export default {
		data: function () {
			return {
				newMediaParams: {},
			};
		},
		methods: {
			handleCreateMedia: function () {
				this.$emit("createMedia", this.newMediaParams);
				this.newMediaParams = {};
			},
		},
	};
</script>

<template>
	<div>
		<h1>New Vault Entry</h1>
		<form v-on:submit.prevent="handleCreateMedia">
			<div>
				Title:
				<input v-model="newMediaParams.title" type="text" />
			</div>
			<div>
				Type:
				<input v-model="newMediaParams.type" type="text" />
			</div>
			<div>
				Status:
				<input v-model="newMediaParams.status" type="text" />
			</div>
			<div>
				Notes:
				<input v-model="newMediaParams.notes" type="text" />
			</div>
			<div>
				Entry Image:
				<input v-model="newMediaParams.cover_image" type="text" />
			</div>
			<div>
				Rating:
				<input v-model="newMediaParams.rating" type="text" />
			</div>
			<button type="submit">Create Vault Entry</button>
		</form>
	</div>
</template>

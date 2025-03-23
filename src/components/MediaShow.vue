<script>
	export default {
		props: {
			media: Object,
		},
		data: function () {
			return {
				editMediaParams: {},
			};
		},
		created: function () {
			this.editMediaParams = { ...this.media };
		},
		methods: {
			handleSubmit: function () {
				this.$emit("updateMedia", this.media.id, this.editMediaParams);
			},
		},
	};
</script>

<template>
	<div>
		<h2>Vault Entry Information</h2>
		<p>Title: {{ media.title }}</p>
		<img v-bind:src="media.cover_image" class="cover_image" />
		<p>Type: {{ media.type }}</p>
		<p>Status: {{ media.status }}</p>
		<p>Notes: {{ media.notes }}</p>
		<p>Rating: {{ media.rating }}</p>
		<form v-on:submit.prevent="handleSubmit">
			<div>
				Title:
				<input v-model="editMediaParams.title" type="text" />
			</div>
			<div>
				Cover Image:
				<input v-model="editMediaParams.cover_image" type="text" />
			</div>
			<div>
				Type:
				<input v-model="editMediaParams.type" type="text" />
			</div>
			<div>
				Status:
				<input v-model="editMediaParams.status" type="text" />
			</div>
			<div>
				Notes:
				<input v-model="editMediaParams.notes" type="text" />
			</div>
			<div>
				Rating:
				<input v-model="editMediaParams.rating" type="text" />
			</div>
			<button type="submit">Update Vault Entry</button>
		</form>
		<button v-on:click="$emit('destroyMedia', media)">Destroy</button>
	</div>
</template>

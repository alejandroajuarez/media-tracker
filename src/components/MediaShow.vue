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
				Cover Image URL:
				<input v-model="editMediaParams.cover_image" type="text" />
			</div>
			<div>
				Type:
				<select v-model="editMediaParams.type">
					<option value="Book">Book</option>
					<option value="Movie">Movie</option>
					<option value="TV Show">TV Show</option>
				</select>
			</div>
			<div>
				Status:
				<select v-model="editMediaParams.status">
					<option value="Saved">Vaulted for Later</option>
					<option value="In Progress">Unlocking</option>
					<option value="Completed">Archived</option>
				</select>
			</div>
			<div>
				Notes:
				<input v-model="editMediaParams.notes" type="text" />
			</div>
			<div>
				Rating:
				<select v-model="editMediaParams.rating">
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
				</select>
			</div>
			<button type="submit">Update Vault Entry</button>
		</form>
		<button v-on:click="$emit('destroyMedia', media)">Destroy</button>
	</div>
</template>

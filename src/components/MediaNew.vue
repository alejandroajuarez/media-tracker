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
				<select v-model="newMediaParams.type">
					<option value="Book">Book</option>
					<option value="Movie">Movie</option>
					<option value="TV Show">TV Show</option>
				</select>
			</div>
			<div>
				Status:
				<select v-model="newMediaParams.status">
					<option value="Saved">Vaulted for Later</option>
					<option value="In Progress">Unlocking</option>
					<option value="Completed">Archived</option>
				</select>
			</div>
			<div>
				Notes:
				<input v-model="newMediaParams.notes" type="text" />
			</div>
			<div>
				Entry Image URL:
				<input v-model="newMediaParams.cover_image" type="text" />
			</div>
			<div>
				Rating:
				<select v-model="newMediaParams.rating">
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
				</select>
			</div>
			<button type="submit">Create Vault Entry</button>
		</form>
	</div>
</template>

<script>
	import StarRating from "./StarRating.vue";

	export default {
		props: {
			media: Object,
		},
		components: {
			StarRating,
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
	<div class="bg-gray-800 text-gray-100 rounded-xl shadow-md p-6 space-y-6">
		<h2 class="text-2xl font-bold text-indigo-400 mb-4">
			Vault Entry Information
		</h2>

		<div class="text-center">
			<p class="text-xl font-semibold mb-2">{{ media.title }}</p>
			<img
				:src="media.cover_image"
				class="w-[150px] h-[225px] object-cover rounded mb-4 mx-auto"
			/>
		</div>

		<div class="space-y-1 text-sm text-gray-400">
			<p><strong>Type:</strong> {{ media.type }}</p>
			<p><strong>Status:</strong> {{ media.status }}</p>
			<p><strong>Notes:</strong> {{ media.notes }}</p>
			<p><strong>Rating:</strong> {{ media.rating ?? "N/A" }}</p>
		</div>

		<form v-on:submit.prevent="handleSubmit" class="space-y-4 mt-6">
			<div>
				<label class="block text-sm mb-1">Title:</label>
				<input
					v-model="editMediaParams.title"
					type="text"
					class="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-gray-100"
				/>
			</div>

			<div>
				<label class="block text-sm mb-1">Cover Image URL:</label>
				<input
					v-model="editMediaParams.cover_image"
					type="text"
					class="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-gray-100"
				/>
			</div>

			<div>
				<label class="block text-sm mb-1">Type:</label>
				<select
					v-model="editMediaParams.type"
					class="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-gray-100"
				>
					<option value="Book">Book</option>
					<option value="Movie">Movie</option>
					<option value="TV Show">TV Show</option>
				</select>
			</div>

			<div>
				<label class="block text-sm mb-1">Status:</label>
				<select
					v-model="editMediaParams.status"
					class="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-gray-100"
				>
					<option value="Saved">Vaulted for Later</option>
					<option value="In Progress">Unlocking</option>
					<option value="Completed">Archived</option>
				</select>
			</div>

			<div>
				<label class="block text-sm mb-1">Notes:</label>
				<input
					v-model="editMediaParams.notes"
					type="text"
					class="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-gray-100"
				/>
			</div>

			<div>
				<label class="block text-sm mb-1">Rating:</label>
				<StarRating v-model="editMediaParams.rating" />
			</div>

			<div class="flex justify-between items-center pt-4">
				<button
					type="submit"
					class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-semibold"
				>
					Update Vault Entry
				</button>

				<button
					v-on:click="$emit('destroyMedia', media)"
					class="text-red-500 hover:text-red-400 font-semibold text-sm"
				>
					Destroy
				</button>
			</div>
		</form>
	</div>
</template>

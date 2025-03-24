<script>
	import axios from "axios";
	import StarRating from "./StarRating.vue";

	export default {
		components: {
			StarRating,
		},
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
	<div
		class="max-w-2xl mx-auto p-6 bg-gray-800 text-gray-100 rounded-xl shadow-md mt-6"
	>
		<h1 class="text-2xl font-bold text-indigo-400 mb-6 text-center">
			New Vault Entry
		</h1>

		<form v-on:submit.prevent="handleCreateMedia" class="space-y-4">
			<div>
				<label class="block text-sm mb-1">Title:</label>
				<input
					v-model="newMediaParams.title"
					type="text"
					class="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-gray-100"
				/>
			</div>

			<div>
				<label class="block text-sm mb-1">Type:</label>
				<select
					v-model="newMediaParams.type"
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
					v-model="newMediaParams.status"
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
					v-model="newMediaParams.notes"
					type="text"
					class="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-gray-100"
				/>
			</div>

			<div>
				<label class="block text-sm mb-1">Entry Image URL:</label>
				<input
					v-model="newMediaParams.cover_image"
					type="text"
					class="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-gray-100"
				/>
			</div>

			<div>
				<label class="block text-sm mb-1">Rating:</label>
				<StarRating v-model="newMediaParams.rating" />
			</div>

			<button
				type="submit"
				class="mt-4 w-full bg-amber-500 hover:bg-amber-400 text-gray-900 font-semibold py-2 px-4 rounded"
			>
				Create Vault Entry
			</button>
		</form>
	</div>
</template>

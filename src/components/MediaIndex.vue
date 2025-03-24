<script>
	export default {
		props: {
			media: Array,
		},
		computed: {
			unlocking() {
				return this.media.filter((m) => m.status === "In-Progress");
			},
			vaulted() {
				return this.media.filter((m) => m.status === "Saved");
			},
			archived() {
				return this.media.filter((m) => m.status === "Completed");
			},
		},
	};
</script>

<template>
	<div class="p-4 bg-gray-900 text-gray-100 min-h-screen">
		<h1 class="text-3xl font-bold mb-6 text-center text-indigo-400">
			The Media Vault
		</h1>

		<!-- 🔓 Unlocking -->
		<h2 class="text-2xl font-semibold mb-2 text-blue-400">🔓 In Progress</h2>
		<div v-if="unlocking.length > 0" class="flex gap-4 overflow-x-auto pb-4">
			<div
				v-for="m in unlocking"
				:key="m.id"
				class="min-w-[300px] p-4 bg-gray-800 border border-gray-700 rounded-xl shadow-md text-center"
			>
				<h3 class="font-semibold text-lg mb-2">{{ m.title }}</h3>
				<img
					:src="m.cover_image"
					class="w-[150px] h-[225px] object-cover rounded mb-2 mx-auto"
				/>
				<p class="text-gray-400"><strong>Type:</strong> {{ m.type }}</p>
				<p class="text-blue-400"><strong>Status:</strong> {{ m.status }}</p>
				<p class="text-gray-400"><strong>Notes:</strong> {{ m.notes }}</p>
				<p><strong>Rating:</strong> {{ m.rating ?? "N/A" }}</p>
				<button
					@click="$emit('showMedia', m)"
					class="mt-2 px-3 py-1 bg-blue-500 text-white rounded hover:brightness-110"
				>
					Show
				</button>
			</div>
		</div>
		<p v-else class="text-gray-400 mb-6">No media currently in progress.</p>

		<!-- 📥 Vaulted -->
		<h2 class="text-2xl font-semibold mb-2 text-yellow-400">📥 Vaulted</h2>
		<div v-if="vaulted.length > 0" class="flex gap-4 overflow-x-auto pb-4">
			<div
				v-for="m in vaulted"
				:key="m.id"
				class="min-w-[200px] p-4 bg-gray-800 border border-gray-700 rounded-xl shadow-md text-center"
			>
				<h3 class="font-semibold text-lg mb-2">{{ m.title }}</h3>
				<img
					:src="m.cover_image"
					class="w-[150px] h-[225px] object-cover rounded mb-2 mx-auto"
				/>
				<p class="text-gray-400"><strong>Type:</strong> {{ m.type }}</p>
				<p class="text-yellow-400"><strong>Status:</strong> {{ m.status }}</p>
				<p class="text-gray-400"><strong>Notes:</strong> {{ m.notes }}</p>
				<p><strong>Rating:</strong> {{ m.rating ?? "N/A" }}</p>
				<button
					@click="$emit('showMedia', m)"
					class="mt-2 px-3 py-1 bg-yellow-500 text-white rounded hover:brightness-110"
				>
					Show
				</button>
			</div>
		</div>
		<p v-else class="text-gray-400 mb-6">No media saved for later.</p>

		<!-- 🗃️ Archived -->
		<h2 class="text-2xl font-semibold mb-2 text-emerald-400">🗃️ Archived</h2>
		<div v-if="archived.length > 0" class="flex gap-4 overflow-x-auto pb-4">
			<div
				v-for="m in archived"
				:key="m.id"
				class="min-w-[200px] p-4 bg-gray-800 border border-gray-700 rounded-xl shadow-md text-center"
			>
				<h3 class="font-semibold text-lg mb-2">{{ m.title }}</h3>
				<img
					:src="m.cover_image"
					class="w-[150px] h-[225px] object-cover rounded mb-2 mx-auto"
				/>
				<p class="text-gray-400"><strong>Type:</strong> {{ m.type }}</p>
				<p class="text-emerald-400"><strong>Status:</strong> {{ m.status }}</p>
				<p class="text-gray-400"><strong>Notes:</strong> {{ m.notes }}</p>
				<p><strong>Rating:</strong> {{ m.rating ?? "N/A" }}</p>
				<button
					@click="$emit('showMedia', m)"
					class="mt-2 px-3 py-1 bg-emerald-500 text-white rounded hover:brightness-110"
				>
					Show
				</button>
			</div>
		</div>
		<p v-else class="text-gray-400">No media has been completed yet.</p>
	</div>
</template>

<style>
	/* Tailwind is taking care of CSS for this page so this isn't being used at the moment */
</style>

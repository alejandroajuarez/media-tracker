<script>
	export default {
		props: {
			media: Array,
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
	</div>
</template>

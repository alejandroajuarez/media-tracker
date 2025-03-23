<script>
	export default {
		props: {
			media: Array,
		},
	};
</script>

<template>
	<div>
		<h1>The Media Vault</h1>
		<div v-for="medias in media" v-bind:key="media.id">
			<h2>{{ medias.title }}</h2>
			<p>{{ medias.id }}</p>
			<p>{{ medias.type }}</p>
			<p>{{ medias.status }}</p>
			<p>{{ medias.notes }}</p>
			<img v-bind:src="medias.cover_image" class="cover_image" />
			<p>{{ medias.rating }}</p>
		</div>
	</div>
</template>

<style></style>

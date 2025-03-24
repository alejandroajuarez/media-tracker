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
		<div v-for="m in media" v-bind:key="media.id">
			<h2>{{ m.title }}</h2>
			<img v-bind:src="m.cover_image" class="cover_image" />
			<p>{{ m.id }}</p>
			<p>{{ m.type }}</p>
			<p>{{ m.status }}</p>
			<p>{{ m.notes }}</p>
			<p>{{ m.rating }}</p>
			<button v-on:click="$emit('showMedia', m)">Show</button>
		</div>
	</div>
</template>

<style></style>

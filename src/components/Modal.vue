<script>
	export default {
		props: {
			show: Boolean,
		},
	};
</script>

<template>
	<div v-if="show" class="modal-background">
		<section class="modal-main">
			<slot></slot>
			<button class="close" type="button" v-on:click="$emit('close')">
				&#x2715;
			</button>
		</section>
	</div>
</template>

<style>
	.modal-main button.close {
		font-size: 2em;
		background: none;
		border: none;
		position: absolute;
		top: 0em;
		right: 0.2em;
	}
</style>

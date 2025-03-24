<template>
	<div class="flex items-center space-x-1">
		<button
			v-for="star in 5"
			:key="star"
			type="button"
			v-on:click="updateRating(star)"
			v-on:mouseover="hover = star"
			v-on:mouseleave="hover = 0"
			class="text-5xl"
		>
			<span
				v-bind:class="
					(hover || modelValue) >= star ? 'text-amber-400' : 'text-gray-500'
				"
			>
				★
			</span>
		</button>
	</div>
</template>

<script>
	export default {
		props: {
			modelValue: Number,
		},
		data() {
			return {
				hover: 0,
			};
		},
		methods: {
			updateRating(star) {
				this.$emit("update:modelValue", star);
			},
		},
	};
</script>

<script></script>

<template>
	<header class="bg-gray-800 text-gray-100 border-b border-gray-700 shadow-md">
		<nav class="flex justify-between items-center max-w-7xl mx-auto px-6 py-4">
			<!-- App Logo / Name -->
			<h1 class="text-xl font-bold text-indigo-400 tracking-widest">
				<RouterLink
					to="/media"
					class="px-3 py-1 rounded hover:bg-gray-700 hover:text-indigo-400 transition"
				>
					MEDIA VAULT
				</RouterLink>
			</h1>

			<!-- Navigation Links -->
			<div class="flex gap-4 text-sm sm:text-base">
				<RouterLink
					to="/media/new"
					class="px-3 py-1 rounded text-amber-400 hover:bg-gray-700 hover:text-amber-300 transition"
				>
					New Vault Entry
				</RouterLink>
			</div>
		</nav>
	</header>
</template>

<style></style>

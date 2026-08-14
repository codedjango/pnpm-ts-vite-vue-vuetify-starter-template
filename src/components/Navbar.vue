<script setup lang="ts">
import { useUiStore } from '@/stores/ui'

const ui = useUiStore()
</script>

<template>
	<v-app-bar
		app
		color="red-lighten-1"
		title="App bar"
	>
		<template #prepend>
			<v-app-bar-nav-icon
				class="d-md-none"
				icon="mdi-menu"
				@click="ui.toggleDrawer()"
			/>
		</template>

		<v-spacer class="d-none d-md-flex" />

		<template #append>
			<div class="d-none d-md-flex align-center">
				<router-link
					class="px-2 text-white"
					:to="{ name: 'home' }"
				>
					Home
				</router-link>
				<router-link
					class="px-2 text-white"
					:to="{ name: 'about' }"
				>
					About
				</router-link>
			</div>
		</template>
	</v-app-bar>
</template>

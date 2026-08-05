<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
</script>

<template>
	<v-app>
		<v-navigation-drawer>
			<v-list>
				<v-list-item title="Navigation drawer"></v-list-item>
			</v-list>
		</v-navigation-drawer>

		<v-app-bar title="App bar"></v-app-bar>

		<v-main class="bg-grey-lighten-3">
			<v-container
				class="fill-height"
				fluid
			>
				<v-responsive
					class="rounded border bg-white"
					height="100%"
				>
					<div class="px-4">
						<hello-world />
					</div>
				</v-responsive>
			</v-container>
		</v-main>
	</v-app>
</template>

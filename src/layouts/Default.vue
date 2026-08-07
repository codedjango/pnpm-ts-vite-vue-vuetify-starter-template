<script setup>
import Footer from '@/components/Footer.vue'
import LeftSidebar from '@/components/LeftSidebar.vue'
import Navbar from '@/components/Navbar.vue'
import RightSidebar from '@/components/RightSidebar.vue'
import { useUiStore } from '@/stores/ui'

const ui = useUiStore()
</script>

<template>
	<v-app class="bg-transparent">
		<Navbar />

		<v-navigation-drawer
			v-model="ui.drawer"
			temporary
			class="d-md-none"
		>
			<LeftSidebar />
			<RightSidebar />
		</v-navigation-drawer>

		<v-main class="d-flex flex-column">
			<div class="d-flex flex-column flex-md-row w-100 flex-grow-1">
				<LeftSidebar class="d-none d-md-block" />
				<div class="bg-blue-grey-lighten-2 pa-4 order-1 flex-grow-1">
					<h1>Page Content</h1>
					<router-view />
				</div>
				<RightSidebar class="d-none d-md-block" />
			</div>

			<Footer />
		</v-main>
	</v-app>
</template>

<style scoped></style>

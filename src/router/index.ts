import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'default',
		component: () => import('@/layouts/Default.vue'),
		children: [
			{
				path: '',
				name: 'home',
				component: () => import('@/pages/Home.vue'),
			},
			{
				path: 'about',
				name: 'about',
				component: () => import('@/pages/About.vue'),
			},
		],
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'not-found',
		component: () => import('@/pages/NotFound.vue'),
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior(_to, _from, _savedPosition) {
		return new Promise((resolve, _reject) => {
			setTimeout(() => {
				resolve({ left: 0, top: 0, behavior: 'smooth' })
			}, 100)
		})
	},
})

export default router

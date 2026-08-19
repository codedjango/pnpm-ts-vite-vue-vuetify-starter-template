import path from 'path'

import vue from '@vitejs/plugin-vue'
import ViteFonts from 'unplugin-fonts/vite'
import { defineConfig } from 'vite'
import VueDevTools from 'vite-plugin-vue-devtools'
import vuetify from 'vite-plugin-vuetify'

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		vuetify({ autoImport: true }),
		VueDevTools(),
		ViteFonts({
			fontsource: {
				families: [
					{
						name: 'Roboto',
						weights: [100, 300, 400, 500, 700, 900],
						styles: ['normal', 'italic'],
					},
				],
			},
		}),
	],
	resolve: {
		alias: {
			'@': path.resolve(import.meta.dirname, './src'),
		},
		tsconfigPaths: true,
	},
	// server: {
	// 	proxy: {
	// 		'/api': {
	// 			target: 'http://127.0.0.1:8000',
	// 			changeOrigin: true,
	// 			// rewrite: (r) => r.replace(/^\/api/, ''),
	// 			headers: {
	// 				Accept: 'application/json',
	// 				'Content-Type': 'application/json',
	// 			},
	// 		},
	// 	},
	// },
})

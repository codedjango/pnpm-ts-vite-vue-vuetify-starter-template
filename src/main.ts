import { createPinia } from 'pinia'

import '@mdi/font/css/materialdesignicons.css'

import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import App from '@/App.vue'
import router from '@/router'

import 'unfonts.css'
import 'vuetify/styles'

const vuetify = createVuetify({
	components,
	directives,
})

createApp(App).use(vuetify).use(createPinia()).use(router).mount('#app')

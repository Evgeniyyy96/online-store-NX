import { defineNuxtConfig } from 'nuxt'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    meta: {
        link: [
            {
                rel: 'stylesheet',
                href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css'
            }
        ],
        script: [
            {
               src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js'
            }
        ]
    },
    components: {
        global: true,
        dirs: ['~/components']
    },
    css: ['vuetify/lib/styles/main.sass'],
    build: {
        transpile: ['vuetify'],
    },

})

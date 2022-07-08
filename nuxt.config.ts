import { defineNuxtConfig } from 'nuxt'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    meta: {
        link: [
            {
                rel: 'stylesheet',
                href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css'
            },
            {
                rel: 'stylesheet',
                href: 'https://db.onlinewebfonts.com/c/b7b4038ef6eda894206267b3c57fc1eb?family=Sabon+LT+W01',
                media: 'print',
                onload: 'this.media=\'all\'',
                crossorigin: true
            }
        ],
        script: [
            {
               src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js'
            }
        ]
    },
    css: [
        '@/assets/style/base.scss',
        'vuetify/lib/styles/main.sass'
    ],
    components: {
        global: true,
        dirs: ['~/components']
    },
    build: {
        transpile: ['vuetify'],
    },

})

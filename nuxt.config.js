export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'vuejs-blog',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        '@nuxtjs/fontawesome'
    ],

    fontawesome: {
        component: 'fa',
        icons: {
            solid: true,
            brands: true
        }
    },

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/bootstrap
        'bootstrap-vue/nuxt',
        '@nuxtjs/axios'
    ],
    axios: {
        // proxy: true
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
    router: {
        routes: [{
                name: 'posts-id',
                path: 'blogs/posts/:id?',
                component: 'pages/posts/_id.vue'
            },
            {
                name: 'list',
                path: '/blogs/list',
                component: 'pages/blogs/list.vue'
            },
            {
                name: 'new',
                path: '/blogs/new',
                component: 'pages/blogs/new.vue'
            },
            {
                name: 'search',
                path: '/blogs/search',
                component: 'pages/blogs/search.vue'
            },
            {
                name: 'index',
                path: '/',
                component: 'pages/blogs/index.vue'
            }
        ]
    }
}
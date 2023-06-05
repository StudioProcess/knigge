export default {
  ssr: false,
  target: 'static',
  head: {
    title: 'Knigge – Chatten über’s Reden',
    htmlAttrs: {
      lang: 'de'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Knigge ist ein Chatbot, programmiert, um über\'s Reden zu chatten. Die Gespräche mit ihm lassen ein kommunikatives Gesamtkunstwerk entstehen.' },
      { hid: 'og:title', name: 'og:title', content: 'Knigge – Chatten über’s Reden' },
      { hid: 'og:description', name: 'og:description', content: 'Knigge ist ein Chatbot, programmiert, um über\'s Reden zu chatten. Die Gespräche mit ihm lassen ein kommunikatives Gesamtkunstwerk entstehen.' },
      { hid: 'og:image', name: 'og:image', content: (process.env.URL || 'http://localhost:3000') + '/knigge_card_fb.jpg' },
      { hid: 'og:locale', name: 'og:locale', content: 'de_AT' },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      { hid: 'og:url', name: 'og:url', content: process.env.URL || 'http://localhost:3000' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'Knigge – Chatten über’s Reden' },
      { hid: 'twitter:image', name: 'twitter:image', content: (process.env.URL || 'http://localhost:3000') + '/knigge_card_twitter.png' },
      { hid: 'theme-color', name: 'theme-color', content: '#000000' },
      { hid: 'robots', name: 'robots', content: 'noindex,nofollow' }
    ],
    link: [
      { rel: 'icon', href: '/favicon.png' },
      { rel: 'apple-touch-icon', href: '/favicon.png' }
    ]
  },
  css: [
    '@/assets/scss/main'
  ],
  plugins: [
    '~/plugins/vue-cookie.js',
    '~/plugins/eliza.js'
  ],
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module'
  ],
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios'
  ],
  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false
  },
  axios: {},
  build: {
  },
  env: {
    apiUrl: process.env.API_URL || 'http://localhost:8010/proxy',
    elizaScript: 'scripts/knigge.mjs'
  },
  router: {
    base: process.env.BASE_URL || '/'
  },
  loading: false,
  telemetry: false,
}

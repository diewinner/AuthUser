export default {
  ssr: false,

  head: {
    title: 'test_task_auth',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ]
  },

  css: [ '~/assets/style/main.css'
  ],
  router: {
    middleware:'auth',
  },
  plugins: [{src: '~/plugins/axios', mode: 'client'}],


  components: true,

  buildModules: [
  ],

  modules: ['cookie-universal-nuxt','@nuxtjs/axios'],

  build: {
  }
}

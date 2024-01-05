// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: "StreamIt | Films, séries, animés",

      htmlAttrs: {
        lang: 'fr'
      },

      meta: [
        {name: 'description', content: "SreamIt est une application web de visionnage de films, séries ou animés"}
      ],

      link: [
        {rel: 'icon', type: 'image/png', href: '/Logo.png' },
        { rel: 'stylesheet', href: 'https://unicons.iconscout.com/release/v4.0.8/css/line.css'}
      ],

      script: [
        { src: "https://kit.fontawesome.com/4ca1d285a7.js", crossorigin:"anonymous"},
      ]
    }
  },

  css: [
  ],

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    }
  ],
  
  modules: [
    '@nuxtjs/google-fonts',
    '@nuxtjs/tailwindcss'

  ],

  googleFonts: {
    families: {
      Rubik: {
        wght: [400, 500, 600, 700, 800]
      },

      Fredoka: {
        wght: [600]
      },
    },
    display: 'swap'
  }
})

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
    '@nuxtjs/color-mode',
    '@nuxtjs/strapi'
  ],
  css: ['~/assets/styles/styles.scss'],
  i18n: {
    locales: [
      {
        code: 'en',
        file: 'en-US.json',
        name: 'English',
      },
      {
        code: 'ru',
        file: 'ru-RU.json',
        name: 'Русский'
      },
      {
        code: 'uz',
        file: 'uz-UZ.json',
        name: 'O‘zbek'
      }
    ],
    lazy: true,
    langDir: 'lang',
    defaultLocale: 'ru'
  },
  colorMode: {
    classSuffix: ''
  },
  strapi: {
    url: process.env.STRAPI_URL || 'https://admin.ruslan-portfolio.com',
  }
})


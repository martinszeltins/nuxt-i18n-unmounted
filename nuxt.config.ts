// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@nuxtjs/i18n"],
  i18n: {
        locales: ['en', 'fr'].map(locale => {
        return {
            code: locale,
            file: `${locale}.json`,
        }
    }),
    lazy: false,
    langDir: 'lang',
    defaultLocale: 'en',
    detectBrowserLanguage: false
  }
})
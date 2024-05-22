export default defineNuxtConfig({
    modules: ["@nuxtjs/i18n"],

    i18n: {
        locales: ['en', 'fr'].map(locale => {
            return {
                code: locale,
                file: `${locale}.json`,
            }
        }),
        
        langDir: 'lang',
        defaultLocale: 'en',
    }
})

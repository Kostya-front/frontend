// https://nuxt.com/docs/api/configuration/nuxt-config
export default({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [
    // ...
    '@pinia/nuxt',
  ],
  middleware: ['auth.global']
})

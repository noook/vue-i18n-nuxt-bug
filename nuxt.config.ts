// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false,
    strict: true,
  },
  modules: [
    '@nuxtjs/tailwindcss',
  ],

  tailwindcss: {
    // https://tailwindcss.nuxtjs.org/tailwind/config/#referencing-in-the-application
    exposeConfig: true,
  },
  css: [
    'assets/main.css',
  ],
});

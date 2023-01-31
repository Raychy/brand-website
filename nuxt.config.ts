// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: ['@pinia/nuxt'],
  css: ["~/assets/css/tailwindcss.css","~/assets/css/style.css", '@fortawesome/fontawesome-svg-core/styles.css'],
  imports: {
    dirs: ['stores'],
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  // meta: {
  //   title: "Template Website",
  // },
  build: {
    transpile: [
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/free-brands-svg-icons',
      '@fortawesome/free-regular-svg-icons',
      '@fortawesome/free-solid-svg-icons',
      '@fortawesome/vue-fontawesome'
    ],
   
  },
  plugins: [
    { src: '~/plugins/aos', mode: 'client' },
  ],
 
})
//
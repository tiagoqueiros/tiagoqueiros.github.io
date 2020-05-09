export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: "Tiago Queirós ⚡️ Front-end developer",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "mask-icon", color: "#990000", href: "/favicon.svg" },
      {
        rel: "stylesheet",
        href: "https://use.typekit.net/zwy4kql.css",
      },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["~/assets/scss/global.scss"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["~/plugins/vue-anime"],
  /*
   ** Nuxt.js dev-modules~
   */
  buildModules: [
    "@nuxtjs/eslint-module",
    "@nuxtjs/stylelint-module",
    "@nuxtjs/gtm",
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/style-resources",
    "@nuxtjs/markdownit",
    "@nuxtjs/svg",
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },

  styleResources: {
    scss: ["~/assets/scss/global.scss"],
  },

  gtm: {
    id: "GTM-MXLJPXC",
  },
};

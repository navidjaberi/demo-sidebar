import vuetify from "vite-plugin-vuetify";
// PWA Config
export default defineNuxtConfig({
  // import styles
  css: ["@/assets/main.scss"],
  devtools: { enabled: true },
  ssr:false,
  // enable takeover mode
  typescript: { shim: false },
  build: { transpile: ["vuetify"] },
  modules: [
    "@kevinmarrec/nuxt-pwa",
    '@pinia/nuxt',
    async (options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        config.plugins ||= [];
        config.plugins.push(vuetify());
      });
    },
  ],
  app: {
    head: {
      title: "NavidJaberi",
      titleTemplate: "NavidJaberi",
      link: [
        { rel: "stylesheet", href: "https://rsms.me/inter/inter.css" },
        { rel: "preconnect", href: "https://rsms.me/" },
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      ],


    },
  },

  pwa: {
    meta: {
      name: "NavidJaberi",
      author: "NavidJaberi",
      theme_color: "#4f46e5",
    },
    manifest: {
      name: "NavidJaberi",
      short_name: "NavidJaberi",
      theme_color: "#4f46e5",
    },
  },
});
